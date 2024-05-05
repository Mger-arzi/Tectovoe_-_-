
const button = document.getElementById('button');
button.style.backgroundColor = getRandomColor();
button.style.borderRadius = getRandomShape();


//Вешаем обработчик события на button
button.addEventListener('click', () => {
  button.style.backgroundColor = '#ccc';
  button.disabled = true;

  // Запрос на сервер http://server/api/button/
  fetch(`${serverAddress}/button`)
    .then(response => response.json())
    .then(data => {
      if (data && data.form && data.color) {
        updateButtonAppearance(data.form, data.color);
        updateInputField('form', data.form);
        updateInputField('color', data.color);
      } else {
        displayErrorMessage('Invalid or timed out response.');
      }
    })
    .catch(error => {
      console.warn('Error fetching button data:', error);
      displayErrorMessage('Network error.');
    })
    .finally(() => {
      // Reactivate button after response
      button.style.backgroundColor = getRandomColor();
      button.disabled = false;
    });

  // Cтарт periodic запрос на http://server/api/random/
  startPeriodicUpdates();
});



//Функция для генерации случайного цвета
function getRandomColor() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
  return colors[Math.floor(Math.random() * colors.length)];
}

//Функция для генерации случайной формы
function getRandomShape() {
  const shapes = ['square', 'rectangle', 'triangle', 'circle'];
  return shapes[Math.floor(Math.random() * shapes.length)];
}

// Функция для обновления внешнего вида кнопки на основе формы и цвета
function updateButtonAppearance(form, color) {
  button.style.backgroundColor = color;
  button.style.borderRadius = getShapeStyle(form);
}

// Функция для получения стиля фигуры на основе формы
function getShapeStyle(form) {
  switch (form) {
    case 'square':
      return '0px';
    case 'rectangle':
      return '5px';
    case 'triangle':
      return '50%';
    case 'circle':
      return '50%';
    default:
      return '0px';
  }
}

//Функция для обновления значения поля ввода
function updateInputField(fieldId, value) {
  document.getElementById(fieldId).value = value;
}

// Функция для отображения сообщения об ошибке
function displayErrorMessage(message) {
  updateInputField('error', message);
}

// Функция для запуска периодических обновлений
function startPeriodicUpdates() {
  setInterval(() => {
    fetch(`${serverAddress}/random`)
      .then(response => response.json())
      .then(data => {
        if (data && data.answer) {
          updateInputField('random', data.answer);
        } else {
          displayErrorMessage('Invalid or timed out response.');
        }
      })
      .catch(error => {
        console.warn('ErrRRRRRor:', error);
        displayErrorMessage('Network error.');
      });
  }, 1000); 
}

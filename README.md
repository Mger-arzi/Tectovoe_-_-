Генератор цвета и формы кнопок
Это простое веб-приложение, которое генерирует случайный цвет и форму кнопки при нажатии на нее. Приложение также периодически отправляет запросы к API сервера для обновления случайного числа, отображаемого на странице.

Как это работает
Когда пользователь нажимает кнопку, приложение отправляет запрос API-интерфейсу сервера по адресу http://server/api/button/, чтобы получить новый цвет и форму для кнопки. Сервер отвечает объектом JSON, содержащим новый цвет и форму, которые затем используются для обновления внешнего вида кнопки.

Приложение также периодически отправляет запросы к API сервера по адресу http://server/api/random/, чтобы получить новое случайное число, которое отображается на странице.

Приложение использует API выборки для отправки HTTP-запросов на сервер и обновляет страницу с помощью DOM API.

Обзор кода
Код состоит из следующих основных функций:

getRandomColor(): генерирует случайный цвет из предопределенного списка цветов.
getRandomShape(): генерирует случайную фигуру из заранее определенного списка фигур.
updateButtonAppearance(): обновляет внешний вид кнопки на основе текущего цвета и формы.
updateInputField(): обновляет значение поля ввода с заданным идентификатором и значением.
displayErrorMessage(): отображает сообщение об ошибке в поле ввода «ошибка».
startPeriodicUpdates(): запускает периодическое обновление случайного числа, отображаемого на странице.
Главный прослушиватель событий нажатия кнопки определяется в первых нескольких строках кода. При нажатии кнопки приложение отправляет запрос API-интерфейсу сервера на получение нового цвета и формы и соответствующим образом обновляет внешний вид кнопки и поля ввода.

Требования
Приложению требуется веб-сервер, предоставляющий конечные точки /api/button и /api/random. Сервер должен отвечать на запросы GET объектом JSON, содержащим соответствующие данные.

Для приложения также требуется современный веб-браузер, поддерживающий API выборки и API DOM.

Применение
Чтобы использовать приложение, просто откройте файл index.html в веб-браузере и нажмите кнопку, чтобы создать новый цвет и форму.

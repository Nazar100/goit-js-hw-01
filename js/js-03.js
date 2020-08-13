const submit = document.querySelector('.submit');
const valueInput = document.querySelector('.value');
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

submit.addEventListener('click', function () {
  if (valueInput === ADMIN_PASSWORD) {
    message = 'Добро пожаловать';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }
});
console.log(message);

const s = 'asdqwasd';
const number = s.length;
console.log(s / 2);

import Keyboard from '../components/Keyboard';
import Page from '../components/Page';
import '../scss/style.scss';

const page = new Page();
document.body.append(page.createPage());
// Создаем стартовый экземпляр клавиатуры
const keyboard = new Keyboard();
keyboard.keyboardOn();

document.addEventListener('mousedown', (event) => {
  const arrKeys = document.querySelectorAll('.key');
  const objKeys = {};
  arrKeys.forEach((el) => {
    objKeys[el.dataset.key] = el;
  });
  if (event.target.dataset.key === 'CapsLock') {
    document.querySelector('.keyboard').remove();
    keyboard.capsLock = !keyboard.capsLock;
    keyboard.keyboardOn();
  }
  if (event.target.dataset.key === 'ShiftRight'
  || event.target.dataset.key === 'ShiftLeft') {
    document.querySelector('.keyboard').remove();
    keyboard.shiftOn = !keyboard.shiftOn;
    keyboard.keyboardOn();
  }
  if (event.target.dataset.key === 'LANG') {
    document.querySelector('.keyboard').remove();
    if (keyboard.language === 'en') {
      keyboard.language = 'ru';
    } else {
      keyboard.language = 'en';
    }
    keyboard.keyboardOn();
  }
});

document.addEventListener('mouseup', (event) => {
  const arrKeys = document.querySelectorAll('.key');
  const objKeys = {};
  arrKeys.forEach((el) => {
    objKeys[el.dataset.key] = el;
  });
  if (event.target.dataset.key === 'CapsLock') {
    objKeys.CapsLock.classList.remove('key--active');
  }
  if (event.target.dataset.key === 'ShiftRight'
  || event.target.dataset.key === 'ShiftLeft') {
    document.querySelector('.keyboard').remove();
    keyboard.shiftOn = !keyboard.shiftOn;
    keyboard.keyboardOn();
    objKeys.ShiftRight.classList.remove('key--active');
    objKeys.ShiftLeft.classList.remove('key--active');
  }
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const arrKeys = document.querySelectorAll('.key');
  const objKeys = {};
  arrKeys.forEach((el) => {
    objKeys[el.dataset.key] = el;
  });
  if (event.key !== 'Shift' && event.key !== 'Alt' && event.key !== 'Control' && event.key !== 'CapsLock') {
    const input = document.querySelector('.textarea');
    if (event.key === 'Tab') {
      input.value += '\t';
    } else if (event.key === 'Enter') {
      input.value += '\n';
    } else if (event.key === 'Backspace') {
      input.value = input.value.split('').splice(0, (input.value.length - 1)).join('');
    } else {
      input.value += objKeys[event.code].textContent;
    }
  }
  if (event.repeat) {
    return;
  }
  if (event.code === 'CapsLock') {
    document.querySelector('.keyboard').remove();
    keyboard.capsLock = !keyboard.capsLock;
    keyboard.keyboardOn();
  }
  if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
    document.querySelector('.keyboard').remove();
    keyboard.shiftOn = !keyboard.shiftOn;
    keyboard.keyboardOn();
  }
  if ((event.code === 'AltLeft' && event.ctrlKey)
  || (event.code === 'AltRight' && event.ctrlKey)) {
    document.querySelector('.keyboard').remove();
    if (keyboard.language === 'en') {
      keyboard.language = 'ru';
    } else {
      keyboard.language = 'en';
    }
    keyboard.keyboardOn();
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
    document.querySelector('.keyboard').remove();
    keyboard.shiftOn = !keyboard.shiftOn;
    keyboard.keyboardOn();
  }
});

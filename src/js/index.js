import Keyboard from '../components/keyboard';
import '../scss/style.scss';
// Генерируем элементы для страницы
const wrapper = document.createElement('div');
const title = document.createElement('h1');
const description = document.createElement('ul');
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const textArea = document.createElement('textarea');
// Задаем классы элементам
wrapper.className = 'wrapper';
title.className = 'title';
description.className = 'description';
item1.className = 'description__item';
item2.className = 'description__item';
textArea.className = 'textarea';

// Задаем контентную часть
title.textContent = 'Virtual Keyboard';
item1.textContent = 'Для смены языка нажмите SHIFT + ALT';
item2.textContent = 'Клавиатура создана в операционной системе Windows';
// Добавляем на страницу готовые элементы
description.append(item1, item2);
wrapper.append(title, description, textArea);
document.body.append(wrapper);
// Создаем стартовый экземпляр клавиатуры
const keyboard = new Keyboard();
keyboard.keyboardOn('en');
// Слушаем события нажатия клавиш на виртуальной клавиатуре мышкой
document.addEventListener('mousedown', (event) => {
  const { target } = event;
  if (target.className.includes('key') && !target.className.includes('keyboard')) {
    target.classList.add('key--active');
    document.addEventListener('mouseup', () => {
      target.classList.remove('key--active');
    });
  }
});
// Слушаем события нажатия клавиш на реальной клавиатуре
document.addEventListener('keydown', (event) => {
  const arrKeys = document.querySelectorAll('.key');
  arrKeys.forEach((el) => {
    if (event.code === el.dataset.key) {
      el.classList.add('key--active');
      if (event.code === 'AltLeft'
      || event.code === 'AltRight'
      || event.code === 'Tab') {
        event.preventDefault();
      }
    }
    window.addEventListener('keyup', () => {
      el.classList.remove('key--active');
    });
  });
});

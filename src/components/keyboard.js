import Key from './key';
import keys from './keys';

export default class Keyboard {
  constructor() {
    // Основа для размещения кнопок, изначально пустая
    this.main = null;
    // Порядок добавления элементов на виртуальную клавиатуру
    this.keysOrders = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
      'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
      'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
      'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
    // Keys содержит объект с кнопками, которые имеют разное содержание,
    // в зависимости от условий(язык, нажат ли шифт или капслок)
    this.keys = keys;
    // Свойство указыващее на то нажат ли shift в настоящий момент
    this.shiftOn = false;
    // Свойство указыващее на то активирован ли capslock в настоящий момент
    this.capsLock = false;
  }

  keyboardOn(lang) {
    // Создал обертку для клавиатуры
    this.main = document.createElement('div');
    // Задали класс для обертки
    this.main.className = 'keyboard';
    // Интерируемся по массиву который содержит элементы в нужном порядке
    this.keysOrders.forEach((el) => {
      // На каждой итерации создается новая кнопка
      const newKey = new Key();
      // И далее созданная кнопка подключается к основе содержащей все кнопки
      this.main.append(newKey.createKey(el, lang, this.shiftOn, this.capsLock));
    });
    // main подключается к странице
    document.querySelector('.wrapper').append(this.main);
  }
}

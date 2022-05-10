import Key from './key';

export default class Keyboard {
  constructor() {
    this.main = null;
    this.elementsEN = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
      'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
      'Caps Look', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
      'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '^', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '<', 'V', '>'];
    this.elementsRU = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
      'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
      'Caps Look', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
      'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '^', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '<', 'V', '>'];
  }

  keyboardOn(lang) {
    // Создал обертку для клавиатуры
    this.main = document.createElement('div');
    // Задали класс для обертки
    this.main.className = 'keyboard';

    if (lang === 'EN') {
      this.elementsEN.forEach((el) => {
        const newKey = new Key();
        this.main.append(newKey.createKey(el));
      });
    } else {
      this.elementsRU.forEach((el) => {
        const newKey = new Key();
        this.main.append(newKey.createKey(el));
      });
    }
    document.querySelector('.wrapper').append(this.main);
  }
}

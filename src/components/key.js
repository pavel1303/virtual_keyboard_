import keys from './keys';

export default class Key {
  construtor() {
    // Изначально пустой экземпляр кнопки
    this.key = null;
  }

  // Метод создающий новый экземпляр кнопки
  createKey(val, lang, shift, caps) {
    // Переменная хранящая состояние для кнопки, которую необходимо создать
    let register;
    if (!caps && !shift) {
      register = 'capsOff';
    } else if (caps && !shift) {
      register = 'capsOn';
    } else if (!caps && shift) {
      register = 'shiftOn';
    } else if (caps && shift) {
      register = 'shihtCaps';
    }
    this.key = document.createElement('div');
    // Проверяем значение и задаем параметры исходя из условий
    switch (val) {
      case 'Backspace':
        this.key.className = 'key key--big';
        this.key.textContent = keys[val][lang][register];
        this.key.setAttribute('data-key', val);
        break;
      case 'Tab':
        this.key.className = 'key key--big';
        this.key.textContent = val;
        this.key.setAttribute('data-key', val);
        break;
      case 'CapsLock':
        this.key.className = 'key key--big capslock';
        this.key.textContent = val;
        this.key.setAttribute('data-key', val);
        this.key.addEventListener('keydown', () => {
          this.key.classList.toggle('capslock--active');
        });
        this.key.addEventListener('click', () => {
          this.key.classList.toggle('capslock--active');
        });
        break;
      case 'Enter':
        this.key.className = 'key key--big';
        this.key.textContent = val;
        this.key.setAttribute('data-key', val);
        break;
      case 'ShiftRight':
        this.key.className = 'key key--big';
        this.key.textContent = keys[val][lang][register];
        this.key.setAttribute('data-key', val);
        break;
      case 'ShiftLeft':
        this.key.className = 'key key--big';
        this.key.textContent = keys[val][lang][register];
        this.key.setAttribute('data-key', val);
        break;
      case 'ControlLeft':
        this.key.className = 'key';
        this.key.textContent = keys[val][lang][register];
        this.key.setAttribute('data-key', val);
        break;
      case 'Space':
        this.key.className = 'key key--extra-big';
        this.key.textContent = keys[val][lang][register];
        this.key.setAttribute('data-key', val);
        break;
      case 'MetaLeft':
        this.key.className = 'key';
        this.key.textContent = keys[val][lang][register];
        this.key.setAttribute('data-key', val);
        break;
      case 'AltLeft':
        this.key.className = 'key ';
        this.key.textContent = keys[val][lang][register];
        this.key.setAttribute('data-key', val);
        break;
      case 'AltRight':
        this.key.className = 'key ';
        this.key.textContent = keys[val][lang][register];
        this.key.setAttribute('data-key', val);
        break;
      case 'ControlRight':
        this.key.className = 'key';
        this.key.textContent = keys[val][lang][register];
        this.key.setAttribute('data-key', val);
        break;
      default:
        this.key.className = 'key';
        this.key.textContent = keys[val][lang][register];
        this.key.setAttribute('data-key', val);
        break;
    }
    return this.key;
  }
}

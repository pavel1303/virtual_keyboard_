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
    const arrKeys = document.querySelectorAll('.key');
    const objKeys = {};
    arrKeys.forEach((el) => {
      objKeys[el.dataset.key] = el;
    });

    // Содержание кнопки
    const value = keys[val][lang][register];
    this.key = document.createElement('div');

    // Обрабатываем события клавиатуры
    document.addEventListener('keydown', (event) => {
      // Убираем стандартное действие на нажатие кнопки
      if (event.code === 'AltLeft'
      || event.code === 'AltRight'
      || event.code === 'Tab') {
        event.preventDefault();
      }

      // Добавляем активность всем клавишам
      if (event.code === val) {
        this.key.classList.add('key--active');
      }

      // Активируем/деактивируем CapsLock
      if (event.code === 'CapsLock') {
        this.key.classList.toggle('capslock--active');
      }
    });

    document.addEventListener('keyup', (event) => {
      if (event.code === val) {
        this.key.classList.remove('key--active');
      }
    });
    ['mousedown', 'mouseup', 'mouseleave'].forEach((el) => {
      this.key.addEventListener(el, (event) => {
        this.keyMoveAction(event.type);
      });
    });

    // Проверяем значение и задаем параметры исходя из условий
    switch (val) {
      case 'Backspace':
        this.key.className = 'key key--big';
        this.key.textContent = value;
        this.key.setAttribute('data-key', val);
        // Создаем обработчик на события мыши
        this.key.addEventListener('click', () => {
          const input = document.querySelector('.textarea');
          input.value = input.value.split('').splice(0, (input.value.length - 1)).join('');
        });
        break;
      case 'Tab':
        this.key.className = 'key key--big';
        this.key.textContent = val;
        this.key.setAttribute('data-key', val);
        this.key.addEventListener('click', () => {
          const input = document.querySelector('.textarea');
          input.value += value;
        });
        break;
      case 'CapsLock':
        if (caps) {
          this.key.className = 'key key--big key--active capslock capslock--active';
        } else {
          this.key.className = 'key key--big capslock';
        }
        this.key.textContent = val;
        this.key.setAttribute('data-key', val);
        this.key.addEventListener('click', () => {
          this.key.classList.toggle('capslock--active');
        });
        break;
      case 'Enter':
        this.key.className = 'key key--big';
        this.key.textContent = val;
        this.key.setAttribute('data-key', val);
        this.key.addEventListener('click', () => {
          const input = document.querySelector('.textarea');
          input.value += value;
        });
        break;
      case 'ShiftRight':
        if (shift) {
          this.key.className = 'key key--big key--active';
        } else {
          this.key.className = 'key key--big';
        }
        this.key.textContent = value;
        this.key.setAttribute('data-key', val);
        break;
      case 'ShiftLeft':
        if (shift) {
          this.key.className = 'key key--big key--active';
        } else {
          this.key.className = 'key key--big';
        }
        this.key.textContent = value;
        this.key.setAttribute('data-key', val);
        break;
      case 'ControlLeft':
        this.key.className = 'key';
        this.key.textContent = value;
        this.key.setAttribute('data-key', val);
        break;
      case 'Space':
        this.key.className = 'key key--extra-big';
        this.key.textContent = value;
        this.key.setAttribute('data-key', val);
        this.key.addEventListener('click', () => {
          const input = document.querySelector('.textarea');
          input.value += value;
        });
        break;
      case 'MetaLeft':
        this.key.className = 'key';
        this.key.textContent = value;
        this.key.setAttribute('data-key', val);
        break;
      case 'AltLeft':
        this.key.className = 'key ';
        this.key.textContent = value;
        this.key.setAttribute('data-key', val);
        break;
      case 'AltRight':
        this.key.className = 'key ';
        this.key.textContent = value;
        this.key.setAttribute('data-key', val);
        break;
      case 'ControlRight':
        this.key.className = 'key';
        this.key.textContent = value;
        this.key.setAttribute('data-key', val);
        break;
      default:
        this.key.className = 'key';
        this.key.textContent = value;
        this.key.setAttribute('data-key', val);
        this.key.addEventListener('click', () => {
          const input = document.querySelector('.textarea');
          input.value += value;
        });
        break;
    }
    return this.key;
  }

  keyMoveAction(event) {
    if (event === 'mousedown') {
      this.key.classList.add('key--active');
    } else if (event === 'mouseup') {
      this.key.classList.remove('key--active');
    } else if (event === 'mouseleave') {
      this.key.classList.remove('key--active');
    }
  }
}

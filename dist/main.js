/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/key.js":
/*!*******************************!*\
  !*** ./src/components/key.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Key)
/* harmony export */ });
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys */ "./src/components/keys.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Key = /*#__PURE__*/function () {
  function Key() {
    _classCallCheck(this, Key);
  }

  _createClass(Key, [{
    key: "construtor",
    value: function construtor() {
      // Изначально пустой экземпляр кнопки
      this.key = null;
    } // Метод создающий новый экземпляр кнопки

  }, {
    key: "createKey",
    value: function createKey(val, lang, shift, caps) {
      var _this = this;

      // Переменная хранящая состояние для кнопки, которую необходимо создать
      var register;

      if (!caps && !shift) {
        register = 'capsOff';
      } else if (caps && !shift) {
        register = 'capsOn';
      } else if (!caps && shift) {
        register = 'shiftOn';
      } else if (caps && shift) {
        register = 'shihtCaps';
      }

      this.key = document.createElement('div'); // Проверяем значение и задаем параметры исходя из условий

      switch (val) {
        case 'Backspace':
          this.key.className = 'key key--big';
          this.key.textContent = _keys__WEBPACK_IMPORTED_MODULE_0__["default"][val][lang][register];
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
          this.key.addEventListener('keydown', function () {
            _this.key.classList.toggle('capslock--active');
          });
          this.key.addEventListener('click', function () {
            _this.key.classList.toggle('capslock--active');
          });
          break;

        case 'Enter':
          this.key.className = 'key key--big';
          this.key.textContent = val;
          this.key.setAttribute('data-key', val);
          break;

        case 'ShiftRight':
          this.key.className = 'key key--big';
          this.key.textContent = _keys__WEBPACK_IMPORTED_MODULE_0__["default"][val][lang][register];
          this.key.setAttribute('data-key', val);
          break;

        case 'ShiftLeft':
          this.key.className = 'key key--big';
          this.key.textContent = _keys__WEBPACK_IMPORTED_MODULE_0__["default"][val][lang][register];
          this.key.setAttribute('data-key', val);
          break;

        case 'ControlLeft':
          this.key.className = 'key';
          this.key.textContent = _keys__WEBPACK_IMPORTED_MODULE_0__["default"][val][lang][register];
          this.key.setAttribute('data-key', val);
          break;

        case 'Space':
          this.key.className = 'key key--extra-big';
          this.key.textContent = _keys__WEBPACK_IMPORTED_MODULE_0__["default"][val][lang][register];
          this.key.setAttribute('data-key', val);
          break;

        case 'MetaLeft':
          this.key.className = 'key';
          this.key.textContent = _keys__WEBPACK_IMPORTED_MODULE_0__["default"][val][lang][register];
          this.key.setAttribute('data-key', val);
          break;

        case 'AltLeft':
          this.key.className = 'key ';
          this.key.textContent = _keys__WEBPACK_IMPORTED_MODULE_0__["default"][val][lang][register];
          this.key.setAttribute('data-key', val);
          break;

        case 'AltRight':
          this.key.className = 'key ';
          this.key.textContent = _keys__WEBPACK_IMPORTED_MODULE_0__["default"][val][lang][register];
          this.key.setAttribute('data-key', val);
          break;

        case 'ControlRight':
          this.key.className = 'key';
          this.key.textContent = _keys__WEBPACK_IMPORTED_MODULE_0__["default"][val][lang][register];
          this.key.setAttribute('data-key', val);
          break;

        default:
          this.key.className = 'key';
          this.key.textContent = _keys__WEBPACK_IMPORTED_MODULE_0__["default"][val][lang][register];
          this.key.setAttribute('data-key', val);
          break;
      }

      return this.key;
    }
  }]);

  return Key;
}();



/***/ }),

/***/ "./src/components/keyboard.js":
/*!************************************!*\
  !*** ./src/components/keyboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ "./src/components/key.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ "./src/components/keys.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var Keyboard = /*#__PURE__*/function () {
  function Keyboard() {
    _classCallCheck(this, Keyboard);

    // Основа для размещения кнопок, изначально пустая
    this.main = null; // Порядок добавления элементов на виртуальную клавиатуру

    this.keysOrders = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']; // Keys содержит объект с кнопками, которые имеют разное содержание,
    // в зависимости от условий(язык, нажат ли шифт или капслок)

    this.keys = _keys__WEBPACK_IMPORTED_MODULE_1__["default"]; // Свойство указыващее на то нажат ли shift в настоящий момент

    this.shiftOn = false; // Свойство указыващее на то активирован ли capslock в настоящий момент

    this.capsLock = false;
  }

  _createClass(Keyboard, [{
    key: "keyboardOn",
    value: function keyboardOn(lang) {
      var _this = this;

      // Создал обертку для клавиатуры
      this.main = document.createElement('div'); // Задали класс для обертки

      this.main.className = 'keyboard'; // Интерируемся по массиву который содержит элементы в нужном порядке

      this.keysOrders.forEach(function (el) {
        // На каждой итерации создается новая кнопка
        var newKey = new _key__WEBPACK_IMPORTED_MODULE_0__["default"](); // И далее созданная кнопка подключается к основе содержащей все кнопки

        _this.main.append(newKey.createKey(el, lang, _this.shiftOn, _this.capsLock));
      }); // main подключается к странице

      document.querySelector('.wrapper').append(this.main);
    }
  }]);

  return Keyboard;
}();



/***/ }),

/***/ "./src/components/keys.js":
/*!********************************!*\
  !*** ./src/components/keys.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var keys = {
  Backquote: {
    ru: {
      capsOn: 'Ё',
      capsOff: 'ё',
      shiftOn: 'Ё',
      shihtCaps: 'ё'
    },
    en: {
      capsOn: '`',
      capsOff: '`',
      shiftOn: '~',
      shihtCaps: '~'
    }
  },
  Digit1: {
    ru: {
      capsOn: '1',
      capsOff: '1',
      shiftOn: '!',
      shihtCaps: '!'
    },
    en: {
      capsOn: '1',
      capsOff: '1',
      shiftOn: '!',
      shihtCaps: '!'
    }
  },
  Digit2: {
    ru: {
      capsOn: '2',
      capsOff: '2',
      shiftOn: '"',
      shihtCaps: '"'
    },
    en: {
      capsOn: '2',
      capsOff: '2',
      shiftOn: '@',
      shihtCaps: '@'
    }
  },
  Digit3: {
    ru: {
      capsOn: '3',
      capsOff: '3',
      shiftOn: '№',
      shihtCaps: '№'
    },
    en: {
      capsOn: '3',
      capsOff: '3',
      shiftOn: '#',
      shihtCaps: '#'
    }
  },
  Digit4: {
    ru: {
      capsOn: '4',
      capsOff: '4',
      shiftOn: ';',
      shihtCaps: ';'
    },
    en: {
      capsOn: '4',
      capsOff: '4',
      shiftOn: '$',
      shihtCaps: '$'
    }
  },
  Digit5: {
    ru: {
      capsOn: '5',
      capsOff: '5',
      shiftOn: '%',
      shihtCaps: '%'
    },
    en: {
      capsOn: '5',
      capsOff: '5',
      shiftOn: '%',
      shihtCaps: '%'
    }
  },
  Digit6: {
    ru: {
      capsOn: '6',
      capsOff: '6',
      shiftOn: ':',
      shihtCaps: ':'
    },
    en: {
      capsOn: '6',
      capsOff: '6',
      shiftOn: '^',
      shihtCaps: '^'
    }
  },
  Digit7: {
    ru: {
      capsOn: '7',
      capsOff: '7',
      shiftOn: '?',
      shihtCaps: '?'
    },
    en: {
      capsOn: '7',
      capsOff: '7',
      shiftOn: '&',
      shihtCaps: '&'
    }
  },
  Digit8: {
    ru: {
      capsOn: '8',
      capsOff: '8',
      shiftOn: '*',
      shihtCaps: '*'
    },
    en: {
      capsOn: '8',
      capsOff: '8',
      shiftOn: '*',
      shihtCaps: '*'
    }
  },
  Digit9: {
    ru: {
      capsOn: '9',
      capsOff: '9',
      shiftOn: '(',
      shihtCaps: '('
    },
    en: {
      capsOn: '9',
      capsOff: '9',
      shiftOn: '(',
      shihtCaps: '('
    }
  },
  Digit0: {
    ru: {
      capsOn: '0',
      capsOff: '0',
      shiftOn: ')',
      shihtCaps: ')'
    },
    en: {
      capsOn: '0',
      capsOff: '0',
      shiftOn: ')',
      shihtCaps: ')'
    }
  },
  Minus: {
    ru: {
      capsOn: '-',
      capsOff: '-',
      shiftOn: '_',
      shihtCaps: '_'
    },
    en: {
      capsOn: '-',
      capsOff: '-',
      shiftOn: '_',
      shihtCaps: '_'
    }
  },
  Equal: {
    ru: {
      capsOn: '=',
      capsOff: '=',
      shiftOn: '+',
      shihtCaps: '+'
    },
    en: {
      capsOn: '=',
      capsOff: '=',
      shiftOn: '+',
      shihtCaps: '+'
    }
  },
  Backspace: {
    ru: {
      capsOn: 'Backspace',
      capsOff: 'Backspace',
      shiftOn: 'Backspace',
      shihtCaps: 'Backspace'
    },
    en: {
      capsOn: 'Backspace',
      capsOff: 'Backspace',
      shiftOn: 'Backspace',
      shihtCaps: 'Backspace'
    }
  },
  Tab: {
    ru: {
      capsOn: '\t',
      capsOff: '\t',
      shiftOn: '\t',
      shihtCaps: '\t'
    },
    en: {
      capsOn: '\t',
      capsOff: '\t',
      shiftOn: '\t',
      shihtCaps: '\t'
    }
  },
  KeyQ: {
    ru: {
      capsOn: 'Й',
      capsOff: 'й',
      shiftOn: 'Й',
      shihtCaps: 'й'
    },
    en: {
      capsOn: 'Q',
      capsOff: 'q',
      shiftOn: 'Q',
      shihtCaps: 'q'
    }
  },
  KeyW: {
    ru: {
      capsOn: 'Ц',
      capsOff: 'ц',
      shiftOn: 'Ц',
      shihtCaps: 'ц'
    },
    en: {
      capsOn: 'W',
      capsOff: 'w',
      shiftOn: 'W',
      shihtCaps: 'w'
    }
  },
  KeyE: {
    ru: {
      capsOn: 'У',
      capsOff: 'у',
      shiftOn: 'У',
      shihtCaps: 'у'
    },
    en: {
      capsOn: 'E',
      capsOff: 'e',
      shiftOn: 'E',
      shihtCaps: 'e'
    }
  },
  KeyR: {
    ru: {
      capsOn: 'К',
      capsOff: 'к',
      shiftOn: 'К',
      shihtCaps: 'к'
    },
    en: {
      capsOn: 'R',
      capsOff: 'r',
      shiftOn: 'R',
      shihtCaps: 'r'
    }
  },
  KeyT: {
    ru: {
      capsOn: 'Е',
      capsOff: 'е',
      shiftOn: 'Е',
      shihtCaps: 'е'
    },
    en: {
      capsOn: 'T',
      capsOff: 't',
      shiftOn: 'T',
      shihtCaps: 't'
    }
  },
  KeyY: {
    ru: {
      capsOn: 'Н',
      capsOff: 'н',
      shiftOn: 'Н',
      shihtCaps: 'н'
    },
    en: {
      capsOn: 'Y',
      capsOff: 'y',
      shiftOn: 'Y',
      shihtCaps: 'y'
    }
  },
  KeyU: {
    ru: {
      capsOn: 'Г',
      capsOff: 'г',
      shiftOn: 'Г',
      shihtCaps: 'г'
    },
    en: {
      capsOn: 'U',
      capsOff: 'u',
      shiftOn: 'U',
      shihtCaps: 'u'
    }
  },
  KeyI: {
    ru: {
      capsOn: 'Ш',
      capsOff: 'ш',
      shiftOn: 'Ш',
      shihtCaps: 'ш'
    },
    en: {
      capsOn: 'I',
      capsOff: 'i',
      shiftOn: 'I',
      shihtCaps: 'i'
    }
  },
  KeyO: {
    ru: {
      capsOn: 'Щ',
      capsOff: 'щ',
      shiftOn: 'Щ',
      shihtCaps: 'щ'
    },
    en: {
      capsOn: 'O',
      capsOff: 'o',
      shiftOn: 'O',
      shihtCaps: 'o'
    }
  },
  KeyP: {
    ru: {
      capsOn: 'З',
      capsOff: 'з',
      shiftOn: 'З',
      shihtCaps: 'з'
    },
    en: {
      capsOn: 'P',
      capsOff: 'p',
      shiftOn: 'P',
      shihtCaps: 'p'
    }
  },
  BracketLeft: {
    ru: {
      capsOn: 'Х',
      capsOff: 'х',
      shiftOn: 'Х',
      shihtCaps: 'х'
    },
    en: {
      capsOn: '[',
      capsOff: '[',
      shiftOn: '{',
      shihtCaps: '{'
    }
  },
  BracketRight: {
    ru: {
      capsOn: 'Ъ',
      capsOff: 'ъ',
      shiftOn: 'Ъ',
      shihtCaps: 'ъ'
    },
    en: {
      capsOn: ']',
      capsOff: ']',
      shiftOn: '{',
      shihtCaps: '{'
    }
  },
  Backslash: {
    ru: {
      capsOn: '\\',
      capsOff: '\\',
      shiftOn: '/',
      shihtCaps: '/'
    },
    en: {
      capsOn: '\\',
      capsOff: '\\',
      shiftOn: '|',
      shihtCaps: '|'
    }
  },
  CapsLock: {
    ru: {
      capsOn: '',
      capsOff: '',
      shiftOn: '',
      shihtCaps: ''
    },
    en: {
      capsOn: '',
      capsOff: '',
      shiftOn: '',
      shihtCaps: ''
    }
  },
  KeyA: {
    ru: {
      capsOn: 'Ф',
      capsOff: 'ф',
      shiftOn: 'Ф',
      shihtCaps: 'ф'
    },
    en: {
      capsOn: 'A',
      capsOff: 'a',
      shiftOn: 'A',
      shihtCaps: 'a'
    }
  },
  KeyS: {
    ru: {
      capsOn: 'Ы',
      capsOff: 'ы',
      shiftOn: 'Ы',
      shihtCaps: 'ы'
    },
    en: {
      capsOn: 'S',
      capsOff: 's',
      shiftOn: 'S',
      shihtCaps: 's'
    }
  },
  KeyD: {
    ru: {
      capsOn: 'В',
      capsOff: 'в',
      shiftOn: 'В',
      shihtCaps: 'в'
    },
    en: {
      capsOn: 'D',
      capsOff: 'd',
      shiftOn: 'D',
      shihtCaps: 'd'
    }
  },
  KeyF: {
    ru: {
      capsOn: 'А',
      capsOff: 'а',
      shiftOn: 'А',
      shihtCaps: 'а'
    },
    en: {
      capsOn: 'F',
      capsOff: 'f',
      shiftOn: 'F',
      shihtCaps: 'f'
    }
  },
  KeyG: {
    ru: {
      capsOn: 'П',
      capsOff: 'п',
      shiftOn: 'П',
      shihtCaps: 'п'
    },
    en: {
      capsOn: 'G',
      capsOff: 'g',
      shiftOn: 'G',
      shihtCaps: 'g'
    }
  },
  KeyH: {
    ru: {
      capsOn: 'Р',
      capsOff: 'р',
      shiftOn: 'Р',
      shihtCaps: 'р'
    },
    en: {
      capsOn: 'H',
      capsOff: 'h',
      shiftOn: 'H',
      shihtCaps: 'h'
    }
  },
  KeyJ: {
    ru: {
      capsOn: 'О',
      capsOff: 'о',
      shiftOn: 'О',
      shihtCaps: 'о'
    },
    en: {
      capsOn: 'J',
      capsOff: 'j',
      shiftOn: 'J',
      shihtCaps: 'j'
    }
  },
  KeyK: {
    ru: {
      capsOn: 'Л',
      capsOff: 'л',
      shiftOn: 'Л',
      shihtCaps: 'л'
    },
    en: {
      capsOn: 'K',
      capsOff: 'k',
      shiftOn: 'K',
      shihtCaps: 'k'
    }
  },
  KeyL: {
    ru: {
      capsOn: 'Д',
      capsOff: 'д',
      shiftOn: 'Д',
      shihtCaps: 'д'
    },
    en: {
      capsOn: 'L',
      capsOff: 'l',
      shiftOn: 'L',
      shihtCaps: 'l'
    }
  },
  Semicolon: {
    ru: {
      capsOn: 'Ж',
      capsOff: 'ж',
      shiftOn: 'Ж',
      shihtCaps: 'ж'
    },
    en: {
      capsOn: ';',
      capsOff: ';',
      shiftOn: ':',
      shihtCaps: ':'
    }
  },
  Quote: {
    ru: {
      capsOn: 'Э',
      capsOff: 'э',
      shiftOn: 'Э',
      shihtCaps: 'э'
    },
    en: {
      capsOn: '\'',
      capsOff: '\'',
      shiftOn: '"',
      shihtCaps: '"'
    }
  },
  Enter: {
    ru: {
      capsOn: '\n',
      capsOff: '\n',
      shiftOn: '\n',
      shihtCaps: '\n'
    },
    en: {
      capsOn: '\n',
      capsOff: '\n',
      shiftOn: '\n',
      shihtCaps: '\n'
    }
  },
  ShiftLeft: {
    ru: {
      capsOn: 'SHIFT',
      capsOff: 'SHIFT',
      shiftOn: 'SHIFT',
      shihtCaps: 'SHIFT'
    },
    en: {
      capsOn: 'SHIFT',
      capsOff: 'SHIFT',
      shiftOn: 'SHIFT',
      shihtCaps: 'SHIFT'
    }
  },
  KeyZ: {
    ru: {
      capsOn: 'Я',
      capsOff: 'я',
      shiftOn: 'Я',
      shihtCaps: 'я'
    },
    en: {
      capsOn: 'Z',
      capsOff: 'z',
      shiftOn: 'Z',
      shihtCaps: 'z'
    }
  },
  KeyX: {
    ru: {
      capsOn: 'Ч',
      capsOff: 'ч',
      shiftOn: 'Ч',
      shihtCaps: 'ч'
    },
    en: {
      capsOn: 'X',
      capsOff: 'x',
      shiftOn: 'X',
      shihtCaps: 'x'
    }
  },
  KeyC: {
    ru: {
      capsOn: 'С',
      capsOff: 'с',
      shiftOn: 'С',
      shihtCaps: 'с'
    },
    en: {
      capsOn: 'C',
      capsOff: 'c',
      shiftOn: 'C',
      shihtCaps: 'c'
    }
  },
  KeyV: {
    ru: {
      capsOn: 'М',
      capsOff: 'м',
      shiftOn: 'М',
      shihtCaps: 'м'
    },
    en: {
      capsOn: 'V',
      capsOff: 'v',
      shiftOn: 'V',
      shihtCaps: 'v'
    }
  },
  KeyB: {
    ru: {
      capsOn: 'И',
      capsOff: 'и',
      shiftOn: 'И',
      shihtCaps: 'и'
    },
    en: {
      capsOn: 'B',
      capsOff: 'b',
      shiftOn: 'B',
      shihtCaps: 'b'
    }
  },
  KeyN: {
    ru: {
      capsOn: 'Т',
      capsOff: 'т',
      shiftOn: 'Т',
      shihtCaps: 'т'
    },
    en: {
      capsOn: 'N',
      capsOff: 'n',
      shiftOn: 'N',
      shihtCaps: 'n'
    }
  },
  KeyM: {
    ru: {
      capsOn: 'Ь',
      capsOff: 'ь',
      shiftOn: 'Ь',
      shihtCaps: 'ь'
    },
    en: {
      capsOn: 'M',
      capsOff: 'm',
      shiftOn: 'M',
      shihtCaps: 'm'
    }
  },
  Comma: {
    ru: {
      capsOn: 'Б',
      capsOff: 'б',
      shiftOn: 'Б',
      shihtCaps: 'б'
    },
    en: {
      capsOn: ',',
      capsOff: ',',
      shiftOn: '<',
      shihtCaps: '<'
    }
  },
  Period: {
    ru: {
      capsOn: 'Ю',
      capsOff: 'ю',
      shiftOn: 'Ю',
      shihtCaps: 'ю'
    },
    en: {
      capsOn: '.',
      capsOff: '.',
      shiftOn: '>',
      shihtCaps: '>'
    }
  },
  Slash: {
    ru: {
      capsOn: '.',
      capsOff: '.',
      shiftOn: ',',
      shihtCaps: ','
    },
    en: {
      capsOn: '/',
      capsOff: '/',
      shiftOn: '?',
      shihtCaps: '?'
    }
  },
  ArrowUp: {
    ru: {
      capsOn: 'ᐱ',
      capsOff: 'ᐱ',
      shiftOn: 'ᐱ',
      shihtCaps: 'ᐱ'
    },
    en: {
      capsOn: 'ᐱ',
      capsOff: 'ᐱ',
      shiftOn: 'ᐱ',
      shihtCaps: 'ᐱ'
    }
  },
  ShiftRight: {
    ru: {
      capsOn: 'SHIFT',
      capsOff: 'SHIFT',
      shiftOn: 'SHIFT',
      shihtCaps: 'SHIFT'
    },
    en: {
      capsOn: 'SHIFT',
      capsOff: 'SHIFT',
      shiftOn: 'SHIFT',
      shihtCaps: 'SHIFT'
    }
  },
  ControlLeft: {
    ru: {
      capsOn: 'CTRL',
      capsOff: 'CTRL',
      shiftOn: 'CTRL',
      shihtCaps: 'CTRL'
    },
    en: {
      capsOn: 'CTRL',
      capsOff: 'CTRL',
      shiftOn: 'CTRL',
      shihtCaps: 'CTRL'
    }
  },
  MetaLeft: {
    ru: {
      capsOn: 'WIN',
      capsOff: 'WIN',
      shiftOn: 'WIN',
      shihtCaps: 'WIN'
    },
    en: {
      capsOn: 'WIN',
      capsOff: 'WIN',
      shiftOn: 'WIN',
      shihtCaps: 'WIN'
    }
  },
  AltLeft: {
    ru: {
      capsOn: 'ALT',
      capsOff: 'ALT',
      shiftOn: 'ALT',
      shihtCaps: 'ALT'
    },
    en: {
      capsOn: 'ALT',
      capsOff: 'ALT',
      shiftOn: 'ALT',
      shihtCaps: 'ALT'
    }
  },
  Space: {
    ru: {
      capsOn: ' ',
      capsOff: ' ',
      shiftOn: ' ',
      shihtCaps: ' '
    },
    en: {
      capsOn: ' ',
      capsOff: ' ',
      shiftOn: ' ',
      shihtCaps: ' '
    }
  },
  AltRight: {
    ru: {
      capsOn: 'ALT',
      capsOff: 'ALT',
      shiftOn: 'ALT',
      shihtCaps: 'ALT'
    },
    en: {
      capsOn: 'ALT',
      capsOff: 'ALT',
      shiftOn: 'ALT',
      shihtCaps: 'ALT'
    }
  },
  ControlRight: {
    ru: {
      capsOn: 'CTRL',
      capsOff: 'CTRL',
      shiftOn: 'CTRL',
      shihtCaps: 'CTRL'
    },
    en: {
      capsOn: 'CTRL',
      capsOff: 'CTRL',
      shiftOn: 'CTRL',
      shihtCaps: 'CTRL'
    }
  },
  ArrowLeft: {
    ru: {
      capsOn: 'ᐸ',
      capsOff: 'ᐸ',
      shiftOn: 'ᐸ',
      shihtCaps: 'ᐸ'
    },
    en: {
      capsOn: 'ᐸ',
      capsOff: 'ᐸ',
      shiftOn: 'ᐸ',
      shihtCaps: 'ᐸ'
    }
  },
  ArrowDown: {
    ru: {
      capsOn: 'ᐯ',
      capsOff: 'ᐯ',
      shiftOn: 'ᐯ',
      shihtCaps: 'ᐯ'
    },
    en: {
      capsOn: 'ᐯ',
      capsOff: 'ᐯ',
      shiftOn: 'ᐯ',
      shihtCaps: 'ᐯ'
    }
  },
  ArrowRight: {
    ru: {
      capsOn: 'ᐳ',
      capsOff: 'ᐳ',
      shiftOn: 'ᐳ',
      shihtCaps: 'ᐳ'
    },
    en: {
      capsOn: 'ᐳ',
      capsOff: 'ᐳ',
      shiftOn: 'ᐳ',
      shihtCaps: 'ᐳ'
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keys);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/keyboard */ "./src/components/keyboard.js");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");

 // Генерируем элементы для страницы

var wrapper = document.createElement('div');
var title = document.createElement('h1');
var description = document.createElement('ul');
var item1 = document.createElement('li');
var item2 = document.createElement('li');
var textArea = document.createElement('textarea'); // Задаем классы элементам

wrapper.className = 'wrapper';
title.className = 'title';
description.className = 'description';
item1.className = 'description__item';
item2.className = 'description__item';
textArea.className = 'textarea'; // Задаем контентную часть

title.textContent = 'Virtual Keyboard';
item1.textContent = 'Для смены языка нажмите SHIFT + ALT';
item2.textContent = 'Клавиатура создана в операционной системе Windows'; // Добавляем на страницу готовые элементы

description.append(item1, item2);
wrapper.append(title, description, textArea);
document.body.append(wrapper); // Создаем стартовый экземпляр клавиатуры

var keyboard = new _components_keyboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
keyboard.keyboardOn('en'); // Слушаем события нажатия клавиш на виртуальной клавиатуре мышкой

document.addEventListener('mousedown', function (event) {
  var target = event.target;

  if (target.className.includes('key') && !target.className.includes('keyboard')) {
    target.classList.add('key--active');
    document.addEventListener('mouseup', function () {
      target.classList.remove('key--active');
    });
  }
}); // Слушаем события нажатия клавиш на реальной клавиатуре

document.addEventListener('keydown', function (event) {
  var arrKeys = document.querySelectorAll('.key');
  arrKeys.forEach(function (el) {
    if (event.code === el.dataset.key) {
      el.classList.add('key--active');

      if (event.code === 'AltLeft' || event.code === 'AltRight' || event.code === 'Tab') {
        event.preventDefault();
      }
    }

    window.addEventListener('keyup', function () {
      el.classList.remove('key--active');
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map
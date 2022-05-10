(()=>{"use strict";const s={Backquote:{ru:{capsOn:"Ё",capsOff:"ё",shiftOn:"Ё",shihtCaps:"ё"},en:{capsOn:"`",capsOff:"`",shiftOn:"~",shihtCaps:"~"}},Digit1:{ru:{capsOn:"1",capsOff:"1",shiftOn:"!",shihtCaps:"!"},en:{capsOn:"1",capsOff:"1",shiftOn:"!",shihtCaps:"!"}},Digit2:{ru:{capsOn:"2",capsOff:"2",shiftOn:'"',shihtCaps:'"'},en:{capsOn:"2",capsOff:"2",shiftOn:"@",shihtCaps:"@"}},Digit3:{ru:{capsOn:"3",capsOff:"3",shiftOn:"№",shihtCaps:"№"},en:{capsOn:"3",capsOff:"3",shiftOn:"#",shihtCaps:"#"}},Digit4:{ru:{capsOn:"4",capsOff:"4",shiftOn:";",shihtCaps:";"},en:{capsOn:"4",capsOff:"4",shiftOn:"$",shihtCaps:"$"}},Digit5:{ru:{capsOn:"5",capsOff:"5",shiftOn:"%",shihtCaps:"%"},en:{capsOn:"5",capsOff:"5",shiftOn:"%",shihtCaps:"%"}},Digit6:{ru:{capsOn:"6",capsOff:"6",shiftOn:":",shihtCaps:":"},en:{capsOn:"6",capsOff:"6",shiftOn:"^",shihtCaps:"^"}},Digit7:{ru:{capsOn:"7",capsOff:"7",shiftOn:"?",shihtCaps:"?"},en:{capsOn:"7",capsOff:"7",shiftOn:"&",shihtCaps:"&"}},Digit8:{ru:{capsOn:"8",capsOff:"8",shiftOn:"*",shihtCaps:"*"},en:{capsOn:"8",capsOff:"8",shiftOn:"*",shihtCaps:"*"}},Digit9:{ru:{capsOn:"9",capsOff:"9",shiftOn:"(",shihtCaps:"("},en:{capsOn:"9",capsOff:"9",shiftOn:"(",shihtCaps:"("}},Digit0:{ru:{capsOn:"0",capsOff:"0",shiftOn:")",shihtCaps:")"},en:{capsOn:"0",capsOff:"0",shiftOn:")",shihtCaps:")"}},Minus:{ru:{capsOn:"-",capsOff:"-",shiftOn:"_",shihtCaps:"_"},en:{capsOn:"-",capsOff:"-",shiftOn:"_",shihtCaps:"_"}},Equal:{ru:{capsOn:"=",capsOff:"=",shiftOn:"+",shihtCaps:"+"},en:{capsOn:"=",capsOff:"=",shiftOn:"+",shihtCaps:"+"}},Backspace:{ru:{capsOn:"Backspace",capsOff:"Backspace",shiftOn:"Backspace",shihtCaps:"Backspace"},en:{capsOn:"Backspace",capsOff:"Backspace",shiftOn:"Backspace",shihtCaps:"Backspace"}},Tab:{ru:{capsOn:"\t",capsOff:"\t",shiftOn:"\t",shihtCaps:"\t"},en:{capsOn:"\t",capsOff:"\t",shiftOn:"\t",shihtCaps:"\t"}},KeyQ:{ru:{capsOn:"Й",capsOff:"й",shiftOn:"Й",shihtCaps:"й"},en:{capsOn:"Q",capsOff:"q",shiftOn:"Q",shihtCaps:"q"}},KeyW:{ru:{capsOn:"Ц",capsOff:"ц",shiftOn:"Ц",shihtCaps:"ц"},en:{capsOn:"W",capsOff:"w",shiftOn:"W",shihtCaps:"w"}},KeyE:{ru:{capsOn:"У",capsOff:"у",shiftOn:"У",shihtCaps:"у"},en:{capsOn:"E",capsOff:"e",shiftOn:"E",shihtCaps:"e"}},KeyR:{ru:{capsOn:"К",capsOff:"к",shiftOn:"К",shihtCaps:"к"},en:{capsOn:"R",capsOff:"r",shiftOn:"R",shihtCaps:"r"}},KeyT:{ru:{capsOn:"Е",capsOff:"е",shiftOn:"Е",shihtCaps:"е"},en:{capsOn:"T",capsOff:"t",shiftOn:"T",shihtCaps:"t"}},KeyY:{ru:{capsOn:"Н",capsOff:"н",shiftOn:"Н",shihtCaps:"н"},en:{capsOn:"Y",capsOff:"y",shiftOn:"Y",shihtCaps:"y"}},KeyU:{ru:{capsOn:"Г",capsOff:"г",shiftOn:"Г",shihtCaps:"г"},en:{capsOn:"U",capsOff:"u",shiftOn:"U",shihtCaps:"u"}},KeyI:{ru:{capsOn:"Ш",capsOff:"ш",shiftOn:"Ш",shihtCaps:"ш"},en:{capsOn:"I",capsOff:"i",shiftOn:"I",shihtCaps:"i"}},KeyO:{ru:{capsOn:"Щ",capsOff:"щ",shiftOn:"Щ",shihtCaps:"щ"},en:{capsOn:"O",capsOff:"o",shiftOn:"O",shihtCaps:"o"}},KeyP:{ru:{capsOn:"З",capsOff:"з",shiftOn:"З",shihtCaps:"з"},en:{capsOn:"P",capsOff:"p",shiftOn:"P",shihtCaps:"p"}},BracketLeft:{ru:{capsOn:"Х",capsOff:"х",shiftOn:"Х",shihtCaps:"х"},en:{capsOn:"[",capsOff:"[",shiftOn:"{",shihtCaps:"{"}},BracketRight:{ru:{capsOn:"Ъ",capsOff:"ъ",shiftOn:"Ъ",shihtCaps:"ъ"},en:{capsOn:"]",capsOff:"]",shiftOn:"{",shihtCaps:"{"}},Backslash:{ru:{capsOn:"\\",capsOff:"\\",shiftOn:"/",shihtCaps:"/"},en:{capsOn:"\\",capsOff:"\\",shiftOn:"|",shihtCaps:"|"}},CapsLock:{ru:{capsOn:"",capsOff:"",shiftOn:"",shihtCaps:""},en:{capsOn:"",capsOff:"",shiftOn:"",shihtCaps:""}},KeyA:{ru:{capsOn:"Ф",capsOff:"ф",shiftOn:"Ф",shihtCaps:"ф"},en:{capsOn:"A",capsOff:"a",shiftOn:"A",shihtCaps:"a"}},KeyS:{ru:{capsOn:"Ы",capsOff:"ы",shiftOn:"Ы",shihtCaps:"ы"},en:{capsOn:"S",capsOff:"s",shiftOn:"S",shihtCaps:"s"}},KeyD:{ru:{capsOn:"В",capsOff:"в",shiftOn:"В",shihtCaps:"в"},en:{capsOn:"D",capsOff:"d",shiftOn:"D",shihtCaps:"d"}},KeyF:{ru:{capsOn:"А",capsOff:"а",shiftOn:"А",shihtCaps:"а"},en:{capsOn:"F",capsOff:"f",shiftOn:"F",shihtCaps:"f"}},KeyG:{ru:{capsOn:"П",capsOff:"п",shiftOn:"П",shihtCaps:"п"},en:{capsOn:"G",capsOff:"g",shiftOn:"G",shihtCaps:"g"}},KeyH:{ru:{capsOn:"Р",capsOff:"р",shiftOn:"Р",shihtCaps:"р"},en:{capsOn:"H",capsOff:"h",shiftOn:"H",shihtCaps:"h"}},KeyJ:{ru:{capsOn:"О",capsOff:"о",shiftOn:"О",shihtCaps:"о"},en:{capsOn:"J",capsOff:"j",shiftOn:"J",shihtCaps:"j"}},KeyK:{ru:{capsOn:"Л",capsOff:"л",shiftOn:"Л",shihtCaps:"л"},en:{capsOn:"K",capsOff:"k",shiftOn:"K",shihtCaps:"k"}},KeyL:{ru:{capsOn:"Д",capsOff:"д",shiftOn:"Д",shihtCaps:"д"},en:{capsOn:"L",capsOff:"l",shiftOn:"L",shihtCaps:"l"}},Semicolon:{ru:{capsOn:"Ж",capsOff:"ж",shiftOn:"Ж",shihtCaps:"ж"},en:{capsOn:";",capsOff:";",shiftOn:":",shihtCaps:":"}},Quote:{ru:{capsOn:"Э",capsOff:"э",shiftOn:"Э",shihtCaps:"э"},en:{capsOn:"'",capsOff:"'",shiftOn:'"',shihtCaps:'"'}},Enter:{ru:{capsOn:"\n",capsOff:"\n",shiftOn:"\n",shihtCaps:"\n"},en:{capsOn:"\n",capsOff:"\n",shiftOn:"\n",shihtCaps:"\n"}},ShiftLeft:{ru:{capsOn:"SHIFT",capsOff:"SHIFT",shiftOn:"SHIFT",shihtCaps:"SHIFT"},en:{capsOn:"SHIFT",capsOff:"SHIFT",shiftOn:"SHIFT",shihtCaps:"SHIFT"}},KeyZ:{ru:{capsOn:"Я",capsOff:"я",shiftOn:"Я",shihtCaps:"я"},en:{capsOn:"Z",capsOff:"z",shiftOn:"Z",shihtCaps:"z"}},KeyX:{ru:{capsOn:"Ч",capsOff:"ч",shiftOn:"Ч",shihtCaps:"ч"},en:{capsOn:"X",capsOff:"x",shiftOn:"X",shihtCaps:"x"}},KeyC:{ru:{capsOn:"С",capsOff:"с",shiftOn:"С",shihtCaps:"с"},en:{capsOn:"C",capsOff:"c",shiftOn:"C",shihtCaps:"c"}},KeyV:{ru:{capsOn:"М",capsOff:"м",shiftOn:"М",shihtCaps:"м"},en:{capsOn:"V",capsOff:"v",shiftOn:"V",shihtCaps:"v"}},KeyB:{ru:{capsOn:"И",capsOff:"и",shiftOn:"И",shihtCaps:"и"},en:{capsOn:"B",capsOff:"b",shiftOn:"B",shihtCaps:"b"}},KeyN:{ru:{capsOn:"Т",capsOff:"т",shiftOn:"Т",shihtCaps:"т"},en:{capsOn:"N",capsOff:"n",shiftOn:"N",shihtCaps:"n"}},KeyM:{ru:{capsOn:"Ь",capsOff:"ь",shiftOn:"Ь",shihtCaps:"ь"},en:{capsOn:"M",capsOff:"m",shiftOn:"M",shihtCaps:"m"}},Comma:{ru:{capsOn:"Б",capsOff:"б",shiftOn:"Б",shihtCaps:"б"},en:{capsOn:",",capsOff:",",shiftOn:"<",shihtCaps:"<"}},Period:{ru:{capsOn:"Ю",capsOff:"ю",shiftOn:"Ю",shihtCaps:"ю"},en:{capsOn:".",capsOff:".",shiftOn:">",shihtCaps:">"}},Slash:{ru:{capsOn:".",capsOff:".",shiftOn:",",shihtCaps:","},en:{capsOn:"/",capsOff:"/",shiftOn:"?",shihtCaps:"?"}},ArrowUp:{ru:{capsOn:"ᐱ",capsOff:"ᐱ",shiftOn:"ᐱ",shihtCaps:"ᐱ"},en:{capsOn:"ᐱ",capsOff:"ᐱ",shiftOn:"ᐱ",shihtCaps:"ᐱ"}},ShiftRight:{ru:{capsOn:"SHIFT",capsOff:"SHIFT",shiftOn:"SHIFT",shihtCaps:"SHIFT"},en:{capsOn:"SHIFT",capsOff:"SHIFT",shiftOn:"SHIFT",shihtCaps:"SHIFT"}},ControlLeft:{ru:{capsOn:"CTRL",capsOff:"CTRL",shiftOn:"CTRL",shihtCaps:"CTRL"},en:{capsOn:"CTRL",capsOff:"CTRL",shiftOn:"CTRL",shihtCaps:"CTRL"}},MetaLeft:{ru:{capsOn:"WIN",capsOff:"WIN",shiftOn:"WIN",shihtCaps:"WIN"},en:{capsOn:"WIN",capsOff:"WIN",shiftOn:"WIN",shihtCaps:"WIN"}},AltLeft:{ru:{capsOn:"ALT",capsOff:"ALT",shiftOn:"ALT",shihtCaps:"ALT"},en:{capsOn:"ALT",capsOff:"ALT",shiftOn:"ALT",shihtCaps:"ALT"}},Space:{ru:{capsOn:" ",capsOff:" ",shiftOn:" ",shihtCaps:" "},en:{capsOn:" ",capsOff:" ",shiftOn:" ",shihtCaps:" "}},AltRight:{ru:{capsOn:"ALT",capsOff:"ALT",shiftOn:"ALT",shihtCaps:"ALT"},en:{capsOn:"ALT",capsOff:"ALT",shiftOn:"ALT",shihtCaps:"ALT"}},ControlRight:{ru:{capsOn:"CTRL",capsOff:"CTRL",shiftOn:"CTRL",shihtCaps:"CTRL"},en:{capsOn:"CTRL",capsOff:"CTRL",shiftOn:"CTRL",shihtCaps:"CTRL"}},ArrowLeft:{ru:{capsOn:"ᐸ",capsOff:"ᐸ",shiftOn:"ᐸ",shihtCaps:"ᐸ"},en:{capsOn:"ᐸ",capsOff:"ᐸ",shiftOn:"ᐸ",shihtCaps:"ᐸ"}},ArrowDown:{ru:{capsOn:"ᐯ",capsOff:"ᐯ",shiftOn:"ᐯ",shihtCaps:"ᐯ"},en:{capsOn:"ᐯ",capsOff:"ᐯ",shiftOn:"ᐯ",shihtCaps:"ᐯ"}},ArrowRight:{ru:{capsOn:"ᐳ",capsOff:"ᐳ",shiftOn:"ᐳ",shihtCaps:"ᐳ"},en:{capsOn:"ᐳ",capsOff:"ᐳ",shiftOn:"ᐳ",shihtCaps:"ᐳ"}}};function a(s,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}var t=function(){function t(){!function(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e;return n=t,(e=[{key:"construtor",value:function(){this.key=null}},{key:"createKey",value:function(a,t,n,e){var h,i=this;switch(e||n?e&&!n?h="capsOn":!e&&n?h="shiftOn":e&&n&&(h="shihtCaps"):h="capsOff",this.key=document.createElement("div"),a){case"Backspace":case"ShiftRight":case"ShiftLeft":this.key.className="key key--big",this.key.textContent=s[a][t][h],this.key.setAttribute("data-key",a);break;case"Tab":case"Enter":this.key.className="key key--big",this.key.textContent=a,this.key.setAttribute("data-key",a);break;case"CapsLock":this.key.className="key key--big capslock",this.key.textContent=a,this.key.setAttribute("data-key",a),this.key.addEventListener("keydown",(function(){i.key.classList.toggle("capslock--active")})),this.key.addEventListener("click",(function(){i.key.classList.toggle("capslock--active")}));break;case"ControlLeft":case"MetaLeft":case"ControlRight":default:this.key.className="key",this.key.textContent=s[a][t][h],this.key.setAttribute("data-key",a);break;case"Space":this.key.className="key key--extra-big",this.key.textContent=s[a][t][h],this.key.setAttribute("data-key",a);break;case"AltLeft":case"AltRight":this.key.className="key ",this.key.textContent=s[a][t][h],this.key.setAttribute("data-key",a)}return this.key}}])&&a(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(s,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}var e=function(){function a(){!function(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),this.main=null,this.keysOrders=["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace","Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter","ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight","ControlLeft","MetaLeft","AltLeft","Space","AltRight","ControlRight","ArrowLeft","ArrowDown","ArrowRight"],this.keys=s,this.shiftOn=!1,this.capsLock=!1}var e,h;return e=a,(h=[{key:"keyboardOn",value:function(s){var a=this;this.main=document.createElement("div"),this.main.className="keyboard",this.keysOrders.forEach((function(n){var e=new t;a.main.append(e.createKey(n,s,a.shiftOn,a.capsLock))})),document.querySelector(".wrapper").append(this.main)}}])&&n(e.prototype,h),Object.defineProperty(e,"prototype",{writable:!1}),a}(),h=document.createElement("div"),i=document.createElement("h1"),f=document.createElement("ul"),p=document.createElement("li"),c=document.createElement("li"),O=document.createElement("textarea");h.className="wrapper",i.className="title",f.className="description",p.className="description__item",c.className="description__item",O.className="textarea",i.textContent="Virtual Keyboard",p.textContent="Для смены языка нажмите SHIFT + ALT",c.textContent="Клавиатура создана в операционной системе Windows",f.append(p,c),h.append(i,f,O),document.body.append(h),(new e).keyboardOn("en"),document.addEventListener("mousedown",(function(s){var a=s.target;a.className.includes("key")&&!a.className.includes("keyboard")&&(a.classList.add("key--active"),document.addEventListener("mouseup",(function(){a.classList.remove("key--active")})))})),document.addEventListener("keydown",(function(s){document.querySelectorAll(".key").forEach((function(a){s.code===a.dataset.key&&(a.classList.add("key--active"),"AltLeft"!==s.code&&"AltRight"!==s.code&&"Tab"!==s.code||s.preventDefault()),window.addEventListener("keyup",(function(){a.classList.remove("key--active")}))}))}))})();
//# sourceMappingURL=main.js.map
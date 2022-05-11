export default class Page {
  constructor() {
    this.wrapper = document.createElement('div');
    this.title = document.createElement('h1');
    this.description = document.createElement('ul');
    this.item1 = document.createElement('li');
    this.item2 = document.createElement('li');
    this.textArea = document.createElement('textarea');
  }

  createPage() {
    // Задаем классы элементам
    this.wrapper.className = 'wrapper';
    this.title.className = 'title';
    this.description.className = 'description';
    this.item1.className = 'description__item';
    this.item2.className = 'description__item';
    this.textArea.className = 'textarea';
    // Задаем контентную часть
    this.title.textContent = 'Virtual Keyboard';
    this.item1.textContent = 'Для смены языка нажмите на клавиатуре компьютера CTRL + ALT / нажмите на кнопку смены языка в нижнем правом углу';
    this.item2.textContent = 'Клавиатура создана в операционной системе Windows';
    // Добавляем на страницу готовые элементы
    this.description.append(this.item1, this.item2);
    this.wrapper.append(this.title, this.description, this.textArea);
    return this.wrapper;
  }
}

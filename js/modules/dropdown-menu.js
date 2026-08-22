import outsideClick from "./outside-click.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    this.activeClass = "ativo";

    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;
  }

  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((item) => {
      this.events.forEach((userEvent) => {
        item.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}

class Order {
  constructor(name, phone, size, etc, order) {
    this._name = name;
    this._phone = phone;
    this.size = size;
    this.etc = etc;
    this._order = order;
  }

  // getOrder(name) {
  //   return this._order[name];
  // }

  // get getAll() {
  //   return this._order;
  // }

  // add(name, order) {
  //   this._order[name] = order;
  // }

  add(name, phone) {
    this._name = name;
    this._phone = phone;
  }

  selectMenu(menu, dataMenu) {
    for (let i = 0; i < dataMenu.length; i++) {
      if (dataMenu[i].menu == menu) {
        dataMenu[i].plusOrderCount();
      }
    }
  }

  get name() {
    return this._name;
  }

  // remove(name) {
  //   delete this._order[name];
  // }
}

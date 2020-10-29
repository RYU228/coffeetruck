class Store {
  constructor() {
    this._order = [];
    this.number = 0;
  }

  createOrder(order) {
    this._order.push(order);
    this.number++;
  }

  deliverOrder() {
    const name = this._order[0].name;
    console.log(`${name}님의 주문이 완료 되었습니다.`);
    this._order.shift();
  }

  printOrder() {
    this._order.forEach((element) => {
      console.log(element);
    });
  }

  get getNumber() {
    return this.number;
  }
}

const store = new Store();

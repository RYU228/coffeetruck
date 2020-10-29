class Menu {
  constructor() {
    this.menu = "";
    this.price = "";
    this.options = [];
    this.orderCount = 0;
  }

  setMenu(dataMenu) {
    this.menu = dataMenu.menu;
    this.price = dataMenu.price;
    this.options = dataMenu.options;
    this.orderCount = 0;
  }

  select(menu, price, options) {
    this.menu = menu;
    this.price = price;
    this.options = options.slice();
  }

  plusOrderCount() {
    this.orderCount++;
  }
}

const dataMenu = [];
const menu = [];
for (let i = 0; i < 10; i++) {
  menu[i] = new Menu();
}

menu[0].setMenu({
  menu: "아메리카노",
  price: 1500,
  options: [" 샷 추가", " 시럽 추가"],
});
dataMenu.push(menu[0]);
menu[1].setMenu({
  menu: "카페라떼",
  price: 2000,
  options: [" 샷 추가", " 시럽 추가"],
});
dataMenu.push(menu[1]);
menu[2].setMenu({
  menu: "카페모카",
  price: 2000,
  options: [" 샷 추가", " 휘핑크림 추가"],
});
dataMenu.push(menu[2]);
menu[3].setMenu({
  menu: "카푸치노",
  price: 1800,
  options: [" 샷 추가", " 시럽 추가"],
});
dataMenu.push(menu[3]);
menu[4].setMenu({
  menu: "바닐라라떼",
  price: 2000,
  options: [" 샷 추가", " 휘핑크림 추가"],
});
dataMenu.push(menu[4]);
menu[5].setMenu({ menu: "녹차라떼", price: 1800, options: [] });
dataMenu.push(menu[5]);
menu[6].setMenu({
  menu: "레몬에이드",
  price: 1500,
  options: [" 탄산 추가", " 얼음 많이"],
});
dataMenu.push(menu[6]);
menu[7].setMenu({
  menu: "아이스티",
  price: 2000,
  options: [" 레몬", " 복숭아", " 얼음 많이"],
});
dataMenu.push(menu[7]);
menu[8].setMenu({
  menu: "요거트스무디",
  price: 2500,
  options: [" 딸기", " 망고", " 블루베리"],
});
dataMenu.push(menu[8]);
menu[9].setMenu({ menu: "밀크티", price: 2500, options: [] });
dataMenu.push(menu[9]);

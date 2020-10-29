// const order1 = new Order();
// order1.add("인사팀-김사원", "커피1");
// const order2 = new Order();
// order2.add("개발팀-이사원", "커피2");

// const myStore = new Store(new Order());
// myStore.createOrder({ name: "인사팀-김사원", coffee: "커피1" });
// myStore.createOrder({ name: "개발팀-이사원", coffee: "커피2" });
// myStore.printOrder();
// myStore.deliverOrder("인사팀-김사원");
// myStore.printOrder();
const main = document.querySelector("main");
const homeBtn = document.querySelector(".home_btn");
const orderProgress = document.querySelector(".order_progress");
const inputName = document.querySelector(".input_name");
const inputPhone = document.querySelector(".input_phone");
const orderBtn = document.querySelector(".order_btn");
const sizeRadio = document.getElementsByName("menuSize");
const optionsCheckbox = document.getElementsByClassName("options_checkbox");
const inputRequest = document.querySelector(".request_input");
const progress = document.querySelector(".progress");

let customerName, customerPhone, selectedSize, customerRequest;
let selectedOptions = [];

function reset() {
  const popularLi = document.getElementsByClassName("popular_li");
  const allLi = document.getElementsByClassName("all_li");

  inputName.value = "";
  inputPhone.value = "";
  optionsItems.classList.add("hidden");
  for (let i = 0; i < popularLi.length; i++) {
    popularLi[i].style.border = "none";
  }
  for (let i = 0; i < allLi.length; i++) {
    allLi[i].style.border = "none";
  }
  sizeRadio[0].checked = true;
  inputRequest.value = "";
}

function handleOrder(event) {
  //selectedMenu가 선택된 메뉴.
  customerName = inputName.value;
  customerPhone = inputPhone.value;

  for (let i = 0; i < sizeRadio.length; i++) {
    if (sizeRadio[i].checked == true) {
      selectedSize = sizeRadio[i].value;
    }
  }

  for (let i = 0; i < optionsCheckbox.length; i++) {
    if (optionsCheckbox[i].checked == true) {
      selectedOptions.push(optionsCheckbox[i].value);
    }
  }

  customerRequest = inputRequest.value;
  //location.replace("./orderProgress.html");
  // const order = new Order(new Menu());
  // order.add(customerName, customerPhone);
  // order.selectMenu(selectedMenu, )
  //selectMenu에 menu객체를 전달.

  const orderedMenu = new Menu();
  orderedMenu.select(selectedMenu, "1500", selectedOptions);
  const order = new Order(
    customerName,
    customerPhone,
    selectedSize,
    customerRequest,
    orderedMenu
  );
  order.selectMenu(selectedMenu, dataMenu);

  store.createOrder(order);
  // 주문시 메뉴 orderCount 증가시키고 인기메뉴 순서 변경
  // changedMenu[3].plusOrderCount();
  sortPopularMenu();
  switchMenu();
  // console.log(changedMenu);
  const number = store.getNumber;
  addReady(number + "번");
  reset();
  setTimeout(() => {
    addComplete(number + "번");
  }, 10000);
}

function init() {
  orderBtn.addEventListener("click", handleOrder);
  homeBtn.addEventListener("click", () => {
    main.classList.remove("hidden");
    progress.classList.add("hidden");
  });
  orderProgress.addEventListener("click", () => {
    main.classList.add("hidden");
    progress.classList.remove("hidden");
  });
}

init();

// const menu = { menu: "커피1", price: "1000" };
// const menu2 = { menu: "커피2", price: "2000" };
// const order = { name: "사람1", phone: "010", menu: menu };

// console.log(menu);
// console.log(order.menu.price);

// const order = new Order(new Menu());
// order.add("김사원", "010");
// order.selctMenu("커피1", "1000", "tall", "", "");
// const order2 = new Order(new Menu());
// order2.add("이사원", "010");
// order2.selctMenu("커피2", "2000", "tall", "", "");

// const store = new Store(order);
// store.createOrder(order2);

// store.deliverOrder();
// store.printOrder();

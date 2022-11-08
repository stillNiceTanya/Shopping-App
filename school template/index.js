let createElementWithClasses = (tagName, classesArr = []) => {
  let elem = document.createElement(tagName);
  elem.classList.add(...classesArr);
  return elem;
};

let createImgWithAttributes = (src, classesArr = []) => {
  let elem = createElementWithClasses("img", classesArr);
  elem.src = src;
  return elem;
};

let createLinkWithAttributes = (href, classesArr = []) => {
  let elem = createElementWithClasses("a", classesArr);
  elem.href = href;
  return elem;
};

let subscriptionSection = document.querySelector(".js-subscription-section");

let conteinerSubscriptionSection = createElementWithClasses("div", [
  "container-lg",
]);
subscriptionSection.append(conteinerSubscriptionSection);

// CREATE SECTION TITLE

let conteinerRowHeader = createElementWithClasses("div", ["row", "mb-5"]);

let subscriptionSubtitle = createElementWithClasses("h6", [
  "subscription-subtitle",
  "mb-2",
]);

let subscriptionTitle = createElementWithClasses("h3", [
  "subscription-title",
  "mb-2",
  "text-white",
]);

let subscriptionContent = createElementWithClasses("p", [
  "subscription-content",
  "text-white",
]);

subscriptionSubtitle.textContent = "Practice Advice";
subscriptionTitle.textContent = "Our Experts Teacher";
subscriptionContent.innerHTML = `Problems trying to resolve the conflict between
    <br />
    the two major realms of Classical physics: Newtonian mechanics`;

conteinerRowHeader.append(subscriptionSubtitle);
conteinerRowHeader.append(subscriptionTitle);
conteinerRowHeader.append(subscriptionContent);
conteinerSubscriptionSection.append(conteinerRowHeader);

// CREATE CARD CONTAINERS

let conteinerRowCard = createElementWithClasses("div", ["row"]);
conteinerSubscriptionSection.append(conteinerRowCard);

let conteinerColCard = createElementWithClasses("div", ["col-4"]);
conteinerSubscriptionSection.append(conteinerColCard);

let conteinerSubscriptionCard = createElementWithClasses("div", [
  "bg-white",
  "p-5",
  "subscription-card",
]);
conteinerColCard.append(conteinerSubscriptionCard);

//CREATE CARD CONTENT

let favIconSubscriptionCard = createImgWithAttributes(
  "img/fav-icon-subscription-section.svg"
);
conteinerSubscriptionCard.append(favIconSubscriptionCard);

let pricingTitle = createElementWithClasses("h3", [
  "text-uppercase",
  "pricing-title",
  "mt-4",
]);
pricingTitle.textContent = "standart";
conteinerSubscriptionCard.append(pricingTitle);
//
let pricingDescription = createElementWithClasses("div", [
  "pricing-description",
  "mt-4",
]);
pricingDescription.textContent = "Organize across all apps by hand";
conteinerSubscriptionCard.append(pricingDescription);
//
let pricingList = createElementWithClasses("div", [
  "price",
  "mt-4",
  "list-group",
]);
conteinerSubscriptionCard.append(pricingList);

let pricingNumber = createElementWithClasses("span", ["price-number", "m-0"]);
pricingList.append(pricingNumber);
pricingNumber.textContent = "19$";

let priceDescription = createElementWithClasses("span", [
  "price-description",
  "text-info",
  "m-0",
]);
pricingList.append(priceDescription);
priceDescription.textContent = "Per Month";

let pricingAdditional = createElementWithClasses("p", [
  "pricing-additional",
  "mt-4",
]);
conteinerSubscriptionCard.append(pricingAdditional);
pricingAdditional.textContent =
  "Slate helps you see how many more days you need...";

let buttonSubscriptionSection = createLinkWithAttributes("#", [
  "btn",
  "button-subscription",
  "text-light",
  "btn-block",
  "mt-4",
]);
buttonSubscriptionSection.textContent = "Try for free";
conteinerSubscriptionCard.append(buttonSubscriptionSection);

//

let listSubscriptionBenefits = createElementWithClasses("ul", [
  "list-group",
  "subscription-benefits",
  "mt-4",
]);
conteinerSubscriptionCard.append(listSubscriptionBenefits);

function createListItem(text, src) {
  let li = createElementWithClasses("li", ["benefit-item", "mb-3"]);

  let img = createImgWithAttributes(src, ["check-icon"]);

  let textNode = createElementWithClasses("span");
  textNode.textContent = text;

  li.append(img);
  li.append(textNode);
  return li;
}

let benefitList = [
  { text: "Included benefit #1", imgSrc: "img/successful-choice-icon.svg" },
  { text: "Included benefit #2", imgSrc: "img/successful-choice-icon.svg" },
  { text: "Included benefit #3", imgSrc: "img/successful-choice-icon.svg" },
  {
    text: "Non-included benefit #1",
    imgSrc: "img/non-successful-choice-icon.svg",
  },
  {
    text: "Non-included benefit #2",
    imgSrc: "img/non-successful-choice-icon.svg",
  },
];
// способ который создает массив узлов, но его нужно отдельно вернуть
let benefitNodeList = benefitList.map((item) =>
  createListItem(item.text, item.imgSrc)
);

listSubscriptionBenefits.append(...benefitNodeList);

// способ forEach который не создает, а проходится по элементам
// benefitList.forEach((item) =>
//   listSubscriptionBenefits.append(createListItem(item.text, item.imgSrc))
// );

//  ADD WORKING BUTTONS
conteinerSubscriptionSection.setAttribute("id", "SubscriptionSection");
let loginForm = document.querySelector("#authorization"); // форма

loginForm.addEventListener("submit", handler);

function handler(event) {
  event.preventDefault();
  let form = event.target;
  let { value: loginValue } = form.loginInput;
  let { value: passwordValue } = form.passwordInput;

  if (!loginValue || !passwordValue) {
    return;
  }
  localStorage.setItem("log", `${loginValue}`);
  localStorage.setItem("pas", `${passwordValue}`);
  // console.log(loginValue);
  // console.log(passwordValue);
  location.reload();
}

window.onload = function () {
  // console.log(localStorage.getItem("log"));
  if (!localStorage.getItem("log")) {
    return;
  }

  let b1 = document.querySelector("#loginButton");
  let b2 = document.querySelector("#logoutButton");
  b1.classList.add("d-none");
  b2.classList.remove("d-none");

  b2.addEventListener("click", logOut);
};
function logOut() {
  localStorage.removeItem("log");
  localStorage.removeItem("pas");
  location.reload();
}

// наша стр перезагрузилась 197
// дожидаемся момента load. пишем обработчик на это событие 200
// когда событие происходит:
// проверяем наличие локал сторадж. если нужных значений нет - тогда ничего не проиходит
// проверяем наличие локал сторадж. если нужные значения есть - тогда
// поменять местами кнопки (login кнопку скрыть, log out показать)
//
// нажимаем на logout
// создаем обработчик, кот срабатывает при нажатии логаут
// удаляем данные из локал сторадж
// перезагружаем стр

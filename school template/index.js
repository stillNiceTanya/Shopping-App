// Алгоритм создания копии узла и размещения его на страничке

// найти перемененную , с нужным узлом дом дерева
// создаем клон
// создать элемент обетку с классом col-4
// кладем клон в элемент с классом col-4
// найти элемент у котор класс row (через родителя элемента из 1 пункта)

// проверить что он есть
// положить все в последний элемент

// let subscriptionCard = document.body.querySelector(".subscription-card");

// function createNewCard(card) {
//   const cloneSubscriptionCard = card.cloneNode(true);

//   let newColumn = document.createElement("div");
//   newColumn.classList.add("col-4");
//   newColumn.append(cloneSubscriptionCard);

//   let parentCard = card.closest(".row");

//   if (parentCard) {
//     parentCard.append(newColumn);
//   }
// }

// createNewCard(subscriptionCard);
// createNewCard(subscriptionCard);

let createElementWithClasses = (tagName, classesArr) => {
  let elem = document.createElement(tagName);
  elem.classList.add(...classesArr);
  return elem;
};

let createImgWithAtribbutes = (src, classesArr) => {
  let elem = document.createElement("img");
  classesArr ? elem.classList.add(...classesArr) : (classesArr = undefined);
  elem.src = src;
  return elem;
};

let subscriptionSection = createElementWithClasses("section", [
  "subscription-section",
]);
let heroSection = document.querySelector(".hero-section");
heroSection.after(subscriptionSection);

//
//

let conteinerSubscriptionSection = createElementWithClasses("div", [
  "container-lg",
]);
subscriptionSection.append(conteinerSubscriptionSection);

let conteinerRowHeader = createElementWithClasses("div", ["row", "mb-5"]);
conteinerSubscriptionSection.append(conteinerRowHeader);

if (conteinerRowHeader) {
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

  subscriptionSubtitle.innerHTML = "Practice Advice";
  subscriptionTitle.innerHTML = "Our Experts Teacher";
  subscriptionContent.innerHTML = `Problems trying to resolve the conflict between
    <br />
    the two major realms of Classical physics: Newtonian mechanics`;

  conteinerRowHeader.append(subscriptionSubtitle);
  conteinerRowHeader.append(subscriptionTitle);
  conteinerRowHeader.append(subscriptionContent);
}

//
//
//
//

let conteinerRowCard = createElementWithClasses("div", ["row"]);

conteinerRowHeader.append(conteinerRowCard);

let conteinerColCard = createElementWithClasses("div", ["col-4"]);
conteinerSubscriptionSection.append(conteinerColCard);

let conteinerSubscriptionCard = createElementWithClasses("div", [
  "bg-white",
  "p-5",
  "subscription-card",
]);

conteinerColCard.append(conteinerSubscriptionCard);

let favIconSubscriptionCard = createImgWithAtribbutes(
  "img/fav-icon-subscription-section.svg"
);
conteinerSubscriptionCard.append(favIconSubscriptionCard);
let pricingTitle = createElementWithClasses("h3", [
  "text-uppercase",
  "pricing-title",
  "mt-4",
]);
pricingTitle.innerHTML = "standart";
conteinerSubscriptionCard.append(pricingTitle);

let pricingDescription = createElementWithClasses("div", [
  "pricing-description",
  "mt-4",
]);
pricingDescription.innerHTML = "Organize across all apps by hand";
conteinerSubscriptionCard.append(pricingDescription);

let pricingList = createElementWithClasses("div", [
  "price",
  "mt-4",
  "list-group",
]);
conteinerSubscriptionCard.append(pricingList);

if (pricingList) {
  let pricingNumber = createElementWithClasses("span", ["price-number", "m-0"]);
  pricingList.append(pricingNumber);
  pricingNumber.innerHTML = "19$";

  let priceDescription = createElementWithClasses("span", [
    "price-description",
    "text-info",
    "m-0",
  ]);
  pricingList.append(priceDescription);
  priceDescription.innerHTML = "Per Month";
}

//
let pricingAdditional = createElementWithClasses("p", [
  "pricing-additional",
  "mt-4",
]);
conteinerSubscriptionCard.append(pricingAdditional);
pricingAdditional.innerHTML =
  "Slate helps you see how many more days you need...";

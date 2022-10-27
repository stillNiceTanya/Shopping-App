// Алгоритм создания копии узла и размещения его на страничке

// найти перемененную , с нужным узлом дом дерева
// создаем клон
// создать элемент обетку с классом col-4
// кладем клон в элемент с классом col-4
// найти элемент у котор класс row (через родителя элемента из 1 пункта)

// проверить что он есть
// положить все в последний элемент

let subscriptionCard = document.body.querySelector(".subscription-card");

function createNewCard(card) {
  const cloneSubscriptionCard = card.cloneNode(true);

  let newColumn = document.createElement("div");
  newColumn.classList.add("col-4");
  newColumn.append(cloneSubscriptionCard);

  let parentCard = card.closest(".row");

  if (parentCard) {
    parentCard.append(newColumn);
  }
}

createNewCard(subscriptionCard);
createNewCard(subscriptionCard);

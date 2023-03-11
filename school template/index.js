

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

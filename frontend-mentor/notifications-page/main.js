window.addEventListener("load", function () {
  const markAsReadBtns = this.document.getElementsByClassName(
    "notification-header__mark-as-read"
  );

  for (let btn of markAsReadBtns) {
    btn.addEventListener("click", markAllAsRead);
  }

  const unreadCards = getUnreadCards();
  for (let card of unreadCards) {
    card.addEventListener("click", () => markCardAsRead(card));
  }

  const markAsUnreadBtns = this.document.getElementsByClassName(
    "notification-header__mark-as-unread"
  );

  for (let btn of markAsUnreadBtns) {
    btn.addEventListener("click", markAllAsUnread);
  }
});

const getUnreadCards = () =>
  Array.from(document.getElementsByClassName("unread"));

const getAllCards = () => Array.from(document.getElementsByClassName("card"));

const markAllAsRead = () => {
  const unreadCards = getUnreadCards();

  for (let i = unreadCards.length - 1; i >= 0; i--) {
    const item = unreadCards[i];
    markCardAsRead(item);
  }
};

const markCardAsRead = (card) => {
  card.classList.remove("unread");
  const content = card.getElementsByClassName("unread-content")[0];
  content.classList.remove("unread-content");
};

const markAllAsUnread = () => {
  const cards = getAllCards();
  for (let card of cards) {
    markCardAsUnread(card);
  }
};

const markCardAsUnread = (card) => {
  card.classList.add("unread");
  const content = card.getElementsByClassName("card__text")[0];
  content.classList.add("unread-content");
  card.addEventListener("click", () => markCardAsRead(card));
};

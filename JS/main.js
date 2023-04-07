const button = document.querySelector(".button");
const notificationDescription = document.querySelectorAll(
  ".activity-description"
);
let count = document.querySelectorAll(".notification__mark").length;

let notificationCount = document.querySelector(".notification-count");
notificationCount.textContent = count;

button.addEventListener("click", () => {
  if (Number(notificationCount.textContent) === 0) return;
  notificationDescription.forEach((notification) => {
    const newNotification = notification.querySelector(".notification__mark");
    const notificationContainer = notification.parentElement.parentElement;
    if (!notification.contains(newNotification)) return;
    notificationContainer.style.backgroundColor = "unset";
    notification.removeChild(newNotification);
    notificationContainer.children[2].classList.remove("new-notification");
    notificationContainer.removeChild(notificationContainer.children[2]);
  });
  notificationCount.textContent = 0;
});

notifications.addEventListener("click", (event) => {
  if (Number(notificationCount.textContent) > 0) {
    const target = event.target;
    if (target.matches("div")) {
      const notificationContainer = target.parentElement;
      const notificationIcon = notificationContainer.querySelector(
        ".notification__mark"
      );
      const description = notificationContainer.querySelector(
        ".activity-description"
      );

      if (!notificationContainer.contains(notificationIcon)) return;
      notificationContainer.classList.remove("bg-new-notification");
      description.removeChild(notificationIcon);
      notificationContainer.removeChild(target);
      notificationCount.textContent = --count;
    }
  }
});

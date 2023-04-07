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
  });
  notificationCount.textContent = 0;
});

notifications.addEventListener("click", (event) => {
  if (Number(notificationCount.textContent) > 0) {
    const target = event.target;
    if (target.matches("article")) {
      const newNotification = target.querySelector(".notification__mark");

      const activityDescription = target.childNodes[3].querySelector(
        ".activity-description"
      );

      if (target.contains(newNotification)) {
        const lastIndex = activityDescription.children.length - 1;
        const notificationContainer =
          activityDescription.parentElement.parentElement;
        activityDescription.removeChild(
          activityDescription.children[lastIndex]
        );
        notificationContainer.style.backgroundColor = "unset";
      } else {
        return;
      }
    }
    if (target.matches("span")) {
      const activityDescription = target.parentElement;

      const newNotification = activityDescription.querySelector(
        ".notification__mark"
      );

      if (activityDescription.contains(newNotification)) {
        activityDescription.removeChild(newNotification);
        activityDescription.parentElement.parentElement.style.backgroundColor =
          "unset";
      }
    }
    notificationCount.textContent = --count;
  }
});

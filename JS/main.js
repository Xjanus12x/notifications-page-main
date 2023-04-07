const button = document.querySelector(".button");
const newNotification = document.querySelectorAll(".notification__mark");
button.addEventListener("click", () => {
  newNotification.forEach((notification) => {
    if (notification.style.display === "none") return;
    notification.style.display = "none";
    notification.parentElement.parentElement.parentElement.style.backgroundColor =
      "unset";
  });
});

notifications.addEventListener("click", (event) => {
  const target = event.target;
  const notificationIcon = target.querySelector(".notification__mark");

  if (target.matches("article")) {
    if (
      target.style.backgroundColor === "unset" ||
      notificationIcon.style.display === "none"
    ) {
      return;
    }
    target.style.backgroundColor = "unset";
    notificationIcon.style.display = "none";
  }

  if (target.matches("span")) {
    target.parentElement.parentElement.parentElement.style.backgroundColor =
      "unset";
    target.parentElement.querySelector(".notification__mark").style.display =
      "none";
  }
});

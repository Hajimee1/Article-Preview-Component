const wrapper = document.querySelector(".wrapper");
const userData = document.querySelector(".user__data");
wrapper.addEventListener("click", () => {
  userData.classList.toggle("is-active");
});
document.addEventListener("click", (e) => {
  if (!userData.contains(e.target)) {
    userData.classList.remove("is-active");
  }
});

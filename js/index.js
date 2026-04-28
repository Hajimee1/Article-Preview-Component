const wrapper = document.querySelector(".Wrapper");
const socialIcons = document.querySelector(".socialIcons");
wrapper.addEventListener("click", (e) => {
  e.stopPropagation();
  socialIcons.classList.toggle("active");
  wrapper.classList.toggle("fill");
});
document.addEventListener("click", (e) => {
  if (!socialIcons.contains(e.target)) {
    socialIcons.classList.remove("active");
    wrapper.classList.remove("fill");
  }
});

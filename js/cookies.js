const cookieContainer = document.querySelector(".cookies");
const cookieButton = document.querySelector(".cookies__button");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("cookies_active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

if (!localStorage.getItem("cookieBannerDisplayed")) {
  cookieContainer.classList.add("cookies_active");
}

setTimeout(() => {
  cookieContainer.classList.add("cookies_active");
}, 30000);
$(document).ready(function () {
  const mMenuBtn = $(".mobile-burger");
  const mMenu = $(".m-menu");
  const mMenuBtnImg = $(".mobile-burger img");

  mMenuBtn.click(function () {
    if (mMenu.is(':visible')) {
      mMenu.slideToggle(600);
      mMenuBtnImg.css('content', "url('./img/svg/burger.svg')");
    }
    else {
      mMenu.slideToggle(600);
      mMenuBtnImg.css('content', "url('./img/svg/close-m-menu.svg')");
    }
  });
});
function isOpenMenu() {
    const openMenu = document.querySelector(".row");
    const closeMenu = document.querySelector(".close");
    const mobileMenu = document.querySelector(".header__mob-menu");


    openMenu.forEach((row) => {
        row.style.display = 'block';
      });


}

isOpenMenu();
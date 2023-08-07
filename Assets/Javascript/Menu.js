function mobileMenu(){
    let mobileMenu = document.querySelector('menu');
    if (mobileMenu.classList.contains('view_menu')){
        mobileMenu.classList.remove('view_menu');
    } else {
        menuMobile.classList.add('view_menu');
    }
}
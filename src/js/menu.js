var close = document.getElementsByClassName('header__close')[0];
var burger = document.getElementsByClassName('header__burger')[0];
var nav = document.getElementsByClassName('header__nav')[0];
close.onclick = function () {
    nav.classList.add('header__none');
}
burger.onclick = function () {
    nav.classList.remove('header__none');
}
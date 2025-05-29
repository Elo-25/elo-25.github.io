const navButton = document.querySelector('nav button');

navButton.addEventListener('click', function() {
    let expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    let menu = this.nextElementSibling;
    menu.hidden = !menu.hidden
});
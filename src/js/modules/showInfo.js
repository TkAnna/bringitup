export default class ShowInfo {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const sibling = btn.closest('.module__info-show').nextElementSibling;
                sibling.classList.add('animated', 'fadeInUp');
                sibling.classList.toggle('msg');
            });
        });
    }
}
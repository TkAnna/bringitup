import Slider from './slider';

export default class MiniSlider extends Slider {
    constructor(container, prev, next, activeClass, animate, autoplay) {
        super(container, prev, next, activeClass, animate, autoplay);
    }

    decorizeSlides() {
        [...this.slides].forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        this.slides[0].classList.add(this.activeClass);

        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    nextSlide() {
        // if - for feed slider
        if (this.prev.parentNode === this.container) {
            this.container.insertBefore(this.slides[0], this.prev);
        } else {
            this.container.appendChild(this.slides[0]);
        }
        this.decorizeSlides();
    }

    goAutoplay() {
        let autoplay = setInterval(() => this.nextSlide(), 5000);

        this.container.addEventListener('mouseenter', () => {
            clearInterval(autoplay);
        });
        this.prev.addEventListener('mouseenter', () => {
            clearInterval(autoplay);
        });
        this.next.addEventListener('mouseenter', () => {
            clearInterval(autoplay);
        });
    }

    bindTriggers() {

        this.next.addEventListener('click', () => this.nextSlide());

        this.prev.addEventListener('click', () => {
            // if - for feed slider
            if (this.prev.parentNode === this.container) {
                this.container.insertBefore(this.slides[this.slides.length - 3], this.slides[0]);
            } else {
                this.container.insertBefore(this.slides[this.slides.length - 1], this.slides[0]);
            }
            this.decorizeSlides();
        });
    }

    init() {

        try {
            this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
            `;

            this.bindTriggers();
            this.decorizeSlides();

            if (this.autoplay) {
                this.goAutoplay();
            }

        } catch (e) { }
    }
}
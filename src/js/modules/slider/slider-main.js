import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        // pop-up window with teacher (#3 slide)
        try {
            this.hanson.style.opacity = '0';

            if (n == 3) {
                this.hanson.classList.add('animated');

                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('slideInUp');
                }, 3000);
            } else {
                this.hanson.classList.remove('slideInUp');
            }
        } catch (e) { }

        [...this.slides].forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
        this.slides[this.slideIndex - 1].classList.add('animated', 'fadeIn');

    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    // linksFromMiniSlider() {
    //     const links = this.container.querySelectorAll('.card');

    //     links.forEach(link => {
    //         link.addEventListener('click', () => {

    //             this.slideIndex = +document.location.hash[1];
    //             console.log(this.slideIndex);
    //             this.showSlides(this.slideIndex);
    //         });
    //     });
    // }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlides(1);

            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                if (this.container.classList.contains('page')) {
                    e.preventDefault();
                    this.slideIndex = 1;
                    this.showSlides(this.slideIndex);
                }
            });
        });

        let slidesCounter = document.querySelectorAll('.prevmodule').length;

        document.querySelectorAll('.prevmodule').forEach(item => {
            item.setAttribute('href', `#${slidesCounter}`);
            slidesCounter--;
            console.log(item);
        });

        document.querySelectorAll('.prevmodule').forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();

                this.plusSlides(-1);
            });
        });

        document.querySelectorAll('.nextmodule').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(1);
            });
        });
    }

    render() {
        if (this.container) {
            // block "hanson" is only on one page
            try {
                this.hanson = document.querySelector('.hanson');
            } catch (e) { }

            this.showSlides(this.slideIndex);
            this.bindTriggers();
            //this.linksFromMiniSlider();
        }
    }
}
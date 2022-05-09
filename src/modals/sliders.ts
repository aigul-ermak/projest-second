type slidersType = {
    slides: string
    dir?: string
    prev?: string
    next?: string
}
export const sliders = ({ slides, dir, prev, next }: slidersType) => {
    let slideIndex = 1,
        //слайдер работает - но NodeJS.Timer и boolean не соотвествует друг другу
        //но слайдер работает
        paused: NodeJS.Timer = false;

    const allSlides = document.querySelectorAll(slides)

    const showSlide = (n: number) => {
        if (n > allSlides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = allSlides.length
        }

        allSlides.forEach((slide: HTMLElement) => {
            slide.classList.add('animated')
            slide.style.display = 'none'
        });

        (allSlides[slideIndex - 1] as HTMLElement).style.display = 'block'
    };

    showSlide(slideIndex);

    const plusSlides = (n: number) => showSlide(slideIndex += n);

    try {
        const prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next)

        prevBtn.addEventListener('click', () => {
            plusSlides(-1)
            allSlides[slideIndex - 1].classList.remove('slideInLeft')
            allSlides[slideIndex - 1].classList.add('slideInRight')
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1)
            allSlides[slideIndex - 1].classList.remove('slideInRight')
            allSlides[slideIndex - 1].classList.add('slideInLeft')
        });
    } catch (e) {
    }

    const activateAnimation = () => {
        if (dir === 'vertical') {
            paused = setInterval(() => {
                plusSlides(1);
                allSlides[slideIndex - 1].classList.add('slideDown');
            }, 3000);
        } else {
            paused = setInterval(() => {
                plusSlides(1);
                allSlides[slideIndex - 1].classList.remove('slideInRight');
                allSlides[slideIndex - 1].classList.remove('slideInLeft');
            }, 3000);
        }
    };

    activateAnimation();

    allSlides[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    allSlides[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
};

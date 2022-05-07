import { modals, sliders } from '../modals';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    sliders({
        slides: '.feedback-slider-item',
        dir: 'horizontal',
        prev: '.main-prev-btn',
        next: '.main-next-btn'
    });
    sliders({
        slides: '.main-slider-item',
        dir: 'vertical'
    });
});

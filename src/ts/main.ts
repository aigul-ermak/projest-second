import { modals, sliders, forms, mask, showMoreStyles, calc, filter, pictureSize, accordeon } from '../modals';

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
    })
    forms();
    mask('[name="phone"]');
    calc({
        size: '#size',
        material: '#material',
        options: '#options',
        promocode: '.promocode',
        result: '.calc-price'
    });
    filter();
    pictureSize('.sizes-block');
    accordeon({triggerSelector: '.accordion-heading'})
    scrolling('.pageup');
});
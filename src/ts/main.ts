import { modals, sliders, forms, mask } from '../modals';

window.addEventListener('DOMContentLoaded', () => {
    'use strict'
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
});

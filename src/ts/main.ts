import { calc } from '../modals';

window.addEventListener('DOMContentLoaded', () => {
    calc({
        size: '#size',
        material: '#material',
        options: '#options',
        promocode: '.promocode',
        result: '.calc-price'
    })
});

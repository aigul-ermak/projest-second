type burgerType = {
    menuSelector: string
    burgerSelector: string
}

export const burger = ({menuSelector, burgerSelector}: burgerType) => {
    const menuElement = document.querySelector<HTMLElement>(menuSelector),
        burgerElement = document.querySelector<HTMLElement>(burgerSelector);

    menuElement.style.display = 'none';

    burgerElement.addEventListener('click', () => {
        if (menuElement.style.display == 'none' && window.screen.availWidth < 993) {
            menuElement.style.display = 'block';
        } else {
            menuElement.style.display = 'none';
        }
    });
    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menuElement.style.display = 'none'
        }
    });
}

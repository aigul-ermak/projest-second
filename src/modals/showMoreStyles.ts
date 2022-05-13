type showMoreStylesType = {
    trigger: string
    styles: string
}

export const showMoreStyles = ({trigger, styles}: showMoreStylesType) => {
    const cards: NodeListOf<Element> = document.querySelectorAll(styles),
        btn: Element = document.querySelector(trigger)

    cards.forEach((card: HTMLElement) => {
        card.classList.add('animated', 'fadeInUp')

        btn.addEventListener('click', () => {
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            btn.remove();
        });
    });
}

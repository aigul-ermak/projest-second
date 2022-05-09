type bindModalType = {
    triggersSelector: string
    modalSelector: string
    closeSelector: string
    destroy?: boolean
};

export const modals = () => {

    let btnPressed = false;
    const bindModal = ({
                           triggersSelector,
                           modalSelector,
                           closeSelector,
                           destroy = false,
                       }: bindModalType) => {
        const triggers: NodeListOf<HTMLElement> = document.querySelectorAll(triggersSelector),
            modal: HTMLElement = document.querySelector<HTMLElement>(modalSelector),
            close: HTMLElement = document.querySelector<HTMLElement>(closeSelector),
            windows: NodeListOf<HTMLElement> = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();
        //web storm выравнивает так
        const viewModal = ({ modalProperty, documentProperty = ''}: { modalProperty: string, documentProperty?: string }) => {
            modal.style.display = modalProperty;
            document.body.style.overflow = documentProperty;
        };

        triggers.forEach((trigger: HTMLElement) => {
            trigger.addEventListener('click', (e: MouseEvent) => {
                if (e.target) {
                    e.preventDefault();
                }
                btnPressed = true;
                if (destroy) {
                    trigger.remove();
                }
                windows.forEach(window => {
                    window.style.display = 'none';
                    window.classList.add('animated', 'fadeIn')
                });

                viewModal({modalProperty: 'block', documentProperty: 'hidden'});

                document.body.style.marginRight = `${scroll}px`
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(window => window.style.display = 'none');

            viewModal({modalProperty: 'none'});

            document.body.style.marginRight = `${0}px`
        })
        modal.addEventListener('click', (e: MouseEvent) => {
            if (e.target === modal) {
                windows.forEach(window => window.style.display = 'none');
                viewModal({modalProperty: 'none'});
                document.body.style.marginRight = `${0}px`
            }
        });
        // close modal window with esc btn
        document.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.code === 'Escape') {
                viewModal({modalProperty: 'none'});
            }
        });
    };

    const showModalByTime = (selector: string, time: number) => {
        setTimeout(() => {
            let display: string;
            document.querySelectorAll('[data-modal]').forEach(modal => {
                if (getComputedStyle(modal).display !== 'none') {
                    display = 'block'
                }
                if (!display) {
                    document.querySelector<HTMLElement>(selector).style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    //без строки 80 работает также, ничего не прыгает?
                    const scroll = calcScroll();
                    document.body.style.marginRight = `${scroll}px`
                }
            })
            document.querySelector<HTMLElement>(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time)
    };

    const calcScroll = () => {
        const div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.append(div);
        const scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    };

    const openByScroll = (selector: any) => {
        const scrollHeight = Math.max(document.documentElement.clientHeight, document.body.scrollHeight)
        window.addEventListener('scroll', () => {
            if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= scrollHeight) {
                document.querySelector(selector).click();
            }
        })
    };

    bindModal({
        triggersSelector: '.button-design',
        modalSelector: '.popup-design',
        closeSelector: '.popup-design .popup-close'
    });
    bindModal({
        triggersSelector: '.button-consultation',
        modalSelector: '.popup-consultation',
        closeSelector: '.popup-consultation .popup-content'
    });
    bindModal({
        triggersSelector: '.fixed-gift',
        modalSelector: '.popup-gift',
        closeSelector: '.popup-gift .popup-close',
        destroy: true
    });
    // showModalByTime('.popup-consultation', 5000);
    openByScroll('.fixed-gift')
};

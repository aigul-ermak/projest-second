export const scrolling = (upSelector: any) => {
    const upElement = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElement.classList.add('animated', 'fadeIn');
            upElement.classList.remove('fadeOut');
        } else {
            upElement.classList.add('fadeOut');
            upElement.classList.remove('fadeIn');
        }
    });
//second case
    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            let widthTop = document.documentElement.scrollTop
            let hash = this.hash
            // if (!hash) return
            // я должна проверить hash на null
            // Cannot read properties of null (reading 'getBoundingClientRect')
            let toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start: any = null;
            requestAnimationFrame(step);

            function step(time: number) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,

                    r = (toBlock < 0
                        ? Math.max(widthTop - progress / speed, widthTop + toBlock)
                        : Math.min(widthTop + progress / speed, widthTop + toBlock));

                document.documentElement.scrollTo(0, r);
                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });

// first case
//     const element = document.documentElement,
//         body = document.body;
//
//     const calcScroll = () => {
//         upElement.addEventListener('click', function (e: MouseEvent) {
//             let scrollTop = Math.round(body.scrollTop || element.scrollTop);
//
//             if (this.hash !== '') {
//                 e.preventDefault();
//
//                 let hashElement = document.querySelector(this.hash),
//                     hashElementTop = 0;
//
//                // error cannot read properties of null (offsetParent)
//                 if( typeof (hashElement && hashElement.offsetParent)) {
//                     while (hashElement.offsetParent) {
//                         hashElementTop += hashElement.offsetTop;
//                         hashElement = hashElement.offsetParent;
//                     }
//                 }
//
//                 hashElementTop = Math.round(hashElementTop);
//                 smoothScroll(scrollTop, hashElementTop, this.hash)
//             }
//         });
//     };
//
//     const smoothScroll = (from: number, to: number, hash: number) => {
//         let timeInterval = 1,
//             prevScrollTop: any,
//             speed: any;
//
//         if (to > from) {
//             speed = 30;
//         } else {
//             speed = -30
//         }
//
//         let move = setInterval(function () {
//             let scrollTop = Math.round(body.scrollTop || element.scrollTop);
//
//             if (
//                 prevScrollTop === scrollTop ||
//                 (to > from && scrollTop >= to) ||
//                 (to < from && scrollTop <= to)
//             ) {
//                 clearInterval(move);
//                 history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
//             } else {
//                 body.scrollTop += speed;
//                 element.scrollTop += speed;
//                 prevScrollTop = scrollTop;
//             }
//         }, timeInterval);
//     };
//     calcScroll();
};


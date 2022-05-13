type accordeonType = {
    triggerSelector: string
    itemsSelector?: string
}

export const accordeon = ({triggerSelector}: accordeonType) => {
    const btns = document.querySelectorAll(triggerSelector);
    //не смогла подобрать тип
    btns.forEach((btn: any) => {
        btn.addEventListener('click', function () {
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if(this.classList.contains('active-style')){
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 +'px';
            } else {
                this.nextElementSibling.style.maxHeight  = '0px' ;
            }
        })
    });

//     block = document.querySelectorAll(itemsSelector);
//
// block.forEach((block: HTMLElement) => {
//     block.classList.add('animated', 'fadeInDown');
// });
//
// btns.forEach((btn: HTMLElement) => {
//     btn.addEventListener('click', function() {
//         if(!this.classList.contains('active')) {
//             btns.forEach((btn:HTMLElement) => {
//                 btn.classList.remove('active', 'active-style');
//             });
//             this.classList.add('active', 'active-style')
//         }
//     })
// })
};

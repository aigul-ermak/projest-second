import {getResourse} from '../servises/requests';

type showMoreStylesType = {
    trigger: string
    wrapper: string
}

export const showMoreStyles = ({trigger, wrapper}: showMoreStylesType) => {
    const btn: Element = document.querySelector(trigger);

    btn.addEventListener('click', function() {
        debugger
        getResourse('assets/db.json')
            .then(res =>  createCards(res))
            .catch(error => console.log(error));

        this.remove();
    });

    function createCards(response: []){
        // @ts-ignore
        response.forEach(({src, title, link} :string) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
             <div class="styles-block"> 
                <img src=${src} alt="style">
                <h4>${title}</h4>
                <a href=${link}>Подробнее</a>
                </div>
                `;

            document.querySelector(wrapper).append(card);
        })
    }
}
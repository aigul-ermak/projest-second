type calcType = {
    size: string
    material: string
    options: string
    promocode: string
    result: string
}

export const calc = ({size, material, options, promocode, result}: calcType) => {
    const sizeBlock: HTMLOptionElement = document.querySelector(size),
        materialBlock: HTMLOptionElement = document.querySelector(material),
        optionBlock: HTMLOptionElement = document.querySelector(options),
        promocodeBlock: HTMLInputElement = document.querySelector(promocode),
        resultBlock: HTMLElement = document.querySelector(result);

    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = String(Math.round(sum * 0.7));
        } else {
            resultBlock.textContent = String(sum);
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
};

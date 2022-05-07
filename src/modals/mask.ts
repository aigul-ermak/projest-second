export function mask(selector: string) {

    const setCursorPosition = (pos: string, elem: any) => {
        elem.focus();

        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    function createMask(e: MouseEvent) {
        let matrix = '+7(___)___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.chartAt(i++) : i >= val.length ? '' : a;
        });

        if (e.type === 'blur') {
            if (this.value.length === 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }

    const inputs: NodeListOf<HTMLElement> = document.querySelectorAll(selector);

    inputs.forEach((input: HTMLElement) => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    });
}

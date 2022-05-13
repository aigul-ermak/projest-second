export const drop = () => {
    const fileInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('[name= upload]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        })
    })

    function preventDefaults(e: DragEvent) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item: Element) {
        item.closest<HTMLElement>('.file_upload').style.border = '5px solid yellow';
        item.closest<HTMLElement>('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)';
    }

    function unhighlight(item: Element) {
        item.closest<HTMLInputElement>('.file_upload').style.border = 'none';
        if (item.closest('.calc_form')) {
            item.closest<HTMLInputElement>('.file_upload').style.backgroundColor = '#fff';
        } else {
            item.closest<HTMLInputElement>('.file_upload').style.backgroundColor = '#ededed';
        }
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            const file = input.files[0],
                fileName = file.name.split('.')[0],
                fileType = file.name.split('.')[1],
                dots = fileName.length > 6 ? '...' : '.',
                name = `${fileName.substring(0, 6)}${dots}${fileType}`;

            input.previousElementSibling.textContent = name;
        });
    });
}

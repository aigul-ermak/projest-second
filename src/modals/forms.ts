export const forms = () => {
    const forms: NodeListOf<HTMLElement> = document.querySelectorAll('form'),
        inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name ="upload"]');

    const message = {
        loading: 'Loading...',
        success: 'Thank you! We"ll call you soon',
        failure: 'Something wrong...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    const postData = async (url: string, data: any) => {
        const res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text();
    };

    upload.forEach((form: HTMLFormElement) => {
        form.addEventListener('input', () => {
            console.log(form.files[0])
            let dots;
            const arr = form.files[0].name.split('.');

            arr[0].length > 6 ? dots = '...' : dots = '.';
            form.previousElementSibling.textContent = arr[0].substring(0, 6) + dots + arr[1];
        });
    });

    const clearInputs = () => {
        inputs.forEach((input: HTMLInputElement) => {
            input.value = ''
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'File did not choose'
        })
    };

    forms.forEach((form: HTMLFormElement) => {
        form.addEventListener('submit', (e: KeyboardEvent) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.parentNode.append(statusMessage);

            form.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                form.style.display = 'none';
            }, 400);

            const statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.append(statusImg);

            const textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.append(textMessage);

            const formData = new FormData(form);
            let api;
            form.closest('.popup-design') || form.classList.contains('calc-form') ? api = path.designer : api = path.question;
            // console.log(api)


            postData(api, formData)
                .then(res => {
                    console.log(res)
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        form.style.display = 'block';
                        form.classList.remove('fadeOutUp');
                        form.classList.add('fadeInUp');
                    }, 5000)
                });
        });
    });
};

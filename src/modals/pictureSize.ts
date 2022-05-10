export const pictureSize = (imgSelector: string) => {
    const blocks = document.querySelectorAll(imgSelector);

    const showImg = (block: HTMLElement) => {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -4) + ('-1.png');
        block.querySelectorAll('p:not(.sizes-hit)').forEach((p: HTMLElement) => {
            p.style.display = 'none';
        })
    };

    const hideImg = (block: HTMLElement) => {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -6) + ('.png');
        block.querySelectorAll('p:not(.sizes-hit)').forEach((p: HTMLElement) => {
            p.style.display = 'block';
        })
    };

    blocks.forEach((block: HTMLElement) => {
        block.addEventListener('mouseover', () => showImg(block));
        block.addEventListener('mouseout', () => hideImg(block));
    })
}

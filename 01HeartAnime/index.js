const body = document.querySelector('body');


body.addEventListener("mousemove", (e) => {
    const left = e.offsetX;
    const top = e.offsetY;
    let span = document.createElement('span');
    span.style.left = `${left}px`;
    span.style.top = `${top}px`;
    let size = Math.random() * 100;
    span.style.width = size + 'px';
    span.style.height = size + 'px';
    body.appendChild(span);
    setTimeout(() => {
        span.remove();
    }, 3000)
})
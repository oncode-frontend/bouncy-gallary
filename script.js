const pictures = document.querySelectorAll('.picture')


pictures.forEach(picture => {
    picture.addEventListener('click', () => {
        picture.classList.add('bouncy');
        pictures.forEach(picture => picture.classList.remove('selected'));
        picture.classList.add('selected');
        setTimeout(() => {
            picture.classList.remove('bouncy');
        }, 800);
    })
})
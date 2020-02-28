const btnR = document.querySelector('.btn-right');
const btnL = document.querySelector('.btn-left');
const syncscroll = document.querySelectorAll('.syncscroll');
const tracks = document.querySelector('.tracks');
const tracksW = tracks.offsetWidth;

btnR.addEventListener('click', _ => {
    for(let sync of syncscroll) {
        sync.scrollBy({
            left: tracksW / 2,
            behavior: 'smooth'
        });
    }
});

btnL.addEventListener('click', _ => {
    for(let sync of syncscroll) {
        sync.scrollBy({
            left: -tracksW / 2,
            behavior: 'smooth'
        });
    }
});


let observer = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) {
        document.body.classList.add("reveal");
    } else {
        document.body.classList.remove("reveal");
    }
});
observer.observe(document.querySelector("#top-of-site-pixel-anchor"));
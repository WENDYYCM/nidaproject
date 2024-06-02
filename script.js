const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.jewelery-text', {delay:200, origin:'top'})
sr.reveal('.jewelery-logo', {delay:450, origin:'top'})
sr.reveal('.icons', {delay:450, origin:'left'})

let scrollUp = document.querySelector('.scroll-up')
let scrollUpBar = document.querySelector('.scroll-up-bar')

scrollUp.onclick = () => {
    scrollUp.classList.toggle('bx-x');
    scrollUpBar.classList.toggle('open');
}
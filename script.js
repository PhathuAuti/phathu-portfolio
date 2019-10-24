
let read = document.getElementsByClassName('read');
let more = document.getElementsByClassName('more');
let dots = document.getElementsByClassName('dots');

function showMore(index) {

    let display = getComputedStyle(more[index]).display;

    if (display == 'block') {
        more[index].style.display = 'none';
        dots[index].style.display = 'block';
        read[index].textContent = 'Read More';
    } else {
        more[index].style.display = 'block';
        dots[index].style.display = 'none';
        read[index].textContent = 'Read Less';
    }
}

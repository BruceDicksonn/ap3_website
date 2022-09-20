const spans = Array.from(document.querySelectorAll('aside > ul > li > span'));
const ul = document.querySelector('aside > ul > li > ul');

console.log(spans)

spans.forEach(span => {
    span.onclick = e => {
        e.preventDefault();

        const id = span.getAttribute('id');
        console.log(id)
        changeCurrentSpan(id);

    }
});

function changeCurrentSpan(id){
        if(id === 'plus') {

            spans[0].style.display = 'none';
            spans[0].nextElementSibling.style.display = 'block';
            ul.style.display = 'block';

        } else {

            spans[1].style.display = 'none';
            spans[1].previousElementSibling.style.display = 'block';
            ul.style.display = 'none';

        }

}
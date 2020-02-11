let button = document.querySelector('.btn');
let inputElement = document.querySelector('input')
let mainSection = document.querySelector('.main')

let inputYear = "";
let currentYear = new Date().getFullYear();

inputElement.addEventListener('change', function (e) {
    inputYear = e.target.value;
    Number(inputYear);
});

button.addEventListener('click', function () {
    let result = currentYear - inputYear - 1;
    if (inputYear == "") {
        alert('Insert your age.')
    } else {
        mainSection.insertAdjacentHTML('beforeend', `<p class ="new">Year of your birth: ${result}</p>`)
    }
});
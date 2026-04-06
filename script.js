let container = document.querySelector('.container')
let button = document.createElement('button');
let number;
document.body.prepend(button);

button.textContent = 'NEW ART'
button.setAttribute('style','color:red;background-color:yellow');

for (i = 0; i<256; i ++){
    let allDivs = document.createElement('div');
    allDivs.style.width = (100 / 16) + '%'
    container.appendChild(allDivs);
    allDivs.addEventListener('mouseenter', () => {
        allDivs.style.backgroundColor = 'black'
    })
};

function newGrid(){
    number = +prompt('Enter number of squares');

    if (number > 100){
        alert("Error! It's more than 100");
    } else if (isNaN(number)){
        alert('thats NOT a number')
    } else {
        container.innerHTML = '';
        for (a = 0; a<number**2; a ++){
            let allDivs = document.createElement('div');
            allDivs.style.width = (100 / number) + '%' 
            container.appendChild(allDivs);
            allDivs.addEventListener('mouseenter', () => {
                allDivs.style.backgroundColor = 'black'
            })
        };
    }
};

button.addEventListener('click', newGrid);




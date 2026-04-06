let container = document.querySelector('.container')
let button = document.createElement('button');
let number;
let body = document.querySelector('body');
let blackContainer = document.createElement('div');
body.style.backgroundColor = 'rgba(169, 198, 224, 1)';
document.body.prepend(button);

button.textContent = 'NEW ART'
button.setAttribute('style','color:red;background-color:yellow; font-size:60px;position:absolute;margin-left:40px;border-radius:25px;border:2px solid orange; padding:15px');

blackContainer.setAttribute('style', 'width: 1000px;height: 900px;background-color:black; left: 50%;transform: translateX(-50%);position:absolute; opacity: 0; pointer-events: none;');
document.body.prepend(blackContainer)

//Default Grid
for (i = 0; i<256; i ++){
    let allDivs = document.createElement('div');
    allDivs.style.width = (100 / 16) + '%'
    container.appendChild(allDivs);
    allDivs.addEventListener('mouseenter', () => {
        allDivs.style.backgroundColor = '#' + Math.random().toString(16).substr(-6); //From Stack Overflow
    })
};

//Users Grid
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
                allDivs.style.backgroundColor = (Math.random().toString(16).slice(-6))
                blackContainer.style.opacity += 0.1
            })
        };
    }
};

button.addEventListener('click', newGrid);
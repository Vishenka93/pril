

const parent = document.querySelectorAll('.pril__item'),
    popup = document.querySelector('.popup__wrapper'),
    close = document.querySelector('.popup__close'),
    button = document.querySelector('.form__button'),
    input = document.querySelector('.form__input');





for (let i = 0; i <= parent.length; i++) {
       parent[i].addEventListener('click', (event) => {
       showPopup();
       button.addEventListener ('click', () => {

        let value = input.value;
        if (value == '' || value == null) {
            parent[i].style.backgroundColor = 'yellow';
            popup.style.display = 'none';
            console.log('yellow');
            i++;
           
        } else if (!isNaN(value) && value <= 10 ){
            parent[i].style.backgroundColor = 'red';
            popup.style.display = 'none';
            console.log('red');
            i++;
        }  else if (!isNaN(value) && 10 < value < 20 ){
            parent[i].style.backgroundColor = 'black';
            popup.style.display = 'none';
            console.log('black');
            i++;
        }  
    
    });  

       });         
}


function showPopup () {
    popup.style.display = 'flex';
    
     close.addEventListener('click', () => {
         popup.style.display = 'none';
         console.log('done');
     })
    
}






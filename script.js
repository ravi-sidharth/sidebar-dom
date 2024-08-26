let left_row= document.querySelector('.left-row')
let right_row= document.querySelector('.right-row')
let row1 = document.querySelector('.row-row')
right_row.addEventListener('click',()=>{

    if (right_row.firstElementChild.classList.contains("fa-bars")){
        right_row.firstElementChild.classList.replace('fa-bars','fa-xmark');
    }

    else {
        right_row.firstElementChild.classList.replace('fa-xmark','fa-bars');
    }
    
    left_row.classList.toggle("left-row-show");

    
})

row1.addEventListener('click',()=> {

    left_row.classList.toggle('left-row-show')
})
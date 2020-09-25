function hello() {
    console.log('Hello');
    hello2();
}

function hello2() {
    console.log('hello-2-2-2-22');
}


let btn = document.querySelector('#btn'); // кнопка
console.log(btn.id);
btn.onclick = hello;
// hello();
//btn.hidden = true;


let showModal = document.querySelector('#modal-show'); // кнопку show modal

function show() {
    let modal = document.querySelector('.modal');
    //modal.hidden = true;
    modal.style.display = 'block';
    modal.style.backgroundColor = 'pink';
}

showModal.onclick = show;
//border-radius: 20px;
//border  - 5px;


//my code
let image = document.querySelector('#image');
let shows = document.querySelector('#show');
let hide = document.querySelector('#hide');
let imgWrapper = document.querySelector('.wrapper_img');
//let text = document.querySelector('#text');

function swowImg(){
    image.style.display = 'block';
    image.style.border ='5px solid #FFD700';
    image.style.borderRadius = '20px';
   // text.hidden = true;

}
function hideImg(){
    image.style.display= 'none';
   // imgWrapper.innerHTML = '<p id ="text">сюрприз</p>';


}
shows.onclick = swowImg;
hide.onclick = hideImg;

//Если добавляю <p> после  hideImg(), то при нажатии swowImg()оно не уходит ... 
//не могу разобраться 
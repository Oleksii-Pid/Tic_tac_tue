const rootEl = Array.from(document.getElementsByClassName('element'));
const container = document.querySelector('.container');
const status = true;
const user1 = "X";
const user2 = "O";
const X1 = 0;
const Y1 = 0;
const X2 = 500;
const Y2 = 250;

let gamer1;
let gamer2;
let num = 0;

function Tic_tac_toe(){
    this.rootEl = rootEl;
    this.container = container;
    this.user1 = user1;
    this.user2 = user2;
    this.status = this.status;
    this.X1 = X1;
    this.Y1 = Y1;
    this.X2 = X2;
    this.Y2 = Y2;

    this.getGamer1();
    this.getGamer2();
    this.getElement();
}
Tic_tac_toe.prototype.getElement = function(){
    for(i = 0; i < this.rootEl.length; i++){
      let el = this.rootEl[i];
      this.rootEl[i].addEventListener('click',() => {
          if(this.status === true){
            el.innerHTML =  `<div> ${user1} </div>`;
            this.pointLine();
            this.status = !this.status;
            el.style.pointerEvents = 'none'; 
        }else{
            el.innerHTML =  `<div> ${user2} </div>`;
            this.pointLine();
            this.status = !this.status;
            el.style.pointerEvents = 'none';
         }}
        )
    }  
}
Tic_tac_toe.prototype.winner = function(){
    let win = document.createElement('div');
    win.classList.add('win');
    document.body.appendChild(win);
    if(this.status = true){
        win.innerHTML = `Виграв(-ла) ${gamer2}`
    }else{
        win.innerHTML = `Виграв(-ла)  ${gamer1}`;
    }
    
}

Tic_tac_toe.prototype.pointLine = function(){    
        if(rootEl[0].innerHTML == rootEl[1].innerHTML && rootEl[1].innerHTML == rootEl[2].innerHTML && rootEl[0].innerHTML !== " "){
            rootEl[0].classList.add('cross');
            rootEl[1].classList.add('cross');
            rootEl[2].classList.add('cross');
            this.X1 = 0;
            this.Y1 = 25;
            this.X2 = 500;
            this.Y2 = 25;
            this.drawLine();
            this.winner();
            this.container.style.pointerEvents = 'none';
            }else if(rootEl[3].innerHTML == rootEl[4].innerHTML && rootEl[4].innerHTML == rootEl[5].innerHTML && rootEl[3].innerHTML !== " "){
            rootEl[3].classList.add('cross');
            rootEl[4].classList.add('cross');
            rootEl[5].classList.add('cross');
            this.X1 = 0;
            this.Y1 = 75;
            this.X2 = 500;
            this.Y2 = 75;
            this.drawLine();
            this.winner();
            this.container.style.pointerEvents = 'none';
            }else
        if(rootEl[6].innerHTML == rootEl[7].innerHTML && rootEl[7].innerHTML == rootEl[8].innerHTML && rootEl[6].innerHTML !== " "){
            rootEl[6].classList.add('cross');
            rootEl[7].classList.add('cross');
            rootEl[8].classList.add('cross');
            this.X1 = 0;
            this.Y1 = 125;
            this.X2 = 500;
            this.Y2 = 125;
            this.drawLine();
            this.winner();
            this.container.style.pointerEvents = 'none';
            }else
        if(rootEl[0].innerHTML == rootEl[3].innerHTML && rootEl[3].innerHTML == rootEl[6].innerHTML && rootEl[0].innerHTML !== " "){
            rootEl[0].classList.add('cross');
            rootEl[3].classList.add('cross');
            rootEl[6].classList.add('cross');
            this.X1 = 50;
            this.Y1 = 0;
            this.X2 = 50;
            this.Y2 = 150;
            this.drawLine();
            this.winner();
            this.container.style.pointerEvents = 'none';
            }else
        if(rootEl[1].innerHTML == rootEl[4].innerHTML && rootEl[4].innerHTML == rootEl[7].innerHTML && rootEl[1].innerHTML !== " "){
            rootEl[1].classList.add('cross');
            rootEl[4].classList.add('cross');
            rootEl[7].classList.add('cross');
            this.X1 = 150;
            this.Y1 = 0;
            this.X2 = 150;
            this.Y2 = 150;
            this.drawLine();
            this.winner();
            this.container.style.pointerEvents = 'none';
           }else    
        if(rootEl[2].innerHTML == rootEl[5].innerHTML && rootEl[5].innerHTML == rootEl[8].innerHTML && rootEl[2].innerHTML !== " "){
            rootEl[2].classList.add('cross');
            rootEl[5].classList.add('cross');
            rootEl[8].classList.add('cross');
            this.X1 = 250;
            this.Y1 = 0;
            this.X2 = 250;
            this.Y2 = 150;
            this.drawLine();
            this.winner();
            this.container.style.pointerEvents = 'none';
           }else
        if(rootEl[0].innerHTML == rootEl[4].innerHTML && rootEl[4].innerHTML == rootEl[8].innerHTML && rootEl[0].innerHTML !== " "){
            rootEl[0].classList.add('cross');
            rootEl[4].classList.add('cross');
            rootEl[8].classList.add('cross');
            this.X1 = 0;
            this.Y1 = 0;
            this.X2 = 300;
            this.Y2 = 150;
            this.drawLine();
            this.winner();
            this.container.style.pointerEvents = 'none';
            }else
        if(rootEl[2].innerHTML == rootEl[4].innerHTML && rootEl[4].innerHTML == rootEl[6].innerHTML && rootEl[2].innerHTML !== " "){
            rootEl[2].classList.add('cross');
            rootEl[4].classList.add('cross');
            rootEl[6].classList.add('cross');
            this.X1 = 300;
            this.Y1 = 0;
            this.X2 = 0;
            this.Y2 = 150;
            this.drawLine();
            this.winner();
            this.container.style.pointerEvents = 'none';
           }
           else{
               if(rootEl[0].innerText != "" && 
                 rootEl[1].innerText != "" && 
                 rootEl[2].innerText != "" && 
                 rootEl[3].innerText != "" && 
                 rootEl[4].innerText != "" && 
                 rootEl[5].innerText != "" && 
                 rootEl[6].innerText != "" && 
                 rootEl[7].innerText != "" && 
                 rootEl[8].innerText != ""){
                    this.container.style.pointerEvents = 'none';
                    this.theEnd()}}}

Tic_tac_toe.prototype.theEnd = function(){
    let win = document.createElement('div');
    win.classList.add('win');
    document.body.appendChild(win);
    win.innerHTML = `Перемогла дружба`;

}
Tic_tac_toe.prototype.gamerOne = function(){

}

Tic_tac_toe.prototype.getGamer1 = function(){
    let gam1 = prompt('Імя першого гравця - Х');
        if(gam1.length > 3){
            gamer1 = gam1;
        }else{
            alert('Імя написано некоректно!');
            this.getGamer1();
         }
}
Tic_tac_toe.prototype.getGamer2 = function(){
    let gam2 = prompt('Імя другого гравця - О');
        if(gam2.length > 3){
            gamer2 = gam2;
            alert(`Хід гравця  ${gamer2}`)
        }else{
            alert('Імя написано некоректно!');
            this.getGamer2();
         }
}

Tic_tac_toe.prototype.drawLine = function(){
    let line = document.createElement('canvas');
    let container1 = document.querySelector('.container')
    line.id = "canvas";
    container1.appendChild(line);
    let ctx = line.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(`${this.X1}`, `${this.Y1}`);
    ctx.lineTo(`${this.X2}`, `${this.Y2}`);
    ctx.stroke();
}


 new Tic_tac_toe();

        




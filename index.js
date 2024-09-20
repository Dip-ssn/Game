let tries;
tries = 9
document.getElementById(`Tries`).textContent = (`${tries}`)


document.getElementById(`MyButton`).onclick = function(){
    let num = Math.floor(Math.random()*(15 - 1) + 1);
    document.getElementById(`MyHeader`).textContent = (`${num}`);
    console.log(`Program working!`);
    document.getElementById(`Tries`).textContent = (`${tries}`)
    
    if (num == 8){
        document.getElementById(`Won`).textContent = (`You Won`);
    }
    tries -= 1;
    if (tries < 0){
        document.getElementById(`Won`).textContent = (`You Lost`)
        
    }
    if(tries <  -1){
        window.alert(`Refresh This Page to try again`)
    }
}

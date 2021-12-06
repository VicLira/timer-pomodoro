/* TIMER -------------------*/
var tempo = 1000;
var cronos;
var startingMinutes = 25;
var counter;
var root;

function start() {
    timer();
}

function pause() {
    clearInterval(cronos);
}

function timer(root) {

    //startingMinutes = document.getElementById("minuto").value;
    let time = startingMinutes * 60;

    counter = document.getElementById("counter");

    const numb = document.querySelector(".numb");
    cronos = setInterval(() => {updateCountdown();
    if(counter == 0){
        clearInterval();
    }}, tempo)

    function updateCountdown() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        counter.innerHTML = `${minutes}:${seconds}`;
        time--;
    }
}

function reset() {
    clearInterval(cronos)
    startingMinutes = 0;
    counter.innerHTML = `00:00`
}

    
/*  MODAL -----------------------*/
    

function iniciarModal(modalID) {
    const modal = document.getElementById(modalID);
    if(modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if(e.target.id === modalID || e.target.className === 'fechar') {
                modal.classList.remove('mostrar');
            }
        })
    }
}

const addButton = document.querySelector('.card.card-add');
addButton.addEventListener('click', () => iniciarModal('modal-tarefa'));


/* NOVA TAREFA -----------------------*/

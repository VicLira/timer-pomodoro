/* TIMER -------------------*/
var tempo = 1000;
var cronos;
var startingMinutes = 25;
var counter;
var root;

var time;

var minutes;
var seconds;

function start() {
    timer();
}

function timer(root) {
    //startingMinutes = document.getElementById("minuto").value;
    time = startingMinutes * 60;

    counter = document.getElementById("counter");

    const numb = document.querySelector(".numb");
    cronos = setInterval(() => {updateCountdown();
    if(counter == 0){
        clearInterval();
    }}, tempo)

    function updateCountdown() {
        minutes = Math.floor(time / 60);
        seconds = time % 60;

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        counter.innerHTML = `${minutes}:${seconds}`;
        time--;
    }
}

function pause() {
    clearInterval(cronos);
    startingMinutes = time / 60;
    counter.innerHTML = `${minutes}:${seconds}`;
}

function reset() {
    clearInterval(cronos)
    startingMinutes = 25;
    counter.innerHTML = `25:00`
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
var tarefa = {"nomeTarefa": "nome", 
                "descricaoTarefa:": "descricao",
                "prioridade": 1,
                "qtdPomodoros": 0};

function addTarefa(modalID) {
    const modal = document.getElementById('modal-tarefa');

    let inputNome = document.getElementById('nomeTarefa');
    let inputDescricao = document.getElementById('descricaoTarefa');
    let inputPrioridade = document.querySelector('input[name="prioridade"]:checked');
    let inputQtdPomodoros = document.getElementById('qtdPomodoros');

    if (inputNome.value == "" || inputDescricao.value == "" || inputPrioridade.value == "" || inputQtdPomodoros == "") {
        var alertaDados = document.getElementById('alertaDados').innerHTML="Está faltando dados <i class='fas fa-exclamation-circle'></i>";
    } else {
        tarefa.nomeTarefa = inputNome.value;
        tarefa.descricaoTarefa = inputDescricao.value;
        tarefa.prioridadeTarefa = inputPrioridade.value;
        tarefa.qtdPomodoros = inputQtdPomodoros.value;
        modal.classList.remove('mostrar');

        let newCard = document.createElement('div');
        newCard.classList.add('card', 'card-newTarefa');

        let div01 = document.createElement('div');
        let div02 = document.createElement('div');
        let div03 = document.createElement('div');

        let h1 = document.createElement('h3');
        let h2Priority = document.createElement('h2');
        let h2qtdPomodoros = document.createElement('h2');
        let p = document.createElement('p');

        let newCardPriority = document.createTextNode(tarefa.prioridadeTarefa);
        let newCardName = document.createTextNode(tarefa.nomeTarefa);
        let newCardDescription = document.createTextNode(tarefa["descricaoTarefa:"]);
        let newCardQtdPomodoros = document.createTextNode(tarefa.qtdPomodoros);

        let newCardIcon = document.createElement('i');
        newCardIcon.classList.add('fas', 'fa-stopwatch');

        h2Priority.appendChild(newCardPriority);
        div01.appendChild(h2Priority);
        h1.appendChild(newCardName);
        p.appendChild(newCardDescription);
        div02.appendChild(h1);
        div02.appendChild(p);
        h2qtdPomodoros.appendChild(newCardQtdPomodoros);
        div03.appendChild(h2qtdPomodoros);
        div03.appendChild(newCardIcon);

        newCard.appendChild(div01);
        newCard.appendChild(div02);
        newCard.appendChild(div03);

        let currentCard = document.getElementById('card-novaTarefa');
        let colCard = document.getElementById('colCardTarefa');
        colCard.insertBefore(newCard, currentCard);
    }
};
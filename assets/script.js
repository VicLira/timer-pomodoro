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

const localStorageTarefas = JSON.parse(localStorage.getItem('tarefas'));
let tarefas = localStorage.getItem('tarefas') !== null ? localStorageTarefas : [];

const updateLocalStorage = () => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

const removeTarefas = ID => {
    tarefas = tarefas.filter(tarefa => tarefa.id !== ID)
    init();
    updateLocalStorage();
}

const init = () => {
    tarefasUl.innerHTML = '';
    tarefas.forEach(addCardIntoDOM);
    updateLocalStorage();
}

function addTarefa(modalID) {
    const modal = document.getElementById('modal-tarefa');

    let inputNome = document.getElementById('nomeTarefa').value;
    let inputDescricao = document.getElementById('descricaoTarefa').value;
    let inputPrioridade = document.querySelector('input[name="prioridade"]:checked').value;
    let inputQtdPomodoros = document.getElementById('qtdPomodoros').value;

    if (inputNome == "" || inputDescricao == "" || inputPrioridade == "" || inputQtdPomodoros == "") {
        var alertaDados = document.getElementById('alertaDados').innerHTML="Está faltando dados <i class='fas fa-exclamation-circle'></i>";
    } else {

        const generateID = () => Math.round(Math.random() * 1000);

        const tarefa = 
        {
        id: generateID(),    
        nome: inputNome, 
        descricao: inputDescricao,
        prioridade: inputPrioridade,
        pomodoros: Number(inputQtdPomodoros)
        };


        tarefas.push(tarefa);
        init();
        updateLocalStorage();
        

        modal.classList.remove('mostrar');
    }
};

const tarefasUl = document.getElementById('colCardTarefa');

const addCardIntoDOM = tarefa => {
   
    const div = document.createElement('div');

    div.classList.add('card', 'card-newTarefa');
    div.innerHTML = `
        <div><h3>${tarefa.prioridade}</h3></div>
        <div><h2>${tarefa.nome}</h2>, <p>${tarefa.descricao}</p></div>
        <div><i class="fas fa-stopwatch"></i><h3>${tarefa.pomodoros}</h3></div>
    `

    tarefasUl.append(div);

    updateLocalStorage();
}

init();
updateLocalStorage();




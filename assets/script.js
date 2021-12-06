const numb = document.querySelector(".numb");
let counter = 0;
setInterval(() => {
    if(counter == 100){
        clearInterval();
    } else {
        counter+=1;
        numb.textContent = counter + "%";
    }
}, 80)

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

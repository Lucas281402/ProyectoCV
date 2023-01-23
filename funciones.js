let menu = document.getElementById('mostrar');

let fuente = document.querySelector('body');

let abrirModal = document.getElementById('carta_presentacion');
let modal = document.querySelector('.modal');
let cerrarModal = document.querySelector('.cerrar_modal');

function mostrar_navbar() {
    menu.style.display =  'block';
};

function ocultar_navbar() {
    menu.style.display = 'none';
};

function cambiar_fuente() {
    fuente.style.fontFamily = 'Nova Square', cursive;
};

abrirModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('mostrar--modal');
});

cerrarModal.addEventListener('click', () => {
    modal.classList.remove('mostrar--modal');
});
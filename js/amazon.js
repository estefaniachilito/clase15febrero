let headerSearchInput = document.getElementById("headerSearchInput");

let mainContent = document.getElementById("main-content");


headerSearchInput.addEventListener("click", function() {

    headerSearchInput.classList.add("header-search-input-focus");
    headerSearchInput.classList.remove("header-search-input-no-focus");
});

mainContent.addEventListener("click", () => {

    headerSearchInput.classList.add("header-search-input-no-focus");
    headerSearchInput.classList.remove("header-search-input-focus");
});

//Boton de salir 
const closeButton = document.querySelector('.btn-close');
const modalContainer = document.querySelector('.box-modal');

closeButton.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});
// divs miniatura
const mainImgDiv = document.querySelector('.box-main-img-modal');
const miniDivs = document.querySelectorAll('.divMiniaturas');

miniDivs.forEach((miniDiv) => {
  miniDiv.addEventListener('click', () => {
//para que cambie el color de borde
    miniDivs.forEach((div) => {
      div.classList.remove('selected');
    });
// al color que tenga la clase select 
    miniDiv.classList.add('selected'); 

    const img = miniDiv.querySelector('img');
    mainImgDiv.querySelector('img').src = img.src;
  });
});


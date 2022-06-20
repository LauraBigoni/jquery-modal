$(document).ready(function () {
  console.log("Hello jQuery");

  // Prendo i button di apertura nel DOM e intercetto il click
  $('.open-modal').click(function () {

    // Salvo in una variabile l'id per utilizzarlo
    // dinamicamente per rimuovere la classe della modale giusta
    const modalId = $(this).data('modal');
    console.log(modalId);
    $('#' + modalId).removeClass('modal--closed');
  });

  // Prendo i button di chiusura nel DOM e intercetto il click
  $('.modal__close').click(function () {

    // Riaggiungo la classe della chiusura modale
    const modalClose = $(this).parents('.modal');
    console.log(modalClose);
    modalClose.addClass('modal--closed');
  });
});
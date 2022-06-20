$(document).ready(function () {
  console.log("Hello jQuery");

  // Prendo i button di apertura nel DOM e intercetto il click
  $('.open-modal').click(function () {

    // Salvo in una variabile 
    const modalId = $(this).data('modal');
    console.log(modalId);
  });

  // Prendo i button di chiusura nel DOM e intercetto il click
  $('.modal__close').click(function () {

    // 
  });
});
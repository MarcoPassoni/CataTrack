document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("l8eBHxezx2sptG1wT");

  document.getElementById("formid").addEventListener("submit", function (e) {
    //come non fare a ricaricare la pagina all'invio del modulo
    e.preventDefault();

    //controllo validità 1
    if (!validateForm()) {
      return;
    }

    //creazione variabile per http richiesta server
    //richiesta http ai server fatta con modello form, diviso per key-value
    //richiesta valida nel caso
    //...
    var formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    //stessa cosa di formData, usata per dati
    var emailData = {
      to: "catatrack.assistance@gmail.com",
      subject: formData.subject,
      message_html: formData.message,
      from_name: formData.firstName + " " + formData.lastName,
      reply_to: formData.email,
    };

    emailjs.send("service_n599q0h", "template_xrr50tt", emailData).then(
      function (response) {
        console.log("Email inviata con successo", response);
        alert("Email inviata con successo");
        document.getElementById("formid").reset();
      },
      function (error) {
        console.error(
          "Errore durante l'invio dell'email, codice di errore: ",
          error
        );
        alert("Errore durante l'invio dell'email, codice di errore: " + error);
      }
    );
  });

  function validateForm() {
    var valid = true;

    // validità campi
    //.required prende tutti i campi richiestie li controlla se sono pieni
    var requiredFields = document.querySelectorAll(".required");
    requiredFields.forEach(function (field) {
      if (field.value === "") {
        alert("Si prega di compilare tutti i campi obbligatori.");
        valid = false;
        return false;
      }
    });

    // validità indirizzo email
    // controllo testo@testo2.testo3 senza spazi
    var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(document.getElementById("email").value)) {
      alert("Inserire un indirizzo email valido.");
      valid = false;
    }

    return valid;
  }
});

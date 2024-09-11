document.getElementById('reservationForm').addEventListener('submit',function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const animal = document.getElementById('animal').value;
    // verifier les informations if (name && animal) {
    alert('Reservation réussie pour ${name} (${email} pour un(e) ${animal}');
    // Envoyer les données à un serveur fetch('/reserve',{
    method: 'POST',Headers; {
        'content-type';'application/json'}
    body: JSON.stringify({ name, email, animal})
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Erreur:',error))
    {
        alert('Veuillez remplir tous les champs.')
    }

    function addTocart(animal) {
        alert('Vous avez réservé une ${animal}.')
    }


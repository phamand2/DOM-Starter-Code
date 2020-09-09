const myButton = document.getElementById('clickMe');
const noun1 = document.getElementById('noun1');
const noun1Input = document.getElementById('noun1Input');
const noun2 = document.getElementById('noun2');
const noun2Input = document.getElementById('noun2Input');
const verb1 = document.getElementById('verb1');
const verb1Input = document.getElementById('verb1Input');
const verb2 = document.getElementById('verb2');
const verb2Input = document.getElementById('verb2Input');

myButton.addEventListener('click', function (event) {
  event.preventDefault();

  noun1.innerHTML = noun1Input.value;
  noun2.innerHTML = noun2Input.value;
  verb1.innerHTML = verb1Input.value;
  verb2.innerHTML = verb2Input.value;

});


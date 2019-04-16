function onReady () {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener ('submit', () => {
    event.preventDefault ();


    // get the text
    let title = newToDoText.value;

    // create a new Li
    let newLi = document.createElement('li');


    // create a new input
    let checkbox = document.createElement('input');

    // create delete button
    let removeButton = document.createElement('button');
    removeButton.textContent = "Remove";

    // create event listener for remove removeButton
    removeButton.addEventListener('click', function (event) {
      // this.parentElement represents the button's <li> parent
      toDoList.removeChild(this.parentElement);
    })

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the Li
    newLi.appendChild(checkbox);

    // attach the remove to li
    newLi.appendChild(removeButton);

    // attach the li to the ul
    toDoList.appendChild(newLi);


    //empty the input
    newToDoText.value = '';


  });
};

window.onload = function() {
  alert("The window has loaded!");
  onReady ();
};

/* when the page loads we are going to grab these elements by their id from the html file*/
//Returns the first element that is a descendant of node that matches selectors.
window.addEventListener('load', () => {
	// todo = JSON.parse(localStorage.getItem('todo')) || []; //logical or
	//if there is nothing to get from the json file then the page will check the array
    const form = document.querySelector("#newtask");
    const input = document.querySelector("#entertask");
    const listElement = document.querySelector("#tasks");
	
    /* prevents the page from refreshing when the submit button is pressed*/
    form.addEventListener('submit', (e) =>{
        e.preventDefault();


// created an if statement requiring the user to type something in the task tracker
// if nothing is typed then the form will not do anything
        const task = input.value;
        if (!task) {
            alert("Please add a task!");
            return;// required so there are no empty tasks will be put in the form
        } 
        


        const taskElement = document.createElement('div'); // allows us to create div elements on the page
        taskElement.classList.add('task');//creating a task inside the div element

        const taskContent = document.createElement('div');
        taskContent.classList.add('content');


        taskElement.appendChild(taskContent); //moves an existing node from its current position in a document to a new position  
        const taskInput = document.createElement('input');//Creates an instance of the element for the specified tag
        taskInput.classList.add('text');//Adds all arguments passed, except those already present
		taskInput.type = 'text';//Returns the content type of the object
		taskInput.value = task;//Returns the value of the data at the cursor's current position
        taskInput.setAttribute('readonly', 'readonly'); //readonly does not allow the text to be modified 
//tried deleting lines 39-42 but the page wouldn't load
		taskContent.appendChild(taskInput); //when a new input is entered it's moved to the next position

		const taskActions = document.createElement('div'); //creates another div
		taskActions.classList.add('actions');
		
		const taskEdit = document.createElement('button'); //creating a button element
		taskEdit.classList.add('edit'); //the button will be added to the page
		taskEdit.innerText = 'Edit'; //the name of the button will be called edit

		const taskDelete = document.createElement('button');
		taskDelete.classList.add('delete');
		taskDelete.innerText = 'Delete'; //the name of the button will be called delete

		taskActions.appendChild(taskEdit); 
		taskActions.appendChild(taskDelete);

		taskElement.appendChild(taskActions);

		listElement.appendChild(taskElement);

		input.value = '';
//creating a function that when the user clicks the edit button
//the user can change the text
//then the edit button will change to save so the button goes 
//once the save button is clicked it will go back to edit
//the text will not be able to be changed when the edit button is visible
		taskEdit.addEventListener('click', (e) => {
			if (taskEdit.innerText.toLowerCase() == "edit") {
				taskEdit.innerText = "Save";
				taskInput.removeAttribute("readonly");
				taskInput.focus();
			} else {
				taskEdit.innerText = "Edit";
				taskInput.setAttribute("readonly", "readonly");
			}
		});
//when the delete button is clicked then the item will be deleted from the list
		taskDelete.addEventListener('click', (_e) => {
			listElement.removeChild(taskElement);
		});
    });
});

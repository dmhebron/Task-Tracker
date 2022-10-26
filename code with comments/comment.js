/* when the page loads we are going to grab these elements by their id from the html file*/
/* list_el is list element */
//the underscore is a valid character for a variable/ function name
// the underscore provides functions
//Returns the first element that is a descendant of node that matches selectors.
window.addEventListener('load', () => {
	todo = JSON.parse(localStorage.getItem('todo')) || []; //logical or
	//if there is nothing to get from the json file then the page will check the array
    // const form = document.querySelector("#newtask");
    // const input = document.querySelector("#firsttask");
    // const list_el = document.querySelector("#tasks");
	

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
        

//task_el is task element
        const task_el = document.createElement('div'); // allows us to create div elements on the page
        task_el.classList.add('task');//creating a task inside the div element

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');


        task_el.appendChild(task_content_el); //moves an existing node from its current position in a document to a new position  
        const task_input_el = document.createElement('input');//Creates an instance of the element for the specified tag
        task_input_el.classList.add('text');//Adds all arguments passed, except those already present
		task_input_el.type = 'text';//Returns the content type of the object
		task_input_el.value = task;//Returns the value of the data at the cursor's current position
        task_input_el.setAttribute('readonly', 'readonly'); //readonly does not allow the text to be modified 
//tried deleting lines 39-42 but the page wouldn't load
		task_content_el.appendChild(task_input_el); //when a new input is entered it's moved to the next position

		const task_actions_el = document.createElement('div'); //creates another div
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button'); //creating a button element
		task_edit_el.classList.add('edit'); //the button will be added to the page
		task_edit_el.innerText = 'Edit'; //the name of the button will be called edit

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete'; //the name of the button will be called delete

		task_actions_el.appendChild(task_edit_el); 
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';
//creating a function that when the user clicks the edit button
//the user can change the text
//then the edit button will change to save so the button goes 
//once the save button is clicked it will go back to edit
//the text will not be able to be changed when the edit button is visible
		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});
//when the delete button is clicked then the item will be deleted from the list
		task_delete_el.addEventListener('click', (_e) => {
			list_el.removeChild(task_el);
		});
    });
});

window.addEventListener('load', () => {
	const form = document.querySelector("#newtask");
    const input = document.querySelector("#entertask");
    const listElement = document.querySelector("#tasks");
	
	
       form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const task = input.value;
		       
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

		taskDelete.addEventListener('click', (_e) => {
			listElement.removeChild(taskElement);
		});
    });
});

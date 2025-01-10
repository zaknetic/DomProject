const addTask = () => {
    const taskInput = document.getElementById('input');
    const taskInputValue = taskInput.value.trim();
    if (taskInputValue !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = '<input type="checkbox" class="checkbox">' + taskInputValue + '<button onclick = "deleteTask(this)" class="delete">Delete</button>';
        taskList.appendChild(li);

        taskInput.value = '';
    }
    else{
        alert('Please enter a task');
        
    }
};

const deleteTask = (btn) => {
 const li = btn.parentNode;
 li.parentNode.removeChild(li);
}

const deleteTadkChecked = () => {
    const taskList = document.getElementById('taskList');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    checkboxes.forEach(checkbox => {
        const li = checkbox.parentNode;
        taskList.removeChild(li);
    });
}
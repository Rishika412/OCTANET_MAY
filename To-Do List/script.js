function addTask() {
    var taskInput = document.getElementById("taskInput").value;
    var priorityInput = document.getElementById("priorityInput").value;
    var dueDateInput = document.getElementById("dueDateInput").value;
    var categoryInput = document.getElementById("categoryInput").value;
  
    if (taskInput === '') {
      alert("You must write something!");
      return; // Exit the function if the task input is empty
    }
  
    // Create a new list item
    var li = document.createElement("li");
    li.className = "task-item"; // Add a class to the list item for styling
  
    // Task description
    var taskText = document.createElement("span");
    taskText.textContent = taskInput;
    taskText.style.fontSize = "20px";
 // Make task text bigger
    li.appendChild(taskText);
    
  
    // Priority
    var priorityText = document.createElement("span");
    priorityText.textContent = priorityInput;
    priorityText.className = "smallText";
    li.appendChild(document.createElement("br")); // Add line break
    li.appendChild(priorityText);
  
    // Due Date
    var dueDateText = document.createElement("span");
    dueDateText.textContent =  dueDateInput;
    dueDateText.className = "smallText";
    li.appendChild(document.createElement("br")); // Add line break
    li.appendChild(dueDateText);
  
    // Category
    var categoryText = document.createElement("span");
    categoryText.textContent = categoryInput;
    categoryText.className = "smallText";
    li.appendChild(document.createElement("br")); // Add line break
    li.appendChild(categoryText);
  
    // Add button to mark task as completed
    var completeButton = document.createElement("button");
    completeButton.textContent = "complete";
    completeButton.className = "completeButton";
    completeButton.addEventListener("click", function() {
      li.classList.toggle("completed");
    });
  
    // Add button to delete task
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.className = "deleteButton";
    deleteButton.addEventListener("click", function() {
      li.remove();
    });
  
    // Append buttons to the list item
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
  
    // Append the list item to the task list
    document.getElementById("taskList").appendChild(li);
  
    // Clear input fields after adding task
    document.getElementById("taskInput").value = "";
    document.getElementById("priorityInput").value = "High"; // Reset priority to default value
    document.getElementById("dueDateInput").value = "";
    document.getElementById("categoryInput").value = "";
  }
  
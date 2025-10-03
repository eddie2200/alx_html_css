// Wait for the full HTML document to load
document.addEventListener('DOMContentLoaded', function () {
  // 1. Select DOM elements
  const addButton = document.getElementById('add-task');     // "Add Task" button
  const taskInput = document.getElementById('task-input');   // Input field for tasks
  const taskList = document.getElementById('task-list');     // UL to display tasks

  // 2. Define the function to add a task
  function addTask() {
    // Get the task text and trim whitespace
    const taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new <li> element for the task
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

// Create a "Remove" butt

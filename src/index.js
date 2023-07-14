document.addEventListener("DOMContentLoaded", () => {

// GRAB AND ADD EVENT LISTENER TO FORM
const form = document.querySelector(`#create-task-form`)
form.addEventListener(`submit`, (e) => {
e.preventDefault()

const taskList = document.querySelector(`#tasks`)     //THESE THREE LINES >
const newTask = document.createElement(`li`)          //CREATE NEW TASK LINE ITEM FOR TO DO LIST
newTask.textContent = e.target[`new-task-description`].value //ASSIGN VALUE TO NEW TASK VARIABLE

 const priority = e.target[`new-task-priority`].value  //GRABS SELECT DROP DOWN MENU AND TARGETS VALUES
if (priority === `high`) newTask.style.backgroundColor = `red`  //INSTRUCTIONS FOR OPTION CHOICE,
if (priority === `medium`) newTask.style.backgroundColor = `orange` //PRIORITY COLOR CODED  BY IMPORTANCE
if (priority === `low`) newTask.style.backgroundColor = `yellow`

  

//CREATE AND APPEND DELETE BUTTON 
const deleteButton = document.createElement(`button`)
deleteButton.innerText = (`X`)
deleteButton.style.marginLeft = `20px`
newTask.append(deleteButton)
  
//AEVENT LISTENER THAT TRIGGERS REMOVAL OF TASK ITEM LINE
deleteButton.addEventListener(`click`, () => {
  e.preventDefault()
  newTask.remove()
  })
  
  taskList.appendChild(newTask) //APPEND NEW TASK WITH OPTION TO SET PRIORITY, PRIORITY MUST BE SELECTED BEFORE BEING SUBMITTED.
  e.target.reset() //CLEARS INPUT VALUE BACK TO DEFAULT PLACEHOLDER
})
    })
                  

        

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const formElement = document.getElementById('create-task-form')

  formElement.addEventListener('submit', (e) => {e.preventDefault()


  const newTaskdescription = document.getElementById('new-task-description')
  
  
  const li = document.createElement('li')
  li.textContent = newTaskdescription.value
  
  const ulElement = document.getElementById('tasks')
    ulElement.appendChild(li)

    const xButton = document.createElement('button')
    xButton.textContent = ' X '
    li.appendChild(xButton)
    formElement.reset()

xButton.addEventListener('click', (e) => {
  e.target
  console.log(e.target.parentNode.remove())
})


  })
})









  //Selecting form element to prevent default reloading when form submitted
//   const form = document.getElementById('create-task-form') //
//   form.addEventListener('submit', e => e.preventDefault())

// //selecting elements 
//   const submitButton = document.querySelectorAll('form input')[1]
//   const taskDescriptionBox = document.getElementById('new-task-description')
//   const xButton = document.createElement('button')

//   //adding event listener to submit button
//   submitButton.addEventListener('click', (e) => {
//     const ul = document.getElementById('tasks')
//     const newLi = document.createElement('li')
//     newLi.textContent = taskDescriptionBox.value
    
//     // Created x button to delete task and appending it to li tag
//     xButton.textContent = ' X '

//     newLi.appendChild(xButton)
//     ul.appendChild(newLi)
//     form.reset()  ////resetting entire form page once submit button is clicked
// })

// // event listener to remove task or button's parent note(li tag) when x is 'clicked'
// xButton.addEventListener('click', (e) => {
//   e.target.parentNode.remove()
// })
// })



// //dropdown menu
// const dropDown = document.createElement('select')
// form.appendChild(dropDown)

// let options = ['Red', 'Yellow', "Green"]
// for(let i = 0; let i < 3; i++) {
//   let option = options[i]

//   const dropDownOption = document.createElement('option')
// dropDownOption.textContent = options[i]
// dropDown.appendChild(dropDownOption)
// ​​
// }


























// document.addEventListener("DOMContentLoaded", () => {

//   const inputTask = document.getElementById("new-task-description")
//   console.log(inputTask)
//   // your code here

//   const form = document.querySelector('form')

//   form.addEventListener('submit', (event) => {
//     event.preventDefault()

//     const inputTask = document.getElementById("new-task-description")
//     createToDo(inputTask.value)

//     form.reset()
//   })
// });

// function createToDo(todo){
//   let p = document.createElement('p')
//   let btn = document.createElement('button')
//   btn.addEventListener('click', deleteTask)
//   btn.textContent = ' X '
//   p.textContent = `${todo}`
//   p.appendChild(btn)
//   document.querySelector('#tasks').appendChild(p)
// }


// function deleteTask(e) {
//   e.target.parentNode.remove()
// }















//2 code with xbutton left

// document.addEventListener("DOMContentLoaded", () => {

//   const inputTask = document.getElementById("new-task-description")
//   console.log(inputTask)
//   // your code here

//   const form = document.querySelector('form')

//   form.addEventListener('submit', (event) => {
//     event.preventDefault()

//     const inputTask = document.getElementById("new-task-description")
//     createToDo(inputTask.value)

//     form.reset()
//   })
// });

// function createToDo(todo){
//   let p = document.createElement('p')
//   let btn = document.createElement('button')
//   let pText = document.createElement('snap')

//   btn.addEventListener('click', deleteTask)

//   btn.textContent = ' X '
//   // p.textContent = `${todo}`
//   pText.textContent = ` ${todo}`
//   p.appendChild(btn)
//   p.appendChild(pText)
  
//   document.querySelector('#tasks').appendChild(p)
// }

// function deleteTask(e) {
//   e.target.parentNode.remove()
// }
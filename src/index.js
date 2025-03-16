//document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")

  
  const list = document.getElementById("list")

  const tasks = document.getElementById("tasks")

  const deletebtn = document.createElement("button")
  

  form.addEventListener('submit', function(event){
    event.preventDefault()
    
    const li =document.createElement('li')
    const btn = document.createElement('button')
    btn.addEventListener('click',(event) =>{
      event.preventDefault()
      btn.parentNode.remove()
    })
    li.textContent = event.target.task.value
    btn.textContent = "x"

    //console.log(btn)

    //console.log(li)
    li.appendChild(btn)
    tasks.appendChild(li)
  })
  
//});

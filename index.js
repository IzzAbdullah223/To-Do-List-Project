const InputText=document.getElementById("input")
const Button=document.getElementById("Button")
const List=document.getElementById("MyUnorderedList")
const ContainerDiv=document.getElementById("Container")



function Add(){
    if(!InputText.value==""){

    const newTask=document.createElement("li")
    const Delete=document.createElement("Span")
    Delete.id="Cross"
    Delete.innerHTML="\u00d7"



    newTask.textContent=InputText.value
    List.appendChild(Delete)
    List.appendChild(newTask)
    
 
    newTask.addEventListener("click",()=>{newTask.classList.add("Selected")})
    Delete.addEventListener("click",()=>{
        newTask.remove()
        Delete.remove()
    })
}
    
   
 

}
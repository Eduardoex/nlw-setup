import {form, nlwSetup, button, data,} from "./elements.js"

button.addEventListener("click", add)
form.addEventListener("change", save)

function add(){
  const today = new Date().toLocaleDateString("pt-br").slice(0,-5)
  const dayExists = nlwSetup.dayExists(today)

  if(dayExists){
    alert("Dia já incluso")
    return
  }

  nlwSetup.addDay(today)
}



function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}


nlwSetup.setData(data)
nlwSetup.load()



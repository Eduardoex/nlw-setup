const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

export {
  form,
  nlwSetup,
  button,
  data,
}
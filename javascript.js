console.log("Hello World");

const form = !document.querySelector('#form') ? undefined :  document.querySelector('#form') ;
const submitButton = document.querySelector('#submit')

if (form){
  form.addEventListener('submit', (e) => {
    submitButton.disabled = true
    e.preventDefault()
    window.location.href = window.location.origin + '/success.html'
  })
}

document.addEventListener('click', function(event){
    event.target.style.backgroundColor = `${event.target.id}`
    console.log(event.target)
    event.target.innerText = event.target.id
})
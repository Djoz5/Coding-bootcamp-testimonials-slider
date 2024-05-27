const prev = document.querySelector('.icon-prev')
const next = document.querySelector('.icon-next')
const personOne = document.querySelector('.person-one')
const personTwo = document.querySelector('.person-two')

prev.addEventListener("click", function(){
    personOne.style.display = "flex";
    personTwo.style.display = "none"
})

next.addEventListener("click", function(){
    personOne.style.display = "none";
    personTwo.style.display = "flex"
})
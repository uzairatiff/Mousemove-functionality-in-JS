document.addEventListener("mousemove", handlemouse)
var divtag = document.getElementsByTagName("div")

function handlemouse(event) {
    
    console.log(event);
    divtag[1].innerHTML = `X: ${event.clientX}`
    divtag[2].innerHTML = `Y: ${event.clientY}`
    divtag[0].style.position = 'absolute'
    divtag[0].style.top = `${event.clientY - 45}px`
    divtag[0].style.left = `${event.clientX - 45}px`
    
}
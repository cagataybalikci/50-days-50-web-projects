const textElement = document.getElementById("text")
const speedElement = document.getElementById("speed")

const textContent = 'We Love Programming!'

let idx = 1

let speed = 300 / speedElement.value


writeText()

function writeText(){
    textElement.innerText = textContent.slice(0,idx)

    idx++

    if(idx > textContent.length){
        idx = 1
    }

    setTimeout(writeText,speed)
}

speedElement.addEventListener("input",(e)=> speed = 300 / e.target.value)
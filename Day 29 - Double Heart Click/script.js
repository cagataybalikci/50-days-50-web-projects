const loveMe = document.querySelector(".loveMe")
const times = document.querySelector("#times")

let clickTime = 0
let timesClicked = 0

// You can also use dblclick much more easier
loveMe.addEventListener("click",(e)=>{
    if (clickTime  === 0) {
        clickTime = new Date().getTime()
    }else {
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
        }else{
            clickTime = new Date().getTime()
        }
    }
})


const createHeart = (e) => {
    const heart = document.createElement("i")
    heart.classList.add("fas")
    heart.classList.add("fa-heart")

    const x = e.clientX
    const y = e.clientY

    const offsetX = e.target.offsetLeft
    const offsetY = e.target.offsetTop

    const insideX = x - offsetX
    const insideY = y - offsetY

    heart.style.top = `${insideY}px`
    heart.style.left = `${insideX}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked
    
    setTimeout(()=> heart.remove(),1000)
}

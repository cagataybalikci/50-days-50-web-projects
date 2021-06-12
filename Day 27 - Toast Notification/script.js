const button = document.getElementById("button")
const toasts = document.getElementById("toasts")

const messages = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four "
]

const indicator = [
    "success",
    "warning",
    "danger"
]


button.addEventListener("click",()=> createNotification())


function createNotification() {
    const notif = document.createElement("div")
    notif.classList.add("toast")
    const randomIndicator = getRandomIndicator()
    console.log(randomIndicator);
    notif.classList.add(randomIndicator)
    console.log(notif.classList);

    notif.innerText = getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}


function getRandomIndicator() {
    return indicator[Math.floor(Math.random() * indicator.length)]
}
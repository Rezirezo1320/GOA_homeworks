const words = [
    "apple", "banana", "car", "desk", "elephant", "flower", "guitar", "house", "ice", "jungle",
    "kangaroo", "lemon", "mountain", "notebook", "ocean", "pencil", "queen", "river", "sun", "tree",
    "umbrella", "violin", "window", "xylophone", "yogurt", "zebra", "Paris", "London", "Tokyo", "Rome",
    "Madrid", "Berlin", "Lisbon", "Toronto", "New York", "Chicago", "Sydney", "Melbourne", "Cairo", "Nairobi",
    "Lagos", "Cape Town", "Beijing", "Seoul", "Bangkok", "Jakarta", "Dubai", "Istanbul", "Moscow", "Delhi",
    "India", "China", "Brazil", "Argentina", "Egypt", "Kenya", "Nigeria", "South Africa", "Russia", "Germany",
    "France", "Italy", "Spain", "Portugal", "Japan", "South Korea", "Thailand", "Indonesia", "Australia", "Canada",
    "USA", "Mexico", "Peru", "Chile", "Colombia", "Vietnam", "Malaysia", "Singapore", "Philippines", "Pakistan",
    "ball", "cloud", "door", "energy", "forest", "game", "hat", "island", "juice", "key",
    "lamp", "moon", "nest", "orange", "pizza", "quiet", "rain", "star", "train", "watch"
]


const ifr = document.querySelector("#if")
const form = document.querySelector("#sub")
form.addEventListener("click", function(event){
    event.preventDefault()
    const user = document.querySelector("#input1")
    switch(String(user.value)){
        case "random":
            ifr.src = `https://en.wikipedia.org/wiki/${words[Math.floor(Math.random() * words.length)]}`
            break
        case "main":
            ifr.src = `https://en.wikipedia.org/wiki/`
        default:
            ifr.src = `https://en.wikipedia.org/wiki/${user.value}`
    }
})
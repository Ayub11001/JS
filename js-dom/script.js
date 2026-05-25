// DOM - Document Object Model

// Query Selector

    const days = document.querySelector(".days");
    console.log(days)

// Query Selector All

    const day = document.querySelectorAll(".day");
    day.forEach(
        (eachDay) => {
            console.log(eachDay)
        }
    )

// Get Element By Id

    const good_day = document.getElementById("good-day");
    console.log(day)


// Inner Text

    console.log("inner text: ", days.innerText)

// Inner HTML

    console.log("innner html: ", days.innerHTML)

// Text Content

    console.log("inner content: ", days.textContent)


// Style

    days.style.display = "block";
    days.style.color = "red";

// Class List

    days.classList.add("5-days");
    const contains = days.classList.contains("5-days");
    console.log("beofre removing the calss: ", contains)
    days.classList.remove("5-days")
    console.log("after removing the class", days.classList.contains("5-days"));
    

// Create, Append, Remove Elements
    // create method is only available on the document object

    const button = document.createElement("button");
    button.innerText = "Button"
    days.appendChild(button)
    button.remove()


// Events - Click, Key Down, Key Up


// Event Listeners

    const event_button = document.querySelector(".button");
    button.addEventListener(
        "click",
        () => {
            console.log("Clicking the button")
        }
    )

    document.body.addEventListener(
        "keyup",  // or keydown
        (event) => {
            if(event.key === 'Enter')
            console.log("keydown")
        }
    )

// Prevent Default

    const git = document.querySelector(".git");
    git.addEventListener(
        "click",
        (event) => {
            event.preventDefault()
        }
    )

// Value

    const button = document.querySelector(".button");
    const input = document.querySelector(".input");
    button.addEventListener(
        "click",
        () => {
            console.log(input.value);
            input.value = ""
        }
    )
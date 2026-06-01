const button  = document.querySelector(".button");
const div = document.querySelector(".div")



// setTimeout / clearTimeout
const id = setTimeout(
    () => {
        const p = document.createElement("p");
        p.innerText = "It is a p tag";
        div.appendChild(p)
    },
    2000
)

button.addEventListener(
    "click",
    () => {
        clearTimeout(id)
    }
)
    


// setInterval / clearInterval
const intervalId = setInterval(
    () => {
        const p = document.createElement("p");
        p.innerText = "It is a p tag";
        div.appendChild(p)
    },
    500
)

button.addEventListener(
    "click",
    () => {
        clearInterval(intervalId)
    }
)


// Promises


// create
const promise = new Promise(
    (resolve, reject) => {
        const err = false
        setTimeout(
            () => {
                console.log("in set timeout");
                if(err) reject("task was incomplete")
                resolve({
                    name: "Somename",
                    username: "someusername",
                    email: "someone@something.com"
                })
            },
            2000
        )
    }
);


// consume
promise
.then(
    (data) => {
        console.log(data)
        // async task
        return data.name;
    }
)
.then(
    (name) => {
        console.log(name);
    }
)
.catch(
    (error) => {
        console.log("Some error occurred, ", error) 
    }
)
.finally(
    () => {
        console.log("this will run no matter wahat")
    }
)



// Fetch API
const url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
.then(
    (data) => {
        return data.json()
    }
)
.then(
    (processedData) => {
        return processedData.map(
            (user) => {
                return {
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    address: user.address.street,
                    company: user.company.name
                }
            }
        )
    }
)
.then(
    (usefulinfo) => {
        usefulinfo.map(
            (data) => {
                render(data)
            }
        )
    }
)



// Async / Await

const getInfo = async () => {
    const response = await fetch(url);
    const json = await response.json();
    const info = json.map(
        (user) => {
            return {
                name: user.name,
                username: user.username,
                email: user.email,
                address: user.address.street,
                company: user.company.name
            }
        }
    );
    
    info.map(
        (data) => {render(data)}
    )
    
}

getInfo()



const  render = (info) => {
   const container =  document.createElement("div");
   const p = document.createElement("p");
   div.appendChild(container);
   container.appendChild(p)
   p.innerText = `Name: ${info.name}\nUsername: ${info.username}\ncompany: ${info.company}`
}
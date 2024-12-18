const prompt = require('prompt-sync')()
let URL = "https://api.openai.com/v1/chat/completions"

async function ChatgptInteraction(Data) {
    let options = {
        method: `POST`,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + "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",
        },
        body: JSON.stringify( {
            "model": "gpt-4o",
            "messages": [
                {
                    "role": "system",
                    "content": "You are a helpful assistant.",
                },
                {
                    "role": "user",
                    "content": Data,
                },
            ],

        }),
    }
    const response = await fetch(URL, options);
    const data = await response.json();
    console.log(data.choices[0].message.content)
}


async function main() {
    let goal = prompt("What is your goal? ")
    let age = prompt("what is you age? ")
    let height = prompt("what's your height? ")
    let weight = prompt("what's your weight? ")
    let allergies = prompt("are you allergic to any food? ")
    let food = prompt("what food do you not like? ")
    let request = `My goal is to ${goal}, I am ${age} years old, I am ${height} and weigh ${weight}, I am allergic to ${allergies} and the food I don't like are ${food}`
    ChatgptInteraction(request)
    let loseWeight = "https://api.spoonacular.com/recipes/findByNutrients/?apiKey=fadd38488ff74951a448bb7b5032181d&maxCarbs=200&minProtein=45&maxCalories=500&maxFat=80&offset=606&number=10&random=false&limitLicense=true"
    fetchData(loseWeight)
}

main()

async function fetchData(requestUrl) {
    const response = await fetch(requestUrl)
    const data = await response.json()
    console.log(data)
}

// https://api.spoonacular.com/recipes/findByNutrients?maxCarbs=100&minProtein=45&maxCalories=500&maxFat=40&maxCholesterol=50&maxSaturatedFat=50&maxFiber=50&maxSugar=20&offset=606&number=10&random=false&limitLicense=true

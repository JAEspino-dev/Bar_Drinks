//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data =>{
//         console.log(data.message)
//         document.querySelector('img').src = data.message
//     })
//     .catch(error => console.error(error))

document.querySelector('button').addEventListener('click', getDrink)
function getDrink(){

    const inputVal = document.querySelector('input').value
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputVal}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
    })
}

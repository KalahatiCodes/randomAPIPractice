// https://www.thecocktaildb.com/api.php


// const key = ''

let getSpirit = () => {
    let cocktailName = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
   .then(res => res.json())
   .then(cocktail =>{
       console.log(cocktail)
        let cocktailPhoto = cocktail.drinks[0].strDrinkThumb
        let baseSpirit = cocktail.drinks[0].strIngredient1
        
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${baseSpirit}`)
        .then(res=>res.json())
        .then(spirit => {
            console.log(spirit)
            let spiritInfo = spirit.ingredients[0].strDescription

            document.querySelector('img').src = cocktailPhoto
            document.querySelector('h2').innerText = `${cocktailName}'s base spirit is ${baseSpirit}!`
            document.querySelector('h3').innerHTML = `About ${baseSpirit}:`
            document.querySelector('p').innerHTML = `${spiritInfo}`
            document.querySelector('img').classList.toggle('hidden')
        })
        .catch(err => console.log(err))
    })
   .catch(err => console.log(err))
}

document.querySelector('button').addEventListener('click', getSpirit)
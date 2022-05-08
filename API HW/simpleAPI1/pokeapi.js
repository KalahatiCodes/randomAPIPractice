const key = 'DHf7kh55cAjgr5pWt1jrAPKOQnrGoklh9JCkrLqo'

let poke = () => {
    const input = document.querySelector('input').value
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
   .then(res => res.json())
   .then(data =>{
       console.log(data)
       let name = data.species.name
       let photo = data.sprites.front_default
       let ability1 = data.abilities[0].ability.name
       let ability2 = data.abilities[1].ability.name
       let experience = data.base_experience
       let weight = data.weight
       let move = data.moves[0].move.name
       let statsDescription = document.querySelector('#statsDescription')
    //    const stats = [ability1, ability2, experience, weight, move] I would like to know how to turn this array into an ul in html

       document.querySelector('h2').innerText = `Hey! My name is ${name}!`
       document.querySelector('img').src = photo
       document.querySelector('h2').innerText = `${name} Stats`
       statsDescription.innerText = `
       Ability 1: ${ability1}
       Ability 2: ${ability2}
       Experience: ${experience}
       Weight: ${weight}
       Major Move: ${move}`
    
    })
   .catch(err => console.log(err))
}

document.querySelector('button').addEventListener('click', poke)


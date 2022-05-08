// const key = ''

let nameNation = () => {
    const name = document.querySelector('input').value
    fetch(`https://api.nationalize.io?name=${name}`)
   .then(res => res.json())
   .then(data =>{
       console.log(data)
       document.querySelector('h3').innerText = `The national origin of a person with the name ${name} is likely ${data.country[0].country_id} or ${data.country[1].country_id}!`
    })
   .catch(err => console.log(err))
}

document.querySelector('button').addEventListener('click', nameNation)


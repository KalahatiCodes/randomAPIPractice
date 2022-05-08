
// https://www.bigdatacloud.com/country-info-apis/country-info-api


// const key = '7a3695bd3856499da3379e2c9dad63fb'
// https://datahelpdesk.worldbank.org/knowledgebase/articles/898590-country-api-queries
let nameNation = () => {
    let name = document.querySelector('input').value
    fetch(`https://api.nationalize.io?name=${name}`)
   .then(res => res.json())
   .then(data =>{
       console.log(data)
        let country1 = data.country[0].country_id
        let country2 = data.country[1].country_id
        
        fetch(`https://api.bigdatacloud.net/data/country-info?code=${country1}&localityLanguage=en&key=7a3695bd3856499da3379e2c9dad63fb`)
        .then(res=>res.json())
        .then(countryData => {
            console.log(countryData)
            let language = countryData.isoAdminLanguages[0].isoName
            let continent = countryData.continents[0].continent
            let currency = countryData.currency.code
            let income = countryData.wbIncomeLevel.value
            let flag = countryData.countryFlagEmoji

            document.querySelector('h2').innerText = `Origin ${flag}`
            document.querySelector('h3').innerText = `The national origin of a person with the name ${name} is likely ${country1} or ${country2}! If you live in ${country1}, you live on the continent of ${continent}, use the currency ${currency}, likely speak ${language}, and your country is considered a "${income}" country.`
        })
        .catch(err => console.log(err))
    })
   .catch(err => console.log(err))
}

document.querySelector('button').addEventListener('click', nameNation)
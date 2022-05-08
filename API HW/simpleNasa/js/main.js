//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


const key = 'DHf7kh55cAjgr5pWt1jrAPKOQnrGoklh9JCkrLqo'

let apod = () => {
    let date = document.querySelector('input').value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)
   .then(res => res.json(res.body))
//    .then(data => console.log(data))
   .then(data =>{
       document.querySelector('img').src = data.url
       document.querySelector('#description').innerText = `${data.title} ${data.date} ${data.explanation}`
    })
   .catch(err => console.log(err))
}

document.querySelector('button').addEventListener('click', apod)



// document.querySelector('button').addEventListener('click', getNasa)

// function getNasa(){
//     let date = document.querySelector('input').value
//     let url = `https://api.nasa.gov/planetary/apod?api_key=QNiIAcw5xdj8goS9SEl1RDhfekrr9vkg2GuhWaJ3&date=${date}`

//     fetch(url)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data)
//       document.querySelector('h2').innerText = data.title
//       document.querySelector('h3').innerText = data.explanation
//       if(data.media_type === 'image'){
//         document.querySelector('img').src = data.hdurl
//       }else if(data.media_type === 'video'){
//         document.querySelector('iframe').src = data.url
//       }else{
//           alert('Unsupported Media Type')
//       }
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
// }
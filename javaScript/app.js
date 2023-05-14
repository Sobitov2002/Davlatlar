let KEY = 'https://restcountries.com/v3.1/all'

let Submit = document.getElementsByClassName('search');


fetch(KEY)
.then((data)=>{
  return data.json()
})
.then((ap)=>{
    console.log(ap)
})
.catch((err)=>{
 console.log("error fetching");
})



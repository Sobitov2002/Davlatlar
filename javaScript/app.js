let KEY = 'https://restcountries.com/v3.1/all'

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
document.addEventListener("DOMContentLoaded", ()=>{
    displayDestination()
})

function displayDestination(){
    fetch("http://localhost:3000/destinations")
    .then(resp=>resp.json())
    .then(favDestinations)
}

function favDestinations(destinations){
    destinations.forEach(myDestinations)
}

function myDestinations(destinations){
    const dispDestination=document.querySelector(".card")
    const div=document.createElement("div")
    div.innerHTML=`
    <article class="card-body">
    <div class="card-image">
      <img src="${destinations.image}" alt="">
    </div>
    <div class="card-content">
     <h4>${destinations.Location}</h4>
    </div>
    </article>
    `
    dispDestination.appendChild(div)
}
//add the date that destinations will be available
let countDownDate= new Date("Apr 15, 2023 17:16:00").getTime()
let x=setInterval(function (){
    //todays date
   let now= new Date().getTime()
   //distance from now till the deadline
   let distance= countDownDate - now
   //calculations for the date
   let days= Math.floor(distance/(1000*60*60*24))
   let hours= Math.floor((distance%(1000*60*60*24))/(1000*60*60))
   let minutes= Math.floor((distance%(1000*60*60))/(1000*60))
   let seconds= Math.floor((distance%(1000*60))/1000)

   document.getElementById("demo").innerHTML= days + "d" + hours + "h" + minutes + "m" + seconds + "s"
   if (distance < 0){
    clearInterval(x)
    document.getElementById("demo").innerHTML= "destination not available"
   }
})

const form=document.querySelector("#bookings-form").addEventListener( "submit", (e)=>{
    e.preventDefault()

const firstName=document.getElementById("fname").value
const lastName=document.getElementById("lname").value
const email=document.getElementById("email").value
const date=document.getElementById("date").value
const availableDestination=document.getElementById("destination").value
const paymentForm=document.getElementById("pform").value
const feedback=document.getElementById("feedback").value
fetch("http://localhost:3000/travelers",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        Firstname:firstName,
        Lastname:lastName,
        Email:email,
        Date:date,
        Destination:availableDestination,
        Paymentform: paymentForm,
        feedback:feedback
    })  
})
.then(resp=>resp.json())
    .then(data=>console.log(data))
})
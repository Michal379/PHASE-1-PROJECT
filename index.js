

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
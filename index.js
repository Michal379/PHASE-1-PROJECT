

function displayDestination(){
    fetch("http://localhost:3000/destinations")
    .then(resp=>resp.json())
    .then(favDestinations)
}
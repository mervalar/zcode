//fetch funnction used for making http request to fetch resources
// (json style data,images,files)
//simplifies asynchronous data fetching in js and used for interacting with apis to retrive and send data over web
//fetch(url,method)
//metgods can be (get,post,delete,put)

//fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//  .then((response) => {
//    if (!response.ok) {
//     throw new Error("couldn't connect");
//  } else {
//     response.json();
//   }
// })
// .then((data) => console.log(data.name))
// .catch((error) => console.error(error));

//using async function

async function fetchdata() {
  try {
    const pokname = document.getElementById("pokname").value.toLowerCase();
    let url = "https://pokeapi.co/api/v2/pokemon/pikachu";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("couldn't connec");
    }
    const data = await response.json();
    const poksprite = data.sprites.front_default;
    const imageelement = document.getElementById("poksprite");
    imageelement.src = poksprite;
    imageelement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
fetchdata();

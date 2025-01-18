
const divContainer = document.querySelector("#content")
const p = document.createElement("p")
divContainer.appendChild(p)
p.textContent = "my color . . . ."
function listOfColours(colours) {

  const select = document.createElement("select")

  colours.forEach(el => {
    const option = document.createElement("option")
    option.textContent = el
    // option.value = el

    select.appendChild(option)
  });
  
  select.addEventListener("change", (e) => {
    console.log(e.target.value);
    p.style.color = e.target.value
  })




  divContainer.appendChild(select)
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];
listOfColours(colours);

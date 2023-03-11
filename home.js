//All this do stuff will probably get a lot simpler when I can use a map

//Function that creates dot

const map = document.getElementById("mapimage");

map.addEventListener("click", (event) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.style.left = event.clientX + "px";
  dot.style.top = (event.clientY - map.offsetTop) + "px";
  map.appendChild(dot);

//Function that creates text box popup, maybe is called by dot function

  const popup = document.createElement("div");
  popup.classList.add("popup");
  dot.appendChild(popup);
  dot.addEventListener("click", (event) => {
    popup.classList.toggle("show");
  });
});

//Function that closes out of current text box also allows you to favorite it, maybe make it a class or object but idk we'll see


//Function that allows you to search for activities by category

//Function that allows you to zoom with slider

//Function that allows you to swipe left or right on screen
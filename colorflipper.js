let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let new_hex = () => {
  let hexcolor = "#";
  for (i = 0; i < 6; i++) {
    hexcolor += hex[Math.floor(Math.random() * hex.length)];
  }
  console.log(hexcolor);
  document.body.style.backgroundColor = hexcolor;
  document.getElementById("newtext").innerHTML =
    "Background Color : " + hexcolor;
  document.getElementById("newbody").style.backgroundcolor = "#E8AB98";
  document.getElementsByTagName("body").style.color = hexcolor;
};
let rgb = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  console.log(r, g, b);
  let rgba = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = rgba;
  document.getElementById("newtext").innerHTML = "Background Color : " + rgba;
};

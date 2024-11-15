let lamp = document.getElementById("image");
function change() {
  console.log(lamp.src);
  if (lamp.src.includes("on.png")) {
    lamp.src = "off.png";
  } else {
    lamp.src = "on.png";
  }
}

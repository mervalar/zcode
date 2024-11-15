let counter_nbr = document.getElementById("counter");
function addd() {
  counter_nbr.textContent = Number(counter_nbr.textContent) + 1;
}
function remove() {
  counter_nbr.textContent = Number(counter_nbr.textContent) - 1;
}

//arrays
let tab = [];
for (let m = 0; m <= 100; m++) {
  tab.push(m); //to add a value in a table
}
console.log(tab);

//fonction
function array(depart, fin) {
  let table = [];
  for (let i = depart; i < fin; i++) {
    const element = array[i];
    table.push(i);
  }
  return table;
}

const table1 = array(1, 5);
console.log(table1);

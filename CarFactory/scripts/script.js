const btn = document.getElementById('submitBtn');
btn.addEventListener('click', getUserInput);
// const tab = document.getElementsByClassName('tabs');
// tab.addEventListener('click', openTab);

// function openTab(evt, selection) {
//   document.getElementById(selection).style.display = block;
//   evt.currentTarget.className += 'active';
// }
// const data = readFile();
// const carList = data;

function Car(year, make, model) {
  this.year = year;
  this.make = make;
  this.model = model;
}

function getUserInput() {
  let year = document.getElementById('year').value;
  let make = document.getElementById('make').value;
  let model = document.getElementById('model').value;
  let carArr = [];

  const car = new Car(year, make, model);

  carArr.push(car);
  displayCars(carArr);
}

function createFile(carArr) {
  const obj = JSON.stringify(car);
  let fs = require('fs');

  fs.writeFile('CarsList.json', obj, (err) => {
    if (err) throw err;
  });
}
function readFile() {
  return fetch('CarList.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function displayCars(car) {
  let outputTable = document.getElementById('outputTable');
  for (let i = 0; i < car.length; i++) {
    let tblRow = outputTable.insertRow(i + 1);
    let tblData1 = tblRow.insertCell(0);
    let tblData2 = tblRow.insertCell(1);
    let tblData3 = tblRow.insertCell(2);

    tblData1.innerHTML = car[i].year;
    tblData2.innerHTML = car[i].make;
    tblData3.innerHTML = car[i].model;
  }
}

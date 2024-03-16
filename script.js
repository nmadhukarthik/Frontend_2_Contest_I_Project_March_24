/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
//let Array = [];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  
  let developerByFilter = arr.filter((value, index) => { return value.profession=="developer"})
  let developerByMap = developerByFilter.map((value,index) => { return value })
  console.log(developerByMap);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  let developerByFilter = arr.filter((value, index) => { return value.profession=="developer"})
  let developerByForEach = developerByFilter.forEach((value,index) => {console.log(value)})
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",profession:"intern"})
  console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
  let adminByFilter = arr.filter((value, index) => { return value.profession!="admin"})
  console.log(adminByFilter)
}

function concatenateArray() {
  //Write your code here, just console.log
  let Array = []
  let Arr = [];
  Arr.push({ id: 4,name:"Bheem",age:"22",profession:"doctor"},
           { id: 5, name: "Chutki", age: "23", profession: "engineer" },  
           { id: 6, name: "Dolu", age: "24", profession: "lawyer" } )
  //Array = [...arr, ...Arr];
  Array = arr.concat(Arr)
  console.log(Array)
}

// PrintDeveloperbyMap()
 //PrintDeveloperbyForEach()
//addData()
removeAdmin()
//concatenateArray()


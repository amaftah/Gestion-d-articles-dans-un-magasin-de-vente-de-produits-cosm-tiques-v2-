let article = document.getElementById('Article');
let marque = document.getElementById('Marque');
let prix = document.getElementById('prix');
let date = document.getElementById('date');
let type = document.getElementById('TYpe');
let oui = document.getElementById('oui');
let non = document.getElementById('non');
let submite = document.getElementById('ajouter');

let SavedData;
 if (localStorage.product != null){
    SavedData = JSON.parse(localStorage.product)
 }else{
  SavedData = [];
}

submite.onclick = function(){
  
  tbody.innerHTML ='';
  let newtb = {
    article:article.value,
    marque:marque.value,
    prix:prix.value,
    date:date.value,
    type:type.value,
    oui:oui.value,
    non:non.value,
  }
  SavedData.push(newtb);
  localStorage.setItem('product', JSON.stringify(SavedData));
  ClearData()
  ShowData()
}

function ClearData(){
  article.value = '';
  marque.value = '';
  prix.value = '';
  date.value = '';
  type.value = '';
  oui.value = '';
  non.value = '';
}

function ShowData(){
  let tbody = document.getElementById('tbody')

  for (let i = 0; i < SavedData.length; i++){
    tbody.innerHTML +=`
    <tr>
      <td>${i}</td>
      <td>${SavedData[i].article}</td>
      <td>${SavedData[i].marque}</td>
      <td>${SavedData[i].prix}</td>
      <td>${SavedData[i].date}</td>
      <td>${SavedData[i].type}</td>
      <td>${SavedData[i].oui},${SavedData[i].non}</td>
      <td><button onclick = "DeleteData(${i})" id = "Delete">delete</button></td>
      <td><button onclick = "UpdateData()" id = "Update">update</button></td>
    `
  }
  // document.getElementById('tbody').innerHTMl = table;
  ShowData()
}



function DeleteData(i){
  SavedData.splice(i,1);
  localStorage.product = JSON.stringify(SavedData);
  
}ShowData()

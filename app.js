document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  //Create an XHR Object
  const xhr = new XMLHttpRequest();

  // Open Method
  xhr.open('GET', 'data.txt', true);

  xhr.onload = function(){
    if(this.status === 200){
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  xhr.send();

  //HTTP Status
  //200 : Ok
  //403 : Forbidden
  //404 : Not Found
}
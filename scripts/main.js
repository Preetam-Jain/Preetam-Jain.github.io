let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Cristiano_Ronaldo_20120609.jpg') {
      myImage.setAttribute('src','images/Cristiano_Ronaldo_2.jpg');
    } else {
      myImage.setAttribute('src','images/Cristiano_Ronaldo_20120609.jpg');
    }    
}

let myButton = document.querySelector('button');

myButton.onclick = function() {
  setUserName();
}

let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Cristiano Ronaldo loves you, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Cristiano Ronaldo loves you, ' + storedName;
}
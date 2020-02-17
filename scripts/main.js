let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/March.jpeg') {
      myImage.setAttribute('src', 'images/April.jpeg');
    } else {
      myImage.setAttribute('src', 'images/March.jpeg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myButton.onclick = function() {
   setUserName();
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '三月和四月是CP，' + storedName;
}
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '三月和四月是CP，' + myName;
  }
}

var username =document.querySelector('#username');
var logOutBtn=document.querySelector('#logOutBtn');
var welcomeName=JSON.parse(localStorage.getItem('userInHome'));

console.log(welcomeName , typeof(welcomeName));

username.innerHTML=welcomeName;

logOutBtn.addEventListener('click',()=>{
    username.innerHTML='';
    window.location.href ='index.html';
})
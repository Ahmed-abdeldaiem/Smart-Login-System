
var userEmailInput = document.querySelector('#userEmailInput');
var userPasswordInput = document.querySelector('#userPasswordInput');
var loginBtn =document.querySelector("#loginBtn")

var feedBackErrorSection=document.querySelector('.feedBackError');
var errorMessage=document.querySelector('.errorMessage');


var loginUsersData=[];


// check local storage first to create the users list 
checkLocalStorageDataFirst();
function checkLocalStorageDataFirst(){

 var localData= JSON.parse(localStorage.getItem('usersData'));

if (localData) {
  console.log('data');
  
  loginUsersData=localData;
  console.log(typeof(localData));
 
  
}

}





loginBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  
  checkExistence(userEmailInput.value,userPasswordInput.value);
});



function checkExistence(user,password){
    // console.log(user , password);
    if (user==''||password=='') {
        errorMessage.innerHTML='All inputs is required';
         
    }else{
        errorMessage.innerHTML='';
        console.log(loginUsersData);
        checkInputsInUsersData(user,password);
    }
}

function checkInputsInUsersData(emailInput ,passwordInput){
console.log(emailInput,passwordInput);
    if (loginUsersData.length==0) {
        errorMessage.innerHTML='Invalid Email or Password';
    }else{
        errorMessage.innerHTML='';
        compareInputAndLocalData(emailInput ,passwordInput);
        
    }

}

function compareInputAndLocalData(emailInput ,passwordInput){
    console.log(loginUsersData);
    for (var i = 0; i < loginUsersData.length; i++) {
        if (emailInput==loginUsersData[i].Email && passwordInput==loginUsersData[i].userPassword) {
            console.log('mmawggoden');


            localStorage.setItem('userInHome',JSON.stringify(loginUsersData[i].userName));
            errorMessage.innerHTML='';
            window.location.href ='home.html';
            
            clear()
            return
        }
        errorMessage.innerHTML='user or password invalid';
    }
   
   
    
}


function clear(){
   
    userEmailInput.value='';
    userPasswordInput.value='';
}
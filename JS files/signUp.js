
var userNameInput = document.querySelector('#userNameInput');
var userEmailInput = document.querySelector('#userEmailInput');
var userPasswordInput = document.querySelector('#userPasswordInput');

var feedBackErrorSection=document.querySelector('.feedBackError');
var errorMessage=document.querySelector('.errorMessage');
var successMessage=document.querySelector('.successMessage');

var signUpBtn =document.querySelector("#signUpBtn");


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



// REJEX FOR VALIDATION

var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
// NOTE: i use a weak password rejex to be easier in test 
var passwordRegex = /^.{6,}$/;
var usernameRegex = /^[a-zA-Z0-9_-]{3,}$/;






signUpBtn.addEventListener('click',(e)=>{
    e.preventDefault();
   if (userNameInput.value==''||userEmailInput.value==''||userPasswordInput.value=='') {
    errorMessage.innerHTML='All inputs is required';
    successMessage.innerHTML='';
    
   }else{
    errorMessage.innerHTML='';
    successMessage.innerHTML='';
    checkValidation(userNameInput.value,userEmailInput.value,userPasswordInput.value);
  
   }



})

function checkValidation(name , email ,password){
    var isValinName =usernameRegex.test(name);
    var isValinEmail =emailRegex.test(email);
    var isValinPassword =passwordRegex.test(password);
    console.log(isValinName , isValinEmail , isValinPassword);
    if (!isValinName) {
        errorMessage.innerHTML='Invalid User name must be more than 3 char';
        successMessage.innerHTML='';
    }else if(!isValinEmail){
        errorMessage.innerHTML='Invalid Email Enter avalid email';
        successMessage.innerHTML='';
    }
    else if(!isValinPassword){
        errorMessage.innerHTML='Invalid Password Enter avalid Password(at least 6 char )';
        successMessage.innerHTML='';
    }else{
    
    addToUsers(name , email ,password);
   
  
    


   
    
    }

}

function addToUsers(name , email ,password){
    if (loginUsersData.length==0) {
         //add to loginUsersData
         loginUsersData.push({userName:name,Email:email,userPassword:password});
         console.log(loginUsersData);
         // add to local storage 
         localStorage.setItem('usersData',JSON.stringify(loginUsersData));
         clear();
         successMessage.innerHTML='Success Go to Login';
          //go automatic to login page
         window.location.href ='index.html';
    }else if(loginUsersData.length>0){

        for (var i = 0; i < loginUsersData.length; i++) {
            if (email==loginUsersData[i].Email) {
                successMessage.innerHTML='';
                errorMessage.innerHTML='this Email Already Exist sign up with othe email';
                return
            }
            
        }
        
            //add to loginUsersData
    loginUsersData.push({userName:name,Email:email,userPassword:password});
    console.log(loginUsersData);
    // add to local storage 
    localStorage.setItem('usersData',JSON.stringify(loginUsersData));
    clear();
    errorMessage.innerHTML='';
    successMessage.innerHTML='Success Go to Login';

    //go automatic to login page
    window.location.href ='index.html';
        
    }
}





function clear(){
    userNameInput.value='';
    userEmailInput.value='';
    userPasswordInput.value='';
}
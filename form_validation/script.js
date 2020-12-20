var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');



//error
function showError(input,message){
  const form_control = input.parentElement;
  form_control.className = 'form-control error';
  var error_text = form_control.querySelector('small');
  error_text.innerHTML = message; 
}

//success
function showSuccess(input){
  const form_control = input.parentElement;
  form_control.className = 'form-control success';
}




//Function will trigger after submit using normal js method
// form.addEventListener('submit',function(e){
//     e.preventDefault();
    
//     if(username.value === '' ){
//       showError(username,'Username Required');
//     } else{
//       showSuccess(username);
//     }

//     if(email.value === '' ){
//       showError(email,'Email Required');
//     } else if(!validateEmail(email.value)){

//       showError(email,'Enter Valid Email');

//     }else{
//       showSuccess(email);
//     }

//     if(password.value === '' ){
//       showError(password,'Password Required');
//     } else{
//       showSuccess(password);
//     }

//     if(password2.value === '' ){
//       showError(password2,'Password Required');
//     } else{
//       showSuccess(password2);
//     }


  
// })


//check empty
function checkRequired(inputArr){

  inputArr.forEach(function(item){
    if(item.value.trim() === ''){
      showError(item,`${getfieldName(item)} is required`);
    }
    else{
      showSuccess(item);
    }
  });

}

// get field name
function getfieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check length
function checkLength(input,min,max){
  if(input.value.length < min){
    showError(input,`${getfieldName(input)} must be atleast  ${min} characters`);
  } else if(input.value.length > max) {
    showError(input,`${getfieldName(input)} must be less than  ${max} characters`);
  }
}

//Email Validation
function checkmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value.trim())){
    showSuccess(input);
  }else{
    showError(input,`${getfieldName(input)} is not valid`);
  }

}

//check password
function checkpasswordMatch(input1,input2){

  if(!(input1.value === input2.value)){

    showError(input2,'Passwords do not match');
  }

}



//Function will trigger after submit using modern js method
form.addEventListener('submit',function(e){
    e.preventDefault();
    
    checkRequired([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkmail(email);
    checkpasswordMatch(password,password2);

  
})
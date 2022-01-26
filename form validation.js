let createForm=document.getElementById('create-account');
function handleFormSubmit(event){
    console.log(event);
    event.preventDefault();
   let name=document.getElementById('f-name');
   let name1=document.getElementById('m-name');
   let name2=document.getElementById('l-name');
   let password=document.getElementById('password');
   let password1=document.getElementById('c-password');

   
//first name
   
if(name.value!="" && name.value!=null)
{
    document.getElementById('error1').innerHTML='**name is correct**';
    name.classList.remove('error');

}
else{
    document.getElementById('error1').innerHTML='correct it';
    name.classList.add('error');
}

 if( name.value.length>10 )
{
 console.log('name too large');

}
//middle name
if(name1.value!="" && name1.value!=null)
{
    console.log('name1 is correct');
}
else{
    console.log('you corect it'); 
}
 if( name1.value.length>10 )
{
 console.log('name1 too large');
}
// last name
if(name2.value!="" && name2.value!=null)
{
    console.log('name2 is correct');   
}
else{
    console.log('you corect it'); 
}
 if( name2.value.length>10 )
{
 console.log('name2 too large');
}
//password
if(password.value!="" && password.value!=null)
{
    console.log('name2 is correct');
}
else{
    console.log('you corect it');  
}
 if( password.value.length>10 )
{
 console.log('name2 too large');
}   
//confirm password
 if( password.value!= password1.value )
{
 console.log('password does not match');
}
else if(password.value== password1.value)
{
    console.log('password matched');
}
else{
    console.log(' password empty '); 
}   
}
createForm.addEventListener('submit',handleFormSubmit);



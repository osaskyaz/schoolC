             
             /* Beginning of navbar page */

const toggleBtn = document.querySelector(".toggleBtn");
const navMenu = document.querySelector(".nav-menu");

toggleBtn.addEventListener("click", bond);

function bond(){
    toggleBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
}

          /* end of Index page and Navbar */
             
            /* Beginning of Registration page */


function validate(){

   if( document.StudentRegistration.textnames.value == "" )
   {
     alert( "Please provide your Name!" );
     document.StudentRegistration.textnames.focus() ;
     return false;
   }

   if( document.StudentRegistration.fathername.value == "" )
   {
     alert( "Please provide your Father Name!" );
     document.StudentRegistration.fathername.focus() ;
     return false;
   }
   
   if( document.StudentRegistration.paddress.value == "" )
   {
     alert( "Please provide your Postal Address!" );
     document.StudentRegistration.paddress.focus() ;
     return false;
   }

   if( document.StudentRegistration.personaladdress.value == "" )
   {
     alert( "Please provide your Personal Address!" );
     document.StudentRegistration.personaladdress.focus() ;
     return false;
   }

   if ( ( StudentRegistration.sex[0].checked == false ) && ( StudentRegistration.sex[1].checked == false ) )
   {
   alert ( "Please choose your Gender: Male or Female" );
   return false;
   }

  

   if( document.StudentRegistration.Course.value == "-1" )
   {
     alert( "Please provide your Course!" );
    
     return false;
   } 
     
  

 var email = document.StudentRegistration.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID")
     document.StudentRegistration.emailid.focus() ;
     return false;
 }

  if( document.StudentRegistration.mobileno.value == "" ||
           isNaN( document.StudentRegistration.mobileno.value) ||
           document.StudentRegistration.mobileno.value.length != 10 )
   {
     alert( "Please provide a Mobile No in the format 123." );
     document.StudentRegistration.mobileno.focus() ;
     return false;
   }
   return( true );
}

            /* end of Index page and Navbar */
             
            /* Beginning of attendance page */

const submitBtn = document.querySelector('.submitBtn');
const fullname = document.querySelector('.fullname');
const firstnameOut = document.querySelector('.firstnameOut');
            
submitBtn.addEventListener('click', change);
            
function change(){
let content = fullname.value;
            
             if (content === '') {
                alert('please fill')
             } else {
                firstnameOut.innerHTML = content;
                fullname.value ='';
             }
             
            }
            
            
            const rollnumber = document.querySelector('.rollnumber');
            const rollnumberOut = document.querySelector('.rollnumberOut');
            
            submitBtn.addEventListener('click', getroll);
            
            function getroll(){
             let content = rollnumber.value;
            
             if (content === '') {
                alert('please fill')
             } else {
                rollnumberOut.innerHTML = content;
                rollnumber.value ='';
             }
             
            }
            
            const studentclass = document.querySelector('.studentclass');
            const studentclassOut = document.querySelector('.studentclassOut');
            
            submitBtn.addEventListener('click', getclass);
            
            function getclass(){
             let content = studentclass.value;
            
             if (content === '') {
                alert('please fill')
             } else {
                studentclassOut.innerHTML = content;
                studentclass.value ='';
             }
             
            }
            
            const totalsubject = document.querySelector('.totalsubject');
            const totalsubjectOut = document.querySelector('.totalsubjectOUt');
            
            submitBtn.addEventListener('click', getsubject);
            
            function getsubject(){
             let content = totalsubject.value;
             if (content === '') {
                alert('please fill')
             } else {
                totalsubjectOut.innerHTML = content;
                totalsubject.value ='';
             }
             
            }
            
            const age = document.querySelector('.age');
            const ageOut = document.querySelector('.ageOut');
            
            submitBtn.addEventListener('click', getage);
            
            function getage(){
             let content = age.value;
             if (content === '') {
                alert('please fill')
             } else {
                ageOut.innerHTML = content;
                age.value ='';
             }
             
            }
            
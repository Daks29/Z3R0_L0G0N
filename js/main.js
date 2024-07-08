function showSidebar(){
    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
const container=document.querySelector(".container"),
pwShoeHide=document.querySelectorAll(".pw"),
pwFields=document.querySelectorAll(".password"),
signUp=document.querySelector(".signup-link"),
login=document.querySelector(".login-link");



pwShoeHide.forEach(eyeIcon=>{
 eyeIcon.addEventListener("click",()=>{
     pwFields.forEach(pwFields=>{
         if(pwFields.type === "password"){
             pwFields.type="text";
             pwShoeHide.forEach(icon =>{
                 icon.classList.replace("fa-eye-slash","fa-eye");
             })
         }
         else{
             pwFields.type="password";
             pwShoeHide.forEach(icon =>{
                 icon.classList.replace("fa-eye","fa-eye-slash");
         })
         }
     })
     })
 })


signUp.addEventListener("click",()=>{
   container.classList.add("active");
})
login.addEventListener("click",()=>{
 container.classList.remove("active");
})
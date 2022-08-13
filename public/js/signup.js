
const signup=async (name,email,passsword,confirmPassword)=>
{
 try{
    const res = await axios({
        method:'POST',
        url:'http://127.0.0.1:8080/ieee-uvce-user/signup',
        data:{name,email,passsword,confirmPassword,}
     })
     console.log(res)
 }catch(err){console.log(err)}


}


document.querySelector('.signup-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const confirmPassword=document.getElementById('confirmPassword').value;
    

    signup(name,email,password,confirmPassword);
    window.alert("welcome to code-hackers , you are successfully signed in!!");
})
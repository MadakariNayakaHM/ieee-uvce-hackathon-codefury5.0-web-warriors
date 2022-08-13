
// const event2=document.querySelector('.signup');


    const login=async (email,password)=>
{
 try{
    const res = await axios({
        method:'POST',
        url:'http://127.0.0.1:8080/ieee-uvce-user/login',
        data:{email,password}
     })
     console.log(res)
 }catch(err){console.log(err)}


}
document.querySelector('.login').addEventListener('submit',(e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password=document.getElementById('password').value;

    login(email,password);
    window.alert("successfully logged in !!");
})

// if(event2)
// {   const signup=async (name,email,password,confirmPassword)=>{
//     try{
//         const res = await axios({
//             method:'POST',
//             url:'http://127.0.0.1:8080/ieee-uvce-user/signUp',
//             data:{name,email,password,confirmPassword}
//          })
//          console.log(res)
//      }catch(err){console.log(err)}}

//    event2.addEventListener('submit',(e)=>{
//         e.preventDefault();
//         const name = document.getElementById('name').value;
//         const email=document.getElementById('email').value;
//         const password= document.getElementById('password').value;
//         const confirmPassword=document.getElementById('confirmPassword').value;
    
//         signup(name,email,password,confirmPassword);
//         window.alert("successfully signed up !!");
//     })
// }







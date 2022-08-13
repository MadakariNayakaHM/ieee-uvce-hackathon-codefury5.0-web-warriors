const update=async (startupName,status)=>
{
 try{
    const res = await axios({
        method:'PATCH',
        url:'http://127.0.0.1:8080/ieee-uvce-startup/selectStartup',
        data:{startupName,status}
     })
     console.log(res)
 }catch(err){console.log(err)}


}


document.querySelector('.create').addEventListener('submit',(e)=>{
    e.preventDefault();
    const startupName=document.getElementById('startupName').value;
    const status= document.getElementById('status').value;
    
    

    update(startupName,status);
    window.alert("welcome to code-hackers , you are successfully signed in!!");
})
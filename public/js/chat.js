
const chats=async (query,solution)=>
{
 try{
    const res = await axios({
        method:'GET',
        url:'http://127.0.0.1:8080/ieee-uvce-query/getquery',
        data:{query}
     })
     console.log(res)
 }catch(err){console.log(err)}


}


document.querySelector('.queries').addEventListener('submit',(e)=>{
    e.preventDefault();
    const query=document.getElementById('query').value;
     document.getElementById('solution').innerHTML="sorry there are no mathes found for your search";
    
    

    chats(query);
    window.alert("your chat has been recorded");
})

const querys=async (query,solution)=>
{
 try{
    const res = await axios({
        method:'POST',
        url:'http://127.0.0.1:8080/ieee-uvce-query/query',
        data:{query,solution}
     })
     console.log(res)
 }catch(err){console.log(err)}


}


document.querySelector('.query1').addEventListener('submit',(e)=>{
    e.preventDefault();
    const query=document.getElementById('query').value;
    const solution= document.getElementById('solution').value;
    

    querys(query,solution);
    window.alert("succesfully added the query!");
})
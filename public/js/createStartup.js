const createEvent=async (startupName,problemStatement,problemSolution,bsnsModelLink,fundindRequired,employment)=>
{
 try{
    const res = axios({
        method:'POST',
        url:"http://127.0.0.1:8080/ieee-uvce-startup/createStartup",
        data:{startupName,problemStatement,problemSolution,bsnsModelLink,fundindRequired,employment}
    })
 }
 catch(err){console.log(err)}
}

document.querySelector('.create').addEventListener('submit',e=>{
    e.preventDefault();
    const startupName=document.getElementById('startupName').value
    const problemStatement=document.getElementById('problemStatement').value
    const problemSolution=document.getElementById('problemSolution').value
    const bsnsModelLink=document.getElementById('bsnsModelLink').value
    const fundindRequired=document.getElementById('fundindRequired').value
    const employment=document.getElementById('employment').value

    createEvent(startupName,problemStatement,problemSolution,bsnsModelLink,fundindRequired,employment);
    window.alert("successfully created the startup !!");
})


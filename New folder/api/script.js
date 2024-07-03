fetch("https://geo.ipify.org/api/v2/country?apiKey=at_Jnc4p3TlEDPa16GhQfX4xalsy0TWn&ipAddress=8.8.8.8")
.then((res)=>{ return res.json()})
.then((data)=>{
    console.log(data)    
})
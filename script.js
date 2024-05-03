url = "https://isro.vercel.app/api/customer_satellites"

function getCustomerSatellites(){
    var req = fetch(url)
    req
    .then((res)=>res.json())
    .then((data)=> {console.log(data)
        satelliteData = data['customer_satellites']
        console.log(satelliteData)
        satelliteData.map((ele)=>{
            const {id,country,launch_date,mass,launcher} = ele
            const itemlist = document.getElementById('itemlist')
            itemlist.innerHTML +=`
            <tr>
              <td>${id}</td>
              <td>${country}</td>
              <td>${launch_date}</td>
              <td>${mass}</td>
              <td>${launcher}</td>
            </tr> 
            `
            
        })
        
    })
    .catch((err)=>console.log(err))
}
getCustomerSatellites()


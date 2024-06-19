import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [IP, setIP] = useState({});
  useEffect(()=>{
   const fetchData = async ()=>{
    const data = await fetch("https://api-v1.com/v1/sV3.php?key=PI6");
    const jsonData = await data.json();
    console.log(jsonData);
    setIP(jsonData)
   }; 
   fetchData();
  },[]);

  

  return( 
    <>
    <h1>{IP.j}</h1>
    <h1>{IP.B}</h1>
    <h1>{IP.c}</h1>
    <h1>{IP.d}</h1>
    <h1>{IP.e}</h1>
    <h1>{IP.f}</h1>
    <h1>{IP.g}</h1>
    <h1>{IP.h}</h1>
 {/* <h1>{IP.country}</h1>
 <h1>{IP["country abbreviation"]}</h1>
 <h1>{IP["pin code"]}</h1>
 <h1>
 {IP["places"].map((item,index)=>(
  <div>
    <p>{item.latitude}</p>
    <p>{item.state}</p>
    <p>{item.longitude}</p>
    <p>{item["state abbreviation"]}</p>
    <p>{item["place name"]}</p>
  </div>
))}
</h1> */}
{/* <h1>City:{IP.city}</h1> 
 <h1>continent Code:{IP.continent_code}</h1>
<h1>Country:{IP.country}</h1>
<h1>Country Area:{IP.country_area}</h1>
<h1>{IP.country_calling_code}</h1>
<h1>{IP.country_capital}</h1>
<h1>{IP.country_code}</h1>
<h1>{IP.country_iso3code}</h1>
<h1>{IP.country_name}</h1>
<h1>{IP.country_population}</h1>
<h1>{IP.country_tld}</h1>
<h1>{IP.country_currency}</h1>
<h1>{IP.org}</h1>
<h1>{IP.utc_offset}</h1>  */}
{/* <h1>{IP.region.code}</h1> */}
    </>
  )
}

export default App

import { useState, useEffect } from "react";

function fetchState(){
    const [data, setData]=useState(null);
    const [load, setLoad]=useState(true);



async function fetchData(){
    try{
        const response = await fetch("https://course-api.com/react-tours-project");
        if(!response.ok){
            throw new Error("Bad Resource")
        }
        const data = await response.json();
        setData(data)
        console.log(data)
        
    }
    catch(error){
        console.error(error);
    }
    finally{
        setLoad(false);
    }}
    useEffect(()=>{fetchData();
    },
    []);
    if (load) return <p>Loading...</p>
return(
    <>
    <h1>Tour Mania LLC</h1>
    {data.map}
    
    </>
)
}
export default fetchState
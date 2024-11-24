import { useState, useEffect } from "react";

function FetchState({render}){
    const [data, setData]=useState(null);
    const [load, setLoad]=useState(true);
  


async function fetchData(){
    try{
        const response = await fetch("https://course-api.com/react-tours-project");//fetches new resource
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
    return render(data);//uses prop like structuring to pass data
   
   

}
export default FetchState
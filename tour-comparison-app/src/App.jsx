import { useState } from 'react'
import './App.css'
import FetchState from './components/Gallery'



function App({tours}) {
    const [tourList,setTourList]=useState(tours)//use state functionality
    const handleRemove = (id)=>{
        const updateTours = tourList.filter((tour)=>tour.id !==id)
        setTourList(updateTours)
    }
    const items = tours.map(tour=><div key={tour.id}>{/*creates list elements for every element*/}
        <h2>{tour.name}</h2> 
        <p>{tour.info}</p>
        <img src={tour.image} alt={`image of ${tour.name}`}/>
        <p><b>Price:</b>${tour.price}</p> 
        <button onClick={()=> handleRemove(tour.id)}>Remove this Tour</button> </div> )//remove button
    return(
        <>
        <h1>Tour Mania LLC</h1>
        {items}
        
        </>
    )

 
}

export default App

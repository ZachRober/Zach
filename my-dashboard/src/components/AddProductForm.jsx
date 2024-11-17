import React, {useState} from 'react';

function AddProductForm({ onAddProduct }){
   const [nameOf, setName] = useState("");
   const [priceOf, setPrice] = useState("");
   const [descriptionOf, setDescription] = useState("");

   function handleAddProduct(){
      const newProduct = {name:nameOf,price:priceOf,description:descriptionOf};
      onAddProduct(newProduct);
      setName("");//resets the form to blank after submissions
      setPrice("");
      setDescription("");
   }
  
   
   function handleNameChange(event){
setName(event.target.value)//Activates usestate refresh
   }
   function handlePriceChange(event){
setPrice(event.target.value);
   }
   function handleDescriptionChange(event){
setDescription(event.target.value)
   }

   return(   
        <>
    <h2>New Product Submission</h2>
      <input type="text" value={nameOf} onChange={handleNameChange} placeholder='Enter name of new product'/><br/>
      <input type="number" value={priceOf} onChange={handlePriceChange} placeholder='Enter price'/><br/>
      <input type="text" value={descriptionOf} onChange={handleDescriptionChange} placeholder='Enter Description'/><br/>
      <button onClick={handleAddProduct}>Add Product</button>{/*Forms for submitting new product*/}
      </>
      )
   }
export default AddProductForm
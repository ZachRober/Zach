import React, {useState} from 'react';
import ProductList from './components/ProductList.jsx'
import AddProductForm from './components/AddProductForm.jsx';

function App(){
  const [defaultList, setList] = useState([{id:1,name:"Laptop",price:600,description:"Dell Standard Computer"},
    {id:2,name:"Phone",price:800,description:"Iphone 14"},{id:3,name:"TV",price:1100,description:"Sony Flat Screen"}]);
  

    function handleAddProduct(newProduct){
      setList(DL=>[...DL,newProduct]);//adds new product to the array with the existing products
      
    }
    return(
  <div>
      <ProductList products={defaultList} category="tech" />
      <AddProductForm onAddProduct={handleAddProduct}/>{/* Passing these as props*/}

  </div>
    );

    
   }
  

export default App;

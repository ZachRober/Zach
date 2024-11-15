const defaultList = [{id:1,name:"Laptop",price:600,description:"Dell Standard Computer"},
  {id:2,name:"Phone",price:800,description:"Iphone 14"},{id:3,name:"TV",price:1100,description:"Sony Flat Screen"}];

function App(){
    return(
  <div>
      <h2>Product List</h2>
      <ul>
      {defaultList.map(product=>(<li key={product.id}>{product.name} - ${product.price} </li>))};
      </ul>
  </div>
    );

    
   }
  

export default App;

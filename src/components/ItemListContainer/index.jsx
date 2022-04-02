import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount';
import getPlants from '../../utils/getPlants';
import './style.css';

const ItemListContainer = () => {
  const [count, setCount] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getPlants()
      .then((plants) => setProducts(plants))
      .catch((error) => console.log(error));
  }, []);

/*   const onAdd = (condition) => {
    if (condition === '-') {
      setCount(count - 1);
    }
    if (condition === '+') {
      setCount(count + 1);
    }
  }; */

  //otra forma de hacerlo
  const onAdd = (e) => {
    if(e.target.name === '+') setCount(count + 1);
    if(e.target.name === '-') setCount(count - 1);
  }

  const initial = 1;
  return (
    <div className='products-container'>
      {products.map((product) => (
        <div key={product.id} className='product'>
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} />
          <ItemCount
            onAdd={onAdd}
            stock={product.stock}
            initial={initial}
            count={count}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;

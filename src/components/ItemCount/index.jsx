import React from 'react';

const ItemCount = ({ onAdd, stock, initial, count }) => {
  return (
    <div>
      {/*  <button
        onClick={() => {
          if (count > initial) {
            onAdd('-');
          }
        }}
      >
        -
      </button>
      {count}
      <button
        onClick={() => {
          if (count < stock) {
            onAdd('+');
          }
        }}
      >
        +
      </button> 
   */}
      <button
        name='-'
        onClick={(e) => {
          if (count > initial) {
            onAdd(e);
          }
        }}
      >
        -
      </button>
      {count}
      <button
        name='+'
        onClick={(e) => {
          if (count < stock) {
            onAdd(e);
          }
        }}
      >
        {' '}
        +
      </button>
    </div>
  );
};

export default ItemCount;

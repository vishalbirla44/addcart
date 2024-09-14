import React from 'react'
import './AddCard.css'

const AddCard = ({cardData,apiData}) => {

    const selectedProducts = apiData.filter(product => cardData.includes(product.id));
    console.log(selectedProducts)
  return (
     
    <div className='card'>
        {selectedProducts.map((item) => {
            return (
                <img src={item.thumbnail} alt="" />
            )
        })}
    </div>
  )
}

export default AddCard
import React, { useEffect, useState } from 'react'
import '../Card/Card.css'
import AddCard from './AddCard';

const Card = () => {

    const [apiData, setApiData] = useState([]);
    const [cardData,setCardData] = useState([])


    const fetchData = async () => {
        const relatedvideo_url = 'https://dummyjson.com/products';

        await fetch(relatedvideo_url).then(res => res.json()).then(data => setApiData(data.products))

    }

    useEffect(() => {
        fetchData();
    }, [])

    const saveCard = (id) => {
    setCardData( prev => [...prev,id])
    }

    



    return (
        <div>
            <div className='container'>

                {apiData.map((item) => {
                    return (<>
                        <ul key={item.id}><li>{item.title}</li></ul>
                        <img src={item.images} alt="" width="400px" />
                        <button onClick={()=> saveCard(item.id)}>Add Card</button>
                    </>

                    )

                })}
                <AddCard cardData={cardData} apiData={apiData} />
            </div>
        </div>
    )
}

export default Card;
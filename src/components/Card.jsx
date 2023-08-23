import React from 'react'
import {useSelector} from 'react-redux'

export const Card = (props) => {
    const {name, image, dollarPrice, nairaPrice} = props.data;
    const Price = useSelector((state)=>state.auth.dollarPrice)
    console.log(Price)
  return (
    <div className='cover'>

    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}} className='imgPics'>
        <img src={image} alt="" />
        </div>

       <div>
        <p>{name}</p>
        <p>{dollarPrice}</p>
        <p>{nairaPrice}</p>
        </div>
            {

            }
        </div>
       
   
  )
}

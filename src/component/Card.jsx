import style from './card.module.css';
import uuid from 'react-uuid';
import { useState } from 'react';
import { AiFillAlipayCircle } from "react-icons/ai";
export default function Card({id,title,description,rating,image}){
    
    const stars =()=>{
       let star =[];
        for(let i =0;i<rating;i++){
            star.push(<span key ={uuid()}>&#9733;</span>)
        }
        return star;
    }

   
    
    return(
        <div className={style.container}>
            <img src={image} alt="card image" width={120} height={120}/>
            <div className='star'>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='star'>
                
                {stars()}
                </div>
            </div>
        </div>
    )
}
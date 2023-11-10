 import { fakeData } from "./data";
 import Card from "./Card";
 import style from './card.module.css';
 export default function Cards(){
    
    return(
        <section className={style.cardsContainer}>
            {
                fakeData.map(data => <Card key={data.id}{...data}/>)
            }
        </section>
    )
 }
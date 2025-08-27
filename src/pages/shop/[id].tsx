import { NextPage } from "next";
import styles from "@/pages/shop/product.module.css"
import info from "./products";
import { useRouter } from "next/router";
import Carousel from "../../components/carousel/carousel";
import Header from "../../components/header/header";
import Contacts from "../../components/contacts/contacts";

const Product:NextPage = () => {
    const router = useRouter()
    const {query} = useRouter()
    return <>
    <main className={styles.main}>
        <Header/>
        <div className={styles.butt}>
            <button onClick={() => router.push('/#shop')} className={styles.back}>Назад</button>
        </div>
        
        <Carousel></Carousel>
        <div>
            <h1 className={styles.name}>{info.names[Number(query.id)]}</h1>
            <div className={styles.order}>
                <button  onClick={() => router.push('/#order')}>{info.prices[Number(query.id)]}</button>
            </div>
            <div className={styles.description}><p>Описание</p><pre className={styles.text}>{info.descriptions[Number(query.id)]}</pre></div>
        </div>
        {
            info.video[Number(query.id)] ? 
            <div className={styles.video}>
                <iframe src={info.video[Number(query.id)]} ></iframe>       
            </div>:
            <></>
        }
        
    </main>
    <Contacts></Contacts>
    </>
}

export default Product
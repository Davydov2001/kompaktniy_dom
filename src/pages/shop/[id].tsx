import { NextPage } from "next";
import styles from "@/components/products/product.module.css"
import info from "@/components/products/products";
import { useRouter } from "next/router";
import Carousel from "../../components/carousel/carousel";
import Header from "../../components/header/header";
import Contacts from "../../components/contacts/contacts";
import { useState } from "react";

const Product:NextPage = () => {
    const router = useRouter()
    const {query} = useRouter()
    const [description, setDescription] = useState(false)
    const [specification, setSpecicfication] = useState(false)

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
            <div onClick={() => setDescription(!description)} className={styles.description}>
                <p>Описание</p>
                <i style={description ? {transform: "rotate(135deg)", transition: "all 0.5s"}: {transition: "all 0.5s"}} className="bi bi-plus"></i>
                <pre className={description ? `${styles.show}`: `${styles.hide}`}>{info.descriptions[Number(query.id)]}</pre>
            </div>
            <div onClick={() => setSpecicfication(!specification)} className={styles.specification}>
                <p>Характеристики</p>
                <i style={specification ? {transform: "rotate(135deg)", transition: "all 0.5s"}: {transition: "all 0.5s"}} className="bi bi-plus"></i>
                <pre className={specification ? `${styles.show}`: `${styles.hide}`}>{info.descriptions[Number(query.id)]}</pre>
            </div>
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
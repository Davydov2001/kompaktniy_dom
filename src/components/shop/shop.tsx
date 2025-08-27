import { FC, useState } from "react"
import styles from "@/components/shop/shop.module.css"
import info from "@/components/products/products"
import { useRouter } from "next/router"

const Shop:FC = () => {

    const [state, setState] = useState(1)
    const router = useRouter()



    const func = () => {
       if (state === 0){
        setState(1)
       } else {
        setState(0)
       }
       console.log(state);
    }

    return <>
        <main className={styles.main} id="shop">
            <div className={styles.header}>
                <h2>Наши товары</h2>
            </div>
            <div className={styles.block}>
                <div  onClick={() => router.push('/shop/0')} className={styles.card}>
                    <img src={info.src[0]} alt="" />
                    <p>{info.names[0]}</p>
                    <a href="/shop/0"><button>{info.prices[0]}</button></a>
                </div>
                <div  onClick={() => router.push('/shop/1')} className={styles.card}>
                    <img src={info.src[1]} alt="" />
                    <p>{info.names[1]}</p>
                    <a href="/shop/1"><button>{info.prices[1]}</button></a>
                </div>
                <div  onClick={() => router.push('/shop/2')} className={styles.card}>
                    <img src={info.src[2]} alt="" />
                    <p>{info.names[2]}</p>
                    <a href="/shop/2"><button>{info.prices[2]}</button></a>
                </div>
                <div  onClick={() => router.push('/shop/3')} className={styles.card}>
                    <img src={info.src[3]} alt="" />
                    <p>{info.names[3]}</p>
                    <a href="/shop/3"><button>{info.prices[3]}</button></a>
                </div>
                <div  onClick={() => router.push('/shop/4')} className={styles.card}>
                    <img src={info.src[4]} alt="" />
                    <p>{info.names[4]}</p>
                    <a href="/shop/4"><button>{info.prices[4]}</button></a>
                </div>
                <div  onClick={() => router.push('/shop/5')} className={styles.card}>
                    <img src={info.src[5]} alt="" />
                    <p>{info.names[5]}</p>
                    <a href="/shop/5"><button>{info.prices[5]}</button></a>
                </div>
            </div>

            <div className={state==0 ? `${styles.show_block}`: `${styles.hide_block}`}>
                <div  onClick={() => router.push('/shop/6')} className={styles.card}>
                    <img src={info.src[6]} alt="" />
                    <p>{info.names[6]}</p>
                    <a href="/shop/6"><button>{info.prices[6]}</button></a>
                </div>
                <div  onClick={() => router.push('/shop/7')} className={styles.card}>
                    <img src={info.src[7]} alt="" />
                    <p>{info.names[7]}</p>
                    <a href="/shop/7"><button>{info.prices[7]}</button></a>
                </div>
                <div  onClick={() => router.push('/shop/8')} className={styles.card}>
                    <img src={info.src[8]} alt="" />
                    <p>{info.names[8]}</p>
                    <a href="/shop/8"><button>{info.prices[8]}</button></a>
                </div>
                
            </div>
            <button className={state == 0 ? `${styles.show}`: `${styles.hide}`} onClick={func}>{state==0 ? "Показать меньше": "Показать больше"}</button>
        </main>
    </>
}

export default Shop
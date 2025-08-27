import { FC } from "react";
import styles from "@/pages/components/main/main.module.css"

const Main:FC = () => {
    return <>
    <main className={styles.main} id="mian">
        <div className={styles.name}>
            <h1>Компактный Дом</h1>
        </div>
        <div className={styles.text}>
            <h2>〝Компактный комфорт〝: уникальлные решения для маленьких пространств</h2>
            <p>Мы производим продукцию, которая помогает обустроить малогабаритные помещения и создать в них функциональный интерьер. И не только это!</p>
        </div>
    </main>
    </>
}
export default Main
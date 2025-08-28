import { FC } from "react";
import styles from "@/components/main/main.module.css"

const Main:FC = () => {
    return <>
    <main className={styles.main} id="mian">
        <div className={styles.name}>
            <p>Компактный Дом</p>
        </div>
        <div className={styles.text}>
            <h2>〝Компактный комфорт〝: уникальлные решения для маленьких пространств</h2>
            <h3>Мы производим продукцию, которая помогает обустроить малогабаритные помещения и создать в них функциональный интерьер. И не только это!</h3>
        </div>
    </main>
    </>
}
export default Main
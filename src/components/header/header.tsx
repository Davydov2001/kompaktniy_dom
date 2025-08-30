import { FC } from "react";
import styles from "@/components/header/header.module.css"
import { useState } from "react";
import { useRouter } from "next/router";


const Header:FC = () => {

    const [state,setState] = useState(false)
    const router = useRouter()

    return <>
    <header className={styles.all}>
        <div>
            <p onClick={() => router.push("/#shop")}>Наши товары</p>
            <p onClick={() => router.push("/#advantages")}>Достоинства</p>
            <p onClick={() => router.push("/#order")}>Заказать</p>
            <p onClick={() => router.push("/#contacts")}>Контакты</p>  
        </div>         
    </header>

    <header  className={styles.mini}>
            <p onClick={()=> setState(true)}>Меню</p>
            <div className={state ? `${styles.show}` : `${styles.hide}`}>
                <a onClick={()=> {setState(false), router.push("/#shop")}} href="#shop">Наши товары</a>
                <a onClick={()=> {setState(false), router.push("/#advantages")}} href="#advantages">Достоинства</a>
                <a onClick={()=> {setState(false), router.push("/#order")}} href="#order">Заказать</a>
                <a onClick={()=> {setState(false), router.push("/#contacts")}} href="#contacts">Контакты</a>  
                <p className={styles.back} onClick={()=> {setState(false), router.push("/#shop")}}>Назад</p>
            </div>
    </header>
    </>
} 

export default Header
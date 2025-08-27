import { FC } from "react";
import styles from "@/components/advantages/advantages.module.css"

const Advantages:FC = () => {
    return <>
    <main className={styles.main} id="advantages">
        <div className={styles.header}>
            <h2>Преимущества компактной мебели</h2>
        </div>
        <div className={styles.block}>
            <i className="bi bi-1-circle"></i>
            <h2>Экономия пространства</h2>
            <p>Cкладные и трансформируемые конструкции идеальны для небольших квартир и домов.</p>
        </div>
        <div className={styles.block}>
            <i className="bi bi-2-circle"></i>
            <h2>Многофункциональность</h2>
            <p>Один предмет заменяет несколько (например, стол + тумба, крепление для велосипеда + полка).</p>
        </div>
        <div className={styles.block}>
            <i className="bi bi-3-circle"></i>
            <h2>Мобильность</h2>
            <p>Легко перенести, сложить или убрать, когда не нужен.</p>
        </div>
        <div className={styles.block}>
            <i className="bi bi-4-circle"></i>
            <h2>Современный дизайн</h2>
            <p>Стильные и лаконичные решения, которые вписываются в любой интерьер.</p>
        </div>
        <div className={styles.block}>
            <i className="bi bi-5-circle"></i>
            <h2>Простота хранения</h2>
            <p>В сложенном виде занимает минимум места.</p>
        </div>
        <div className={styles.block}>
            <i className="bi bi-6-circle"></i>
            <h2>Удобство для арендаторов</h2>
            <p>Можно забрать с собой при переезде без проблем.</p>
        </div>  
    </main>
    </>
}

export default Advantages
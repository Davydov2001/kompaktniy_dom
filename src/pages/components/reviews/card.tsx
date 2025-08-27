import { FC } from "react";
import styles from "@/pages/components/reviews/card.module.css"

const Card:FC = ({info}) => {
    return <>
        <div className={styles.card}>
            <h3>{info}</h3>
            <h3>Товар: </h3>
            <h3>{info}</h3>
            <p>{info}</p>
        </div>
    </>
}

export default Card
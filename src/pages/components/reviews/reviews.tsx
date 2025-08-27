import { FC, useState } from "react";
import styles from "@/pages/components/reviews/reviews.module.css"


const Reviews:FC = () => {
    const card = ["", ""]
    const [state, setState] = useState(0)
    const [position, setPosition] = useState(0)

    const up = () => {
        setState(state === card.length-3 ?  card.length-3: state+3)
        setPosition(position === -25*(card.length-3) ? -25*(card.length-3) :position - 25)     
    }

    const down = () => {
        setState(state === 0 ? 0: state-3)
        setPosition(position === 0 ? 0 : position + 25)
    }

    return <>
        <div className={styles.main}>
            <div  style={{transform: `translateX(${String(position)}vw)`, transition: "all ease  0.5s"}} className={styles.scroll}>
                {/* функция мап */}
            </div>
            <div className={styles.controls}>
                <i onClick={() => down()} className="bi bi-caret-left"></i>
                <i onClick={() => up()} className="bi bi-caret-right"></i>
            </div>
            
        </div>
    </>
}

export default Reviews
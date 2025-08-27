import { FC, useState } from "react";
import { useRouter } from "next/router";
import info from '@/pages/shop/products';
import styles from "@/pages/components/carousel/carousel.module.css"

const Carousel:FC = () => {

    const { query } = useRouter();
    const [state, setState]:any = useState(0)

    const images = info?.carousel?.[Number(query.id)] || [];

    
    const up = () => {
        let cnt = state
        cnt += 1
        if (cnt > images.length - 1) {
            cnt = 0
        }
        setState(cnt)
        console.log(state);
    }
    

    const down = () => {
        let cnt = state
        cnt -= 1
        if (cnt < 0) {
            cnt = images.length - 1
        }
        setState(cnt)
        console.log(state);
    }


    if (!images.length) {
    return <div className={styles.error}>
      No images found
    </div>;
  }

    return <>
        <div className={styles.main}>
            <div>
                {images.map((src, i) => (
                    <img src={src} key={i} className={ i === state ? `${styles.show}` : `${styles.hide}`}/>
                ))}
            </div>
            <div className={styles.navigate}>
                {images.map((src, i) => (
                    <div onClick={() => setState(i)} className={i === state ? `${styles.active}` : `${styles.hiden}`} key={i}></div>
                ))}
            </div>
            <div className={styles.controls}>
                <i onClick={() => down()} className="bi bi-caret-left"></i>
                <i onClick={() => up()} className="bi bi-caret-right"></i>
            </div>
        </div>
    </>
}

export default Carousel
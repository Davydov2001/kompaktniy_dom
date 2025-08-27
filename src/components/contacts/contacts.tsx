import { FC, useState } from 'react';
import styles from "@/components/contacts/contacts.module.css"

const Contacts:FC = () => {
  return <>
  <main id="contacts" className={styles.main}>

    <div className={styles.block}>
      <a href="https://vk.com/kompaktny_dom?from=groups"><img className={styles.icon} src="https://itcons99.ru/assets/img/integracia/8cfb76c8af04b72de1096c55862ae518.png" alt="" /></a>
      <a href="https://rutube.ru/channel/24653702/videos"><img className={styles.invert} src="https://www.grandline.ru/uploads/images/novosti/soc-seti/rutube.png" alt="" /></a>
      <a href="https://market.yandex.ru/business--kompaktnyi-dom/1040945?generalContext=t%3DshopInShop%3Bi%3D1%3Bbi%3D1040945%3B&rs=eJwzkv7EKMHBKLDwEKsEg8b9I6waP06xapw9zaqx6ggrAIRaChE%2C&searchContext=sins_ctx"><img className={styles.invert} src="https://static.tildacdn.com/tild6562-6664-4037-a537-343261653934/222.png" alt="" /></a>
    </div>

    <div className={styles.block}>
      <p>artmetal.ekb@mail.ru</p>
      <p>Екатеринбург, Дагестанская 34</p>
      <p>+7 (902) 583-89-85</p>
    </div>

    <div className={styles.block}>
      <a className={styles.link} href="">Политика конфиденциальности</a>
    </div>
    <div className={styles.foot}>
      <p>Сайт разработан: </p><a href="https://web.telegram.org/k/#@MDDavydov">Миахил Д.</a>
    </div>
  </main>
  
  </>
}
export default Contacts
import { FC } from "react";
import styles from "@/components/order/order.module.css"
import { useState } from "react";
import sendMessage from "../service/service";



const Order:FC = () => {

    const [active, setActive] = useState(false)

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [contact, setContact] = useState("")
    const [agree, setAgree] = useState(false)

    const [nameDirty, setNameDirty] = useState(false)
    const [contactDirty, setContactDirty] = useState(false)
    const [agreeDirty, setAgreeDirty] = useState(false)

    const [nameError, setNameError] = useState("Заполните поле ввода")
    const [contactError, setContactError] = useState("Вы неверно ввели номер телефона")
    const [agreeError, setAgreeError] = useState("Для продолжения необходимо соглашение")




    const dataSend = async (name:string, surname:string, contact:string, agree:boolean) => {        
        if (!name || !contact || !agree ) {
            alert("Вы не заполнили форму")
        } else {
            try {
                //const message = `Имя: ${name};\n\nВопрос: ${surname};\nКонтакт: ${contact}`
                const message = `<b>Заявка</b><pre>${name}</pre><pre>${surname}</pre><pre>${contact}</pre>`
                await sendMessage(message)
                
            } catch (e) {
                console.log(e);
            }
            setActive(true)
        }
        
    }


    const agreeHandler = (e:any) => {
        setAgree(e.target.checked)
        console.log(agree);
        if (e.target.checked) {
            setAgreeError('')
        }else{
            setAgreeError("Для продолжения необходимо соглашение")
        }
    }

    const nameHandler = (e: any) => {
        setName(e.target.value)
        if (e.target.value) {
            setNameError("")
        } else {
            setNameError("Заполните поле ввода")
        }
    }

    const surnameHandler = (e: any) => {
        setSurname(e.target.value)
    }

    const contactHandler = (e: any) => {
        const value = e.target.value.replace(/\D/g, '');
        let formattedValue = '';
        
        if (value.length > 0) {
            formattedValue = `+7 (${value.substring(1, 4)})`;
            if (value.length > 4) {
                formattedValue += ` ${value.substring(4, 7)}`;
            }
            if (value.length > 7) {
                formattedValue += `-${value.substring(7, 9)}`;
            }
            if (value.length > 9) {
                formattedValue += `-${value.substring(9, 11)}`;
            }
        }  
        setContact(formattedValue)
        if (formattedValue.length < 18) {
            setContactError("Вы не до конца ввели номер телефона")
        } else {
            setContactError("")
        }
           
    }

    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'contact':
                setContactDirty(true)
                break
            case 'agree':
                setAgreeDirty(true)
            case 'contact':
                setContactDirty(true)
        }
    }


  
    const Modal = () => {
        window.location.reload()
        setActive(false)
    };


    return <>
    <main className={styles.main} id="order">
        <div className={styles.name}><h2>Оставьте контакные данные, вам позвонит консультант</h2></div>
        <div className={styles.form}>

            <label htmlFor="">Имя</label>
            {(nameDirty && nameError) && <div className={styles.err}>{nameError}</div>}
            <input type="text"  name="name" onBlur={e => blurHandler(e)} value={name} onChange={e => nameHandler(e)} placeholder="Иван"/>

            <label htmlFor="">Ваш вопрос (не обязательно)</label>
            <input type="text"  name="surname" onBlur={e => blurHandler(e)} value={surname} onChange={e => surnameHandler(e)} placeholder="Сколько?"/>

            <label htmlFor="">Номер телефона</label>
            {(contactDirty && contactError) && <div className={styles.err}>{contactError}</div>}
            <input type="text"  name="contact" onBlur={e => blurHandler(e)} value={contact} onChange={e => contactHandler(e)} placeholder="+7 123 456 78 90"/>

            <div className={styles.docs}>
                {(agreeDirty && agreeError) && <div className={styles.agree_err}>{agreeError}</div>}
                <input type='checkbox' name="agree" onBlur={e => blurHandler(e)} onChange={e => agreeHandler(e)}></input>
                <p>Я даю согласие на обработку моих персональных данных. Соглашаясь с политикой, вы принимаете условия <a href="" >Политики конфиденциальности</a></p>
            </div>
            <button onClick={() => dataSend(name, surname, contact, agree)} className={styles.button}>Отправить</button>
        </div>

        
        
        <div className={active===true ? `${styles.active}` : `${styles.not_active}`} onClick={Modal}>
            <div>
                <h1>Спасибо за обращение!</h1>
                <p>Скоро вам позвонит наш консультант</p>
            </div>
        </div>
    </main>
    </>
}

export default Order
import Head from "next/head";
import Header from "./components/header/header";
import Advantages from "./components/advantages/advantages";
import Main from "@/pages/components/main/main";
import Shop from "./components/shop/shop";
import Order from "./components/order/order";
import Contacts from "./components/contacts/contacts";
import Reviews from "./components/reviews/reviews";


export default function Home() {
  return (
    <>
      <Head>
        <title>Компактный Дом</title>
        <meta name="description" content="Компактный Дом" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"></link>
      </Head>
      <Header></Header>
      <Main></Main>
      <Shop></Shop>
      <Advantages></Advantages>
      <Order></Order>
      <Contacts></Contacts>
    </>
  );
}

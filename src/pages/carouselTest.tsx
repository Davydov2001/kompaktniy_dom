import { NextPage } from "next";
import Carousel from "./components/carousel/carousel";
import Head from "next/head";

const Test:NextPage = () => {
    return(
        <>
            <Head>
                <title>Компактный Дом</title>
                <meta name="description" content="Компактный Дом" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"></link>
            </Head>
            <Carousel></Carousel>
        </>
    )
}
export default Test
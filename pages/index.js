import Head from "next/head";
import Navbar from "../components/Navbar";
import List from "@/components/List";
import Modal from "@/components/Modal";
import { useState } from "react";
export default function Home(){

    const [selected, setSelected] = useState(null);

    return(
        <div>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <List setSelected={setSelected}/>
            <Modal selected={selected} setSelected={setSelected}/>

            
        </div>
    )
}
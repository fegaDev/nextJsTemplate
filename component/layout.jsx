import Head from 'next/head'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
export default function Layout({title,description,children}){
    return(
        <div>
            
        <Head>
        <meta charset="UTF-8"/>
        <meta name="description" content={description}/>
        <meta name="keywords" content="Next Js App Project"/>
        <meta name="author" content="Peloncho"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar></Navbar>

        <main>{children}</main>

     
        <Footer></Footer>
        </div>
     )
}
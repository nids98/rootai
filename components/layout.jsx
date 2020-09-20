import Navbar from './navbar'
import Head from "next/head";

const Layout = (props) => (
    <div>
        <Head>
            <title>rootai</title>
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,400;1,700&display=swap" rel="stylesheet" />
        </Head>
        <Navbar />
        {props.children}
    </div>
)

export default Layout
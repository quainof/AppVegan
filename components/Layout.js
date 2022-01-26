import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = ({children, pagina}) => {

  return (
    <div>
        <Head>
            <title>Vegan - {pagina}</title>
            <meta name="description" content="Sitio web informativo sobre productos veganos"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet"/>
        </Head>

        <Header/>

        {children}

        <Footer/>

    </div>
  )}

export default Layout

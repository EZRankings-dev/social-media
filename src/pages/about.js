import Head from 'next/head'
import About from './components/About';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

// import routes from './routes';

 const Abouts = ()=> {
  return (
    <>
      <Head>
      <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
       <title>About - Creative Agency</title>
       <link rel="canonical" href="https://www.socialmediacreativeagency.com/about/" />
       {/* <link  href="https://smca.ezrankings.in/react-backend/css/style.css" rel="stylesheet"></link>
       <link  href="https://smca.ezrankings.in/react-backend/css/responsive.css" rel="stylesheet"></link>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/> */}
       <meta property="og:locale" content="en_US" />
       <meta property="og:type" content="article" />
       <meta property="og:title" content="About - Creative Agency" />
       <meta property="og:url" content="https://www.socialmediacreativeagency.com/about/" />
       <meta property="og:site_name" content="Creative Agency" />
       <meta property="article:modified_time" content="2023-02-21T11:51:16+00:00" />
       <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <About />
      <Footer />
    </>
  )
}
export default Abouts;
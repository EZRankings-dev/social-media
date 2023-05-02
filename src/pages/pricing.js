import Head from 'next/head'
import Pricing from './components/Pricing';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

// import routes from './routes';

 const Abouts = ()=> {
  return (
    <>
      <Head>
      <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
       <title>Our Pricing - Social Media Creative Agency</title>
       <meta name="description" content="Browse this page and get Pricing details of Social Media Creative Agency. We offer Individual, Start Up and Business Plans." />
       <link rel="canonical" href="https://www.socialmediacreativeagency.com/pricing/" />
       <meta property="og:locale" content="en_US" />
       <meta property="og:type" content="article" />
       <meta property="og:title" content="Our Pricing - Social Media Creative Agency" />
       <meta property="og:description" content="Browse this page and get Pricing details of Social Media Creative Agency. We offer Individual, Start Up and Business Plans." />
       <meta property="og:url" content="https://www.socialmediacreativeagency.com/pricing/" />
       <meta property="og:site_name" content="Creative Agency" />
       <meta property="article:modified_time" content="2023-02-27T05:38:59+00:00" />
       <meta name="twitter:card" content="summary_large_image" />
       <link rel="stylesheet" type="text/css" href="https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css"></link>
       <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&display=swap"></link>

      </Head>
      <Navbar />
      <Pricing />
      <Footer />
    </>
  )
}
export default Abouts;
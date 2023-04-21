import Head from 'next/head'
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

// import routes from './routes';

 const Abouts = ()=> {
  return (
    <>
      <Head>
      <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
    <title>Our Portfolio - Social Media Creative Agency</title>
    <meta name="description" content="Find the list of Social Media projects which has been done by Social Media Creative Agency with good results." />
    <link rel="canonical" href="https://www.socialmediacreativeagency.com/portfolio/" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Our Portfolio - Social Media Creative Agency" />
    <meta property="og:description" content="Find the list of Social Media projects which has been done by Social Media Creative Agency with good results." />
    <meta property="og:url" content="https://www.socialmediacreativeagency.com/portfolio/" />
    <meta property="og:site_name" content="Creative Agency" />
    <meta property="article:modified_time" content="2023-02-27T05:41:03+00:00" />
    <meta name="twitter:card" content="summary_large_image" />
    <link  href="https://smca.ezrankings.in/react-backend/css/style.css" rel="stylesheet"></link>
       <link  href="https://smca.ezrankings.in/react-backend/css/responsive.css" rel="stylesheet"></link>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
      </Head>
      <Navbar />
      <Portfolio />
      <Footer />
    </>
  )
}
export default Abouts;
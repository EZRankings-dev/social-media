import Head from 'next/head'
import Home from './components/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

// import routes from './routes';

 const Index = ()=> {
  return (
    <>
      <Head>
      <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
      <title>The Best Social Media Marketing Agency in India - Social Media Creative Agency (SMCA)</title>
      <meta name="description" content="Looking for creative Social Media Services to promote your brand?? SMCA is full-service creative agency based in India, offers white label social media management services for clients. Get top-notch quality social media posts services from the experts." />
      <link rel="canonical" href="https://www.socialmediacreativeagency.com/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="The Best Social Media Marketing Agency in India - Social Media Creative Agency (SMCA)" />
      <meta property="og:description" content="Looking for creative Social Media Services to promote your brand?? SMCA is full-service creative agency based in India, offers white label social media management services for clients. Get top-notch quality social media posts services from the experts." />
      <meta property="og:url" content="https://www.socialmediacreativeagency.com/" />
      <meta property="og:site_name" content="Creative Agency" />
      <meta property="article:modified_time" content="2023-02-27T05:38:12+00:00" />
      <link  href="https://smca.ezrankings.in/react-backend/css/style.css" rel="stylesheet"></link>
       <link  href="https://smca.ezrankings.in/react-backend/css/responsive.css" rel="stylesheet"></link>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
      </Head>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}
export default Index;

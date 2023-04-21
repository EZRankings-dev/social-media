import Head from 'next/head'
import Contact from './components/Contact';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

// import routes from './routes';

 const Abouts = ()=> {
  return (
    <>
      <Head>
      <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
      <link rel='icon' href='https://www.socialmediacreativeagency.com/wp-content/themes/creative-agency/assets/images/favicon.webp'></link>
     <title>Contact Us - Social Media Creative Agency</title>
     <meta name="description" content="If you would like to Contact Us, please drop an email @ info@socialmediacreativeagency.com. Our social media experts will contact you as soon as possible." />
     <link rel="canonical" href="https://www.socialmediacreativeagency.com/contact-us/" />
     <meta property="og:locale" content="en_US" />
     <meta property="og:type" content="article" />
     <meta property="og:title" content="Contact Us - Social Media Creative Agency" />
     <meta property="og:description" content="If you would like to Contact Us, please drop an email @ info@socialmediacreativeagency.com. Our social media experts will contact you as soon as possible." />
     <meta property="og:url" content="https://www.socialmediacreativeagency.com/contact-us/" />
     <meta property="og:site_name" content="Creative Agency" />
     <meta property="article:modified_time" content="2023-02-27T05:42:06+00:00" />
     <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <Contact />
      <Footer />
    </>
  )
}
export default Abouts;
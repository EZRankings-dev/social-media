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
    <link rel="stylesheet" type="text/css" href="https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css"></link>
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&display=swap"></link>
    <script async
        src="https://www.googletagmanager.com/gtag/js?id=G-4T85M437M3"
        
      />
      <script
        dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){
          dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-4T85M437M3');
      ` }}
      />
      <meta name="google-site-verification" content="muKy4GDWt7CbVzZo5Gly_Z6UieYyZ65RlQsB4ts9uKY" />
      </Head>
      <Navbar />
      <Portfolio />
      <Footer />
    </>
  )
}
export default Abouts;
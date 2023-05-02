import Head from 'next/head'
import Home from './components/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import PortfolioPageSlider from './components/PortfolioPageSlider'

// import routes from './routes';


 const Index = ()=> {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How Many Clients Have You Worked With?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We have helped 500+ projects"
      }
    },{
      "@type": "Question",
      "name": "How Are You Different from Other Social Media Creative Agencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We stand out from other social media creative agencies by offering a tailored approach and comprehensive designs for clients based on their needs. The agency takes a personalized approach to understand each business's unique goals and creates plans based on them."
      }
    },{
      "@type": "Question",
      "name": "What Budgets Do You Typically Work With?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We typically work with a wide range of budgets, from small businesses with limited resources to large corporations with significant marketing budgets. We understand that each business has unique needs and constraints regarding social media marketing—that's why we offer customizable packages tailored to meet each business's specific needs. We usually begin our retainers with a budget of $150/₹7000 per month."
      }
    },{
      "@type": "Question",
      "name": "How Often Will You Post on Social Media?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Creatives will be posted in accordance with the strategy you choose. We may also create unique plans based on the needs of your creatives."
      }
    },{
      "@type": "Question",
      "name": "How much time is required for the design to be completed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends upon the type of creative design required. We take 24-48 hours to submit a plan based on the inputs required by the Client"
      }
    },{
      "@type": "Question",
      "name": "Is the Client involved in the design phase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clients can share reference samples they like, and during the design phase, we send the creatives designed to the Client for approval. Iteration 1-2 times will be done per client advice; after that, it will cost additional based on the hours invested."
      }
    },{
      "@type": "Question",
      "name": "Will the work be affected if you are in another Country?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, we connect through Skype and Whatsapp and update the Client on progress."
      }
    },{
      "@type": "Question",
      "name": "Which Format will the creatives be shared in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The specific Format in which a social media creative agency shares creatives may vary depending on the client's needs and the platforms being used. However, social media creatives can generally be shared in various formats, including images, videos, GIFs, infographics, and more."
      }
    },{
      "@type": "Question",
      "name": "What Metrics Should I Measure in Social Media?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": ""
      }
    },{
      "@type": "Question",
      "name": "Why Should I Invest in Social Media Marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": ""
      }
    }]
  }
  ;
  return (
    <>
      <Head>
      <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
      <title>Full-Service Social Media Marketing Agency in India - Social Media Creative Agency</title>
      <meta name="keywords" content="social media creative agency, creative social media services, creative agency social media posts, full service creative agency, best creative agency in india, top creative agencies, best social media agency in india, social media management agency, white label social media management, best social media marketing agency" />
      <meta name="description" content="Looking for creative Social Media Services to promote your brand?? SMCA is full-service creative agency based in India, offers white label social media management services for clients. Get top-notch quality social media posts services from the experts." />
      <link rel="canonical" href="https://www.socialmediacreativeagency.com/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="The Best Social Media Marketing Agency in India - Social Media Creative Agency (SMCA)" />
      <meta property="og:description" content="Looking for creative Social Media Services to promote your brand?? SMCA is full-service creative agency based in India, offers white label social media management services for clients. Get top-notch quality social media posts services from the experts." />
      <meta property="og:url" content="https://www.socialmediacreativeagency.com/" />
      <meta property="og:site_name" content="Creative Agency" />
      <meta property="article:modified_time" content="2023-02-27T05:38:12+00:00" />
      <link rel="stylesheet" type="text/css" href="https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css"></link>
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&display=swap"></link>
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      </Head>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}
export default Index;

import React, {useState, useEffect} from 'react'
import PortfolioSlider from './PortfolioSlider'
import PriceChart from './PriceChart'
import axios from 'axios';
import Faq from './Faq'
import FooterForm from './FooterForm';
const Pricing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imgData, setImgData] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [priceData, setPriceData] = useState([]);
  const fetchData = async () => {

     axios.get(`https://smca.ezrankings.in/react-backend/pricing.php`)
       .then(res => {
           const data = res.data.gallery.map((item) => {
             return {
               id: item.id,
               alt: item.alt,
               image: item.img
             }
         }
       )
       const faqqData = res.data.faq.map((item, k) => {
         return {
           id: item.id,
           title: item.title,
           status: k == 0 ? true : false,
           description: item.description
         }
     }
   )
   // console.log("vikas",imgData);

           const pData = res.data.price.map((item) => {
             return {
               // id: item.id,
               title: item.title,
               id: item.id,
               colored: item.colored,
               start_up: item.start_up,
               business: item.business,
               individual: item.individual
             }
         }
       )
       setFaqData(faqqData);
       setImgData(data);
       setPriceData(pData);
       // console.log("vikas",imgData);
     })
     .catch(err => {
      })
  }
  useEffect(() => {
    fetchData();
}, [])
  return (
    <>
     <section className="banner-section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="banner-caption">
                     <h1 ><span >PRICING</span></h1>
                  </div>
               </div>
            </div>
         </div>
      </section>

    <PriceChart chartData={priceData}/>
    <Faq faqData={faqData} />
    <PortfolioSlider imgData={imgData}/>

    <section className="start-retainership-sec srs2 ">
         <div className="continer">
            <div className="row">
               <div className="col-md-12">
                  <div className="content-wrap">
                     <p>We believe that every business
                        is <span>unique and deserves excellent and customized
                        social media creatives,</span> thats why we take the time to
                        develop an enduring connection with our clients.
                     </p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="content-wrap2">
                     <h2>Lets create something
                        amazing together.
                     </h2>
                     <a href="" className="">Get Started</a>
                  </div>
               </div>
            </div>
         </div>
      </section>
    <FooterForm />
    </>
  )
}

export default Pricing

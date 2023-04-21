import React, {useState, useEffect} from 'react'
import PortfolioPageSlider from './PortfolioPageSlider'
// import Oshap from '../assets/images/oshap.png'
import axios from 'axios';
import Image from 'next/image'

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imgPortData, setImgPortData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imgPortBlogData, setImgPortBlogData] = useState([]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  }
  const fetchData = async (page) => {

     axios.get(`https://smca.ezrankings.in/react-backend/portData.php?page=${page}`)
       .then(res => {
           const data = res.data.gallery.map((item) => {
             return {
               id: item.id,
               alt: item.alt,
               image: item.image
             }
         }
       )
           const blogData = res.data.blog.map((item) => {
             return {
               id: item.id,
               alt: item.alt,
               image: item.image
             }
         }
       )
       setImgPortData(data);
       // setImgPortBlogData([...imgPortBlogData, blogData]);
       if(imgPortBlogData && imgPortBlogData.length > 0){
         let newArrayBlog = imgPortBlogData;
         for(let z=0; z < blogData.length; z++){
           newArrayBlog.push(blogData[z]);
         }
         setImgPortBlogData(newArrayBlog);
         // setImgPortBlogData([...imgPortBlogData, blogData]);

       }else{
         setImgPortBlogData(blogData);
       }
     })
     .catch(err => {
      })
  }
  useEffect(() => {
    fetchData(currentPage);
}, [currentPage])

  return (
   <>

   <section className="banner-section portfoliopage">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="banner-caption">
                     <h1 ><span >PORTF<img src={"https://smca.ezrankings.in/react-backend/uploads/oshap.png"} className="o-shap" alt=""/>Lio</span></h1>
                     {/* <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,</p> */}
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="porfolio-slider">
    <div className="container">
        <div className="row">
            <div className="col-md-9 mx-auto">
                <div className="slider-porfolio">
                   <PortfolioPageSlider  imgData={imgPortData}/>
            </div>
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
        </div>
    </div></div>
</section>

<section className="portfolio-sec">
  <div className="container">
      <div className="row">
      {imgPortBlogData.map((blogImg, b) =>(
        <div className="col-md-4" key={b}>
            <div className="portfolio-card">
                <figure> <a href={blogImg.image} data-fancybox="gallery" data-caption={blogImg.alt}>
                    <img src={blogImg.image} alt={blogImg.alt} />
                    <span className="zoom-img"><i className="fas fa-search-plus"></i></span>
                  </a>
                </figure>
            </div>
        </div>
      ))}
        <div className="col-md-12">
            <div className="load-more-btn">
                <a onClick={handleNextPage}>Load More</a>
            </div>
        </div>
      </div>
  </div>
</section>
   </>
  )
}

export default Portfolio

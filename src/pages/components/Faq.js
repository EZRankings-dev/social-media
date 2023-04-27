import React, {useState, useEffect} from 'react'

 const Faq = (props) =>{
    const [hiddenTitleIndex, setHiddenTitleIndex] = useState(null);

    const toggleHiddenTitle = (index) => {
        if (hiddenTitleIndex === index) {
          setHiddenTitleIndex(null);
        } else {
          setHiddenTitleIndex(index);
        }
      };
    return(
        <>
        <section className="faq-section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h2>Frequently Asked Questions (FAQs)</h2>
                  <div className="accordion" id="accordionExample">
                    {props.faqData && props.faqData.length > 0 && props.faqData.map((data, i)=>(
                        <div className="accordion-item" key={i}>
                        <h2 className="accordion-header" id={'headingOne'+i}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle={'collapseOne'+i} data-bs-target={'#collapseOne'+i}  aria-controls={'collapseOne'+i}  onClick={() => toggleHiddenTitle(i)}>
                            {data.status}Q.{i+1} {data.title}
                            </button>
                        </h2>
                        <div id={'collapseOne'+i} className={''} aria-labelledby={'headingOne'+i} data-bs-parent="#accordionExample" 
                       
                      >
                            <div className={hiddenTitleIndex === i ? 'accordion-body' :''}>
                            {hiddenTitleIndex === i && <p dangerouslySetInnerHTML={{ __html: data.description}} />}
                            </div>
                        </div>
                    </div>
                    ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
        </>
    )
 }
 export default Faq;
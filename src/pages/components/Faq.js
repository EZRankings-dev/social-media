import React from "react";
 const Faq = () =>{
    return(
        <>
        <section className="faq-section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h2>Frequently Asked Questions (FAQs)</h2>
                  <div className="accordion" id="accordionExample">
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Q.1 How Many Clients Have You Worked With?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            We have helped 500+ projects
                            </div>
                        </div>
                     </div>
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Q.2 How Are You Different from Other Social Media Creative Agencies?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            We stand out from other social media creative agencies by offering a tailored approach and comprehensive designs for clients based on their needs. The agency takes a personalized approach to understanding each business's unique goals and creates plans based on them.
                            </div>
                        </div>
                     </div>
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Q.3 What Budgets Do You Typically Work With?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            We typically work with a wide range of budgets, from small businesses with limited resources to large corporations with significant marketing budgets. We understand that each business has unique needs and constraints regarding social media marketing—that's why we offer customizable packages tailored to meet each business's specific needs. We usually begin our retainers with a budget of $150/₹7000 per month.      </div>
                            </div>
                        </div>
                     <div className="accordion-item">
                     <h2 className="accordion-header" id="headingFour">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                     Q.4 How Often Will You Post on Social Media?
                     </button>
                     </h2>
                     <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                     <div className="accordion-body">
                     Creatives will be posted in accordance with the strategy you choose. We may also create unique plans based on the needs of your               creatives.
                     </div>
                     </div>
                     </div>
                     <div className="accordion-item">
                     <h2 className="accordion-header" id="headingFour">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseFive">
                     Q.5 How much time is required for the design to be completed?
                     </button>
                     </h2>
                     <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                     <div className="accordion-body">
                     It depends upon the type of creative design required. We take 24-48 hours to submit a plan based on the inputs required by the Client
                     </div>
                     </div>
                     </div>
                     <div className="accordion-item">
                     <h2 className="accordion-header" id="headingsix">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                     Q.6 Is the Client involved in the design phase?
                     </button>
                     </h2>
                     <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                     <div className="accordion-body">
                     Clients can share reference samples they like, and during the design phase, we send the creatives designed to the Client for approval. Iteration 1-2 times will be done per client advice; after that, it will cost additional based on the hours invested.           </div>
                     </div>
                     </div>
                     <div className="accordion-item">
                     <h2 className="accordion-header" id="headingseven">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                     Q.7 Will the work be affected if you are in another Country?
                     </button>
                     </h2>
                     <div id="collapseseven" className="accordion-collapse collapse" aria-labelledby="headingseven" data-bs-parent="#accordionExample">
                     <div className="accordion-body">
                     No, we connect through Skype and Whatsapp and update the Client on progress.           </div>
                     </div>
                     </div>
                     <div className="accordion-item">
                     <h2 className="accordion-header" id="headingeight">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                     Q.8 Which Format will the creatives be shared in?
                     </button>
                     </h2>
                     <div id="collapseeight" className="accordion-collapse collapse" aria-labelledby="headingeight" data-bs-parent="#accordionExample">
                     <div className="accordion-body">
                     The specific Format in which a social media creative agency shares creatives may vary depending on the client's needs and the platforms being used. However, social media creatives can generally be shared in various formats, including images, videos, GIFs, infographics, and more.           </div>
                     </div>
                     </div>
                     <div className="accordion-item">
                     <h2 className="accordion-header" id="headingnine">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                     Q.9 What Metrics Should I Measure in Social Media?
                     </button>
                     </h2>
                     <div id="collapsenine" className="accordion-collapse collapse" aria-labelledby="headingnine" data-bs-parent="#accordionExample">
                     <div className="accordion-body">
                     You should measure the following key metrics: 
                     <ul>
                     <li>Engagement rates, such as likes, comments, and shares.</li>
                     <li>Reach and impressions measure the number of people who have seen a post or ad.</li>
                     <li>Click-through rates show how many people clicked on a link or call to action.</li>
                     <li>Conversion rates measure the percentage of people who took a desired action, such as filling out a form or                 purchasing.</li>
                     <li>Customer acquisition cost calculates how much it costs to acquire each new customer through social media.</li>
                     </ul>
                     </div>
                     </div>
                     </div>
                     <div className="accordion-item">
                     <h2 className="accordion-header" id="headingten">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseten" aria-expanded="false" aria-controls="collapseten">
                     Q.10 Why Should I Invest in Social Media Marketing?
                     </button>
                     </h2>
                     <div id="collapseten" className="accordion-collapse collapse" aria-labelledby="headingten" data-bs-parent="#accordionExample">
                     <div className="accordion-body">
                     Investing in social media marketing can help businesses in:  
                     <ul>
                     <li> Reach a vast audience,</li>
                     <li> Connect with specific groups of people, </li>
                     <li> Build brand awareness, and </li>
                     <li>Establish a strong online presence.</li>
                     </ul>
                     It can be a cost-effective way to reach a large audience, and businesses can generate organic reach by posting            valuable content. Social media marketing can be a powerful tool for business growth and success.
                     </div>
                     </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
        </>
    )
 }
 export default Faq;
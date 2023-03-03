import React from "react";
import Layout from "../Layout/Layout"
import Image from 'next/image'
export default function Main({ }) {

  return (
    <Layout>
      <section className="pt-2 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
            </div>
            <div className="col-6 text-right">
              <a className="btn btn-primary mb-3 mr-1" style={{backgroundColor:"#208850"}} href="#carouselExampleIndicators2" role="button" data-slide="prev">
                <i className="fa fa-arrow-left" />
              </a>
              <a className="btn btn-primary mb-3"  style={{backgroundColor:"#208850"}}href="#carouselExampleIndicators2" role="button" data-slide="next">
                <i className="fa fa-arrow-right" />
              </a>
            </div>
            <div className="col-12">
              <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                      <a  href="https://judy.co/blogs/content/earthquake-preparedness-your-ultimate-safety-guide-1">
                        <div className="card">
                          <Image src='/cards/earthquakes.jpg' width={500} height={400} alt={'IGSCS LOGO'} ></Image>
                          <div className="card-body">
                            <h4 className="card-title">Earthquakes</h4>
                            <p className="card-text">
                            An earthquake can strike at any moment, which is why always being prepared in advance is critical. Your Ultimate Safety Guide & What to Expect During an Earthquake 
                            </p>
                          </div>
                        </div>
                        </a>
                      </div>
                      <div className="col-md-4 mb-3">
                        <a  href="https://www.doi.gov/blog/10-tips-prevent-wildfires">
                        <div className="card">
                          <Image src='/cards/wildfires.jpg' width={500} height={400} alt={'IGSCS LOGO'} ></Image>
                          <div className="card-body">
                            <h4 className="card-title">WildFire</h4>
                            <p className="card-text">
                            Nationally, Almost 9 out of 10 wildfires are caused by humans. These preventable wildfires threaten lives, property, wildlife heritaage and our precious natural resources.
                            </p>
                          </div>
                        </div>
                        </a>
                      </div>
                      <div className="col-md-4 mb-3">
                      <a  href="https://www.habitat.org/our-work/disaster-response/disaster-preparedness-homeowners/floods">
                        <div className="card">
                          
                          <Image src='/cards/floods.jpg' width={500} height={400} alt={'IGSCS LOGO'} ></Image>
                          <div className="card-body">
                            <h4 className="card-title">Flood</h4>
                            <p className="card-text">
                            A flood is an overflow of water onto normally dry land, often caused when excessive rainfall or a dam failure causes rivers and streams to overflow their banks.
                            </p>
                          </div>
                        </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                      <a  href="https://www.wunderground.com/prepare/tsunami">
                        <div className="card">
                          <Image src='/cards/tsunamis.jpg' width={500} height={400} alt={'IGSCS LOGO'} ></Image>
                          <div className="card-body">
                            <h4 className="card-title">Tsunami</h4>
                            <p className="card-text">
                            A tsunami can move hundreds of miles per hour in the open ocean and smash into land with waves.
                            </p>
                          </div>
                        </div>
                        </a>
                      </div>
                      <div className="col-md-4 mb-3">
                      <a  href="https://www.cdc.gov/disasters/tornadoes/prepared.html#:~:text=Identify%20the%20safest%20place%20to%20take%20shelter,-Although%20there%20is&text=Safe%20places%20include%20a%20storm,mobile%20home%20during%20a%20tornado">
                        <div className="card">
                          <Image src='/cards/tornadoes.jpg' width={500} height={400} alt={'IGSCS LOGO'} ></Image>
                          <div className="card-body">
                            <h4 className="card-title">Tornadoes</h4>
                            <p className="card-text">
                            Tornadoes impact locations across the country every year, bringing massive winds and destruction in their paths. 
                            </p>
                          </div>
                        </div>
                        </a>
                      </div>

                      <div className="col-md-4 mb-3">
                        <a  href="https://www.godigit.com/guides/natural-disasters/dos-and-donts-during-earthquake">
                        <div className="card">
                          <Image src='/cards/dos-donts.jpg' width={500} height={400} alt={'IGSCS LOGO'} ></Image>
                          <div className="card-body">
                            <h4 className="card-title">Do's & Dont's During Earthquake</h4>
                            <p className="card-text">
                            What to Do During, After & Before an Earthquake?
                            </p>
                          </div>
                        </div>
                        </a>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </Layout >
  );
}


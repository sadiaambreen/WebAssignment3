import React from 'react'
import './App.css'
import aboutPic from '../assets/img/pic 10.jpg';

function About (){
    return(
        <section className="about" id="aboutUs">
        <div className="aboutUs">
          <h1
           style={{fontSize: '22px', marginBottom: '5px', textAlign: 'center', paddingTop: '20px'}}
          >
            About Us
          </h1>
          <div className="row g-0 bg-light position-relative">
            <div className="col-md-6 mb-md-0 p-md-4">
              <img className="w-100" src={aboutPic} alt="..." />
            </div>
            <div className="col-md-6 p-4 ps-md-0 aboutInfo">
              <h5
                className="mt-0"
                style={{fontSize: '22px', marginBottom: '5px', textAlign: 'center', paddingTop: '20px'}}
              >
                Why US!
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore error sunt fuga accusantium qui similique deserunt
                laboriosam consequuntur. Temporibus officia facilis quaerat
                aliquid molestiae perferendis iusto nam vero nihil maiores?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore error sunt fuga accusantium qui similique deserunt
                laboriosam consequuntur. Temporibus officia facilis quaerat
                aliquid molestiae perferendis iusto nam vero nihil maiores?
              </p>
              <a href="/" className="stretched-link"><button>Learn More</button> </a>
            </div>
          </div>
        </div>
      </section>

    )
}
export default About;
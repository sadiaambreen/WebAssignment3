import React from 'react'
import './App.css'
// import slider1 from '../assets/img/slider 1.jpg'
// import Slider2 from '../assets/img/slider 2.jpg'
// import Slider3 from '../assets/img/slider 3.jpg'
// import Slider4 from '../assets/img/slider 4.jpg'

function Slider (){
//     var slide_index = 1;
// displaySlides(slide_index);

// function nextSlide(n) {
//   displaySlides((slide_index += n));
// }

// function displaySlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("showSlide");
//   if (n > slides.length) {
//     slide_index = 1;
//   }
//   if (n < 1) {
//     slide_index = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slide_index - 1].style.display = "block";
// }
    return(
      <section id="slider">
    <div class="slidercontainer">  
        <div class="showSlide fade">  
            <img src="assets/img/slider 1.jpg" />  
            <div class="content">Lorem ipsum dolor sit amet</div>  
        </div>  
        <div class="showSlide fade">  
            <img src="assets/img/slider 2.jpg"/>  
            <div class="content">Lorem ipsum dolor sit amet</div>  
        </div>  
  
        <div class="showSlide fade">  
            <img src="assets/img/slider 3.jpg"/>  
            <div class="content">Lorem ipsum dolor sit amet</div>  
        </div>  
        <div class="showSlide fade">  
            <img src="assets/img/slider 4.jpg"/>  
            <div class="content">Lorem ipsum dolor sit amet</div>  
        </div>  
        <a class="left" onclick="nextSlide(-1)">❮</a>  
        <a class="right" onclick="nextSlide(1)">❯</a>  
    </div> 
  </section>
    //     <div>
     
    //   <section id="slider">
    //   <div className="slidercontainer">
    //     <div className="showSlide fade">
    //       {/* <img src={slider1} alt="my-pic"/> */}
    //       <div className="content">Lorem ipsum dolor sit amet</div>
    //     </div>
    //     <div className="showSlide fade">
    //       {/* <img src={Slider2} alt="my-pic"/> */}
    //       <div className="content">Lorem ipsum dolor sit amet</div>
    //     </div>

    //     <div className="showSlide fade">
    //       {/* <img src={Slider3} alt="my-pic"/> */}
    //       <div className="content">Lorem ipsum dolor sit amet</div>
    //     </div>
    //     <div className="showSlide fade">
    //       <img src={Slider4} alt="my-pic"/>
    //       <div className="content">Lorem ipsum dolor sit amet</div>
    //     </div>
    //     {/* <!-- Navigation arrows -->   */}
    //     {/* <button className="left" onClick={() => nextSlide(-1)}>❮</button>
    //     <button className="right" onClick={() => nextSlide(1)}>❯</button> */}
    //   </div>
    // </section> 
    // </div>
    )
}
export default Slider;
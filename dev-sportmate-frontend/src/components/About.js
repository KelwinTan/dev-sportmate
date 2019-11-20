import React, { Component } from 'react';
import "../assets/css/slide.css";
import ImageGallery from 'react-image-gallery';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import img1 from "../assets/img/sport/1.jpg";
import img2 from "../assets/img/sport/2.jpg";
import img3 from "../assets/img/sport/3.jpg";
import img4 from "../assets/img/sport/4.jpg";
import img5 from "../assets/img/sport/5.jpg";



const images = [
   {
      original: img1,
      thumbnail: img1,
   },
   {
      original: img2,
      thumbnail: img2,
   },
   {
      original: img3,
      thumbnail: img3,
   },
   {
      original: img4,
      thumbnail: img4,
   },
   {
      original: img5,
      thumbnail: img5,
   },
];

export default class About extends Component {
   render() {


      let resumeData = this.props.resumeData;
      return (
         <React.Fragment>

            <section id="about">
               <div className="row">
                  <div className="nine columns main-col">
                     <h2>About Us</h2>
                     <p style={{ fontSize: "30px", color: "white" }}>
                        {
                           resumeData.aboutme
                        }
                     </p>

                  </div>
               </div>
               <div style={{ justifyContent: "center", display: "flex" }}>
                  <ImageGallery items={images} />
               </div>
            </section>

         </React.Fragment>

      );
   }
}
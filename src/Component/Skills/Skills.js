import React from "react";
import "./Skills.css";
import ProgressBar from "./../ProgressBar/ProgressBar";
import "./../ProgressBar/ProgressBar.css";
// import "swiper/css";
// import "swiper/css/free-mode";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {FreeMode ,Navigation ,Pagination} from "swiper";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    // <>
    //   <div className="skills">
    //     <div className="container skills-page" id="Skills">
    //       <div className="skills-title">
    //         <h3>Skills</h3>
    //         <p>you can see my skills here</p>
    //         <div className="">
    //           <Swiper
    //             freeMode={true}
    //             // grabCursor={true}
    //             modules={[FreeMode, Navigation, Pagination]}
    //             className="mySwiper"
    //             loop={true}
    //             loopFillGroupWithBlank={true}
    //             // pagination={{
    //             //   clickable: true,
    //             // }}
    //             navigation={true}

    //             breakpoints={{
    //               0: {
    //                 slidesPerView: 1,
    //                 spaceBetween: 10,
    //               },
    //               480: {
    //                 slidesPerView: 1,
    //                 spaceBetween: 10,
    //               },
    //               768: {
    //                 slidesPerView: 2,
    //                 spaceBetween: 10,
    //               },
    //               1024: {
    //                 slidesPerView: 3,
    //                 spaceBetween: 10,
    //               },
    //             }}
    //           >
    //
    //               <div>
    //                 <ProgressBar progressNumber="85" circleAttribute="c1" />
    //                 <p className="skill-name">Data Science</p>
    //               </div>
    //
    //
    //               <div>
    //                 <ProgressBar progressNumber="95" circleAttribute="c2" />
    //                 <p className="skill-name">FrontEnd Development</p>
    //               </div>
    //
    //
    //               <div>
    //                 <ProgressBar progressNumber="90" circleAttribute="c3" />
    //                 <p className="skill-name">BackEnd Development</p>
    //               </div>
    //
    //
    //               <div>
    //                 <ProgressBar progressNumber="90" circleAttribute="c4" />
    //                 <p className="skill-name">FullStack Web Development</p>
    //               </div>
    //
    //
    //               <div>
    //                 <ProgressBar progressNumber="55" circleAttribute="c5" />
    //                 <p className="skill-name">Cyber Security</p>
    //               </div>
    //
    //           </Swiper>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <div className="skills">
        <div className="container skills-page" id="Skills">
          <div className="skills-title">
            <h3>Skills</h3>
            <p>you can see my skills here</p>
          </div>
          <div className="skills-carousel">
            <Carousel
              responsive={responsive}
              infinite={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              className="owl-carousel owl-theme "
            >
              <div>
                <ProgressBar progressNumber="85" circleAttribute="c1" />
                <p className="skill-name">Data Science</p>
              </div>

              <div>
                <ProgressBar progressNumber="95" circleAttribute="c2" />
                <p className="skill-name">FrontEnd Development</p>
              </div>

              <div>
                <ProgressBar progressNumber="90" circleAttribute="c3" />
                <p className="skill-name">BackEnd Development</p>
              </div>

              <div>
                <ProgressBar progressNumber="90" circleAttribute="c4" />
                <p className="skill-name">FullStack Web Development</p>
              </div>

              <div>
                <ProgressBar progressNumber="55" circleAttribute="c5" />
                <p className="skill-name">Cyber Security</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Skills;

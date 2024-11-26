import React from "react";
import css from "./Testimonials.module.css";
import Hero from "../../assets/testimonialHero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../data/testimonials";
const Testinomials = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>top rated</span>
          <span>
            seedily say has suitable disposal and boy. exercise joy man children
            rejoiced{" "}
          </span>
        </div>
        <img src={Hero} alt="hero img" width={400} />
        <div className={css.container}>
          <span>100k</span>
          <span>happy customers with us </span>
        </div>
      </div>

      <div className={css.reviews}>Reviews</div>

      <div className={css.carousel}>
        <Swiper
      
      
      breakpoints={{
        640:{
          slidesPerView:2,
        },
        0:{
          slidesPerView:1
        }
      }}
        slidesPerGroup={1}
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        className={css.tCarousel}
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide>
              <div className={css.testimonial}>
                <img src={testimonial.image} alt="" />
                <span>{testimonial.comment}</span>
                <hr style={{ width:"80%"}}/>
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testinomials;

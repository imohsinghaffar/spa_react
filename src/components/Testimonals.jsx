import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'; // Pagination styles

const Testimonials = ({ testimonialsData }) => {
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center lg:pt-20 pb-10">
        <div className="flex flex-col items-center gap-4 justify-center pb-10">
          <h1 className="text-3xl px-10  lg:text-4xl font-medium text-center">
            What our customers have to say
          </h1>
          <p className="text-center text-md lg:text-lg text-[#6e6e6e]">
            Lorem ipsum dolor sit amet, tincidunt vestibulum.
          </p>
        </div>
      </div>

        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true, // Allow clicking on pagination dots
            el: '.swiper-pagination',
            dynamicBullets: 3,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2},
            780: { slidesPerView: 2},
            1024: { slidesPerView: 3},
            1280: { slidesPerView: 3},
            1536: { slidesPerView: 3},
          }}  

          className="flex w-6xl"   
        >

          {testimonialsData.map((testimonial, index) => (

            <SwiperSlide key={index}>
              <div className="flex flex-col mx-10 lg:mx-0 lg:w-90 content-center items-center py-10 rounded-md bg-[#f3f7fb] transition-all duration-300">
                <img  
                  className="mb-3 w-20 h-20 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.clientName}
                />
                <p className="px-8 text-md text-[#6e6e6e] text-center">{testimonial.desc}</p>
                <div className={`${testimonial.divider}`}><hr /></div>
                <h1 className="text-xl font-medium">{testimonial.clientName}</h1>
                <p className="text-[#6e6e6e] text-lg font-medium">{testimonial.designation}</p>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
    </>
  );
};

export default Testimonials;
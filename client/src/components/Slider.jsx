import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import sample images (replace with real content)
import slide3 from "../assets/boy.png";
import slide1 from "../assets/home1.png";
import slide2 from "../assets/about.png";

const Slider = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Let's Learn & Play! 🎉
      </h2>

      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full rounded-lg "
      >
        <SwiperSlide>
          <div className="flex flex-col items-center rounded-lg p-6 hover:shadow-lg">
            <img
              src={slide1}
              alt="Math Fun"
              className="w-[110%] h-full  object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4">Math is Fun! ➕➖</h3>
            <p className="text-gray-600 text-center mt-2">
              Count, add, and play with numbers!
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center  rounded-lg p-6 hover:shadow-lg">
            <img
              src={slide2}
              alt="English Adventure"
              className="w-[110%] h-full  object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4">Story Time 📖</h3>
            <p className="text-gray-600 text-center mt-2">
              Read, write & tell fun stories!
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center  rounded-lg p-6 hover:shadow-lg">
            <img
              src={slide3}
              alt="Science Fun"
              className="w-[110%] h-full  object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4">Magic Science 🧪</h3>
            <p className="text-gray-600 text-center mt-2">
              Fun experiments & cool discoveries!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../../assets/Features/img1.webp'
import img2 from '../../../assets/Features/img2.webp'
import img3 from '../../../assets/Features/img3.jpg'
import img4 from '../../../assets/Features/img4.jpg'
import img5 from '../../../assets/Features/img5.webp'
import img6 from '../../../assets/Features/img6.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import SectionTitle from "../../../Componenets/SectionTitle/SectionTitle";


const Features = () => {
    return (
        <section>
            <SectionTitle
            heading={"What we are offering"}
            ></SectionTitle>
            <div className="w-5/6 mx-auto">

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper my-28"
                >
                    <SwiperSlide> <img className="h-[150px] lg:h-[500px] w-full" src={img1} alt="" />
                        <h3 className="lg:text-3xl text-center -mt-12 text-white">Football Field</h3>
                    </SwiperSlide>
                    <SwiperSlide> <img className="h-[150px] lg:h-[500px] w-full" src={img2} alt="" />
                        <h3 className="lg:text-3xl text-center -mt-12">Running Court</h3></SwiperSlide>
                    <SwiperSlide> <img className="h-[150px] lg:h-[500px] w-full" src={img3} alt="" />
                        <h3 className="lg:text-3xl text-center -mt-12 text-white">Swimming pool</h3></SwiperSlide>
                    <SwiperSlide> <img className="h-[150px] lg:h-[500px] w-full" src={img4} alt="" />
                        <h3 className="lg:text-3xl text-center -mt-12">Hockey Court</h3></SwiperSlide>
                    <SwiperSlide> <img className="h-[150px] lg:h-[500px] w-full" src={img5} alt="" />
                        <h3 className="lg:text-3xl text-center -mt-12">Basketball Court</h3></SwiperSlide>
                    <SwiperSlide> <img className="h-[150px] lg:h-[500px] w-full" src={img6} alt="" />
                        <h3 className="lg:text-3xl text-center -mt-12">Cricket</h3></SwiperSlide>

                </Swiper>
            </div>
        </section>
    );
};

export default Features;
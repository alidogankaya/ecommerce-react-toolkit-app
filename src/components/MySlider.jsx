
import React from "react";
import Slider from "react-slick";



export default function MySlider() {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        adaptiveHeight: true,
        arrows: false,
        // prevArrow: <SamplePrevArrow />,
        //nextArrow: <SampleNextArrow />
    };
    return (

        <Slider {...settings} className=" shadow-xl">

            <div className="relative !flex flex-col md:flex-row items-center bg-white p-4">
                <div className="w-full md:w-1/4 flex justify-center md:justify-end">
                    <img className="max-w-full h-auto" src="https://cdn.sorsware.com/oxxo/ContentImages/Product/23k/23KOX-POPKOLSLIM/slim-fit-gomlek_white-beyaz_1_detay.jpg" alt="" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left p-4 md:ml-20">
                    <h1 className="text-2xl md:text-5xl mb-4">Yeni Sezon Büyük İndirimler 1</h1>
                    <h3 className="text-base md:text-xl font-light text-gray-700 mb-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quam, minus nemo facere esse nesciunt, sapiente fugit, beatae vel doloribus ea officia maxime eos accusamus quos reiciendis cupiditate ipsum? Beatae.
                    </h3>
                    <div className="flex justify-center md:justify-start">
                        <div className="border rounded-full px-6 py-2 bg-slate-200 cursor-pointer shadow-lg">İncele</div>
                    </div>
                </div>
            </div>

            <div className="relative !flex flex-col md:flex-row  items-center bg-white p-4">
                <div className="w-full md:w-1/4 !flex justify-center md:justify-end">
                <img className="max-w-full h-auto" src="https://cdn.sorsware.com/oxxo/ContentImages/Product/23k/23KOX-POPKOLSLIM/slim-fit-gomlek_white-beyaz_1_detay.jpg" alt="" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left p-4 md:ml-20">
                    <h1 className="text-2xl md:text-5xl mb-4">Yeni Sezon Büyük İndirimler</h1>
                    <h3 className="text-base md:text-xl font-light text-gray-700 mb-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quam, minus nemo facere esse nesciunt, sapiente fugit, beatae vel doloribus ea officia maxime eos accusamus quos reiciendis cupiditate ipsum? Beatae.
                    </h3>
                    <div className="flex justify-center md:justify-start">
                    <div className="border rounded-full px-6 py-2 bg-slate-200 cursor-pointer shadow-lg">İncele</div>
                    </div>
                </div>
            </div>

        </Slider>

    );
}
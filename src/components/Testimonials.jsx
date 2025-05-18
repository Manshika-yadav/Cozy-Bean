import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';


const TestimonialData = [{
    id: 1,
    name: "Nitya",
    text: "The beans are clearly top-notch. Every cup is smooth, aromatic, and full of flavor. Truly good quality.",
    img: "https://picsum.photos/101/101",
},
{
    id: 2,
    name: "Anushka",
    text: "Tried Cappuccino and it was heavenly. Quick service and great quality!",
    img: "https://picsum.photos/102/102",
},
{
    id: 3,
    name: "John",
    text: "Their espresso is strong without being bitter - just the right balance. You can tell the quality is a priority here.",
    img: "https://picsum.photos/104/104",
},
{
    id: 5,
    name: "Manshika",
    text: "Silky smooth texture, deep flavor, and always the perfect temperature. Truly a treat for coffee enthusiasts.",
    img: "https://picsum.photos/103/103",
},
];

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };
    return (
        <div id='testimonial' className='py-20'>
            <div className='max-w-7xl mx-auto'>
                {/* header section */}
                <div className='mb-10'>
                    <motion.h1 
                     initial={{opacity:0,y:100}}
                     whileInView={{opacity:1,y:0}}
                     transition={{duration:1.5, delay:0.5}}
                    className='text-center text-amber-900 text-4xl font-bold font-cursive'>Testimonials</motion.h1>
                </div>
                {/* Testimonials cards */}
                <motion.div
                 initial={{opacity:0,scale:0.5}}
                 whileInView={{opacity:1,scale:1}}
                 transition={{duration:1.5, delay:0.5}}
                >
                    <Slider {...settings}>
                        {TestimonialData.map((data) => (
                            <div className='my-6'>
                                <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-amber-900/10 relative'>
                                    <div className='mb-4'>
                                        <img src={data.img} alt="" className='rounded-full w-20 h-20' />
                                    </div>
                                    {/* content section */}
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3'>
                                            <p className='text-xs text-gray-500 '>{data.text}</p>
                                            <h1 className='text-xl font-bold text-black/80 font-cursive2'>{data.name}</h1>
                                        </div>
                                    </div>
                                    <p className="text-amber-900/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>

        </div>
    )
}

export default Testimonials

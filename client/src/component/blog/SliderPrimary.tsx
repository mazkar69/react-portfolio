
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import PostCard from "./PostCard";
import { PostType, SliderType } from "../../type/Type";
import { useGlobalContext } from "../../context";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderPrimary({posts}:SliderType) {
    const {isDark} = useGlobalContext();
    // console.log(posts)
    return (
        <Section className="section" isDark={isDark}>
            <div className="container">
                <h2 className="common-heading">Tranding Blog Post's</h2>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    breakpoints={{
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 50,
                        },
                      }}
                    className="mySwiper"
                >
                    {
                       posts && posts.map((post:PostType)=>{
                            return <SwiperSlide key={post._id}><PostCard post={post} /></SwiperSlide>
                        })
                    }


                </Swiper>
            </div>
        </Section>
    );
}


const Section = styled.section<{isDark?:boolean}>`
    background-color: ${(props:{isDark?:boolean})=>{
        return !props.isDark ? "var(--bg)" : "var(--darkBg)";
    }};

.common-heading{
    color:${(props:{isDark?:boolean})=>{
        return !props.isDark ? "" : "white";
    }} !important;
}

`
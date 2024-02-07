import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

const Logos = () => {
    const logos = [
        { image: "/images/glen_moray_logo.png" },
        { image: "/images/parrot_logo.png" },
        { image: "/images/gibson_black.png" },
        { image: "/images/camotelli_logo.png" },
        { image: "/images/glen_moray_logo.png" },
        { image: "/images/parrot_logo.png" },
        { image: "/images/gibson_black.png" },
        { image: "/images/camotelli_logo.png" },
    ]
    return (
        <>
            <section className='flex justify-between items-center'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    className=' p-8'
                >
                    {logos.map((logo) => (
                        <SwiperSlide>
                            <div>
                                <img src={logo.image} alt="Logo" className='object-cover' />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}

export default Logos

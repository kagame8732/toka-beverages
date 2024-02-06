import { Swiper, SwiperSlide } from 'swiper/react';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Products from '../components/Products';



type home = {
  image: string,
  imageTitle: string
}


const Welcome = () => {

  const welcomeImages = [
    {
      image: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/background.png')",
      imageTitle: "/images/gibson-white.png"
    },
    {
      image: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/background.png')",
      imageTitle: "/images/gibson_black.png"
    },
    {
      image: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/background.png')",
      imageTitle: "/images/gibson-white.png"
    }
  ]

  return (
    <>
      <section className='h-screen font-poppins'>
        <Swiper

          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide"
          }
          }

          modules={[Navigation]} className="mySwiper h-screen relative group ">
          {welcomeImages.map((image: home, index: number) => (
            <SwiperSlide>
              <div className='w-full h-screen bg-no-repeat py-20 bg-cover' style={{ backgroundImage: image.image }} key={index}>
                <div className='flex items-center h-screen justify-center flex-col gap-y-10'>
                  <img src={image.imageTitle} />
                  <button className='px-12 py-2 text-white border hover:bg-white hover:text-black transition duration-300  ease-in-out p- border-white transparent'>Shop Now</button>
                </div>

              </div>
            </SwiperSlide>
          ))}
          <div className='absolute z-10 top-[50%] group-hover:left-0 -left-[23rem] cursor-pointer button-next-slide bg-white w-[40px] h-[40px] grid place-items-center'>
            <GoArrowLeft />
          </div>
          <div className=' absolute z-10 top-[50%] group-hover:right-0 -right-[23rem] cursor-pointer button-prev-slide bg-white w-[40px] h-[40px] grid place-items-center'>
            <GoArrowRight />
          </div>
        </Swiper>
      </section>
      <section className='flex  items-center py-4 justify-between font-poppins'>
        <div className='flex w-[48%] h-[400px] justify-center items-center bg-gradient-to-r from-gray-100 via-gray-100 to-gray-200 p-8'>
          <div className='flex flex-col'>
            <img src="/images/gibson_black.png" alt="" />
            <Link to="#">
              <button className='text-2xl pt-10 text-[#812929] font-bold uppercase'>Shop Now</button>
            </Link>
          </div>
          <img src="/images/gibson.png" alt="" />
        </div>
        <div className=' w-[48%] h-[400px] flex justify-center items-center bg-gradient-to-r from-gray-100 via-gray-100 to-gray-200 p-8'>
          <div>
            <h1 className='text-4xl font-extrabold uppercase w-[5%] text-center'>
              glen <br /> moray
            </h1>
            <Link to="#">
              <button className='text-2xl pt-10 text-[#812929] font-bold uppercase'>Shop Now</button>
            </Link>
          </div>
          <img src='/images/GlenMoray.png' alt='GlenMoray bottle' />
        </div>
      </section>
      <Products />
    </>
  )
}

export default Welcome

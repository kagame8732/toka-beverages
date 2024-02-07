import Products from '../components/Products';
import Logos from '../components/Logos';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';


type home = {
  image: string,
  imageTitle: string
}

const Welcome = () => {

  const welcomeImages = [
    {
      image: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url('/images/background.png')",
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

  const images = [
    { image: "/images/img1.png" },
    { image: "/images/img2.png" },
    { image: "/images/img3.png" },
    { image: "/images/img4.png" }
  ]

  return (
    <>
      <section className='h-screen p-[30px] font-poppins'>
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
                <div className='flex justify-center items-center h-screen flex-col gap-y-10'>
                  <img src={image.imageTitle} alt='Background-image' />
                  <button className='px-12 py-2 text-white border hover:bg-white hover:text-black transition duration-300 ease-in-out p- border-white transparent'>Shop Now</button>
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
      <section className='flex flex-row flex-wrap mt-5 items-center p-6 justify-around font-poppins gap-8'>
        <div className='flex w-[48%] h-[350px] justify-center items-center bg-gradient-to-r from-gray-100 via-gray-100 to-gray-200 p-8'>
          <div className='flex flex-col'>
            <img src="/images/gibson_black.png" alt="Gibson-black" className='w-[150px] object-cover'/>
            <Link to="#">
              <button className='text-md pt-10 text-[#812929] font-bold uppercase'>Shop Now</button>
            </Link>
          </div>
          <div>
          <img src="/images/gibson.png" alt="Gibson-bottle" className='object-cover w-[150px]' />
          </div>
        </div>
        <div className='flex w-[48%] h-[350px] justify-center items-center bg-gradient-to-r from-gray-100 via-gray-100 to-gray-200 p-8'>
          <div>
            <h1 className='text-2xl font-extrabold uppercase text-center'>
              glen <br /> moray
            </h1>
            <Link to="#">
              <button className='text-md pt-10 text-[#812929] font-bold uppercase'>Shop Now</button>
            </Link>
          </div>
          <div>
          <img src='/images/GlenMoray.png' alt='GlenMoray bottle' />
          </div>
        </div>
      </section>
      <Products />
      <section className="mt-4 p-4">
        <p className="text-md text-center font-poppins p-4">Beverages we provide
          <span className=" capitalize block font-semibold text-2xl">Our Brands</span></p>
            <Logos/>
        <section className='flex flex-wrap justify-around p-4 gap-4'>
          {images.map((img) => (
            <img src={img.image} alt="" />
          ))}
        </section>
      </section>
    </>
  )
}

export default Welcome

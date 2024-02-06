import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Products = () => {

  const products = [
    {
      image: '/images/Gibsons-orange.png',
      name: 'Gibson’s Blood Orange',
      price: 'RWF 35,500'
    },
    {
      image: '/images/GIBSON’S_BOTANICAL.png',
      name: 'Gibson’s Botanical',
      price: 'RWF 75,500'
    },
    {
      image: '/images/pngwing1.png',
      name: 'Glen Moray scotch wisky',
      price: 'RWF 105,500'
    },
    {
      image: '/images/pirlino.png',
      name: 'Perlino Presecco Rose',
      price: 'RWF 50,000'
    },
  ]


  return (
    <>
      <section className='font-poppins'>
        <div>
          <p className=' text-center font-medium mt-5'>Taste for yourself
            <span className='text-3xl block font-bold mb-5'>Our Best Seller</span></p>
        </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className=""
          >
            <SwiperSlide>
              <div className='flex justify-center items-center'>
                <div className=''>
                  <img src='/images/gibson_pink-1.png' alt="pink gibson" className='block w-full h-full object-cover' />
                </div>
                <div className=' bg-gray-100 h-[250px] mt-10 p-5 '>
                  <p className=' text-xl font-bold'>Gibson’s Pink</p>
                  <p className=' opacity-60 text-sm'>Lorem ipsum dolor sit<br /> amet consectetur.<br /> Fermentum.
                    <span className='block mt-3'>RWF 30,000</span></p>
                  <button className=' text-red-700 text-sm font-semibold uppercase hover:bg-red-500 hover:text-white p-2 flex items-center'>Shop Now<img src="/images/Line.png" alt="" className='ml-2' /></button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex justify-center items-center'>
                <div className=''>
                  <img src='/images/whisky-glenmoray-packshot 1.png' alt="Glenmoray whiskey" className='block w-full h-full object-cover' />
                </div>
                <div className=' bg-gray-100 h-[250px] mt-10 p-5 '>
                  <p className=' text-xl font-bold'>Glen Moray</p>
                  <p className=' opacity-60 text-sm'>Lorem ipsum dolor sit<br /> amet consectetur.<br /> Fermentum.
                    <span className='block mt-3'>RWF 130,000</span></p>
                  <button className=' text-red-700 text-sm font-semibold uppercase hover:bg-red-500 hover:text-white p-2 flex items-center'>Shop Now<img src="/images/Line.png" alt="" className='ml-2' /></button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex justify-center items-center'>
                <div className=''>
                  <img src='/images/gibsons_70cl.png' alt="Gibson’s Gin" className='block w-full h-full object-cover' />
                </div>
                <div className=' bg-gray-100 h-[250px] mt-10 p-5 '>
                  <p className=' text-xl font-bold'>Gibson’s Gin</p>
                  <p className=' opacity-60 text-sm'>Lorem ipsum dolor sit<br /> amet consectetur.<br /> Fermentum.
                    <span className='block mt-3'>RWF 50,000</span></p>
                  <button className=' text-red-700 text-sm font-semibold uppercase hover:bg-red-500 hover:text-white p-2 flex items-center'>Shop Now<img src="/images/Line.png" alt="" className='ml-2' /></button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex justify-center items-center'>
                <div className=''>
                  <img src='/images/gibson_pink-1.png' alt="pink gibson" className='block w-full h-full object-cover' />
                </div>
                <div className=' bg-gray-100 h-[250px] mt-10 p-5 '>
                  <p className=' text-xl font-bold'>Gibson’s Pink</p>
                  <p className=' opacity-60 text-sm'>Lorem ipsum dolor sit<br /> amet consectetur.<br /> Fermentum.
                    <span className='block mt-3'>RWF 30,000</span></p>
                  <button className=' text-red-700 text-sm font-semibold uppercase hover:bg-red-500 hover:text-white p-2 flex items-center'>Shop Now<img src="/images/Line.png" alt="" className='ml-2' /></button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex justify-center items-center'>
                <div className=''>
                  <img src='/images/whisky-glenmoray-packshot 1.png' alt="Glenmoray whiskey" className='block w-full h-full object-cover' />
                </div>
                <div className=' bg-gray-100 h-[250px] mt-10 p-5 '>
                  <p className=' text-xl font-bold'>Glen Moray</p>
                  <p className=' opacity-60 text-sm'>Lorem ipsum dolor sit<br /> amet consectetur.<br /> Fermentum.
                    <span className='block mt-3'>RWF 130,000</span></p>
                  <button className=' text-red-700 text-sm font-semibold uppercase hover:bg-red-500 hover:text-white p-2 flex items-center'>Shop Now<img src="/images/Line.png" alt="" className='ml-2' /></button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex justify-center items-center'>
                <div className=''>
                  <img src='/images/gibsons_70cl.png' alt="Gibson’s Gin" className='block w-full h-full object-cover' />
                </div>
                <div className=' bg-gray-100 h-[250px] mt-10 p-5'>
                  <p className=' text-xl font-bold'>Gibson’s Gin</p>
                  <p className=' opacity-60 text-sm'>Lorem ipsum dolor sit<br /> amet consectetur.<br /> Fermentum.
                    <span className='block mt-3'>RWF 50,000</span>
                  </p>
                  <button className=' text-red-700 text-sm font-semibold uppercase hover:bg-red-500 hover:text-white p-2 flex items-center'>Shop Now<img src="/images/Line.png" alt="" className='ml-2' /></button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
      </section>
      <section className='font-poppins mt-5'>
        <p className='text-center font-medium'>Explore your taste buds <span className='text-3xl block font-bold mb-5'>Some of our Liquors </span></p>
        <section className='flex justify-around items-center'>
          {products.map((product) => (
            <div className=' bg-slate-200 grid place-items-center p-5 w-[300px] h-[320px]'>
              <img src={product.image} alt="Bottle" className='grid place-items-center' />
              <p className='text-md font-semibold'>{product.name}</p>
              <p className='text-[#812929] font-semibold'>{product.price}</p>
            </div>
          ))}
        </section>
        <div className='flex justify-center items-center mt-5'>
          <button className='capitalize px-12 py-2 text-[#812929] border-2 hover:bg-[#812929] hover:text-white transition duration-300  ease-in-out border-[#812929]'>see more</button>
        </div>
      </section>
    </>
  )
}

export default Products

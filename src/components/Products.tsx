import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';


type Products = {
  image: string;
  name: string;
  price: string;
}
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
    {
      image: '/images/pirlino.png',
      name: 'Perlino Presecco Rose',
      price: 'RWF 50,000'
    },
    {
      image: '/images/pngwing1.png',
      name: 'Glen Moray scotch wisky',
      price: 'RWF 105,500'
    },
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


  ]

  const imageSlider = [
    {
      image: "/images/gibson_pink-1.png",
      name: "Gibson’s Pink",
      description: "Lorem ipsum dolor sit amet consectetur. Fermentum.",
      price: "RWF 30,000"
    },
    {
      image: "/images/whisky-glenmoray-packshot 1.png",
      name: "Glen Moray",
      description: "Lorem ipsum dolor sit amet consectetur. Fermentum.",
      price: "RWF 130,000"
    },
    {
      image: "/images/gibsons_70cl.png",
      name: "Gibson’s Gin",
      description: "Lorem ipsum dolor sit amet consectetur.Fermentum.",
      price: "RWF 50,000"
    },
    {
      image: "/images/gibson_pink-1.png",
      name: "Gibson’s Pink",
      description: "Lorem ipsum dolor sit amet consectetur. Fermentum.",
      price: "RWF 30,000"
    },
    {
      image: "/images/whisky-glenmoray-packshot 1.png",
      name: "Glen Moray",
      description: "Lorem ipsum dolor sit amet consectetur. Fermentum.",
      price: "RWF 130,000"
    },
    {
      image: "/images/gibsons_70cl.png",
      name: "Gibson’s Gin",
      description: "Lorem ipsum dolor sit amet consectetur.Fermentum.",
      price: "RWF 50,000"
    },
  ]

  const [displayedProducts, setDisplayedProducts] = useState<Products[]>(products.slice(0, 4));
  const [slidesPerView, setSlidesPerView] = useState<number>(3);
  useEffect(() => {
    const handleResize = () => {
      const newSlidesPerView = window.innerWidth < 768 ? 1 : 3;
      setSlidesPerView(newSlidesPerView);
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSeeMore = () => {
    const remainingProducts = products.slice(displayedProducts.length, displayedProducts.length + 4);
    setDisplayedProducts((prevProducts) => [...prevProducts, ...remainingProducts]);
  };

  return (
    <div className='p-10'>
      <section className='font-poppins'>
        <div>
          <p className=' text-center font-medium mt-5'>Taste for yourself
            <span className='text-3xl block font-bold mb-5'>Our Best Seller</span>

          </p>
        </div>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwipper"
        >
          {imageSlider.map((imgSlider, index) => (
            <SwiperSlide>
              <div key={index} className='flex justify-center items-center pb-10'>
                <div className='z-50'>
                  <img src={imgSlider.image} alt="pink gibson" className='block w-full h-full object-cover' />
                </div>
                <div className=' ml-[-40px] bg-gray-100 h-[250px] mt-10 p-10'>
                  <p className=' text-xl font-bold'>{imgSlider.name}</p>
                  <p className=' opacity-60 text-sm'>{imgSlider.description}
                    <span className='block mt-3'>{imgSlider.price}</span></p>
                  <button className=' text-red-700 text-sm font-semibold uppercase hover:text-red-400 transition duration-300  p-2 flex justify-center items-center'>Shop Now<img src="/images/Line.png" alt="" className='ml-2' /></button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className='font-poppins mt-5'>
        <p className='text-center font-medium'>Explore your taste buds
          <span className='text-3xl block font-bold mb-5'>Some of our Liquors</span>
        </p>
        <section className='flex justify-center items-center flex-wrap gap-4'>
          {displayedProducts.map((product, index) => (
            <div key={index} className=' bg-slate-200 grid place-items-center p-5 w-[280px] h-[320px]' >
              <img src={product.image} alt="Bottle" className='grid place-items-center' />
              <p className='text-md font-semibold'>{product.name}</p>
              <p className='text-[#812929] font-semibold'>{product.price}</p>
            </div>
          ))}
        </section>
        <div className='flex justify-center items-center mt-5'>
          <button className='capitalize px-12 py-2 text-[#812929] border-2 hover:bg-[#812929] hover:text-white transition duration-300  ease-in-out border-[#812929]' onClick={handleSeeMore}>see more</button>
        </div>
      </section>
    </div>
  )
}

export default Products

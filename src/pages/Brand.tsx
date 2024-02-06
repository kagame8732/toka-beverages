
const Brand = () => {

  const logos = [
    { image: "/images/glen_moray_logo.png" },
    { image: "/images/parrot_logo.png" },
    { image: "/images/gibson_black.png" },
    { image: "/images/camotelli_logo.png" }
  ]

  const images = [
    { image: "/images/img1.png" },
    { image: "/images/img2.png" },
    { image: "/images/img3.png" },
    { image: "/images/img4.png" }
  ]

  return (
    <>
      <section className="mt-4 p-4">
        <p className="text-md text-center font-poppins p-4">Beverages we provide 
        <span className=" capitalize block font-bold text-2xl">Our Brands</span></p>
        <section className='flex justify-between'>
          {logos.map((logo) => (
            <img src={logo.image} alt="" />
          ))}
        </section>
        <section className='flex justify-around'>
          {images.map((img) => (
            <img src={img.image} alt="" />
          ))}
        </section>
      </section>
    </>
  )
}

export default Brand

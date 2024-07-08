import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ImageCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const images = ['/imageCarrousel2.webp', '/imageCarrousel3.webp'];

  return (
    <div className='relative w-full overflow-hidden bg-black'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='relative max-h-[90vh]'>
            <div className='flex justify-center items-center h-[90vh] overflow-hidden'>
              <img
                src={image}
                alt={`carousel-image-${index}`}
                className='w-full h-full object-cover rounded-[20px]'
              />
            </div>
            <div className='absolute inset-0 flex items-center justify-center text-white text-center'>
              <h2 className='m-6 text-2xl md:text-4xl lg:text-7xl font-bold'>
                {index === 0
                  ? 'Los mejores productos en YupiTienda!'
                  : 'El mejor Bazar de la ciudad'}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

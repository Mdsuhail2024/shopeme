import React from 'react'
import Slider from "react-slick"

const TestimonialsData = [ 
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam amet dicta possimus veritatis aliquam in enim molestias. Odit, ad. Optio natus, voluptatibus aliquid exercitationem aut ex.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Honey",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam amet dicta possimus veritatis aliquam in enim molestias. Odit, ad. Optio natus, voluptatibus aliquid exercitationem aut ex.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Sharma",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam amet dicta possimus veritatis aliquam in enim molestias. Odit, ad. Optio natus, voluptatibus aliquid exercitationem aut ex.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Paddy cultivation",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam amet dicta possimus veritatis aliquam in enim molestias. Odit, ad. Optio natus, voluptatibus aliquid exercitationem aut ex.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sun Shine",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam amet dicta possimus veritatis aliquam in enim molestias. Odit, ad. Optio natus, voluptatibus aliquid exercitationem aut ex.",
    img: "https://picsum.photos/105/105",
  },
]

const Testimonials = () => {
  var Settings = {
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
    // dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
          infinite: true,
        },
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
        },
      }
    ],
  };
  


  return (
    <div className='py-10 mb-10 '>
      <div className='container'>
      <div className="text-center mb-10 min-w-[600px] mx-auto bg-red-500">
   
          <p data-aos="fade-up" className='text-sm text-primary text-center'>
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className='text-3xl font-bold text-center'>
            Testomonials
          </h1>
          <p data-aos="fade-up" className='text-xs text-gray-400 text-center'> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, magni qui assumenda neque consequuntur libero ipsam dolore hic obcaecati. Totam, perspiciatis ut!
          </p>
      
        </div>
        <div data-aos="zoom-in" className=''>
        <Slider {...Settings}>
          {TestimonialsData.map((data) => (
            <div className="my-6">
              <div key={data.id} className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative">
              <div className='mb-4'>
                <img src={data.img} alt="" className='rounded-full w-20 h-20' />
              </div>
                <div className='flex flex-col items-center gap-4'>
                  <div className="space-y-3">
                    <p className='text-xs dark:text-slate-300 text-gray-500'>
                    {data.text}
                    </p>
                    <h1 className="text-xl font-bold dark:text-slate-300 text-black/80  dark:text-light">{data.name}</h1>
                  </div>
                </div>
                <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'></p>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  )

}

export default Testimonials
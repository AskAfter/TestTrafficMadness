import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import CaseCard from '../CaseCard/CaseCard';
import s from './CaseCardList.module.css';
import { useEffect, useState } from 'react';

const CaseCardList = ({ cases }) => {
  const [spaceBetween, setSpaceBetween] = useState(8);
  const [swiperWidth, setSwiperWidth] = useState(311);
  const slidesCount = cases.length;
  const dragWidth = swiperWidth / slidesCount;
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setSwiperWidth(955);
        setSpaceBetween(20);
      } else {
        setSwiperWidth(311);
        setSpaceBetween(8);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className={s.swiperWrapper}>
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={spaceBetween}
        slidesPerView={'auto'}
        // loop={true}
        // loopAdditionalSlides={10}
        scrollbar={{
          draggable: true,
          hide: false,
        }}
        className={s.swiperContainer}
      >
        {cases.map(({ name, time, id, profit, goal, date }) => (
          <SwiperSlide key={id} className={s.swiperSlide}>
            <CaseCard
              name={name}
              time={time}
              profit={profit}
              goal={goal}
              date={date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <style>{`
        .swiper-scrollbar-drag {
          width: ${dragWidth}px !important;
        }
      `}</style>
    </div>
  );
};

export default CaseCardList;

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import CaseCard from '../CaseCard/CaseCard';
import s from './CaseCardList.module.css';

const CaseCardList = ({ cases }) => {
  const slidesCount = cases.length;
  const swiperWidth = 311;
  const dragWidth = swiperWidth / slidesCount;

  return (
    <div className={s.swiperWrapper}>
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={8}
        slidesPerView={'auto'}
        // loop={true}
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

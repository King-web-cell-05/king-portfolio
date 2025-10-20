'use client';

import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

interface WorkSliderBtnsProps {
  containerStyles?: string; // optional, if not always passed
  btnStyles?: string;
  iconStyles?: string;
}

const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({
  containerStyles = '',
  btnStyles = '',
  iconStyles = '',
}) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button onClick={() => swiper.slidePrev()} className={btnStyles}>
        <PiCaretLeftBold className={iconStyles} />
      </button>

      <button onClick={() => swiper.slideNext()} className={btnStyles}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;

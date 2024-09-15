import React, { useState } from 'react';
import Basket from './Basket';
import Button from './Button';
import leftArrow from '../assets/images/left-arrow.png';
import rightArrow from '../assets/images/right-arrow.png';
import './Style.css';

export default function AppleCounter() {
  const totalCount = 10;
  const [Rightcount, setRightcount] = useState(0);
  const [Leftcount, setLeftcount] = useState(totalCount);

  const leftClick = () => {
    if (Rightcount > 0) {
      setRightcount(Rightcount - 1);
      setLeftcount(Leftcount + 1); // Corrected from setLeftCount to setLeftcount
    }
  };

  const rightClick = () => {
    if (Leftcount > 0) {
      setRightcount(Rightcount + 1);
      setLeftcount(Leftcount - 1); // Corrected from setLeftCount to setLeftcount
    }
  };

  return (
    <section>
      <Basket count={Leftcount} name="basket 1" />
      <Button onClick={leftClick} image={leftArrow} />
      <Button onClick={rightClick} image={rightArrow} />
      <Basket count={Rightcount} name="basket 2" />
    </section>
  );
}
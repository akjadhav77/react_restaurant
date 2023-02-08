import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="Chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h3 className='headtext__cormorant'>What We Believe In</h3>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="qoute" />
          <p className='p__opensans'>ddoijads adfklj lakjdf kjwoijlsn ljadf kj lajdfjaoi aijfij a;lkdjfa jakdjf</p>
        </div>
        <p className='p__opensans'>akjdlskjf klajdslksjf klajdf kjadk a lkjadfalkdjfalk aklsjf ljalkdjsf kjalkjd kajksdjlf na kajsdklalkdfl alkdfl kalkdjf adklfjalk falkdjfalk aklsjf ljalkdjsf kjalkjd kajksdjlf na kajsdklalkdfl alkdfl kalkdjf adklfjalk</p>
      </div>

      <div className='app__chef-sign'>
        <p>Nik Kumar</p>
        <p className='p__opensans'>Chef</p>
        <img src={images.sign} alt="" />
      </div>

    </div>

  </div>
);

export default Chef;

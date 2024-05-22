'use client';

import Lottie from 'lottie-react';
import Controller from '../assets/controller.json';

export default function ControllerAnim() {
  return (
    <div className='w-[40%] lg:w-[30%] mx-auto'>
      <Lottie animationData={Controller} />
    </div>
  );
}

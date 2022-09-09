import React from 'react';

const BrandSection = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
    <div className="my-auto">
      <img
        src="/assets/images/code.jpg"
        className="text-right inline-block max-w-full w-[26rem] shadow-2xl rounded-xl"
        alt="Catify logo"
      />
    </div>
    <div className="max-w-full my-auto">
      <div className="w-[25rem]">
        <h2 className="montserrat text-7xl leading-relaxed">Some title</h2>
        <p className="text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
      </div>
    </div>
  </div>
);

export default BrandSection;

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ImageWithLoader from '../Loaders/ImageWithLoader';

const SliderComponentBuy = ({ images, PropertyId }) => {
    // Remove duplicates by converting to a Set and then back to an array
    const uniqueImages = [...new Set(images)];
    const [mainImage, setMainImage] = useState(uniqueImages[0]); // Set the initial main image
    const [startIdx, setStartIdx] = useState(0); // To handle visible thumbnails

    console.log("Property ID is " + PropertyId);
    console.log("Image link is ");
    console.log(`${PropertyId}${mainImage}`);

    const handleThumbnailClick = (image) => {
        setMainImage(image);
    };

    const handleNext = () => {
        if (startIdx + 4 < uniqueImages.length) setStartIdx(startIdx + 1); // Move forward if there are more images
    };

    const handlePrev = () => {
        if (startIdx > 0) setStartIdx(startIdx - 1); // Move backward if not at the beginning
    };

    return (
        <div className='flex flex-col gap-x-6 mt-2 w-[687px]'>
            {/* Main Picture */}
            <div className='w-[687px]'>
                <div className='relative rounded-3xl overflow-hidden h-full pb-2'>
                    <div className='w-full h-full rounded-2xl overflow-hidden'>
                        <img className='w-full  object-contain' src={`${mainImage}`} alt="Main" />
                    </div>
                </div>
            </div>

            {/* Slider Containing Thumbnails */}
            <div className='w-[687px] flex justify-center items-center gap-x-2'>
                {/* Left Arrow */}
                <button onClick={handlePrev} disabled={startIdx === 0} className="disabled:opacity-50">
                    <FaChevronLeft size={24} />
                </button>

                {/* Thumbnails */}
                <div className='flex gap-x-2'>
                    {uniqueImages.slice(startIdx, startIdx + 4).map((image, idx) => (
                        <div
                            key={idx}
                            onClick={() => handleThumbnailClick(image)}
                            className={`cursor-pointer relative w-[100px] overflow-hidden h-full rounded-xl ${mainImage === image ? 'outline-[3px] outline p-[4px] outline-[#82DFDF]' : ''
                                }`}
                        >
                            <div className='w-full h-[70px]  rounded-lg overflow-hidden'>
                                <img className='w-full h-full object-cover' src={`${image}`} alt={`Thumbnail ${idx + 1}`} />
                                {/* <ImageWithLoader url={`https://dataapi.pixxicrm.ae/${image}`}/> */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button onClick={handleNext} disabled={startIdx + 4 >= uniqueImages.length} className="disabled:opacity-50">
                    <FaChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default SliderComponentBuy;

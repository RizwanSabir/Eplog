import React from 'react';

const PatnerSection = () => {
    return (
        <>
            <div className="relative ">
                <div className="max-w-[1140px] mx-auto px-4  relative overflow-hidden pb-32">
                    <div className="flex flex-col items-center w-full justify-center mt-8 z-20">
                        <h1 className="section-title-small  text-[20px] md:text-[30px]">Trusted By</h1>

                        {/* Logo container */}
                        <div className="my-4 w-full overflow-x-auto hide-scrollbar mr-28">
                         
                            <div className="grid grid-cols-3 gap-y-5  items-center justify-items-center justify-around  mx-auto  w-[800px]  bg-slate-100 py-10 rounded-xl">
                                <div className='outline-[1px] p-2 flex justify-center items-center rounded-lg outline  h-[70px]'>
                                    <img

                                        src="https://eplogproperties.com/wp-content/uploads/2023/10/dubai-properties.svg"
                                        width="100"

                                        alt="Dubai Properties"
                                    />
                                </div>

                                <div className='outline-[1px] p-2 flex justify-center items-center rounded-lg outline  h-[70px]'>

                                    <img
                                        className="size-[70px]"
                                        src="https://eplogproperties.com/wp-content/uploads/2023/10/nakheel.svg"
                                        width="100"
                                        className="shrink-0"
                                        alt="Nakheel"
                                    />
                                </div>

                                <div className='outline-[1px] p-2 flex justify-center items-center rounded-lg outline  h-[70px]'>

                                    <img
                                        className="size-[70px]"
                                        src="https://eplogproperties.com/wp-content/uploads/2023/10/meraas.svg"
                                        width="100"
                                        className="shrink-0"
                                        alt="Meraas"
                                    />
                                </div>

                                <div className='outline-[1px] p-2 flex justify-center items-center rounded-lg outline  h-[70px]'>

                                    <img
                                        className="size-[70px]"
                                        src="https://eplogproperties.com/wp-content/uploads/2023/10/damac.svg"
                                        width="100"
                                        className="shrink-0"
                                        alt="Damac"
                                    />
                                </div>
                                <div className='outline-[1px] p-2 flex justify-center items-center rounded-lg outline  h-[70px]'>

                                    <img
                                        className="size-[70px]"
                                        src="https://eplogproperties.com/wp-content/uploads/2023/10/danube-properties.svg"
                                        width="100"
                                        
                                        alt="Danube Properties"
                                    />
                                </div>
                                <div className='outline-[1px] p-2 flex justify-center items-center rounded-lg outline  h-[70px]'>

                                    <img
                                        src="https://eplogproperties.com/wp-content/uploads/2023/10/emaar.svg"
                                        width="100"
                                        className="shrink-0"
                                        alt="Emaar"
                                    />
                                </div>
                            </div>
                        </div>

                        <img src="/Media/Patner.png" className='absolute -z-10 mt-10 h-[400px] right-0' alt="" />
                    </div>
                </div>


            </div>


        </>
    );
};

export default PatnerSection;

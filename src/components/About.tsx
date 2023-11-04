import React from "react";
import Image from "next/image";

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'AI Innovator',
        name: 'Raghav Gandhi',
        imgSrc: '/raghav.png'
    },
    {
        profession: 'Frontend Wizard',
        name: 'Krishan Sharma',
        imgSrc: '/krishan.png'
    },
    {
        profession: 'Backend Maestros',
        name: 'Gaurav Mandal',
        imgSrc: '/gaurav.png'
    },

];

const About = () => {
    return (
        <div className="flex w-full gradient-bg-services sm:py-24 justify-center " id="about">
            <div className='mx-auto max-w-5xl sm:py-4 px-4 lg:px-8 relative'>
                <h5 className='max-w-4xl text-5xl text-black t font-bold md:text-6xl lg:text-7xl'>
                    Meet our stellar team
                </h5>

                <div className="flex flex-row pr-15">
                    {postData.map((user, index) => (
                        <div key={index} className='m-7 p-6 text-center'>
                            <div className="relative bg-gradient-to-r from-slate-300 to-slate-500 rounded-full p-5">
                                <Image src={user.imgSrc} alt={`${user.name}-image`} width={200} height={200} className="inline-block m-auto" />
                                <div className="absolute right-[10px] bottom-[10px] bg-white rounded-full p-5">
                                    <Image src={'/linkedin.svg'} alt="linkedin-image" width={20} height={20} />
                                </div>
                            </div>
                            <div className="mb-0">
                                <h3 className='text-xl text-white font-dark'>{user.name}</h3>
                                <h4 className='text-sm font-normal text-white pt-1 opacity-50'>{user.profession}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
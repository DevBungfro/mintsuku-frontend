import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { HiArrowDown } from "react-icons/hi";
import { TbBrandGithub } from "react-icons/tb";
import { TbBrandTelegram } from "react-icons/tb";
import { TbBrandFirefox } from "react-icons/tb";
import { TbBrandDiscord } from "react-icons/tb";


function abbreviateNumber(value: number) {
    const suffixes = ["", "K", "M", "B", "T"];
    let suffixNum = 0;
    let number = value;

    while (number >= 1000) {
        number /= 1000;
        suffixNum++;
    }

    return `${Number(number.toPrecision(3))}${suffixes[suffixNum]}`;
}

const AnimatedLine: React.FC = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Simulate loading delay
        const timeout = setTimeout(() => {
            setLoaded(true);
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    const lineStyles: React.CSSProperties = {
        width: loaded ? '5%' : '0%', // Initial width 10%, final width 100%
        transition: 'width 0.5s ease', // Transition property, duration, and easing
        backgroundColor: '#7e5af2',
        height: '.2rem',
        borderRadius: '.10rem',
    };

    return <div style={lineStyles}></div>;
};

export default function Home() {
    const [yearsExperience, setYearsExperience] = useState(1);
    const [ticketsSolved, setTicketsSolved] = useState(1);
    const [linesOfCode, setLinesOfCode] = useState(500000);

    useEffect(() => {
        // Years of Experience
        const startYear = 2016;
        const currentYear = new Date().getFullYear();
        const maxExperience = currentYear - startYear;
        const experienceInterval = setInterval(() => {
            setYearsExperience(prev => {
                if (prev < maxExperience) return prev + 1;
                clearInterval(experienceInterval);
                return prev;
            });
        }, 100);

        // Tickets Solved
        const maxTickets = 4000;
        const ticketsInterval = setInterval(() => {
            setTicketsSolved(prev => {
                let newValue = prev + 100;
                if (newValue > maxTickets) {
                    clearInterval(ticketsInterval);
                    return maxTickets;
                }
                return newValue;
            });
        }, 50); // Adjust theust the interval as needed

        // Lines of Code
        const maxLinesOfCode = 1000000;
        const linesOfCodeInterval = setInterval(() => {
            setLinesOfCode(prev => {
                if (prev < maxLinesOfCode) return prev + 100000; // Increment by chunks of 5000
                clearInterval(linesOfCodeInterval);
                return prev;
            });
        }, 50); // Adjust the interval as needed

        return () => {
            clearInterval(experienceInterval);
            clearInterval(ticketsInterval);
            clearInterval(linesOfCodeInterval);
        };
    }, []);
    return (
        <>
            <Navbar />
            <section className="flex flex-col p-0 sm:p-28 px-5 sm:px-60 gap-5">
                <div className="greeting flex gap-5 items-center">
                    <AnimatedLine />
                    <p className="text-[#7e5af2]" style={{ fontFamily: 'Mustica-Bold' }}>
                        HELLO!
                    </p>
                </div>
                <div className="intro-container sm:flex-row flex-col gap-7 flex">
                    <div className='flex flex-col gap-7'>
                        <h1 style={{ fontFamily: 'Mustica-Black' }} className="sm:text-7xl whitespace-nowrap text-4xl text-white">
                            My name is mintsuku
                        </h1>
                        <p style={{ fontFamily: 'Mustica-Medium' }} className="text-gray-300 sm:w-[65%]">
                            I am a programmer based in the USA, I have experience in building robust, clean and scalable applications. I spend most of my time with Js, Rust, Go, and Python.
                        </p>
                        <button style={{ fontFamily: 'Mustica-SemiBold' }} className='bg-[#7e5af2] text-white rounded-md sm:w-[13%] py-3 gap-2 flex items-center justify-center'>Download CV</button>

                    </div>

                    <div className='flex items-center mt-16 flex-col gap-6 analytics sm:w-[25%] text-white'>
                        <div className='w-[60%] border border-gray-700 items-center flex flex-col gap-2 cursor-pointer hover:translate-y-[-5px] hover:shadow-sm transition duration-150 hover:shadow-[#7e5af2] rounded-lg p-7'><p style={{ fontFamily: 'Mustica-Bold' }} className='text-2xl text-[#7e5af2]'>{abbreviateNumber(linesOfCode)}+</p> Lines of code</div>
                        <div className='w-[60%] border border-gray-700 items-center flex flex-col gap-2 cursor-pointer hover:translate-y-[-5px] hover:shadow-sm transition duration-150 hover:shadow-[#7e5af2]  whitespace-nowrap rounded-lg p-7'>
                            <p style={{ fontFamily: 'Mustica-Bold' }} className='text-2xl text-[#7e5af2]'>{yearsExperience}+</p>
                            Years experience
                        </div>            <div className='w-[60%] border border-gray-700 items-center flex flex-col gap-2cursor-pointer hover:translate-y-[-5px] hover:shadow-sm transition duration-150 hover:shadow-[#7e5af2]  rounded-lg p-7'><p style={{ fontFamily: 'Mustica-Bold' }} className='text-2xl text-[#7e5af2]'>          {abbreviateNumber(ticketsSolved)}
                            +</p> Tickets Solved</div>
                    </div>

                </div>

            </section>

            <section className='sm:w-[20rem] w-[100%] h-[10rem] flex justify-center gap-5 sm:ps-5 sm:place-items-start sm:mt-2 mt-16'>
                <TbBrandGithub onClick={() => window.open('https://github.com/mintsuku', '_blank')} className="text-3xl cursor-pointer hover:scale-110 transition duration-150 text-gray-300" />
                <TbBrandTelegram className="text-3xl cursor-pointer hover:scale-110 transition duration-150 text-gray-300" />
                <TbBrandFirefox onClick={() => window.open('https://millymox.lol', '_blank')} className="text-3xl cursor-pointer hover:scale-110 transition duration-150 text-[#7e5af2]" />
                <TbBrandDiscord onClick={() => window.open('https://discord.gg/6HqQpDkG', '_blank')} className="text-3xl cursor-pointer hover:scale-110 transition duration-150 text-gray-300" />
            </section>
        </>
    );
}

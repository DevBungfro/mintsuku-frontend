import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

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

const About: React.FC = () => {
    return (
        <>
            <Navbar />
            <section>
                <div className="w-[100%] flex flex-col items-center sm:h-[27rem] ">
                    <div className="greeting gap-5 items-center flex mt-8 flex-col">
                        <div className="w-[100%] flex flex-col items-center">
                            <div className="text-lg sm:w-[50%] w-[90%] flex flex-col gap-7 text-gray-400">
                                <p style={{ fontFamily: 'Mustica-SemiBold' }} className="sm:text-5xl text-4xl  text-white">Hey there!</p>
                                Welcome to my digital space! I am a passionate and creative full-stack developer based in the USA. With a love for turning ideas into reality, I specialize in building robust and scalable web applications using technologies like JavaScript, Rust, Go, and Python.

                                My journey in the world of coding has led me to accumulate over 1 million lines of code, showcasing my dedication to crafting clean and efficient solutions. Over the span of 8+ years in the field, I've successfully completed loads of projects, each contributing to my ever-growing knowledge and expertise.

                                Beyond coding, I take pride in solving real-world problems, having resolved over 4,000 tickets. My commitment to excellence is not just a professional pursuit but a personal philosophy, as I believe in delivering nothing short of exceptional digital experiences.

                                Join me on this exciting journey of innovation, where every line of code tells a story of passion, creativity, and a relentless pursuit of excellence.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 gap-20 w-[90%] sm:w-[80%] mx-auto py-10">
                <div className="career-container flex gap-3 flex-col">
                    <p style={{ fontFamily: 'Mustica-SemiBold' }} className="text-white text-[2rem] sm:text-[2.5rem]">My Career So Far</p>
                    <div className="timeline flex flex-col gap-5">
                        <div className="text-gray-400  text-lg flex items-center gap-5"> <div className="font-black text-[#7e5af2] text-2xl">|</div>2013/2014 - Scratch.com coding at the age of 8</div>
                        <div className="text-gray-400  text-lg flex items-center gap-5"> <div className="font-black text-[#7e5af2] text-2xl">|</div>2015/2016 - Doing code.org in school</div>
                        <div className="text-gray-400  text-lg flex items-center gap-5"> <div className="font-black text-[#7e5af2] text-2xl">|</div>2017/2018 - Picked up the python programming language and made small projects</div>
                        <div className="text-gray-400  text-lg flex items-center gap-5"> <div className="font-black text-[#7e5af2] text-2xl">|</div>2018/2019 - Started doing web development with Javascript <br /> and Typescript and used Rust for small tools</div>
                        <div className="text-gray-400  text-lg flex items-center gap-5"> <div className="font-black text-[#7e5af2] text-2xl">|</div>2020/2021 - Started freelancing, did 14 client projects this year</div>
                        <div className="text-gray-400  text-lg flex items-center gap-5"> <div className="font-black text-[#7e5af2] text-2xl">|</div>2023/Now - Begnnining my first year in college, applying for dev jobs <br /> and contributing to open source projects</div>
                    </div>
                </div>
                <div className="skills-container flex gap-3 flex-col">
                    <p style={{ fontFamily: 'Mustica-SemiBold' }} className="text-white text-[2rem] sm:text-[2.5rem]">My Skills</p>
                    <div className="skills-content text-gray-400 text-lg grid sm:grid-cols-4 grid-cols-2 gap-4">
                        {/* Placeholder for your skills */}
                        <p className="p-4 border border-gray-800 text-gray-400 rounded-md">React</p>
                        <p className="p-4 border border-gray-800 text-gray-400 rounded-md">JavaScript</p>
                        <p className="p-4 border border-gray-800 text-gray-400 rounded-md">HTML</p>
                        <p className="p-4 border border-gray-800 text-gray-400 rounded-md">CSS</p>
                        <p className="p-4 border border-gray-800 text-gray-400 rounded-md">SCSS</p>
                        <p className="p-4 border border-gray-800 text-gray-400 rounded-md">Rust</p>
                        <p className="p-4 border border-gray-800 text-gray-400 rounded-md">C++</p>
                        <p className="p-4 border border-gray-800 text-gray-400 rounded-md">C</p>
                        <p className="p-4 border border-gray-800 text-gray-400 rounded-md">Go</p>
                        <p className="p-4 border border-gray-800 text-gray-400 rounded-md">Zig</p>



                        {/* Add more skills as needed */}
                    </div>
                </div>

            </section>
        </>
    );
};

export default About;

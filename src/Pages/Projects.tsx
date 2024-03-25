import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Twitter from '../Images/twitter.png';
import Ryu from '../Images/ryu.png';
import Sorter from '../Images/sorter.png';
import Hotmail from '../Images/hotmail.png';
import Wappu from '../Images/wappu.png';
import Sora from '../Images/sora.png';
import Sieve from '../Images/sieve.png';
import Star from '../Images/star.png';

const projectData = [
  {
    imageUrl: Wappu,
    title: 'Wappu',
    description: "Wappu is a comprehensive web scraping library written in Rust, designed for ease of use and performance. It integrates seamlessly HTTP client capabilities with powerful HTML parsing functionalities, allowing users to fetch and parse web content efficiently.",
  },
  {
    imageUrl: Sorter,
    title: 'Combo Sorter',
    description: 'An email combo domain sorter made in python, This tool is very fast and is good for sorting emails based on domains, this is a tool aimed at for ethical hackers and people who want to sort client emails. All emails and passwords were obtained legally from intelix.io.',
  },
  {
    imageUrl: Sora,
    title: 'Sora',
    description: "Sora is a Discord bot that integrates with the Open Router API to facilitate conversation in Discord servers. It's designed to provide users with a more interactive chat experience by using AI models for response generation. Sora allows users to engage in conversations, manage contexts, and choose from various models to customize their interactions."
  },

  {
    imageUrl: Sieve,
    title: "Sieve Of Atkin",
    description: "The Sieve of Atkin is an optimized algorithm used to find all prime numbers up to a specified integer limit. It's considered more efficient than the classical Sieve of Eratosthenes, especially for large numbers. The algorithm works by initially assuming all numbers are non-prime and then systematically flips the status of multiple specific numbers based on a set of mathematical rules."
  },

  {
    imageUrl: Star,
    title: "Star",
    description: "Star is a command-line utility written in Rust that provides easy-to-use functions for working with tar files. Whether you need to extract files from tar archives or search for specific files, Star has got you covered. This tool is heavily focused on the ergonomics and usability of this tool to create a smooth and intuitive user experience."
  }
];

const ImageModal: React.FC<{ src: string; alt: string; onClose: () => void }> = ({ src, alt, onClose }) => {
  const [isImageClosed, setIsImageClosed] = useState(false);

  const handleImageClose = () => {
    setIsImageClosed(true);
    setTimeout(() => {
      onClose();
    }, 150);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
      <div className="max-w-6xl max-h-3/4 p-4 rounded-md">
        <img
          className={`w-full h-auto ${isImageClosed ? 'closed-image' : 'animate-scale'}`}
          src={src}
          alt={alt}
        />
        <button className="absolute top-4 right-4 text-white" onClick={handleImageClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 justify-center max-w-[80%] mx-auto">
          {projectData.map((project, index) => (
            <div key={index} className="flex flex-col border border-gray-800 rounded-md overflow-hidden shadow-lg h-full">
              <div className="w-full aspect-video overflow-hidden">
                <img
                  className="w-full h-full object-cover cursor-pointer transition-opacity hover:opacity-80"
                  src={project.imageUrl}
                  alt={`Project ${index + 1}`}
                  onClick={() => openModal(project.imageUrl)}
                />
              </div>
              <div className="flex-1 flex flex-col justify-end">
                <div className="px-6 py-4">
                  <div style={{ fontFamily: 'Mustica-Bold' }} className="text-white text-xl mb-2">
                    {project.title}
                  </div>
                  <p className="text-gray-400 text-base mb-4">{project.description}</p>
                </div>
                <div className="px-6 pb-4">
                  <button
                    className="w-full text-md py-2 bg-[#7e5af2] text-white rounded-md hover:bg-purple-600 transition duration-300"
                    onClick={() => openModal(project.imageUrl)}
                  >
                    Visit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalOpen && <ImageModal src={selectedImage} alt="Project Image" onClose={closeModal} />}
    </>
  );
};

export default Projects;
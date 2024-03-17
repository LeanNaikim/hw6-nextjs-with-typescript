import React from 'react'
import { FaEye } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaBullseye } from "react-icons/fa";

export default function 
() {
  return (
    <div className="mx-28 my-4">
        <div className="bg-white w-full h-96 p-4 border">
            <h6 className="mb-4 font-bold tracking-wider text-lg text-blue-800">What is Center of Science and Technology Advanced Development?</h6>
            <p>CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company. CSTAD will continue to provide high-quality training with the latest methodology, and roadmap as well as the best choice for those who want to be an IT expert in Cambodia.</p>
            <div className="w-full flex justify-center mt-5">
               <img className="h-52" src="/about-logo.png" alt="" />
            </div>
        </div>

        <div className="bg-white w-full mt-5 p-4 border">
            <div className="flex align-center">
                <FaEye/>
                <h6 className="pl-3 tracking-wider">VISION</h6>  
            </div>
            <p>Advanced IT Institute in Cambodia</p>
        </div>

        <div className="bg-white w-full mt-5 p-4 border">
            <div className="flex align-center">
                <FaBullseye />
                <div>
                    <h6 className="pl-3 tracking-wider">MISION</h6> 
                    <p>Provide the latest methodology with high quality training and mentoring</p>
                    <p>Build up the capacity and career of IT experts Cambodia</p>
                    <p>Consult and connect CSTAD trainees to top IT careers</p>
                    </div>
            </div>
        </div>

        <div className="bg-white w-full mt-5 p-4 border">
            <div className="flex align-center">
                <AiFillMessage/>
                <h6 className="pl-3 tracking-wider">SLOGAN</h6>  
            </div>
            <p>Start your IT Career with CSTAD</p>
        </div>

        <h1 className="text-center m-4 text-xl font-bold tracking-wider text-blue-800">IF YOU HAVE ANY QUESTIONS, PLEASE FEEL FREE TO CONTACT US.</h1>
        <div className="bg-white w-full p-4 border">
            <div className="">
                <p>No. 24, St. 562, Sangkat Boeung kak I, Khan Toul Kork, Phnom Penh, Cambodia</p>  
                <p>(+855) 95 990 910 | (+855) 93 990 910</p>
                <p>Telegram Channel</p>
                <p>Facebook</p>
                <p>info.istad@gmail.com</p>
                <p>www.istad.co</p>
                <p>YouTube</p>
            </div>
            <p>Start your IT Career with CSTAD</p>
        </div>

    </div>
  )
}


import React from "react";
import Section from "../layout/Section";

import portrait from "../assets/img/yoeri.jpg";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";
import launch from "../assets/img/launch-icon.svg";
import chevDown from '../assets/img/double-chevron-down.svg'
const About = () => {



	return (
		<section className='container mx-auto  mt-20'>
			<figure class='md:flex bg-main-black rounded-xl p-8 md:p-0 space-x-10'>
				<img
					src={portrait}
					alt='personal photo'
					class='md:w-100 md:h-auto rounded-full mx-auto'
				/>
				<div class='pt-6 md:p-8 text-center md:text-left space-y-8'>
					<h1 className='text-3xl'><span className="text-main-green">Hi_there</span><span className='text-main-orange'>(I'm, Yoeri)</span><br />

					</h1>
					<blockquote className='mt-0'>
						<span className='text-main-blue text-3xl'>&#123;</span>
						<p class='text-lg font-medium text-slate-50 font-display ml-5'>I love everything tech and business. I use code to meet business objectives. And stuff like that.</p>

						<span className='text-main-blue text-3xl'>&#125;</span>
					</blockquote> <br />

					<figcaption class='font-medium'>
						<div className='flex flex-column space-x-5'>
							<button className="flex flex-column border-2 border-main-green text-main-green px-7 py-2 items-center">Check out CV <img src={launch} className='pl-3' /></button>
							<img src={github} alt="Github Icon" />
							<img src={linkedin} alt="Linkedin Icon" />

						</div>
					</figcaption>
				</div>
			</figure >
			<div className="flex justify-center mt-12">
				<img src={chevDown} alt="chevron-down" />
			</div>
		</section >
	);
};

export default About;

import React from "react";
import Section from "../layout/Section";

import portrait from "../assets/img/yoeri.jpg";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";
import launch from "../assets/img/launch-icon.svg";
import chevDown from '../assets/img/double-chevron-down.svg'
import NumberSideBar from "../layout/NumberSideBar";
const About = () => {



	return (
		<>

			<Section>

				<NumberSideBar />
				<div>
					<figure class='md:flex bg-main-black rounded-xl  p-8 md:p-0 space-x-10 items-center'>
						<img
							src={portrait}
							alt='personal'
							class='md:w-60 md:h-60 rounded-full mx-auto'
						/>
						<div class='pt-6 md:p-8 text-center md:text-left space-y-10'>
							<h1 className='text-3xl'><span className="text-main-green">Hi_there</span><span className='text-main-orange'>(I'm, Yoeri)</span><br />

							</h1>
							<blockquote className='mt-0'>

								<p class='text-lg font-medium text-slate-50 font-display ml-5'><span className='text-main-blue text-3xl'>&#123;</span> I love everything tech and business. I use code to meet business objectives. And stuff like that. <span className='text-main-blue text-3xl'>&#125;</span></p>


							</blockquote> <br />

							<figcaption class='font-medium'>
								<div className='flex flex-column space-x-5'>
									<button className="flex flex-column border-2 border-main-green text-main-green px-7 py-2 items-center">Check out CV <img src={launch} alt='launch icon' className='pl-3' /></button>
									<img src={github} alt="Github Icon" />
									<img src={linkedin} alt="Linkedin Icon" />

								</div>
							</figcaption>
						</div>
					</figure >
					<div className='flex justify-center'>
						<img src={chevDown} alt="chevron-down" />
					</div>

				</div>

			</Section>
		</>
	);
};

export default About;

import React from "react";

import portrait from "../assets/img/yoeri.jpg";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";

const About = () => {
	return (
		<div className='container mx-auto  mt-20'>
			<figure class='md:flex bg-main-black rounded-xl p-8 md:p-0 space-x-10'>
				<img
					src={portrait}
					alt='personal photo'
					class='w-48 h-48 md:w-80 md:h-auto rounded-full mx-auto'
				/>
				<div class='pt-6 md:p-8 text-center md:text-left space-y-10'>
					<h1 className='text-3xl text-main-purple bold'>Hi, I'm Yoeri</h1>
					<blockquote>
						<p class='text-lg font-medium text-slate-50'>
							With interests in both business and programming I love to help
							build solutions and help users have a great experience.
						</p>
					</blockquote>
					<figcaption class='font-medium'>
						<div class='text-main-purple'>Yoeri Van Wassenhove</div>
						<div class='text-slate-700 dark:text-slate-500'>
							Front-end Freelance Web Developer
						</div>
					</figcaption>
				</div>
			</figure>
		</div>
	);
};

export default About;

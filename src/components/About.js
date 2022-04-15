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
					<h1 className='text-3xl'><span className="text-main-green">hiThere</span><span>(name)</span><span>&#123;</span><br />
						let name = Yoeri;<br />
						return name;<br />
						<span>&#125;</span></h1>
					<blockquote>
						<p class='text-lg font-medium text-slate-50'>I love everything tech and business. I use code to meet business objectives. And stuff like that.</p>
					</blockquote>
					<figcaption class='font-medium'>
						<button>Check out CV</button>
						<img src={github} alt="Github Icon" />
						<img src={linkedin} alt="Linkedin Icon" />
					</figcaption>
				</div>
			</figure>
		</div>
	);
};

export default About;

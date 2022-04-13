import React from 'react'

const About = () => {
    return (
        <div className="container mx-auto  mt-20">
            <div className=" grid grid-cols-2 gap-5">
                <div>
                    <h2 className="text-5xl text- font-bold text-main-purple mb-5" >About Myself</h2>
                    <p className="text-slate-50 text-md pr-20">
                        I am an aspiring back-end web developer, currently going through the FreeCodeCamp curriculum to get the basics right of HTML, CSS and Javascript.
                        <br /><br />
                        My main language I'm learning for the back-end at the moment is PHP and MysQL for database management. And my main goal is to land my first web development job in the next 6 months in a PHP environment. Recently I started a Wordpress website as well the learn the ins-and-outs of the platform which is predominantly written in PHP.
                    </p>
                </div>
                <div>
                    <h2 className="text-5xl text- font-bold text-main-purple mb-5" >Skills</h2>

                    <h2 className="text-5xl text- font-bold text-main-purple mb-5" >Technologies Used</h2>
                    <ul>
                        <li><img src="" /></li>
                        <li><img src="" /></li>
                        <li><img src="" /></li>
                        <li><img src="" /></li>
                        <li><img src="" /></li>
                        <li><img src="" /></li>
                    </ul>

                </div>

            </div>

        </div>
    )
}

export default About
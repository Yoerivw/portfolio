import React from 'react'
import Section from '../layout/Section'

const Contact = () => {
    return (
        <Section>
            <h2 className="text-5xl text- font-bold text-main-purple mb-5" >Contact Me</h2>
            <p className="text-slate-50">I'm interested in front-end development job opportunities</p>

            <form className="my-5">
                <div className="flex flex-row flex-wrap items-center my-4">
                    <div className="mr-6">
                        <input type="text" placeholder="Name" className="block p-2 bg-form-black placeholder:text-form-text-black text-slate-50" />
                    </div>
                    <div className="">
                        <input type="text" placeholder="Email" className="block p-2 bg-form-black placeholder:text-form-text-black text-slate-50" />
                    </div>
                </div>
                <div className="my-5">
                    <input type="text" placeholder="Subject" className="block w-full p-2 bg-form-black placeholder:text-form-text-black text-slate-50" />
                </div>
                <div className="my-5">
                    <textarea className="block w-full p-2 bg-form-black placeholder:text-form-text-black text-slate-50 resize-none" name="message" cols="30" rows="5" placeholder="Message"></textarea>
                </div>

                <button className="text-main-purple border-2 border-main-purple font-bold py-1 px-3">Send Message</button>

            </form>


        </Section>
    )
}

export default Contact
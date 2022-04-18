import React from 'react'
import Section from '../layout/Section'
import send from '../assets/img/send.svg'

const Contact = () => {
    return (
        <Section>

            <h2 className="text-5xl text-white mb-5" >Hit me up </h2>


            <form className="my-5">
                <div className="flex flex-row flex-wrap items-center my-4">
                    <div className="mr-6">
                        <input type="text" placeholder="Name" className="block p-2 bg-white placeholder:text-form-text " />
                    </div>
                    <div className="">
                        <input type="text" placeholder="Email" className="block p-2 bg-white placeholder:text-form-text text-form-text" />
                    </div>
                </div>
                <div className="my-5">
                    <input type="text" placeholder="Subject" className="block w-full p-2 bg-white placeholder:text-form-text text-form-text" />
                </div>
                <div className="my-5">
                    <textarea className="block w-full p-2 bg-white placeholder:text-form-text text-form-text resize-none" name="message" cols="30" rows="5" placeholder="Message"></textarea>
                </div>

                <button className="text-white bg-form-button py-1 px-14 flex flex-column items-center">Send Message <img className="pl-3" src={send} alt="send icon" /></button>

            </form>


        </Section>
    )
}

export default Contact
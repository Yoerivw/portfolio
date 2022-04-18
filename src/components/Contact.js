import React from 'react'
import Section from '../layout/Section'
import send from '../assets/img/send.svg'
import fakeMap from '../assets/img/fake_map.png'

const Contact = () => {
    return (
        <Section>
            <h2 className="text-5xl text-white mb-5" >Hit me up </h2>
            <div className="grid grid-cols-2 gap-10">

                <div>
                    <form className="my-5 pr-10">
                        <div className="flex flex-row flex-wrap justify-between items-center my-4">
                            <div>
                                <input type="text" placeholder="Name" className="block p-2 bg-white placeholder:text-form-text " />
                            </div>
                            <div>
                                <input type="text" placeholder="Email" className="block p-2 bg-white placeholder:text-form-text text-form-text" />
                            </div>
                        </div>
                        <div className="my-5">
                            <input type="text" placeholder="Subject" className="block w-full p-2 bg-white placeholder:text-form-text text-form-text" />
                        </div>
                        <div className="my-5">
                            <textarea className="block w-full p-2 bg-white placeholder:text-form-text text-form-text resize-none" name="message" cols="30" rows="5" placeholder="Message"></textarea>
                        </div>

                        <button className="text-white text-2xl bg-form-button mt-8 py-2 px-16 flex flex-column items-center">Send Message <img className="pl-3" src={send} alt="send icon" /></button>

                    </form>
                </div>
                <div>
                    <img src={fakeMap} alt="Fake map" />
                </div>
            </div>







        </Section>
    )
}

export default Contact
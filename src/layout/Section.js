import React from 'react'

const Section = (props) => {
    return (
        <section className='snap-start bg-main-background px-20 ml-10 my-auto h-screen w-screen flex justify-center items-center flex-wrap'>{props.children}</section>
    )
}

export default Section
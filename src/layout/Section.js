import React from 'react'



const Section = (props) => {



    return (
        <section className='snap-start bg-main-background px-20 ml-10 h-screen flex flex-col justify-center content-center flex-wrap' >{props.children}</section>
    )
}

export default Section
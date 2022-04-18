import React from 'react'

const Section = (props) => {
    return (
        <section className=' bg-main-background pl-20 pr-10 m-auto'>{props.children}</section>
    )
}

export default Section
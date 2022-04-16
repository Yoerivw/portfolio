import React from 'react'

const Section = (props) => {
    return (
        <section className='absolute left-0 right-0 top-0 h-screen'>{props.children}</section>
    )
}

export default Section
import React from 'react'

const Nav = (props) => {



    return (
        <nav className="z-50 pt-4 space-x-10 text-slate-50 text-2xl">

            <button onClick={props.onC}>About</button>
            <button>Projects</button>
            <button >Contact</button>

        </nav>

    )
}

export default Nav
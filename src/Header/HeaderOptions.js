import { Avatar } from '@material-ui/core'
import React from 'react'
import "./HeaderOptions.css"

function HeaderOptions({avatar,Icon,title}) {
    return (
        <section className="headerOptions">
            {Icon && <Icon className='headerOptions__icon' />}
            {avatar && (
                <Avatar className='headerOptions__icon' src={avatar} />
                )}
            <h3 className="headerOptions__title">{ title }</h3>
        </section>
    )
}

export default HeaderOptions

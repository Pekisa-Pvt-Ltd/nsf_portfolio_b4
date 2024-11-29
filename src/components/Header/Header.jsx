import React from 'react'
import './Header.css'

const Header = () => {

    const headerItems = [

        {
            id: 2,
            title: 'About',
            link: '/about',
        },
        {
            id: 3,
            title: 'Services',
            link: '/services',
        },
        {
            id: 4,
            title: 'Contact',
            link: '/contact',
        }

    ]
    return (
        <div className='header'>
            <ul className='header-list'>
                {headerItems.map((items) => {
                    return (
                        <li key={items.id - 1} className='header-list-items'>
                            {items.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Header

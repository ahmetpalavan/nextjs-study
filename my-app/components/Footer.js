import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'
const Footer = ({users}) => {
    return (
        <div>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Footer
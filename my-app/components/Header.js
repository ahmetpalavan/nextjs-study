import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
const Header = () => {
    const router = useRouter()
    console.log(router);
    return (
        <div>
            <ul>
                <li onClick={()=>router.back()}>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/product'>Product</Link>
                </li>
                <li>
                    <Link href='/user'>User</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
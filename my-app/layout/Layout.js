import React from 'react'
import { Footer, Header } from '../components'

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Header/>
            {children}
            <Footer/>
        </React.Fragment>
        )
}

export default Layout
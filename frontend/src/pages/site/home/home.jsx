
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'
import Shop from '../../../components/shop/shop'
import Product from '../../../components/Product/Product'
import About from '../../../components/about/About'
import Team from '../../../components/team/Team'
import Services from '../../../components/services/Services'

const Home = () => {
    const { data, setdata } = useContext(MainContext)
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
           
            <Shop />
            <Product />
            <About />
            <Team />
            <Services />
        </>
    )
}

export default Home

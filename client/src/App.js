import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Pages from './Components/Pages'
import WOW from 'wowjs'

class App extends React.Component{
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
      }
    render () {
        return (
            <div>
                <Navbar />
                <Pages />
                <Footer />
            </div>
        )
    }
}

export default App

import React from 'react'
import Hero from './components/Hero'
import Demo from './components/Demo'
// must import app.css which i out tailwind config inside it
import "./App.css"
const App = () => {
    return (
        <main>
            <div className='main'>
                <div className='gradient' />
            </div>
            <div className='app'>
                <Hero />
                <Demo />
            </div>
        </main>

    )
}

export default App
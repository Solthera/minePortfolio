import '../App.css'
import Header from './Header.jsx'
import Showcasing from './Showcassing.jsx'
import Firstcard from './card/Firstcard.jsx'
import Secondcard from './card/Secondcard.jsx'
import Thirdcard from './card/Thirdcard.jsx'
import Fourthcard from './card/Fourthcard.jsx'
import Fifthcard from './card/Fifthcard.jsx'
import Sixthcard from './card/Sixthcard.jsx'

export default function LatestWork() { 
    return (
        <div className="container">
            <Header />
            <Showcasing />
            <div className="portfolio-grid">
                <Firstcard />
                <Secondcard />
                <Thirdcard />
                <Fourthcard />
                <Fifthcard />
                <Sixthcard />
            </div>
        </div>
    )
}
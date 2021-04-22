import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './Header/Header'
import headerData from './Header/headerData'
import Card from './Card/Card'
import cardData from './Card/cardData'


const AviationExplorer = () => (
    <div>
        <Header header={headerData}/>
        <Card cards={cardData}/>
    </div>
)


ReactDOM.render(
    <AviationExplorer />,
    document.querySelector('#root')
)
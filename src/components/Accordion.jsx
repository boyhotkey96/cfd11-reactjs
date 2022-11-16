import classNames from "classnames"
import React, { createContext, useContext, useState } from "react"

function Accordion({ date, title, children, isOpen, onClick, index }) {
    const {activeContent, handleActive} = useContext(Context)

    const [_isOpen, setIsOpen] = useState(false)
    
    const active = isOpen || activeContent === index || _isOpen
    console.log(`%c >>> active: ${active}`, 'color: green')

    const _onClick = onClick || (() => {
        if (typeof index !== 'undefined') {
            handleActive(index)
        } else {
            setIsOpen(!_isOpen)
        }
    })

    return (
        <div className={classNames('accordion', { active })}>
            <div className="accordion__title" onClick={_onClick}>
                <div className="date">Ngày {date}</div>
                <h3>{title}</h3>
            </div>
            {active && <div style={{ display: 'block' }} className="content">{children}</div>}
        </div>
    )
}
export default Accordion



const Context = createContext()

Accordion.Group = ({ children }) => {
    const [activeContent, setActiveContent] = useState()
    const handleActive = (index) => {
        setActiveContent(index === activeContent ? null : index)
    }

    return (
        <Context.Provider value={{ activeContent, handleActive }}>
            {React.Children.map(children, (child, i) => React.cloneElement(child, { index: i }))}
        </Context.Provider>
    )
}

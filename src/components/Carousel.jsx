import React, { useState, useEffect } from 'react';



const Carousel = (props) => {
    const {children} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - 2)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const [touchPosition, setTouchPosition] = useState(null)

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    };

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if (touchDown == null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }
    return ( 
        <>
            <div 
            onTouchStart={handleTouchStart} 
            onTouchMove={handleTouchMove} 
            style={{ transition: '.5s ease', transform: `translateX(-${currentIndex * 100}%)` }} 
            className='flex mt-12 mr-0'>

                {children}

            </div>
        </>
     );
}
 
export default Carousel;
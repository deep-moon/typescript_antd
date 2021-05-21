import React, {useState, useEffect} from 'react'

const MouseTracker: React.FC = () => {
    const [positions, setPositions] = useState({x: 0, y: 0})
    useEffect(() => {
        console.log('add effect', positions.x)
        const mouseTracker = (e: MouseEvent) => {
            console.log('inner')
            setPositions({x: e.x, y: e.y})
        }
        document.addEventListener('click', mouseTracker)
        return () => {
            console.log('remove effect', positions.x)
            document.removeEventListener('click', mouseTracker)
        }
    }, [])
    console.log('before render', positions.x)
    return (
        <p>X: {positions.x}, Y: {positions.y}</p>
    )
}

export default MouseTracker
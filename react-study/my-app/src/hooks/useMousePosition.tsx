import React, {useState, useEffect} from 'react'

const useMousePosition = () => {
    const [positions, setPositions] = useState({x: 0, y: 0})
    useEffect(() => {
        console.log('add effect', positions.x)
        const mouseTracker = (e: MouseEvent) => {
            console.log('inner')
            setPositions({x: e.x, y: e.y})
        }
        document.addEventListener('mousemove', mouseTracker)
        return () => {
            console.log('remove effect', positions.x)
            document.removeEventListener('mousemove', mouseTracker)
        }
    }, [])
    return positions;
}
export default useMousePosition
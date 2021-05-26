import React, {useState, useEffect, useRef, useContext} from 'react'
import {ThemeContext} from "../App";
const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    // {current: 0}
    const likeRef = useRef(0)
    const didMountRef = useRef(false)
    const domRef = useRef<HTMLInputElement>(null)
    const theme = useContext(ThemeContext);
    console.log('theme', theme)
    const themeStyle = {
        color: theme.color,
        background: theme.background
    }
    // 默认在第一次渲染之后，和每次更新之后都会执行
    useEffect(() => {
        document.title = `点击了${like}次`
    })
    // 模拟componentDidUpdate
    useEffect(() => {
        if (didMountRef.current) {
            console.log('this is updated')
        } else {
            didMountRef.current = true;
        }
    })
    // 将input focus
    useEffect(() => {
        if(domRef && domRef.current){
            domRef.current.focus()
        }
    })
    function handleAlertClick() {
        // 这里like是独立的变量，跟块级作用域很像
        setTimeout(() => {
            alert(`点击了 ${likeRef.current} 次`)
        }, 3000)
    }
    return (
        <>
            <input type="text" ref={domRef}/>
            <button style={themeStyle} onClick={() => {
                setLike(like + 1)
                likeRef.current++;
            }}>
                {like} 赞
            </button>
            <button onClick={() => {
                setOn(!on)
            }}>
                {on ? 'on' : 'off'}
            </button>
            <button onClick={handleAlertClick}>Alert！</button>
        </>
    )
}
export default LikeButton;
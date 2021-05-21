import React, {useState, useEffect} from 'react'

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    // 默认在第一次渲染之后，和每次更新之后都会执行
    useEffect(() => {
        document.title = `点击了${like}次`
    })
    return (
        <>
        <button onClick={() => {setLike( like + 1)}}>
            {like} 赞
        </button>
        <button onClick={() => {setOn(!on)}}>
            {on ? 'on' : 'off'}
        </button>
        </>
    )
}
export default LikeButton;
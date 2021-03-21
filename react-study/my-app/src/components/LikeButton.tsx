import React, {useState, useEffect, Fragment} from 'react'

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    // 默认每次渲染之后都执行
    useEffect(() => {
        document.title = `点击了${like}次`
    })
    return (
        <Fragment>
            <button onClick={() => {
            // 这里是去替换它，而不是合并
                setLike(like + 1)
            }}>
                {like} 👍
            </button>
            <button onClick={() => {
            // 这里是去替换它，而不是合并
                setOn(!on)
            }}>
                {on ? 'ON' : 'OFF'}
            </button>
        </Fragment>    
        
    )
}

export default LikeButton;
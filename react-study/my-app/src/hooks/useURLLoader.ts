import {useState, useEffect} from 'react'
import axios from "axios";

const useURLLoader = (url: string, deps: any[] = []) => {
    // 这里需使用泛型转换null，不然data不能是有as 类型断言
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get(url).then(res => {
            setData(res.data)
            setLoading(false)
        })
    },deps)
    return [data, loading]
}

export default useURLLoader;
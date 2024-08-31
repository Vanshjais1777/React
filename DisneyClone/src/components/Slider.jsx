import React, { useEffect } from 'react'
import GlobalApi from '../services/GlobalApi'
function Slider() {
    useEffect(() => {
        GlobalApi();
    }, [])

    const GlobalApi = () => {
        GlobalApi.then(res=>{
            console.log(res);
        })
    }
    return (
        <div>Slider</div>
    )
}

export default Slider
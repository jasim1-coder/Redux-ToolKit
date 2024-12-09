import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import randomColor from 'randomcolor'
import { changeColor } from '../Redux/color/colorSlice'

function Aside() {
    const color = useSelector((state) => state.color.value)
    const dispatch = useDispatch()

    const changeColour = () => {
        dispatch(changeColor({
            color : randomColor()
        }))
    }

  return (
    <div>
        <h1 style={{color}}>Redux toolkit example</h1>
        <button onClick={changeColour}>Change color</button>
    </div>
  )
}

export default Aside
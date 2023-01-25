// We can use another hooks  insinde our ones
import { useState, useEffect } from 'react'
/*
  The porpose of this hook is to use the mouse position in an state,
  in such a way that We can update the DOM with this information,
  is a simple hook but of which we can find differents practical use cases
  for make our pages more dinamyc and interactive.
*/
export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseEvent = (event) => {
    console.log(event)
    const { clientX, clientY } = event
    setPosition({
      x: clientX,
      y: clientY
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseEvent)
    return () => window.removeEventListener('mousemove', handleMouseEvent)
  }, [])

  return position
}

// We can use another hooks  insinde our ones and we do it by import them as we do in any another component.
import { useState, useEffect } from 'react'
/*
  The porpose of this hook is to use the mouse position in an state,
  in such a way that We can update the DOM with this information,
  is a simple hook but of which we can find differents practical use cases
  for make our pages more dinamyc and interactive.
*/
export const useMousePosition = () => {
/*
  We declare the state in this part of the function accomplish the rules,
  this state is where will be stored the most important data of this custom hook.
*/
  const [position, setPosition] = useState({ x: 0, y: 0 })

  /*
  Inside this custom hook We can create all the function that are needed,
  same that if we don't return them they will be private,
  but we can also return them, which in case of needing it
  will allow us to share the treatment of the data with our component .
*/
  const handleMouseEvent = (event) => {
    console.log(event)
    const { clientX, clientY } = event
    setPosition({
      x: clientX,
      y: clientY
    })
  }
  /*
  We can use 'useEffect'. This is usefull, in this case
  remember delete the listener inside of a anonymous
  function that is returned in the end, this is a good
  practice for don't hang the browser.
*/
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseEvent)
    return () => window.removeEventListener('mousemove', handleMouseEvent)
  }, [])

  /*
    Finally we return the data to be reused by the component in a simplified way, abstract and elegant.
  */
  return position
}

//Current state

const EarlyReturn = () =>{
  const shouldRender= true 
  /**
   * Some BL
   */
  if(!shouldRender) return <></>

  return (
    <div>Some components</div>
  )
}

// possible alternatives
const ConditionalRenderInComponent = () =>{
  const shouldRender= true 
  /**
   * Some BL
   */

  return shouldRender && (
    <div>Some components</div>
  )
}

const ComponentOne = () => (
    <div>Some components</div>
)

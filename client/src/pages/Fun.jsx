import React,{useEffect} from 'react'

function Fun() {

  useEffect(() => {

    window.scrollTo(0, 0);

  }, []);
  return (
    <div>
      the page is currently under construction
    </div>
  )
}

export default Fun

import React,{useEffect,useRef} from 'react'
import '../css/work.css'
import { Link } from 'react-router-dom';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'


gsap.registerPlugin(ScrollTrigger)
function Work() {
  const selectRef=useRef();
  const workRef=useRef();

  useEffect(() => {

    window.scrollTo(0, 0);

  }, []);

  useGSAP(()=>{
    gsap.from(selectRef.current,{
      y: 10,
      rotateX: -90,
      opacity: 0,
      duration: 0.6,
      delay: 0.7,
    })

    gsap.from(workRef.current,{
      y: 10,
      rotateX: -90,
      opacity: 0,
      duration: 0.7,
      delay: 0.8,
    })
  })
  return (
    <div className='work-container'>
      <div className="main-work">
        <div className="work-title">
          <div className="selected-text">
          <h1 className='head-style' ref={selectRef}> Selected </h1>
          </div>

          <div className="works-text">
              <h1 className='head-style' ref={workRef}>Works</h1>
          </div>
         
        </div>

        
      </div>

      <div className="main-work" style={{border:'none'}}>
            
            <div className="work-items " >
            <Link className='works-link' to={'/projects/feedback'}>
              <div className="work-img feedback">
                  <img src="https://images.unsplash.com/photo-1644574141709-c739285ae771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div className="work-desc">
                <h3>feedback app</h3>
              </div>
              </Link>
            </div>
           
           
          
          <div className="work-items  row-2">
          <Link className='works-link' to={'/projects/toysaga'}>
              <div className="work-img toysaga">
                <img src="https://images.unsplash.com/photo-1623939012339-5b3dc8eca7c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div className="work-desc">
                <h3>toysaga</h3>
              </div>
              </Link>
            </div>
          
            


            
            <div className="work-items  row-2">
            <Link className='works-link' to={'/projects/movie'}>
              <div className="work-img movie">
                <img src="https://images.unsplash.com/photo-1512070679279-8988d32161be?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div className="work-desc">
                <h3>cineverse</h3>
              </div>
              </Link>
            </div>
          
            


            <div className="work-items">
              
            <Link className='works-link' to={'/projects/music'}>
              <div className="work-img music">
                <img src="https://images.unsplash.com/photo-1420161900862-9a86fa1f5c79?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div className="work-desc">
                <h3>top floor</h3>
              </div>
              </Link>
            </div>
          
            
          </div>
    </div>
  )
}

export default Work

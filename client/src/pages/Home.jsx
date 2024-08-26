import React, { useRef, useEffect } from 'react'
import '../css/home.css'
import '../css/header.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import musicImg from '../assets/work/music.jpg'
import movieImg from '../assets/work/movie.jpg'
import toysagaImg from '../assets/work/toysaga.jpg'
import feedbackImg from '../assets/work/feedback.jpg'

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const hiRef = useRef();
  const nameRef = useRef();
  const animeRef = useRef();
  const mainHeroRef = useRef();
  const containerRef = useRef();
  const headRef=useRef();
  const workRef=useRef();
  const workTopRef=useRef();

  useEffect(() => {

    window.scrollTo(0, 0);

  }, []);

  const shouldAnimate = () => {
    return window.innerWidth > 768; // Disable animation on screens smaller than 768px
  };

  useGSAP(() => {
    if(shouldAnimate()){
      gsap.from(hiRef.current, {
        y: 10,
        rotateX: -90,
        opacity: 0,
        duration: 0.6,
        delay: 0.7,
      }),

      gsap.from(nameRef.current, {
        y: 10,
        rotateX: -90,
        opacity: 0,
        duration: 0.7,
        delay: 0.9,
      }),

      gsap.from(headRef.current,{
        y:-70,
        opacity:0,
        duration:0.6,
        delay:0.3,
        stagger:0.2
  
    }),

    gsap.from('.work-img',{
      duration:1.6,
      height:0,
      rotate:5,
      opacity:0,
    
      scrollTrigger:{
        trigger:workRef.current,
        start: "top 97%",  // Start when the top of the element hits 80% of the viewport
        end: "top 20%",
        
      }
    })
  
    }
    
  })

 

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // Pin the entire container
  //     ScrollTrigger.create({
  //       trigger: containerRef.current,
  //       start: 'top top',
  //       end: '+=90%', // Pin for twice the height of the viewport
  //       pin: true,
  //       pinSpacing: false,
  //     });

  //     // Animate the hero-anime section
  //     gsap.fromTo(animeRef.current, 
  //       { x: '-110%' },
  //       {
  //         x: '0%',
  //         duration: 1,
  //         scrollTrigger: {
  //           trigger: containerRef.current,
  //           start: 'top top',
  //           end: '+=100%',
  //           scrub: 1,
  //           markers: true,
  //         }
  //       }
  //     );
  //   });

  //   return () => ctx.revert(); // cleanup
  // }, []);

  



  return (
    <div className='main-home'>
      <div ref={containerRef} >
        <div className="main-hero" id='main-hero' ref={mainHeroRef}>
          <div className="hero-full-text-panel">
            <div className="hero-hello-text">
              <div className="perspective">
                <h1 className='hero-text' ref={hiRef}>Hi <span>👋🏻</span></h1>
              </div>
            </div>
            <div className="hero-text-content">
              <div className="perspective">
                <h1 className='hero-text name' ref={nameRef}> I'm Hemant</h1>
              </div>
            </div>
          </div>
          <div className="hero-resume">
            <div className="link-list" >
              <a href='https://docs.google.com/document/d/1-gdTaGcz2bslTTnp1xLkTPblPQZWxZt51twvPRNZVLM/edit?usp=sharing' target='_blank' style={{textDecoration:'none'}}><h3 ref={headRef} className='underline-anime'>Resume</h3></a>
              
            </div>
          </div>
        </div>
        {/* <section className='hero-anime' ref={animeRef} >
          Hero Anime Section
        </section> */}

        <section className='work'>
          <div className="work-top">
            <h3>Here's what</h3>
            <p>I've been working on!</p>
          </div>

          <div className="main-work" >
            
            <div className="work-items " >
            <Link className='works-link' to={'/projects/feedback'}>
              <div className="work-img feedback" ref={workRef}>
                  <img src="https://images.unsplash.com/photo-1644574141709-c739285ae771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  {/* <img src={feedbackImg} alt="" /> */}
              </div>
              <div className="work-desc">
                <h3 className='work-title'>feedback app</h3>
              </div>
              </Link>
            </div>
           
           
          
          <div className="work-items  row-2">
          <Link className='works-link' to={'projects/toysaga'}>
              <div className="work-img toysaga">
                <img src="https://images.unsplash.com/photo-1623939012339-5b3dc8eca7c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                {/* <img src={toysagaImg} alt="" /> */}
              </div>
              <div className="work-desc">
                <h3 className='work-title'>toysaga</h3>
              </div>
              </Link>
            </div>
          
            


            
            <div className="work-items  row-2">
            <Link className='works-link' to={'/projects/movie'}>
              <div className="work-img movie">
                <img src="https://images.unsplash.com/photo-1512070679279-8988d32161be?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                {/* <img src={movieImg} alt="" /> */}
              </div>
              <div className="work-desc">
                <h3 className='work-title'>cineverse</h3>
              </div>
              </Link>
            </div>
          
            


            <div className="work-items">
              
            <Link className='works-link' to={'/projects/music'}>
              <div className="work-img music">
                <img src="https://images.unsplash.com/photo-1420161900862-9a86fa1f5c79?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                {/* <img src={musicImg} alt="" /> */}
              </div>
              <div className="work-desc">
                <h3 className='work-title'>top floor</h3>
              </div>
              </Link>
            </div>
          
            
          </div>

        </section>
      </div>
    </div>
  )
}

export default Home





// import React,{useRef} from 'react'
// import '../css/home.css'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/all';
// import { useGSAP } from '@gsap/react'; 
// function Home() {

//   const hiRef=useRef();
//   const nameRef=useRef();
//   const animeRef=useRef();


//   useGSAP(()=>{
//     gsap.from(hiRef.current,{
//       y:10,
//      rotateX:-90,
//      opacity:1,
//      duration:0.6,
//      delay:0.7,
    

//  })
// })

// useGSAP(()=>{
//   gsap.from(nameRef.current,{
//     y:10,
//    rotateX:-90,
//    opacity:1,
//    duration:0.5,
//    delay:0.9,
  

// })
// })

// useGSAP(()=>{
//   gsap.from(animeRef.current,{
//     x:'-100%',
//    duration:2,
//    delay:2,
//    scrollTrigger:{
//     trigger:'#main-hero',
//     markers:true,
//     scroller:'body',
//    }
  

// })
// })



//   return (
//     <div className='main-home'>
//       <div className="main-hero" id='main-hero'>
//         <div className="hero-full-text-panel">
//           <div className="hero-hello-text">
//             <div className="perspective">
//               <h1 className='hero-text' ref={hiRef}>Hi <span>👋🏻</span></h1>
//             </div>

//           </div>

//           <div className="hero-text-content">
//             <div className="perspective">
//               <h1 className='hero-text name' ref={nameRef}> I'm Hemant</h1>
//             </div>
//           </div>

//         </div>

//         <div className="hero-resume">
//           <div className="link-list">
//             <h3>Resume</h3>
//           </div>
          

//         </div>

//       </div>

//       <section className='hero-anime' ref={animeRef} >

//       </section>
//     </div>
//   )
// }

// export default Home

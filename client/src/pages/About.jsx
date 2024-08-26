import React,{useEffect,useRef} from 'react'
import '../css/about.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import EmblaCarousel from '../components/ui/EmblaCarousel'
import image1 from '../assets/skills/react.png'
import image2 from '../assets/skills/node.png'
import image3 from '../assets/skills/express.png'
import image4 from '../assets/skills/mongo.png'
import image5 from '../assets/skills/redux.png'

gsap.registerPlugin(ScrollTrigger)
function About() {

  const aboutRef=useRef();
  const meRef=useRef()

    const OPTIONS = { loop: true }
const SLIDE_COUNT = 8
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const SLIDES=[image1,image2,image3,image4,image5]

useEffect(() => {

  window.scrollTo(0, 0);

}, []);


useGSAP(()=>{
  gsap.from(aboutRef.current,{
    y: 10,
    rotateX: -90,
    opacity: 0,
    duration: 0.6,
    delay: 0.7,
  }),

  gsap.from(meRef.current,{
    y: 10,
    rotateX: -90,
    opacity: 0,
    duration: 0.6,
    delay: 0.8,
  })
  
})




  return (
    <div className='main-about'>
      <div className="hero-about">
        <div className="main-hero-about">
            <div className="about-text ">
            <h1 className='hero-text' ref={aboutRef}>About</h1>
            </div>
            
            <div className="me-text " >
                <h4 className='hero-text' ref={meRef}>Me <span className='emoji'>😄</span></h4>
            </div>

            <div className="desc-text ">
                <p>I'm good with react, Express.js, Node.js and MongoDB. And learning... </p>
            </div>

        </div>
      </div>

      <section className='skills'>
        <div className="skill-head">
            <h1>skills</h1>
        </div>
        

        <EmblaCarousel  slides={SLIDES} options={OPTIONS} />

      </section>

      <section className='education'>
        <div className="main-edu">
            <div className="edu-container">
                <div className="year">
                    <h3>2023</h3>
                </div>
                <div className="edu-content">
                     <h1>Bachelor of Computer Applications</h1>
                     <p>I graduated from Kumaon University's Amrapali Group Of Institute of the college of Computer Science!</p>
                </div>
            </div>

            <div className="edu-container">
                <div className="year">
                    <h3>2020</h3>
                </div>
                <div className="edu-content">
                     <h1>12th Grade (Physics, Chemistry, Mathematics)</h1>
                     <p>I completed my 12th grade from Vivekanand School with a focus on Physics, Chemistry, and Mathematics.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About

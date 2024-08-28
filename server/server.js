var express = require('express');
const cors = require('cors')
var app = express();


app.use(cors())

app.use(express.static('dist'))


const PORT = 3001


const project=[
    {
        title:'Cine Verse',
        name:'movie',
        project:'cineVerse, the movies review app',
        duration:'1month',
        tools:'react.js',
        imgUrl:'https://images.unsplash.com/photo-1512070679279-8988d32161be?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        challenge:{
            title:'COVID-19 changed our lives forever',
            description:'The global pandemic brought on by the coronavirus of 2019 created sudden, dramatic changes in the way we perceived and carried out in-person interactions. These changes undoubtedly affected shopper behavior in terms of browsing for, selecting, and purchasing groceries. During the start, and extension of COVID-19, the need for groceries and food has not decreased, yet the safety of visiting a grocery store has, and significantly so. The changing and evolving context of the pandemic offered a compelling opportunity for our team’s responsive design endeavor to address.'
        },
        approach:{
            title:'UX Design & Research Lead',
            description:"As 1 of the 2 UX leads, I taught and mentored university students in user-research methodologies (i. e. usability testing, speed-dating protocols, interview protocol creation, competitor analysis processes, affinity diagramming, etc.). I also taught design strategies such as prototyping in Figma, rapid sketching exercises, feedback and critiquing techniques, and others. I made informed design decisions regarding the project's front-end components and continued to use my skills gained in my Master's program to shape the project goals and outcome.",
            title2:"Project Manager",
            desc2:"I worked alongside another graduate student to manage the project direction and progress. I recruited and communicated with participants, outlined and directed the workload for team members, reported progress to faculty advisors and overseers."
        }



    },


    {
        title:'Feedback App',
        name:'feedback',
        project:'feedback, the user review app',
        duration:'1month',
        tools:'react.js',
        imgUrl:'https://images.unsplash.com/photo-1644574141709-c739285ae771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        challenge:{
            title:'COVID-19 changed our lives forever',
            description:'The global pandemic brought on by the coronavirus of 2019 created sudden, dramatic changes in the way we perceived and carried out in-person interactions. These changes undoubtedly affected shopper behavior in terms of browsing for, selecting, and purchasing groceries. During the start, and extension of COVID-19, the need for groceries and food has not decreased, yet the safety of visiting a grocery store has, and significantly so. The changing and evolving context of the pandemic offered a compelling opportunity for our team’s responsive design endeavor to address.'
        },
        approach:{
            title:'UX Design & Research Lead',
            description:"As 1 of the 2 UX leads, I taught and mentored university students in user-research methodologies (i. e. usability testing, speed-dating protocols, interview protocol creation, competitor analysis processes, affinity diagramming, etc.). I also taught design strategies such as prototyping in Figma, rapid sketching exercises, feedback and critiquing techniques, and others. I made informed design decisions regarding the project's front-end components and continued to use my skills gained in my Master's program to shape the project goals and outcome.",
            title2:"Project Manager",
            desc2:"I worked alongside another graduate student to manage the project direction and progress. I recruited and communicated with participants, outlined and directed the workload for team members, reported progress to faculty advisors and overseers."
        }



    },

    {
        title:'Top Floor',
        name:'music',
        project:'Top Floor, the music app to vibe with',
        duration:'1month',
        tools:'react.js',
        imgUrl:'https://images.unsplash.com/photo-1420161900862-9a86fa1f5c79?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        challenge:{
            title:'COVID-19 changed our lives forever',
            description:'The global pandemic brought on by the coronavirus of 2019 created sudden, dramatic changes in the way we perceived and carried out in-person interactions. These changes undoubtedly affected shopper behavior in terms of browsing for, selecting, and purchasing groceries. During the start, and extension of COVID-19, the need for groceries and food has not decreased, yet the safety of visiting a grocery store has, and significantly so. The changing and evolving context of the pandemic offered a compelling opportunity for our team’s responsive design endeavor to address.'
        },
        approach:{
            title:'UX Design & Research Lead',
            description:"As 1 of the 2 UX leads, I taught and mentored university students in user-research methodologies (i. e. usability testing, speed-dating protocols, interview protocol creation, competitor analysis processes, affinity diagramming, etc.). I also taught design strategies such as prototyping in Figma, rapid sketching exercises, feedback and critiquing techniques, and others. I made informed design decisions regarding the project's front-end components and continued to use my skills gained in my Master's program to shape the project goals and outcome.",
            title2:"Project Manager",
            desc2:"I worked alongside another graduate student to manage the project direction and progress. I recruited and communicated with participants, outlined and directed the workload for team members, reported progress to faculty advisors and overseers."
        }



    },

    {
        title:'Toysaga',
        name:'toysaga',
        project:'Toysaga, app for childrens to choose their toys',
        duration:'1month',
        tools:'react.js',
        imgUrl:'https://images.unsplash.com/photo-1623939012339-5b3dc8eca7c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        challenge:{
            title:'COVID-19 changed our lives forever',
            description:'The global pandemic brought on by the coronavirus of 2019 created sudden, dramatic changes in the way we perceived and carried out in-person interactions. These changes undoubtedly affected shopper behavior in terms of browsing for, selecting, and purchasing groceries. During the start, and extension of COVID-19, the need for groceries and food has not decreased, yet the safety of visiting a grocery store has, and significantly so. The changing and evolving context of the pandemic offered a compelling opportunity for our team’s responsive design endeavor to address.'
        },
        approach:{
            title:'UX Design & Research Lead',
            description:"As 1 of the 2 UX leads, I taught and mentored university students in user-research methodologies (i. e. usability testing, speed-dating protocols, interview protocol creation, competitor analysis processes, affinity diagramming, etc.). I also taught design strategies such as prototyping in Figma, rapid sketching exercises, feedback and critiquing techniques, and others. I made informed design decisions regarding the project's front-end components and continued to use my skills gained in my Master's program to shape the project goals and outcome.",
            title2:"Project Manager",
            desc2:"I worked alongside another graduate student to manage the project direction and progress. I recruited and communicated with participants, outlined and directed the workload for team members, reported progress to faculty advisors and overseers."
        }



    },
]

app.get('/api/projects',(req,res)=>{
    res.json(project)
})


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
  });
  
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
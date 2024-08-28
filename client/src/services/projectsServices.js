import axios from 'axios'

const baseUrl='http://localhost:3001/api'

const getProjects=async()=>{
    const response=await axios.get(`${baseUrl}/projects`)
    return response.data
}

const projectsService={
    getProjects
}

export default projectsService;
import { useQuery } from '@apollo/client'
import ProjectCard from './ProjectCard';
import Spinner from './Spinner';
import { GET_PROJECTS } from '../queries/projectQueries';

export default function Projects() {
   const { loading, error, data } = useQuery(GET_PROJECTS);
   if (error) return <p>Something Went Wrong</p>
   if (loading) return <Spinner></Spinner> 
  return <> {!loading && !error && data.projects.length > 0 ? (
    <div className='row mt-4'>
        {data.projects.map(project => (
            <ProjectCard key={project.id} project={project} />
        ))}
    </div>
  ) : (<p>No Projects</p>)} </>
  
}

import { Routes, Route } from 'react-router-dom'
import { topics } from './Topics'
import Chat from './Chat'
import AllTutors from './AllTutors'
import LandingPage from './LandingPage/LandingPage'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path='/tutors' element={<AllTutors/>} />
        {
            topics.map( (topic , ind) => (
                <Route path={"/" + topic} key={ind} element={< Chat topic={topic} />} />
            ))
        }
    </Routes>
  )
}

export default AppRoutes
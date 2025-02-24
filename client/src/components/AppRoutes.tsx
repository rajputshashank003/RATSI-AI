import { Routes, Route } from 'react-router-dom'
import { topics } from './Topics'
import Chat from '../pages/Chat'
import AllTutors from '../pages/AllTutors'
import LandingPage from '../pages/LandingPage'
import GoogleSignIn from '../pages/GoogleSignIn'

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
        <Route path="/signin" element={<GoogleSignIn/>}/>
    </Routes>
  )
}

export default AppRoutes
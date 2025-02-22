import { useNavigate } from 'react-router-dom'
import AppBarLogo from './AppBarLogo';

const AppBar = () => {
    const navigate = useNavigate();
    return (
        <div className='w-[90%] rounded-2xl overflow-hidden p-2 fixed top-[4%] left-1/2 -translate-x-1/2 z-[99] h-[4rem] sm:h-[5rem] backdrop-blur-[8px] '>
            <AppBarLogo/>
            <div onClick={() => navigate("/tutors") } className="absolute z-[99999] right-2 -top-2 sm:-top-4 hover:opacity-[0.7] duration-200  cursor-pointer duration-200 text-[3rem] font-bold bg-gradient-to-t from-green-800 via-green-300 to-green-100 bg-clip-text text-transparent font-sans">
                RATSI
            </div>
        </div>
    )
}

export default AppBar
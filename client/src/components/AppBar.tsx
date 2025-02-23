import { useNavigate } from 'react-router-dom'
import AppBarLogo from './AppBarLogo';
import { useVerifyMe } from '../hooks/useVerifyMe';

const AppBar = () => {
    const navigate = useNavigate();
    const { isAuthenticated , logout } = useVerifyMe();

    return (
        <div className='w-[90%] z-[999999] rounded-2xl overflow-hidden p-2 fixed top-[4%] left-1/2 -translate-x-1/2 z-[99] h-[4rem] sm:h-[5rem] backdrop-blur-[8px] '>
            <div className="absolute top-1/2 -translate-y-1/2 left-1">
                <AppBarLogo/>
            </div>
            <div onClick={() => navigate("/tutors") } className="absolute z-[99999] max-sm:hidden right-40 top-1/2 -translate-y-1/2 hover:opacity-[0.7] duration-200  cursor-pointer duration-200 text-[1.5rem] sm:text-[2.5rem] font-bold bg-gradient-to-t from-green-800 via-green-300 to-green-100 bg-clip-text text-transparent font-sans">
                RATSI
            </div>
            {
                isAuthenticated ?
                <div onClick={logout} className="absolute z-[999999] right-2 top-1/2 -translate-y-1/2 hover:opacity-[0.7] duration-200 cursor-pointer duration-200 text-[1.5rem] flex justify-center items-center sm:text-[1.8rem] px-2 rounded-xl font-bold bg-zinc-200 font-sans">
                    Logout
                </div>
                :
                <div onClick={() => navigate("/signin") } className="absolute z-[999999] right-2 top-1/2 -translate-y-1/2 hover:opacity-[0.7] duration-200 cursor-pointer duration-200 text-[1.5rem] flex justify-center items-center sm:text-[1.8rem] px-2 rounded-xl font-bold bg-zinc-200 font-sans">
                    Login
                </div>
            }
        </div>
    )
}

export default AppBar
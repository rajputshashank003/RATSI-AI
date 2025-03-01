import { useNavigate } from 'react-router-dom'
import AppBarLogo from './AppBarLogo';
import { useVerifyMe } from '../hooks/useVerifyMe';
import Ratsi from './Ratsi';

const AppBar = () => {
    const navigate = useNavigate();
    const { isAuthenticated , logout } = useVerifyMe();

    return (
        <div className='w-[90%] z-[999999] rounded-2xl overflow-hidden p-2 fixed top-[4%] left-1/2 -translate-x-1/2 z-[99] h-[4rem] sm:h-[5rem] backdrop-blur-[8px] '>
            <div className="absolute top-1/2 hover:opacity-[0.8] duration-200 -translate-y-1/2 left-1">
                <AppBarLogo/>
            </div>
            <div onClick={() => navigate("/products")} className='absolute z-[99999] max-sm:hidden right-40 top-1/2 -translate-y-1/2'>
                <Ratsi/>
            </div>
            {
                isAuthenticated ?
                <div onClick={logout} className="absolute z-[999999] right-2 top-1/2 -translate-y-1/2 hover:opacity-[0.7] duration-200 cursor-pointer duration-200 text-[1.5rem] flex justify-center items-center sm:text-[1.8rem] px-2 rounded-xl font-bold bg-zinc-200 font-sans">
                    Logout
                </div>
                :
                <div onClick={() => navigate("/signin") } className="absolute z-[999999] right-2 top-1/2 -translate-y-1/2 hover:opacity-[0.7] duration-200 cursor-pointer duration-200 text-[1.4rem] flex justify-center items-center sm:text-[1.8rem] px-4 rounded-xl font-semibold bg-transparent border border-zinc-200 text-zinc-200 font-sans">
                    Login
                </div>
            }
        </div>
    )
}

export default AppBar
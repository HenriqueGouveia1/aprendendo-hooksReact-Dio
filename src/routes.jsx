import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './pages/homePage'
import {UseCallbackPage} from './pages/useCallback'
import { UseEffectPage } from './pages/useEffectPage'
import UseMemoPage from './pages/useMemoPage'
import {UseStatePage} from './pages/useStatePage'

export const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/useState' element={<UseStatePage/>}/>
                <Route path='/useEffect' element={<UseEffectPage/>}/>
                <Route path='/useCallback' element={<UseCallbackPage/>}/>
                <Route path='/useMemoPage' element={<UseMemoPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
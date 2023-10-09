import MainLayout from './MainLayout'
import MobileLayout from './MobileLayout'


import useResponsive from '../hooks/useResponsive'


export const Layout =()=>{

    const { isDesktop, isMobile } = useResponsive();
    console.log(isDesktop, isMobile)


    return <>
    {isDesktop && <MainLayout/> }
    {isMobile && <MobileLayout/> }

    
    </>
}
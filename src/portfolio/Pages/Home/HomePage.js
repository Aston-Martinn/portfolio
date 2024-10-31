import NavbarStrip from '../../Components/NavbarStrip/NavbarStrip';

import HomeSection from '../../Sections/HomeSection/HomeSection';
import AboutPage from '../About/AboutPage';

const HomePage = () => {
    return (
        <>
            <NavbarStrip></NavbarStrip>
            <HomeSection></HomeSection>
            <AboutPage></AboutPage>
        </>
    )
}

export default HomePage;
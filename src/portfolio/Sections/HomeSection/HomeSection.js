import Image from 'next/image';

import Styles from './HomeSection.module.css';

import { PiHandWaving } from "react-icons/pi";

import Profile from './pic.png';

const HomeSection = () => {
    return (
        <section id='/' className='container-fluid vh-100 bg-black text-light'>
            <div className={`container vh-100 d-flex flex-column align-items-center justify-content-center ${Styles.container}`}>
                <Image
                    src={Profile}
                    alt='profile'
                    width={200}
                    className='img-fluid rounded-circle'
                />
                <h3 className='mt-4'>
                    Hello
                    <PiHandWaving className='ms-2 mb-1' />
                </h3>
                <p>I&apos;m Advaith Bhat B</p>
                <h5 className='text-center'>A Professional Full Stack Engineer @TecniCubes from Kasaragod!</h5>
                <div className={`d-none d-lg-block ${Styles.dividerLarge}`}></div>
                <div className={`d-lg-none ${Styles.dividerMedium}`}></div>
            </div>
        </section>
    )
}

export default HomeSection;
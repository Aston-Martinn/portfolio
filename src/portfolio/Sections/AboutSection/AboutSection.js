import { FaCalendarCheck, FaLocationDot } from "react-icons/fa6";
import { CiMobile1, CiDesktop, CiDesktopMouse2 } from "react-icons/ci";

import Styles from './AboutSection.module.css';

const AboutSection = () => {
    const myStack = {
        "languages": ["Java", "Kotlin", "JavaScript", "SQL", "Dart"],
        "frameworks": ["React JS", "Next JS", "Spring Boot", "Node JS", "Flutter"],
        "tools": ["Docker", "Jenkins", "MySQL", "MongoDB", "Git"],
        "generalSkills": ["Debugging", "Troubleshooting", "Problem Solving", "Project Management", "Version Control", "API Integration", "Linux", "Shell scripting", "System design"]
    };

    return (
        <section className='container-fluid bg-black text-light'>
            <div className={`container ${Styles.container}`}>
                <h3 className='text-start text-uppercase'>About me</h3>
                <div className={`d-none d-lg-block ${Styles.dividerLarge}`}></div>
                <div className={`d-lg-none ${Styles.dividerMedium}`}></div>
                <p className="mt-4">
                    I&apos;m a 25-year-old professional Full Stack Engineer with experience in building, scaling, and maintaining dynamic web applications. With a strong foundation in both front-end and back-end development, I excel at creating intuitive, efficient, and responsive user interfaces, as well as managing robust server-side logic and databases.
                </p>
                <p className="mt-2">
                    My technical toolkit includes languages and frameworks such as JavaScript, TypeScript, React, Node.js, and SQL, allowing me to develop seamless end-to-end solutions. I&apos;m passionate about using modern web technologies to solve real-world problems and improve user experiences.
                </p>
                <p className="mt-2">
                    In addition to web development, I also have experience in Android development, where I work on custom ROMs. I&apos;ve developed and maintain a custom Android ROM called <strong>10X OS</strong>, focused on delivering a unique and optimized user experience for Android devices.
                </p>
                <p className="mt-2">
                    As a driven learner, I stay updated with the latest industry trends, best practices, and emerging tools, always looking to expand my skills. My goal is to leverage my expertise to work on impactful projects, collaborate with innovative teams, and continue growing as a developer in an ever-evolving tech landscape.
                </p>

                <h3 className='text-start text-uppercase mt-4'>experience</h3>
                <div className={`d-none d-lg-block ${Styles.dividerLarge}`}></div>
                <div className={`d-lg-none ${Styles.dividerMedium}`}></div>
                <div className='row mt-4'>
                    <div className='col-lg-4 col-md-4 col-12 mb-3 pe-0'>
                        <div className={`card p-4 ${Styles.card}`}>
                            <h4>Android engineer</h4>
                            <p className='mb-2'>
                                <FaCalendarCheck className="mb-1 me-2" />
                                2022 Nov - 2024 Feb
                            </p>
                            <p>
                                <FaLocationDot className="mb-1 me-2" />
                                Access Research Labs, Mangalore
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-12 mb-4 pe-0'>
                        <div className={`card p-4 ${Styles.card}`}>
                            <h4>Full stack engineer</h4>
                            <p className='mb-2'>
                                <FaCalendarCheck className="mb-1 me-2" />
                                2024 Oct - Present
                            </p>
                            <p>
                                <FaLocationDot className="mb-1 me-2" />
                                Tecnicubes, Mangalore
                            </p>
                        </div>
                    </div>
                </div>

                <h3 className='text-start text-uppercase mt-4'>my skills</h3>
                <div className={`d-none d-lg-block ${Styles.dividerLarge}`}></div>
                <div className={`d-lg-none ${Styles.dividerMedium}`}></div>
                <div className="row mt-4">
                    {myStack.generalSkills.map((skill, index) => (
                        <div key={index} className="col-auto mb-3 pe-0">
                            <div className={`card ${Styles.skillsCard}`}>
                                <div className="card-body text-center">
                                    <h5 className="mb-0">{skill}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <h3 className='text-start text-uppercase mt-4'>langages known</h3>
                <div className={`d-none d-lg-block ${Styles.dividerLarge}`}></div>
                <div className={`d-lg-none ${Styles.dividerMedium}`}></div>
                <div className="row mt-4">
                    {myStack.languages.map((language, index) => (
                        <div key={index} className="col-auto mb-3 pe-0">
                            <div className={`card ${Styles.skillsCard}`}>
                                <div className="card-body text-center">
                                    <h5 className="mb-0">{language}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <h3 className='text-start text-uppercase mt-4'>frameworks known</h3>
                <div className={`d-none d-lg-block ${Styles.dividerLarge}`}></div>
                <div className={`d-lg-none ${Styles.dividerMedium}`}></div>
                <div className="row mt-4">
                    {myStack.frameworks.map((framework, index) => (
                        <div key={index} className="col-auto mb-3 pe-0">
                            <div className={`card ${Styles.skillsCard}`}>
                                <div className="card-body text-center">
                                    <h5 className="mb-0">{framework}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <h3 className='text-center text-uppercase mt-4'>what i do</h3>
                <div className="row mt-4">
                <div className='col-lg-3 col-md-6 col-12 mb-4'>
                        <div className={`card p-4 h-100 ${Styles.card}`}>
                            <CiMobile1 size={28} color="#FFF" />
                            <h5 className="mt-4 text-white">Android custom ROM</h5>
                            <p className="text-white">I specialize in creating custom Android ROMs that enhance device performance, provide unique features, and offer a personalized user experience.</p>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-12 mb-4'>
                        <div className={`card p-4 h-100 ${Styles.card}`}>
                            <CiMobile1 size={28} color="#FFF" />
                            <h5 className="mt-4 text-white">Mobile app development</h5>
                            <p className="text-white">I create user-friendly mobile applications that provide seamless experiences across devices.</p>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-12 mb-4'>
                        <div className={`card p-4 h-100 ${Styles.card}`}>
                            <CiDesktop size={28} color="#FFF" />
                            <h5 className="mt-4 text-white">Web development</h5>
                            <p className="text-white">I build responsive and dynamic websites tailored to meet your business needs, ensuring an engaging user experience.</p>
                            </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-12 mb-4'>
                        <div className={`card p-4 h-100 ${Styles.card}`}>
                            <CiDesktopMouse2 size={28} color="#FFF" />
                            <h5 className="mt-4 text-white">Deployment</h5>
                            <p className="text-white">I streamline the deployment process, ensuring that applications are delivered efficiently and securely to production environments.</p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;
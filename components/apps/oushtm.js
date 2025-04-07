import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutOusHtm extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "skills": <Skills />,
            "projects": <Projects />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about oushtm" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>

                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="oushtm's skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="oushtm's projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>

                <div className='my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex justify-center items-center'>
                    <iframe src="https://github.com/sponsors/oushtm/button" title="Sponsor oushtm" width={"100%"} height={"100%"} ></iframe>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute rounded w-6 h-6 top-1 left-1 bg-ub-cool-grey hover:bg-ub-warm-grey z-30">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutOusHtm;

export function displayAboutOusHtm() {
    return <AboutOusHtm />;
}

function About() {
    return (
        <>
            <div className="w-24 md:w-32 my-4 overflow-hidden">
                <img className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg" src="./images/htm.jpg" alt="HTMdesigner Profile Picture" />
            </div>
            <div className="mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div className="flex flex-col items-center">
                    <div className="text-2xl md:text-3xl font-bold mb-2 relative">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">HTMdesigner</span>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
                    </div>
                    <div className="font-normal mt-2 flex flex-col items-center">
                        <div className="text-xl md:text-2xl font-medium">
                            <span className="text-white">Creative </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 font-bold">Graphic Designer</span>
                        </div>
                        <div className="flex items-center justify-center mt-2 space-x-3">
                            <span className="px-2 py-1 bg-pink-500 bg-opacity-20 text-pink-400 rounded-md text-sm">UI/UX</span>
                            <span className="px-2 py-1 bg-purple-500 bg-opacity-20 text-purple-400 rounded-md text-sm">Branding</span>
                            <span className="px-2 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-md text-sm">Illustration</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4">
                <li className="flex items-start mb-2">
                    <img src="./themes/Yaru/status/emoji-list.svg" alt="emoji" className="w-5 h-5 mr-2 mt-0.5" />
                    <span>I'm a <span className=" font-medium">creative graphic designer</span> blending bold ideas with clean visuals</span>
                </li>
                <li className="flex items-start mb-2">
                    <img src="./themes/Yaru/status/emoji-list.svg" alt="emoji" className="w-5 h-5 mr-2 mt-0.5" />
                    <span>From logos to full brand identities, I turn concepts into eye-catching designs that speak loud and clear</span>
                </li>
                <li className="flex items-start mb-2">
                    <img src="./themes/Yaru/status/emoji-list.svg" alt="emoji" className="w-5 h-5 mr-2 mt-0.5" />
                    <span>Simplicity, impact, and originality — that's my style</span>
                </li>
                <li className="flex items-start mb-2">
                    <img src="./themes/Yaru/status/emoji-list.svg" alt="emoji" className="w-5 h-5 mr-2 mt-0.5" />
                    <span>Connect with me on <a href="https://www.linkedin.com/in/oussamahatim/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">LinkedIn</a></span>
                </li>
                <li className="flex items-start mb-2">
                    <img src="./themes/Yaru/status/emoji-list.svg" alt="emoji" className="w-5 h-5 mr-2 mt-0.5" />
                    <span>Email me at: <a href="mailto:oussamahatimofficiel@gmail.com" className="text-blue-400 hover:underline">oussamahatimofficiel@gmail.com</a></span>
                </li>
            </ul>
        </>
    )
}



function Skills() {
    const skillCategories = [
        {
            title: "Design",
            skills: [
                { icon: "🎨", name: "Logo Design", level: 95 },
                { icon: "🖌️", name: "Branding & Visual Identity", level: 90 },
                { icon: "📱", name: "Social Media Design", level: 92 }
            ]
        },
        {
            title: "Digital Media",
            skills: [
                { icon: "🖥️", name: "UI Elements & Web Graphics", level: 88 },
                { icon: "✏️", name: "Typography & Layout", level: 85 },
                { icon: "📷", name: "Photo Editing & Retouching", level: 93 }
            ]
        },
        {
            title: "Creativity",
            skills: [
                { icon: "💡", name: "Creative Concept Development", level: 89 },
                { icon: "🧠", name: "Problem-Solving Through Design", level: 87 }
            ]
        }
    ];
    
    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                My Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            
            <div className="w-11/12 md:w-5/6">
                {skillCategories.map((category, catIndex) => (
                    <div key={catIndex} className="mb-6">
                        <h3 className="text-lg font-semibold mb-2 text-pink-400">{category.title}</h3>
                        <div className="space-y-3">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="bg-ub-cool-grey bg-opacity-20 rounded-lg p-2">
                                    <div className="flex items-center mb-1">
                                        <span className="mr-2 text-lg">{skill.icon}</span>
                                        <span className="text-white font-medium">{skill.name}</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                                        <div 
                                            className="bg-gradient-to-r from-pink-500 to-purple-600 h-2.5 rounded-full" 
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                
                <div className="mt-4 bg-ub-cool-grey bg-opacity-20 rounded-lg p-3">
                    <div className="flex items-center mb-2">
                        <span className="mr-2 text-lg">🧰</span>
                        <span className="text-white font-medium">Tools I Master</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {["Photoshop", "Illustrator", "Figma", "Canva", "InDesign", "After Effects"].map((tool, index) => (
                            <span key={index} className="px-2 py-1 bg-ub-cool-grey rounded-md text-sm">{tool}</span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Brand Identity Design",
            date: "Mar 2025",
            link: "#",
            description: [
                "Complete brand identity design for a local coffee shop",
                "Designed logo, business cards, packaging, and signage",
                "Created a cohesive visual language that reflects the brand's artisanal values"
            ],
            domains: ["logo-design", "branding", "packaging"]
        },
        {
            name: "Social Media Campaign",
            date: "Feb 2025",
            link: "#",
            description: [
                "Designed a series of Instagram and Facebook posts for a fashion brand",
                "Created consistent visual style while maintaining brand guidelines",
                "Increased engagement by 45% through compelling visual storytelling"
            ],
            domains: ["social-media", "advertising", "illustration"]
        },
        {
            name: "UI Design System",
            date: "Jan 2025",
            link: "#",
            description: [
                "Developed a comprehensive UI design system for a mobile app",
                "Created reusable components, typography guidelines, and color palettes",
                "Ensured consistency across all app screens and user flows"
            ],
            domains: ["ui-design", "mobile", "design-system"]
        },
        {
            name: "Editorial Layout",
            date: "Dec 2024",
            link: "#",
            description: [
                "Designed a 32-page magazine layout for a lifestyle publication",
                "Created custom typography treatments and photo layouts",
                "Balanced text and visuals to create engaging reading experience"
            ],
            domains: ["editorial", "typography", "layout"]
        },
        {
            name: "Product Packaging",
            date: "Nov 2024",
            link: "#",
            description: [
                "Designed packaging for a premium skincare product line",
                "Created a minimalist aesthetic with subtle luxury details",
                "Developed a system that works across various product sizes and types"
            ],
            domains: ["packaging", "branding", "print-design"]
        },
        {
            name: "Photo Retouching",
            date: "Oct 2024",
            link: "#",
            description: [
                "Professional photo retouching for a fashion lookbook",
                "Enhanced colors, removed imperfections, and created consistent visual style",
                "Maintained natural look while improving overall image quality"
            ],
            domains: ["photo-editing", "retouching", "fashion"]
        }
    ];

    const tag_colors = {
        "logo-design": "yellow-300",
        "branding": "red-600",
        "packaging": "red-500",
        "print-design": "red-400",
        "social-media": "yellow-400",
        "advertising": "blue-400",
        "illustration": "blue-500",
        "ui-design": "purple-500",
        "mobile": "pink-600",
        "design-system": "pink-400",
        "editorial": "yellow-600",
        "typography": "green-600",
        "layout": "green-200",
        "photo-editing": "gray-300",
        "retouching": "blue-300",
        "fashion": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <div className="my-4 w-5/6 md:w-3/4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    <img src="./my-works/1.png" alt="Design Sample 1" className="w-full h-auto rounded shadow-md hover:shadow-lg transition-all" />
                    <img src="./my-works/2.jpg" alt="Design Sample 2" className="w-full h-auto rounded shadow-md hover:shadow-lg transition-all" />
                    <img src="./my-works/3.jpg" alt="Design Sample 3" className="w-full h-auto rounded shadow-md hover:shadow-lg transition-all" />
                    <img src="./my-works/4.jpg" alt="Design Sample 4" className="w-full h-auto rounded shadow-md hover:shadow-lg transition-all" />
                    <img src="./my-works/5.png" alt="Design Sample 5" className="w-full h-auto rounded shadow-md hover:shadow-lg transition-all" />
                    <img src="./my-works/6.jpg" alt="Design Sample 6" className="w-full h-auto rounded shadow-md hover:shadow-lg transition-all" />
                </div>
                <div className="text-center text-lg font-bold text-white bg-ub-orange bg-opacity-90 py-2 rounded-lg">
                    +200 Projets Réalisés
                </div>
            </div>


        </>
    )
}


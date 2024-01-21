import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CiFolderOn } from "react-icons/ci";
import { RiFileList3Line } from "react-icons/ri";
import { HiComputerDesktop } from "react-icons/hi2";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { FaBars} from "react-icons/fa";
import Logo from "../../images/logo.png"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
    {
        path: "/",
        name: "Dashboard",
        icon: <MdSpaceDashboard />,
        subRoutes: [
            {
                path: "/",
                name: "Employee Dashboard",
            }            
        ],
    },
    {
        path: "/attendance",
        name: "Attendance",
        icon: <IoSettingsOutline />,
        subRoutes: [
            {
                path: "/attendance/myAttendance",
                name: "My Attendance ",
            },
            {
                path: "/attendance/attendanceRequest",
                name: "Attendance Request",
            },
            {
                path: "/attendance/shift",
                name: "My shift Time",
            },
            {
                path: "/attendance/remoteWork",
                name: "Remote Work Request",
            },
            
        ],
    },
    
    {
        path: "/leave",
        name: "Leave",
        icon: <CiFolderOn />,
        subRoutes: [
            {
                path: "/leave/other",
                name: "Other",
            }            
        ],
    },
    {
        path: "/recruitment",
        name: "Recruitment",
        icon: <RiFileList3Line />,
        subRoutes: [
            {
                path: "/recruitment/other",
                name: "Other",
            }            
        ],
    },
    {
        path: "/payroll",
        name: "Payroll",
        icon:<HiComputerDesktop />,
        subRoutes: [
            {
                path: "/payroll/other",
                name: "Other",
            }            
        ],
    },
    {
        path: "/loan",
        name: "Loan",
        icon: <TfiArrowCircleDown />,
        subRoutes: [
            {
                path: "/loan/other",
                name: "Other",
            }            
        ],
    },
    {
        path: "/other",
        name: "Other",
        icon: <TfiArrowCircleDown />,
        subRoutes: [
            {
                path: "/other/other",
                name: "Other",
            }            
        ],
    }
];

const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            transition: {
                duration: 0.2,
            },
        },
    };

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <>
            <div className="main-container">
                <motion.div
                    animate={{
                        width: isOpen ? "280px" : "55px",
                        transition: {
                            duration: 0.5,
                            type: "spring",
                            damping: 10,
                        },
                    }}
                    className={`sidebar `}
                >
                    <div className="top_section">
                        <AnimatePresence>
                            {isOpen && (
                                <motion.h1 variants={showAnimation} initial="hidden" animate="show" exit="hidden" className="logo">
                                    <img src={Logo} alt="LOGO" />
                                </motion.h1>
                            )}
                        </AnimatePresence>

                        <div className="bars">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    <section className="routes">
                        {routes.map((route, index) => {
                            if (route.subRoutes) {
                                return (
                                    <SidebarMenu setIsOpen={setIsOpen} route={route} showAnimation={showAnimation} isOpen={isOpen}/>
                                );
                            }

                            return (
                                <NavLink to={route.path} key={index} className="link" activeClassName="active">
                                    <div className="icon">{route.icon}</div>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div variants={showAnimation} initial="hidden" animate="show" exit="hidden" className="link_text">
                                                {route.name}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </NavLink>
                            );
                        })}
                    </section>
                </motion.div>

                <main style={{ width: isOpen ? "81.6%" : "96.1%" }}>{children}</main>
            </div>
        </>
    );
};

export default SideBar;
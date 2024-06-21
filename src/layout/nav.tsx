import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoLogoXbox } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react"; // Import useState hook

function Nav() {
    const [showTabs, setShowTabs] = useState(false);

    const toggleTabs = () => {
        setShowTabs(!showTabs);
    };

    const closeNav = () => {
        setShowTabs(false);
    };

    return (
        <div className="navbar">
            <motion.div className="toggle-button" onClick={toggleTabs} >
                <BsLayoutSidebarInset style={{ fontSize: '25px', cursor: 'pointer', color: 'white', margin: '5px 0' }} />
            </motion.div>
            <motion.div
                className="image"
                // initial={{ y: -250 }}
                animate={{ y: 0, rotate: 360 }}
                transition={{ duration: 10, loop: Infinity, ease: "linear" }}
            >
                <IoLogoXbox style={{ fontSize: '25px', cursor: 'pointer', color: 'white', margin: '5px 0' }} />
            </motion.div>
            <div className="tab">
                <ul>
                    <motion.li whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}>Home</motion.li>
                     <motion.li whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}>Today</motion.li>
                     <motion.li whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}>Scheduled</motion.li>
                     <motion.li whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}>All</motion.li>
                     <motion.li whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}>Flagged</motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}>Completed</motion.li>
                     <motion.li whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}>Up Comming</motion.li>

                </ul>
            </div>
            <div className="search-bar">
                <input className="search" type="text" placeholder="Search..." />
                <CiSearch style={{ fontSize: '25px', cursor: 'pointer', color: 'white', margin: '5px 0' }} />
            </div>
            <div className="bell">
                <FaBell style={{ fontSize: '25px', cursor: 'pointer', color: 'white', margin: '5px 0' }} />
            </div>
            <div className="avtar">
                <FaUser style={{ fontSize: '25px', cursor: 'pointer', color: 'white', margin: '5px 0' }} />
            </div>

            <div className={`sidebar ${showTabs ? 'open' : ''}`} id="mySidebar">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
                <a href="#">Home</a>
                <a href="#">Today</a>
                <a href="#">Scheduled</a>
                <a href="#">Flagged</a>
                <a href="#">Completed</a>
                <a href="#">Up Comming</a>

            </div>
        </div>
    )
}

export default Nav;

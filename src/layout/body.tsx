import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "../layout/body.css";

const cards = [
  {
    title: "Card Title 1",
    description: "This is the description for card 1.",
    tasks: ["Task 1.1", "Task 1.2", "Task 1.3", "Task 1.4", "Task 1.5", "Task 1.6", "Task 1.7", "Task 1.8", "Task 1.9", "Task 1.10"]
  },
  {
    title: "Card Title 2",
    description: "This is the description for card 2.",
    tasks: ["Task 2.1", "Task 2.2", "Task 2.3", "Task 2.4", "Task 2.5", "Task 2.6", "Task 2.7", "Task 2.8", "Task 2.9", "Task 2.10"]
  },
  {
    title: "Card Title 3",
    description: "This is the description for card 3.",
    tasks: ["Task 3.1", "Task 3.2", "Task 3.3", "Task 3.4", "Task 3.5", "Task 3.6", "Task 3.7", "Task 3.8", "Task 3.9", "Task 3.10"]
  },
  {
    title: "Card Title 4",
    description: "This is the description for card 4.",
    tasks: ["Task 4.1", "Task 4.2", "Task 4.3", "Task 4.4", "Task 4.5", "Task 4.6", "Task 4.7", "Task 4.8", "Task 4.9", "Task 4.10"]
  },
  {
    title: "Card Title 5",
    description: "This is the description for card 5.",
    tasks: ["Task 5.1", "Task 5.2", "Task 5.3", "Task 5.4", "Task 5.5", "Task 5.6", "Task 5.7", "Task 5.8", "Task 5.9", "Task 5.10"]
  },
  {
    title: "Card Title 6",
    description: "This is the description for card 6.",
    tasks: ["Task 6.1", "Task 6.2", "Task 6.3", "Task 6.4", "Task 6.5", "Task 6.6", "Task 6.7", "Task 6.8", "Task 6.9", "Task 6.10"]
  }
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};


const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const taskItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export const Body = () => (
  <motion.div
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {cards.map((card, index) => (
      <motion.div
        key={index}
        className="items"
        variants={item}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <FontAwesomeIcon icon={faCheckCircle} size="2x" />
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <motion.div
          className="task-list"
          variants={container} 
          initial="hidden"  
          animate="visible"
        >
          {card.tasks.map((task, taskIndex) => (
            <motion.p
              key={taskIndex}
              className="task-item"
              variants={taskItem}
            >
              {task}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    ))}
  </motion.div>
);

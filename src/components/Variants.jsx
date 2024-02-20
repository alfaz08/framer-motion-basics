import { motion } from "framer-motion";

const shapeVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      type: "spring",
    },
  },
};

const childVariants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 2,

    transition: {
      duration: 2,
    },
  },
};

const Variants = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={shapeVariants}
      className="bg-purple-400 w-32 h-32 rounded border m-4"
    >
      <motion.div 
      className="bg-red-400 w-12 h-12 rounded-full border m-4"
      
      variants={childVariants}
      >

      </motion.div>
    </motion.div>
  );
};

export default Variants;

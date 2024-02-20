import {motion} from 'framer-motion'

const ButtonTap = () => {
  return (
    <div>
      <motion.button
      className='bg-black text-white p-4 border m-16'
      whileTap={{scale:0.5}}
      whileHover={{
      scale:1.4,
      }}
      >
      Tap Me
    </motion.button>

    <motion.button
      className='bg-black text-white p-4 border m-16'
      whileTap={{scale:0.5}}
      whileHover={{
      scale:1.4,
      transition:{ yoyo: Infinity}
      }}
      >
      Tap Me TWO
    </motion.button>


    </div>
  );
};

export default ButtonTap;
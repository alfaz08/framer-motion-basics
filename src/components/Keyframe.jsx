import {motion} from 'framer-motion'

const Keyframe = () => {
  return (
    <motion.div
      className='bg-red-600 border w-32 h-32 m-16'
     
      animate={{
        borderRadius:["20%","20%","50%","50%","20%",],
       rotate: [0,90,180,270,0],
       scale: [1,1,2,2.1],
       
      }}
      transition={{duration:1.7}}
     
    />
  );
};

export default Keyframe;
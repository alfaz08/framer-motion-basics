import {motion} from 'framer-motion'

const TransitionType = () => {
  return (
<div>

<motion.div
    className='text-center mt-8'
    initial={{opacity:0,x:"-100vh"}}
          animate={{opacity:1,x:0}}
          transition={{
            duration:2}}
    >
      <h1>Learning Animation</h1>

      <p>We are enjoying reactive Learning Animation course LWS is awesome!!!!</p>
    </motion.div>


    <motion.div
    className='text-center mt-8'
    initial={{opacity:0,x:"-100vh"}}
          animate={{opacity:1,x:0}}
          transition={{
            type:'spring',
            duration:2}}
    >
      <h1>Learning Animation</h1>

      <p>We are enjoying reactive Learning Animation course LWS is awesome!!!!</p>
    </motion.div>


    <motion.div
    className='text-center mt-8'
    initial={{opacity:0,x:"-100vh"}}
          animate={{opacity:1,x:0}}
          transition={{
            type:'spring',
            bounce:0.9,
            duration:2}}
    >
      <h1>Learning Animation</h1>

      <p>We are enjoying reactive Learning Animation course LWS is awesome!!!!</p>
    </motion.div>


</div>
    




  );
};

export default TransitionType;
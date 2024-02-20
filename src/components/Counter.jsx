import {motion,useMotionValue,useTransform,animate} from 'framer-motion'
import { useEffect } from 'react';



const Counter = () => {

  const count = useMotionValue(0)
  const roundedValue = useTransform(count,Math.round)
  
   useEffect(()=>{
      const animation = animate(count,100,{duration:2})
      return animation.stop
   },[count])

  return (
    <motion.div className='text-2xl font-bold mt-4 p-4'>
      {roundedValue}
    </motion.div>
  );
};

export default Counter;
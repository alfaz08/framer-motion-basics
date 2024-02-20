import {motion} from 'framer-motion'

const Box =({text})=>{
  return (
    <motion.div
    className='w-32 h-32 m-4 border rounded-sm text-center bg-pink-300 text-black'
    initial={{opacity:0,x:-50}}
    whileInView={{
      opacity:1,
    x:0,
    transition:{
      duration:1
    }
    }}
    viewport={{once:true}}
    >
      {text}
    </motion.div>
  );
}



const ScrollReveal = () => {

  const greetings = ["Helo","I","love","you"]
  return (
    <div>
      {
        greetings.map((greeting,index)=>(
          <Box key={index} text={greeting}></Box>
        ))
      }
    </div>
  );
};

export default ScrollReveal;
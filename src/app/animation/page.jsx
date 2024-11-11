"use client"
import {motion} from 'framer-motion'
const Page = () => {

    const topVariants ={
        closed:{
            rotate:0
        },
        opened:{
            rotate:45,
            backgroundColor: "rgb(255, 255, 255)"
        }
    }
    const middleVariants = {
        closed:{
            opacity:1
        },
        opened:{
            opacity:0
        }
    }
    const bottomVariants = {
        closed:{
            rotate:0
        },
        opened:{
            rotate:-45,
            backgroundColor: "rgb(255, 255, 255)"
        }
    }

    const menu = {
        top:{
         x: "120px"
        },
        bottom:{
            x:0
        }
    }
  return (
    <div>
      {/* <button className='ml-4'>
        <motion.div variants={topVariants} animate={open ? "opened": "closed"}    className="origin-left w-11 rounded-md h-1 bg-black p-1 mt-2"></motion.div>
        <motion.div variants={middleVariants} animate={open ? "opened": "closed"} className="origin-left w-11 rounded-md h-1 bg-black p-1 mt-2"></motion.div>
        <motion.div variants={bottomVariants} animate={open ? "opened": "closed"} className="origin-left w-11 rounded-md h-1 bg-black p-1 mt-2"></motion.div>
      </button> */}

    <motion.div variants={menu} animate={top} className='bg-black text-white'>Heloo</motion.div>

    </div>
  );
};

export default Page;

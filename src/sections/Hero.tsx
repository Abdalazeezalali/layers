"use client"
import Button from "@/components/Button";
import design1 from "@/assets/images/design-example-1.png"
import design2 from "@/assets/images/design-example-2.png"
import Image from "next/image";
import Pointer from "@/components/Pointer";
import {motion, useAnimate} from "framer-motion"
import { useEffect } from "react";
import cursorYouImg from "@/assets/images/cursor-you.svg"
const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
export default function Hero() {
    const [LeftDesignScope,LeftDesignAnimate]=useAnimate()
    const [LeftPointerScope,LeftPointerAnimate]=useAnimate()
    const [RightDesignScope,RightDesignAnimate]=useAnimate()
    const [RightPointerScope,RightPointerAnimate]=useAnimate()
    useEffect(() => {
        LeftDesignAnimate([
            [LeftDesignScope.current,{opacity:[1]},{duration:0.5}],
            [LeftDesignScope.current,{y:0,x:0},{duration:0.5}],
        ])
        LeftPointerAnimate([
            [LeftPointerScope.current,{opacity:1},{duration:0.5}],
            [LeftPointerScope.current,{y:0,x:-100},{duration:0.5}],
            [LeftPointerScope.current,{x:0,y:[0,16,0]},{duration:0.5,ease:"easeInOut"}],
        ])
        RightDesignAnimate([
            [RightDesignScope.current,{opacity:1},{duration:0.5,delay:1.5}],
            [RightDesignScope.current,{x:0,y:0},{duration:0.5}]
        ])
        RightPointerAnimate([
            [RightPointerScope.current,{opacity:1},{duration:0.5,delay:1.5}],
            [RightPointerScope.current,{y:0,x:175},{duration:0.5}],
            [RightPointerScope.current,{x:0,y:[0,20,0]},{duration:0.5,ease:"easeInOut"}],
        ])
    }, [])
    return <main className="py-24 overflow-x-clip" style={{
        cursor:`url(${cursorYouImg.src}), auto`,
    }}>
        <div className="container relative ">
            <motion.div drag ref={LeftDesignScope} initial={{opacity:0,y:100,x:-100}} className="absolute -left-32 top-16 hidden lg:block">
                <Image draggable="false" src={design1} alt="design"/>
            </motion.div>
            <motion.div ref={LeftPointerScope} initial={{opacity:0,y:100,x:-200}} className="absolute left-56 top-96 hidden lg:block">
                <Pointer name="John" color="blue"/>
            </motion.div>
            <motion.div drag initial={{opacity:0 ,x:100,y:100}} ref={RightDesignScope} className="absolute -right-64 -top-16 hidden lg:block">
                <Image draggable="false" src={design2} alt="design"/>
            </motion.div>
            <motion.div initial={{opacity:0,x:275,y:100}} ref={RightPointerScope} className="absolute right-80 -top-4 hidden lg:block">
                <Pointer name="Doe" color="red"/>
            </motion.div>
            <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">✨ $7.5M seed round raised
                </div>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">Impactful design, created effortlessly</h1>
            <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">{text}</p>
            <form action="" className="flex  border border-white/15 rounded-full  max-w-lg  p-2 mt-8  mx-auto">
                <input type="email" name="" id="" placeholder="Enter Your Email" className="bg-transparent px-4 md:flex-1 w-full"/>
                <Button type="submit" variant="primary" className="whitespace-nowrap " size="sm">Sign Up</Button>
            </form>
        </div>
    </main>;
}

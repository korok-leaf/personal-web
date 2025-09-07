"use client";

import Image from "next/image"
import { motion } from "framer-motion";
import Badge from "./Badge";

const About = ({setAboutMe} : any) => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const hobbies = [
        { icon: "⚽", name: "Football", color: "from-green-400 to-green-600" },
        { icon: "🏸", name: "Badminton", color: "from-blue-400 to-blue-600" },
        { icon: "📚", name: "Reading", color: "from-purple-400 to-purple-600" },
        { icon: "🎮", name: "Not Gaming", color: "from-red-400 to-red-600" }
    ];

    return (
        <motion.div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
            </div>

            <motion.div 
                className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900/95 via-purple-900/30 to-slate-900/95 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Close Button */}
                <button
                    onClick={() => setAboutMe(false)}
                    className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group"
                >
                    <svg className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-8 lg:p-12">
                    {/* Header */}
                    <motion.div 
                        className="text-center mb-12"
                        variants={itemVariants}
                    >
                        <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
                            About Me
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
                    </motion.div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-16">
                        {/* Text Content */}
                        <motion.div 
                            className="space-y-6"
                            variants={itemVariants}
                        >
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                    Hello! My name is <span className="text-purple-300 font-semibold">Alex Qin</span>. <br />
                                    I am currently a student at the <span className="text-blue-300 font-semibold">University of Waterloo</span> studying Computer Science. <br />
                                    There isn't much interesting about me, but here are some things I enjoy:
                                </p>

                                <div className="grid grid-cols-2 gap-3">
                                    {hobbies.map((hobby, index) => (
                                        <motion.div
                                            key={hobby.name}
                                            className={`flex items-center gap-3 p-3 bg-gradient-to-r ${hobby.color} bg-opacity-10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer`}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{hobby.icon}</span>
                                            <span className="text-white font-medium">{hobby.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Image */}
                        <motion.div 
                            className="flex justify-center"
                            variants={itemVariants}
                        >
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                                <Image
                                    src="/alex.jpg"
                                    width={300}
                                    height={300}
                                    alt="Alex Qin"
                                    className="relative w-80 h-80 shadow-2xl rounded-3xl object-cover border-2 border-white/20 group-hover:border-white/40 transition-all duration-500"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Skills Section */}
                    <motion.div 
                        className="text-center"
                        variants={itemVariants}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-8">
                            Technical Skills
                        </h2>
                        
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <div className="flex flex-wrap justify-center gap-4">
                                <Badge source={"/c.png"} name={"c"}/>
                                <Badge source={"/c++.png"} name={"c++"}/>
                                <Badge source={"/css.png"} name={"css"}/>
                                <Badge source={"/github.png"} name={"github"}/>
                                <Badge source={"/html.png"} name={"html"}/>
                                <Badge source={"/java-script.png"} name={"javascript"}/>
                                <Badge source={"/java.png"} name={"java"}/>
                                <Badge source={"/nextjs.webp"} name={"next.js"}/>
                                <Badge source={"/nodejs.png"} name={"node.js"}/>
                                <Badge source={"/python.png"} name={"python"}/>
                                <Badge source={"/react.png"} name={"react"}/>
                                <Badge source={"/tailwind-css.svg"} name={"tailwind css"}/>
                                <Badge source={"/typescript.png"} name={"typescript"}/>
                            </div>
                        </div>
                    </motion.div>

                    {/* Done Button */}
                    <motion.div 
                        className="text-center mt-12"
                        variants={itemVariants}
                    >
                        <button 
                            className="relative group px-8 py-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:from-purple-500/30 hover:to-blue-500/30 hover:border-white/30 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
                            onClick={() => setAboutMe(false)}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <span>Done</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default About;
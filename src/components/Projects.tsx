"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FocusCards } from "./ui/focus-cards";
import Header from "./Header";
import { TextGenerateEffect } from "./ui/textEffect";
import { Spotlight } from "./ui/Spotlight";
import { useRouter } from "next/navigation";

const Projects = () => {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    const cards = [
        {
            title: "SEOAgent",
            src: "/product_icecream_en.jpg",
            cardLink: "https://github.com/PPAT132/SEOAgent",
            description: "AI-Powered Website SEO Optimizer",
            tech: ["Node.js", "FastAPI", "Docker", "React"]
        },
        {
            title: "Soccer Metrics",
            src: "/soccerMetrics.png",
            cardLink: "https://github.com/gordonzhang1/SoccerMetrics",
            description: "Advanced soccer analytics platform with real-time data visualization",
            tech: ["React", "OpenAI", "Flask", "OpenCV", "Pandas"]
        },
        {
            title: "WatClub",
            src: "/watClub.png",
            cardLink: "https://github.com/Brucewang15/WatClub",
            description: "University club management system with event scheduling",
            tech: ["Django", "Javascript", "Tailwind", "Selenium"]
        },
        {
            title: "User Graphics Processor",
            src: "/badImage.webp",
            cardLink: "https://futurescienceleaders.com/blog/2023/06/a-way-to-refine-drawings-by-the-power-of-computation/",
            description: "Computational drawing refinement using advanced algorithms",
            tech: ["C++", "OpenGL", "Python", "Fourier Series"]
        },
    ];

    const profileClick = () => {
        router.push("/");
    }

    useEffect(() => {
        setMounted(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 -z-20">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(120,119,198,0.2),transparent_50%)]" />
            </div>

            {/* Floating Elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
            </div>

            {/* Spotlight Effect */}
            <Spotlight className="top-40 left-0 md:left-60 md:-top-20" fill="white" />

            <motion.div 
                className="relative z-10 px-6 lg:px-10 py-10"
                variants={containerVariants}
                initial="hidden"
                animate={mounted ? "visible" : "hidden"}
            >
                {/* Header Section */}
                <motion.div 
                    className="flex w-full items-center justify-between mb-12"
                    variants={itemVariants}
                >
                    <motion.div 
                        className="relative group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300" />
                        <Image
                            src="/korok.jpg"
                            alt="Profile"
                            width={80}
                            height={80}
                            className="relative rounded-full shadow-2xl border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:cursor-pointer"
                            onClick={profileClick}
                        />
                    </motion.div>
                    <motion.div 
                        className="flex"
                        variants={itemVariants}
                    >
                        <Header />
                    </motion.div>
                </motion.div>

                {/* Hero Section */}
                <motion.div 
                    className="text-center mb-16"
                    variants={itemVariants}
                >
                    <motion.h1 
                        className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Featured Projects
                    </motion.h1>
                    
                    <motion.div 
                        className="relative max-w-3xl mx-auto"
                        variants={itemVariants}
                    >
                        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                            Explore my collection of innovative projects that showcase modern web development, 
                            creative problem-solving, and cutting-edge technologies.
                        </p>
                        
                        {/* Decorative Line */}
                        <motion.div 
                            className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: 128 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />
                    </motion.div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div 
                    className="relative"
                    variants={itemVariants}
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 rounded-3xl blur-xl" />
                    
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
                        <FocusCards cards={cards} />
                    </div>
                </motion.div>

                {/* Bottom Section with Tech Stack */}
                <motion.div 
                    className="mt-20 text-center"
                    variants={itemVariants}
                >
                    <h3 className="text-xl font-semibold text-gray-300 mb-8">Built with Modern Technologies</h3>
                    <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
                        {["React", "Next.js", "FastApi", "TypeScript", "Tailwind CSS", "Node.js", "Python"].map((tech, index) => (
                            <motion.span
                                key={tech}
                                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-gray-200 hover:bg-white/20 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Projects;
"use client";

const About = () => {
    return (
        <div className="absolute w-full inset-0 bg-black/50 backdrop-blur-md z-20 overflow-scroll">
            <div className="relative flex flex-col items-center text-center p-10">
                <div className="w-full text-center text-7xl font-bold mb-6">About Me</div>

                <div className="flex flex-col md:flex-row w-full md:w-2/3 p-5 gap-6">
                    <div className="flex-1 text-left text-lg space-y-4">
                        <div>
                            Hello! My name is Alex Qin. <br />
                            I am currently a student at the University of Waterloo studying Computer Science. <br />
                            There isn't much interesting about me, but here are some things I enjoy:
                        </div>

                        <div className="space-y-2 ml-6"> 
                            <div>⚽ Football</div>
                            <div>🏸 Badminton</div>
                            <div>📚 Reading</div>
                            <div>🎮 Not Gaming</div>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <img
                            src="/profile.jpg" // Replace with your actual image path
                            alt="Alex Qin"
                            className="w-64 h-64 rounded-full shadow-lg"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;
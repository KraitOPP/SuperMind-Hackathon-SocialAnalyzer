import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
    Github, Twitter, Linkedin, Boxes, BarChart3, Users,
    LineChart, Lock, Zap, Share2, MessageSquare, TrendingUp
} from "lucide-react";
import { TracingBeam } from "@/components/ui/tracing-beam";

const HomePage = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/dashboard");
    };

    const features = [
        {
            icon: <LineChart className="h-6 w-6" />,
            title: "Real-time Analytics",
            description: "Get instant insights with our real-time social media performance tracking"
        },
        {
            icon: <Lock className="h-6 w-6" />,
            title: "Secure Data",
            description: "Enterprise-grade security ensuring your data remains protected"
        },
        {
            icon: <Zap className="h-6 w-6" />,
            title: "Fast Processing",
            description: "Advanced algorithms process millions of data points in seconds"
        },
        {
            icon: <Share2 className="h-6 w-6" />,
            title: "Easy Sharing",
            description: "Share reports and insights with your team in one click"
        }
    ];

    const testimonials = [
        {
            name: "David Smith",
            role: "Marketing Director",
            company: "TechCorp",
            content: "This platform has transformed how we approach social media strategy. The insights are invaluable.",
            image: "/api/placeholder/100/100"
        },
        {
            name: "Lisa Chen",
            role: "Social Media Manager",
            company: "GrowthCo",
            content: "The real-time analytics have helped us improve engagement by 150%. Absolutely recommended!",
            image: "/api/placeholder/100/100"
        }
    ];

    const teamMembers = [
        {
            name: "Sarah Johnson",
            role: "Lead Developer",
            description: "Full-stack developer with 5+ years of experience in social media analytics",
            image: "/api/placeholder/200/200"
        },
        {
            name: "Mike Chen",
            role: "Data Scientist",
            description: "ML specialist focused on sentiment analysis and trend prediction",
            image: "/api/placeholder/200/200"
        },
        {
            name: "Emma Williams",
            role: "UX Designer",
            description: "Creating intuitive and beautiful interfaces for complex data visualization",
            image: "/api/placeholder/200/200"
        }
    ];

    const techStack = [
        { name: "React", icon: <Boxes className="h-8 w-8" /> },
        { name: "Python", icon: <BarChart3 className="h-8 w-8" /> },
        { name: "Machine Learning", icon: <Users className="h-8 w-8" /> }
    ];

    const stats = [
        { label: "Active Users", value: "10,000+" },
        { label: "Data Points Processed", value: "1B+" },
        { label: "Customer Satisfaction", value: "98%" },
        { label: "Time Saved", value: "5hrs/week" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <TracingBeam>
                <div className="max-w-6xl mx-auto px-6">
                    {/* Hero Section */}
                    <section className="py-24 text-center">
                        <div className="space-y-6">
                            <div className="animate-fade-in space-y-6">
                                <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Social Media Analytics Made Simple
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                    Unlock powerful insights from your social media data with our advanced analytics platform
                                </p>
                                <Button
                                    size="lg"
                                    onClick={handleNavigate}
                                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                                >
                                    Go to Dashboard
                                </Button>
                            </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="py-16 border-t border-gray-200 dark:border-gray-700">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mt-2">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="py-16 border-t border-gray-200 dark:border-gray-700">
                        <div className="text-center mb-12">
                            <h2 className="bg-black dark:bg-white text-white dark:text-black rounded-full text-sm w-fit px-4 py-1 mb-4 mx-auto">
                                Features
                            </h2>
                            <h2 className="text-3xl font-bold dark:text-white">Why Choose Us</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, index) => (
                                <Card key={index} className="hover:shadow-lg transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
                                    <CardContent className="p-6">
                                        <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 w-12 h-12 flex items-center justify-center mb-4">
                                            <div className="text-blue-600 dark:text-blue-400">
                                                {feature.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Tech Stack Section */}
                    <section className="py-16 border-t border-gray-200 dark:border-gray-700">
                        <div className="mb-10">
                            <h2 className="bg-black dark:bg-white text-white dark:text-black rounded-full text-sm w-fit px-4 py-1 mb-4 mx-auto">
                                Technology
                            </h2>
                            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Tech Stack</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {techStack.map((tech) => (
                                    <Card key={tech.name} className="hover:shadow-lg transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
                                        <CardContent className="p-6 text-center">
                                            <div className="flex justify-center mb-4 dark:text-gray-300">
                                                {tech.icon}
                                            </div>
                                            <h3 className="text-xl font-semibold dark:text-white">{tech.name}</h3>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Testimonials Section */}
                    <section className="py-16 border-t border-gray-200 dark:border-gray-700">
                        <div className="text-center mb-12">
                            <h2 className="bg-black dark:bg-white text-white dark:text-black rounded-full text-sm w-fit px-4 py-1 mb-4 mx-auto">
                                Testimonials
                            </h2>
                            <h2 className="text-3xl font-bold dark:text-white">What Our Clients Say</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <Card key={index} className="hover:shadow-lg transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
                                    <CardContent className="p-6">
                                        <div className="flex items-center mb-4">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="rounded-full w-12 h-12 mr-4"
                                            />
                                            <div>
                                                <h4 className="font-semibold dark:text-white">{testimonial.name}</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                                    {testimonial.role} at {testimonial.company}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Team Section */}
                    <section className="py-16 border-t border-gray-200 dark:border-gray-700">
                        <div className="mb-10">
                            <h2 className="bg-black dark:bg-white text-white dark:text-black rounded-full text-sm w-fit px-4 py-1 mb-4 mx-auto">
                                Team
                            </h2>
                            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Meet Our Team</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {teamMembers.map((member) => (
                                    <Card
                                        key={member.name}
                                        className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <CardHeader>
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="rounded-full w-32 h-32 mx-auto mb-4"
                                            />
                                            <CardTitle className="text-center dark:text-white">{member.name}</CardTitle>
                                            <p className="text-center text-gray-600 dark:text-gray-300 font-medium">{member.role}</p>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-center text-gray-600 dark:text-gray-300">{member.description}</p>
                                            <div className="flex justify-center space-x-4 mt-4">
                                                <Github className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                                                <Twitter className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                                                <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-16 border-t border-gray-200 dark:border-gray-700">
                        <div className="text-center space-y-6">
                            <h2 className="text-3xl font-bold dark:text-white">Ready to Get Started?</h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                Join thousands of companies using our platform to improve their social media performance
                            </p>
                            <Button
                                size="lg"
                                onClick={handleNavigate}
                                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                            >
                                Start Free Trial
                            </Button>
                        </div>
                    </section>
                </div>
            </TracingBeam>
        </div>
    );
};

export default HomePage;
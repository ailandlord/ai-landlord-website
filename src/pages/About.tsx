
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              About AI Landlord
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                We're revolutionizing property management by automating tenant screening with AI, helping landlords save time and find better tenants.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-gray-600">
                    At AI Landlord, we're on a mission to transform landlords from manual lead processors 
                    into automated leasing managers. We believe every landlord deserves to spend their time 
                    on what matters most - not screening unqualified applicants.
                  </p>
                  <p className="text-gray-600">
                    By combining AI-powered automation with FCRA-compliant screening, we're making 
                    professional-grade tenant screening accessible to landlords of all sizes.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Automation:</strong> We eliminate manual processes to save landlords time and reduce errors.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Compliance:</strong> We ensure all screening processes meet FCRA and legal requirements.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Quality:</strong> We focus on delivering qualified leads, not just quantity.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Transparency:</strong> We believe landlords should own their data and understand their screening process.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <p className="text-gray-600 mb-4">
                    AI Landlord was born from frustration. Our founders were landlords themselves, spending 
                    countless hours responding to leads, screening applicants, and dealing with unqualified 
                    tenants. They knew there had to be a better way.
                  </p>
                  <p className="text-gray-600 mb-4">
                    In 2024, we launched AI Landlord with a simple goal: automate the entire tenant 
                    screening process using AI. We started with a basic chatbot that could ask qualifying 
                    questions, but quickly realized we needed to do much more.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Today, AI Landlord handles everything from lead capture across multiple platforms to 
                    FCRA-compliant background screening, automated scheduling, and comprehensive analytics. 
                    We've helped hundreds of landlords save 10+ hours per week while improving their 
                    tenant quality.
                  </p>
                  <p className="text-gray-600">
                    Our platform continues to evolve based on landlord feedback, always with the goal of 
                    making property management easier, more efficient, and more profitable.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Why We're Different</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">AI-First Approach</h3>
                      <p className="text-gray-600">
                        Unlike competitors who offer basic automation, we use advanced AI for intelligent 
                        decision-making and natural language processing.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">Multi-Platform Integration</h3>
                      <p className="text-gray-600">
                        We work across Zillow, Craigslist, Facebook Marketplace, SMS, and email - 
                        wherever your leads come from.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">FCRA Compliance</h3>
                      <p className="text-gray-600">
                        Built-in legal compliance for tenant screening with secure background checks 
                        via TransUnion SmartMove.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">Lead Ownership</h3>
                      <p className="text-gray-600">
                        Unlike Zillow, you own your lead data and can re-engage prospects across 
                        your entire portfolio.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Tenant Screening?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join hundreds of landlords who have already automated their tenant screening process 
                  and are saving 10+ hours per week while finding better tenants.
                </p>
                <Link 
                  to="/" 
                  className="inline-flex items-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;

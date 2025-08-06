import { ArrowLeft, CheckCircle, Clock, FileSearch, Settings, Cpu, Code, Truck, BarChart, Check, MessageSquare, Shield, Bot, Users, Database, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import PageLayout from '@/components/PageLayout';

const DevelopmentProcess = () => {
  const [activeProcess, setActiveProcess] = useState(1);
  const processRef = useRef<HTMLDivElement>(null);
  const processSectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // AI Landlord Pipeline Process
  const processes = [{
    id: 1,
    title: "Lead Capture & Initial Screening",
    description: "Our AI chatbot automatically engages with potential tenants across multiple platforms, collecting essential information and conducting preliminary qualification.",
    steps: ["24/7 chatbot deployment on Zillow, Craigslist, Facebook", "Automated initial questions and information gathering", "Basic qualification criteria assessment", "Lead scoring and prioritization"]
  }, {
    id: 2,
    title: "Intelligent Conversation & Qualification",
    description: "Advanced AI algorithms conduct natural conversations to assess tenant suitability, asking relevant questions and evaluating responses in real-time.",
    steps: ["Dynamic conversation flow based on responses", "Income and employment verification", "Rental history assessment", "Lifestyle and pet policy alignment"]
  }, {
    id: 3,
    title: "Background Check Integration",
    description: "Seamless integration with TransUnion SmartMove provides FCRA-compliant background checks including credit, criminal, and eviction history.",
    steps: ["FCRA-compliant screening authorization", "Credit report analysis and scoring", "Criminal background verification", "Eviction history review"]
  }, {
    id: 4,
    title: "AI-Powered Risk Assessment",
    description: "Machine learning algorithms analyze all collected data to generate comprehensive risk profiles and qualification scores for each applicant.",
    steps: ["Multi-factor risk analysis", "Predictive modeling for payment behavior", "Comprehensive scoring algorithm", "Risk categorization and recommendations"]
  }, {
    id: 5,
    title: "Qualified Applicant Delivery",
    description: "Only pre-screened, qualified applicants with complete background checks are delivered to landlords with detailed reports and recommendations.",
    steps: ["Comprehensive applicant reports", "Risk assessment summaries", "Recommendation generation", "Direct landlord notification"]
  }];

  useEffect(() => {
    processSectionsRef.current = processes.map((_, i) => processSectionsRef.current[i] || null);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add('animate-fade-in');
        (entries[0].target as HTMLElement).style.opacity = '1';
        observer.unobserve(entries[0].target);
      }
    }, {
      threshold: 0.1
    });
    if (processRef.current) {
      observer.observe(processRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      let closestSection = null;
      let closestDistance = Infinity;
      processSectionsRef.current.forEach((section, index) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = index;
        }
      });
      if (closestSection !== null) {
        setActiveProcess(closestSection + 1);
      }
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const developmentSteps = [{
    icon: <MessageSquare className="h-6 w-6" />,
    title: "1. Lead Capture",
    description: "AI chatbot automatically engages with potential tenants across multiple platforms, collecting essential information and conducting preliminary qualification."
  }, {
    icon: <Bot className="h-6 w-6" />,
    title: "2. Intelligent Screening",
    description: "Advanced AI algorithms conduct natural conversations to assess tenant suitability, asking relevant questions and evaluating responses in real-time."
  }, {
    icon: <Shield className="h-6 w-6" />,
    title: "3. Background Verification",
    description: "Seamless integration with TransUnion SmartMove provides FCRA-compliant background checks including credit, criminal, and eviction history."
  }, {
    icon: <Cpu className="h-6 w-6" />,
    title: "4. AI Risk Assessment",
    description: "Machine learning algorithms analyze all collected data to generate comprehensive risk profiles and qualification scores for each applicant."
  }, {
    icon: <Users className="h-6 w-6" />,
    title: "5. Qualified Delivery",
    description: "Only pre-screened, qualified applicants with complete background checks are delivered to landlords with detailed reports and recommendations."
  }, {
    icon: <Database className="h-6 w-6" />,
    title: "6. Data Management",
    description: "Secure storage and management of all screening data with full FCRA compliance and privacy protection measures."
  }, {
    icon: <Zap className="h-6 w-6" />,
    title: "7. Continuous Learning",
    description: "AI models continuously improve based on screening outcomes and landlord feedback, enhancing accuracy and efficiency over time."
  }];

  return <PageLayout>
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="flex items-center text-gray-500 hover:text-gray-700 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl font-bold mb-8">AI Landlord Pipeline</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-12">
                Our AI-powered tenant screening pipeline automatically processes leads 24/7, 
                conducts comprehensive background checks, and delivers only qualified applicants to landlords.
              </p>
              
              {/* AI Landlord Pipeline Process Section */}
              <div className="relative mt-12" ref={processRef} style={{
              opacity: 0
            }}>
                <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 -translate-x-1/2"></div>
                
                <div className="space-y-10 relative">
                  {processes.map((process, index) => <div key={process.id} ref={el => processSectionsRef.current[index] = el} className={cn("relative flex flex-col md:flex-row md:items-center gap-6", index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right")}>
                      <div className="md:w-1/2">
                        <div className={cn("md:absolute top-0 left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-300", activeProcess === process.id ? "bg-gray-700 text-white scale-110" : "bg-white text-gray-700 border border-gray-300")} onClick={() => setActiveProcess(process.id)}>
                          <span className="font-bold">{process.id}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 mt-3 md:mt-0">{process.title}</h3>
                        <p className="text-gray-600 mb-3 text-sm">{process.description}</p>
                        
                        <button onClick={() => setActiveProcess(process.id)} className={cn("text-sm font-medium transition-colors", activeProcess === process.id ? "text-gray-700" : "text-gray-500 hover:text-gray-700")}>
                          {activeProcess === process.id ? "Currently Viewing" : "View Details"}
                        </button>
                      </div>
                      
                      <div className={cn("md:w-1/2 bg-white rounded-xl p-5 shadow-sm border border-gray-100 transition-all duration-300", activeProcess === process.id ? "opacity-100 translate-y-0 shadow-md border-gray-200" : "opacity-50 md:opacity-30 hover:opacity-70 cursor-pointer")} onClick={() => setActiveProcess(process.id)}>
                        <h4 className="font-semibold mb-3 text-gray-700">Key Activities:</h4>
                        <ul className="space-y-2">
                          {process.steps.map((step, stepIndex) => <li key={stepIndex} className="flex items-start">
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 mr-2">
                                <Check className="w-3 h-3 text-gray-700" />
                              </span>
                              <span className="text-gray-700 text-sm text-left">{step}</span>
                            </li>)}
                        </ul>
                      </div>
                    </div>)}
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg my-12 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">AI Landlord Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>24/7 automated lead processing saves 10+ hours per week</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>FCRA-compliant background checks via TransUnion SmartMove</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>AI-powered risk assessment and qualification scoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Only qualified applicants delivered to landlords</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Multi-platform integration (Zillow, Craigslist, Facebook, SMS)</span>
                  </li>
                </ul>
              </div>
              
              
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link to="/tech-details" className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Explore Our Technology
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>;
};

export default DevelopmentProcess;

// Helper icon component for later
const ArrowRight = ({
  className = "w-4 h-4"
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>;
import { CheckCircle, Clock, Target, Users, Zap, Shield, Bot, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyAILandlord = () => {
  return (
    <section id="why-ai-landlord" className="bg-gray-50 py-12 md:py-20 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose AI Landlord?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stop wasting time on manual tenant screening. Our AI-powered platform automates the entire 
            process from lead capture to qualified applicant delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* AI-Powered Automation */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bot className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Automation</h3>
            <p className="text-gray-600 leading-relaxed">
              Our intelligent chatbot handles lead qualification 24/7, asking the right questions 
              and scoring applicants based on your custom criteria.
            </p>
          </motion.div>

          {/* Instant Response */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Instant Response</h3>
            <p className="text-gray-600 leading-relaxed">
              Never miss a lead again. Our AI responds to inquiries from Zillow, Craigslist, 
              and other platforms within seconds, even while you sleep.
            </p>
          </motion.div>

          {/* Legal Compliance */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Compliance</h3>
            <p className="text-gray-600 leading-relaxed">
              FCRA-compliant background screening through TransUnion SmartMove ensures 
              you're protected while making informed tenant decisions.
            </p>
          </motion.div>
        </div>

        {/* Features List */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Everything You Need to Streamline Tenant Screening
              </h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Multi-platform lead capture (Zillow, Craigslist, Facebook)</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Customizable screening criteria for each property</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Automated showing scheduling and reminders</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Secure document collection and verification</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Comprehensive analytics and ROI tracking</span>
                </motion.div>
              </div>
            </div>
            
            <div className="flex-1 lg:flex-none lg:w-96">
              <motion.div 
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">10+ hours</div>
                  <div className="text-sm text-gray-600">Saved per week</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">300%</div>
                  <div className="text-sm text-gray-600">More qualified leads</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Lead response</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Trophy className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Screening accuracy</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAILandlord;
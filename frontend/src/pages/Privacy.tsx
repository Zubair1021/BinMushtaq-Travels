import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import SEO from '../components/shared/SEO';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900">
      <SEO 
        title="Privacy Policy - Bin Mushtaq Travel & Tours | Data Protection & Privacy"
        description="Read our comprehensive privacy policy to understand how Bin Mushtaq Travel & Tours collects, uses, and protects your personal information."
        keywords="privacy policy, data protection, personal information, Bin Mushtaq Travel privacy"
        url="https://binmushtaqtravel.com/privacy"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
              <Shield className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              How we collect, use, and protect your information
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Last updated: August 31, 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-2 text-primary-600" />
                Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Bin Mushtaq Travel & Tours ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website binmushtaqtravel.com and use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-primary-600" />
                Information We Collect
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Name, email address, phone number</li>
                    <li>Passport information and travel preferences</li>
                    <li>Payment and billing information</li>
                    <li>Emergency contact details</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Usage Information</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>IP address, browser type, and device information</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Search queries and interactions with our content</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Process and fulfill your travel bookings and reservations</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send booking confirmations, travel updates, and important notices</li>
                <li>Improve our website functionality and user experience</li>
                <li>Comply with legal obligations and protect against fraud</li>
                <li>Send promotional offers and newsletters (with your consent)</li>
              </ul>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Third-Party Services</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Google Services</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li><strong>Google Analytics:</strong> We use Google Analytics to analyze website traffic and user behavior</li>
                    <li><strong>Google AdSense:</strong> We display advertisements through Google AdSense</li>
                    <li><strong>Google Fonts:</strong> We use Google Fonts to enhance website typography</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Payment Processors</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We work with secure payment processors to handle financial transactions. 
                    We do not store your complete payment card information on our servers.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Cookies and Tracking</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use cookies and similar technologies to enhance your browsing experience:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                <li><strong>Advertising Cookies:</strong> Used to display relevant advertisements</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-2 text-primary-600" />
                Data Security
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. These measures include 
                encryption, secure servers, and regular security assessments. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Your Rights</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Disable cookies through your browser settings</li>
              </ul>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">International Data Transfers</h2>
              <p className="text-gray-600 dark:text-gray-300">
                As we provide international travel services, your information may be transferred to and 
                processed in countries other than Pakistan. We ensure that such transfers comply with 
                applicable data protection laws and provide adequate protection for your information.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Children's Privacy</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Our services are not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13. If you are a parent or guardian and 
                believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            {/* Updates to Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Updates to This Policy</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                Your continued use of our services after any changes constitutes acceptance of the new policy.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p><strong>Bin Mushtaq Travel & Tours</strong></p>
                <p>Email: Binmushtaqtravel@gmail.com</p>
                <p>Phone: +92 322 4340536</p>
                <p>Address: Office G4 Heaven Mall near Askari 9, Zarar Shaheed Road, Lahore</p>
                <p>Working Hours: Monday - Saturday, 9:00 AM - 7:00 PM</p>
                <p>Online Support: 24/7 Available</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

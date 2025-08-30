import React from 'react';
import { Scale, FileText, AlertTriangle, Users } from 'lucide-react';
import SEO from '../components/shared/SEO';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900">
      <SEO 
        title="Terms of Service - Bin Mushtaq Travel & Tours | Terms & Conditions"
        description="Read our terms of service and conditions for using Bin Mushtaq Travel & Tours services and website."
        keywords="terms of service, terms and conditions, travel terms, Bin Mushtaq Travel terms"
        url="https://binmushtaqtravel.com/terms"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
              <Scale className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Terms and conditions for using our services
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
                <FileText className="w-6 h-6 mr-2 text-primary-600" />
                Agreement to Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Welcome to Bin Mushtaq Travel & Tours. These Terms of Service ("Terms") govern your use of our website 
                located at binmushtaqtravel.com and our travel services. By accessing or using our services, you agree 
                to be bound by these Terms. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            {/* Definitions */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Definitions</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>"Company"</strong> refers to Bin Mushtaq Travel & Tours, a travel agency operating in Pakistan.
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>"Services"</strong> refers to travel booking, tour packages, visa assistance, and related services.
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>"User"</strong> refers to any individual who accesses or uses our website and services.
                  </p>
                </div>
              </div>
            </section>

            {/* Use of Services */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Use of Services</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Eligibility</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>You must be at least 18 years old to use our services</li>
                    <li>You must provide accurate and complete information</li>
                    <li>You are responsible for maintaining the security of your account</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Prohibited Uses</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Providing false or misleading information</li>
                    <li>Using our services for illegal activities</li>
                    <li>Attempting to gain unauthorized access to our systems</li>
                    <li>Interfering with other users' use of our services</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Booking and Payments */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Booking and Payments</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Booking Process</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>All bookings are subject to availability and confirmation</li>
                    <li>Prices are subject to change without notice until booking is confirmed</li>
                    <li>A booking is confirmed only when full payment is received</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Payment Terms</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Payment must be made in Pakistani Rupees (PKR) unless otherwise specified</li>
                    <li>We accept cash, bank transfers, and online payments</li>
                    <li>All payments are processed securely through authorized payment processors</li>
                    <li>Additional fees may apply for certain payment methods</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cancellation and Refunds */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Cancellation and Refunds</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Cancellation Policy</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Cancellations must be submitted in writing (email or letter)</li>
                    <li>Cancellation charges apply based on timing and service type</li>
                    <li>Some bookings may be non-refundable as per supplier terms</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Refund Process</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Refunds are processed within 7-14 business days</li>
                    <li>Refund amounts are subject to cancellation fees and supplier charges</li>
                    <li>Bank charges and processing fees are non-refundable</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Travel Documentation */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Travel Documentation</h2>
              <div className="space-y-3">
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Your Responsibility:</strong> You are responsible for ensuring you have valid travel documents including:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Valid passport with sufficient validity period</li>
                  <li>Required visas for your destination</li>
                  <li>Health certificates and vaccinations as required</li>
                  <li>Travel insurance (strongly recommended)</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300">
                  We provide visa assistance but do not guarantee visa approval. Visa rejections are beyond our control.
                </p>
              </div>
            </section>

            {/* Liability and Insurance */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-primary-600" />
                Liability and Insurance
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Limitation of Liability</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>We act as agents for airlines, hotels, and other service providers</li>
                    <li>Our liability is limited to the amount paid for our services</li>
                    <li>We are not liable for delays, cancellations, or changes by suppliers</li>
                    <li>We are not responsible for personal injury, loss, or damage during travel</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Travel Insurance</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We strongly recommend purchasing comprehensive travel insurance to cover medical expenses, 
                    trip cancellations, lost luggage, and other unforeseen circumstances.
                  </p>
                </div>
              </div>
            </section>

            {/* Force Majeure */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Force Majeure</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We are not liable for any failure to perform our obligations due to circumstances beyond our reasonable 
                control, including but not limited to natural disasters, war, terrorism, government actions, pandemics, 
                strikes, or other force majeure events.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Intellectual Property</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The content, features, and functionality of our website are owned by Bin Mushtaq Travel & Tours and are 
                protected by copyright, trademark, and other intellectual property laws.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>You may not reproduce, distribute, or create derivative works without permission</li>
                <li>Our logos, trademarks, and brand names are our exclusive property</li>
                <li>You grant us permission to use your testimonials and reviews for marketing purposes</li>
              </ul>
            </section>

            {/* Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-primary-600" />
                Privacy
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Your privacy is important to us. Please review our Privacy Policy, which describes how we collect, 
                use, and protect your personal information. By using our services, you consent to the collection 
                and use of information in accordance with our Privacy Policy.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Governing Law</h2>
              <p className="text-gray-600 dark:text-gray-300">
                These Terms are governed by the laws of Pakistan. Any disputes arising from these Terms or your use 
                of our services will be subject to the jurisdiction of the courts in Karachi, Pakistan.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Changes to Terms</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes 
                by posting the updated Terms on our website. Your continued use of our services after any changes 
                constitutes acceptance of the new Terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us:
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

export default Terms;

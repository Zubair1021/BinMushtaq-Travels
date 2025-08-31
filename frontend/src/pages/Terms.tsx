import React from 'react';
import { Scale, FileText, AlertTriangle, Users, Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/shared/SEO';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 lg:pt-28 bg-gray-50 dark:bg-gray-900">
      <SEO 
        title="Terms of Service - Bin Mushtaq Travel & Tours | Terms & Conditions"
        description="Read our terms of service and conditions for using Bin Mushtaq Travel & Tours services and website."
        keywords="terms of service, terms and conditions, travel terms, Bin Mushtaq Travel terms"
        url="https://binmushtaqtravel.com/terms"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6 p-4 bg-white/60 dark:bg-gray-800/60 rounded-full shadow-lg backdrop-blur-sm">
              <img 
                src="/logo-black.png" 
                alt="Bin Mushtaq Travel & Tours Logo" 
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-contain dark:hidden filter drop-shadow-sm"
              />
              <img 
                src="/logo.png" 
                alt="Bin Mushtaq Travel & Tours Logo" 
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-contain hidden dark:block filter drop-shadow-sm"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">Terms of Service</h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 px-2">
              Terms and conditions for using our services
            </p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-2">
              Last updated: August 31, 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
            
            {/* Introduction */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 mb-2 sm:mb-0 sm:mr-2 text-primary-600" />
                <span>Agreement to Terms</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                By using Bin Mushtaq Travel & Tours services, you agree to these terms. We provide travel booking, 
                tour packages, visa assistance, and related services for customers in Pakistan.
              </p>
            </section>

            {/* Booking and Payments */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Booking and Payments</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Advance Payment</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    <li>All bookings with Bin Mushtaq Travels require <strong>100% advance payment</strong> at the time of reservation</li>
                    <li>Bookings will only be confirmed once the full payment has been received</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Currency & Exchange Rates</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    <li>All packages and services are based on the prevailing <strong>Saudi Riyal (SAR)</strong> exchange rate at the time of booking</li>
                    <li>In case of any increase in the Saudi Riyal exchange rate, the customer will be responsible for paying the additional amount according to the updated conversion rate</li>
                    <li>Any fluctuation in the currency exchange rate will directly affect the final package price</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cancellation Policy */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Cancellation Policy</h2>
              
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-red-800 dark:text-red-200 mb-3">Strict No-Cancellation Policy</h3>
                  <ul className="list-disc list-inside text-red-700 dark:text-red-300 space-y-2">
                    <li><strong>Once a booking is confirmed and payment is made, it cannot be canceled by the customer</strong></li>
                    <li>As soon as the booking is finalized, our team begins the documentation and reservation process (airline tickets, hotel bookings, visa processing, etc.), which involves non-refundable costs</li>
                    <li>Therefore, all payments made are <strong>strictly non-refundable and non-transferable</strong></li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-yellow-800 dark:text-yellow-200 mb-3">Important Note</h3>
                  <ul className="list-disc list-inside text-yellow-700 dark:text-yellow-300 space-y-2">
                    <li>Customers are requested to carefully review all details before making a booking</li>
                    <li><strong>By proceeding with the payment, the customer agrees to this Payment & Cancellation Policy</strong></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Travel Documentation */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Travel Documentation</h2>
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

            {/* Liability */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 mb-2 sm:mb-0 sm:mr-2 text-primary-600" />
                <span>Limitation of Liability</span>
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>We act as agents for airlines, hotels, and other service providers</li>
                <li>Our liability is limited to the amount paid for our services</li>
                <li>We are not liable for delays, cancellations, or changes by suppliers</li>
                <li>We strongly recommend purchasing comprehensive travel insurance</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 sm:p-6 lg:p-8 border border-primary-100 dark:border-gray-600">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 mb-2 sm:mb-0 sm:mr-3" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">Contact Information</h2>
              </div>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                Have questions about our Terms of Service or need clarification on our policies? 
                Our dedicated team is ready to assist you with all your travel needs!
              </p>

              {/* Contact Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mr-3 sm:mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">Email</h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 break-all">Binmushtaqtravel@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mr-3 sm:mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">Phone</h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">+92 322 4340536</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mr-3 sm:mr-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">Address</h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Office G4 Heaven Mall near Askari 9, Zarar Shaheed Road, Lahore</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mr-3 sm:mr-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">Working Hours</h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p className="text-xs text-green-600 dark:text-green-400 font-medium">Online Support: 24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 px-2">
                  Ready to start planning your journey? Let's discuss your travel dreams!
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-primary-600 hover:bg-primary-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get In Touch With Us
                  <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

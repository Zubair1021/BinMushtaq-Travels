import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <Helmet>
        <title>404 - Page Not Found | Bin Mushtaq Travel & Tours</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Bin Mushtaq Travel & Tours homepage to explore our travel packages and services." />
        <link rel="canonical" href="https://binmushtaqtravel.com/404" />
        <meta property="og:title" content="404 - Page Not Found | Bin Mushtaq Travel & Tours" />
        <meta property="og:description" content="The page you're looking for doesn't exist. Return to Bin Mushtaq Travel & Tours homepage to explore our travel packages and services." />
        <meta property="og:url" content="https://binmushtaqtravel.com/404" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="404 - Page Not Found | Bin Mushtaq Travel & Tours" />
        <meta name="twitter:description" content="The page you're looking for doesn't exist. Return to Bin Mushtaq Travel & Tours homepage to explore our travel packages and services." />
        <meta name="twitter:url" content="https://binmushtaqtravel.com/404" />
      </Helmet>
      <div className="text-center px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

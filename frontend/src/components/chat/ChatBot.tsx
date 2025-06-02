import React, { useState } from 'react';
import { MessageCircle, X, Send, MinusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  text: string;
  isBot: boolean;
}

const FAQ_DATA = {
  "hello": "Hello! How can I help you with your travel plans today?",
  "packages": "We offer various packages including Umrah Packages, Holiday Tours, Religious Trips, Adventure Packages, and Student Tours. Which one interests you?",
  "umrah": "Our Umrah packages include visa processing, flights, hotel accommodation near Haram, guided tours, and all necessary arrangements for your spiritual journey.",
  "price": "Our package prices vary based on the destination and duration. Umrah packages start from $2,500, Holiday tours from $1,800, and Adventure packages from $1,600.",
  "booking": "To book a package, you can click the 'Book Now' button on any package detail page or contact our customer service team.",
  "payment": "We accept various payment methods including credit cards, bank transfers, and installment plans for selected packages.",
  "cancel": "Our cancellation policy varies by package type. Generally, full refunds are available up to 30 days before departure.",
  "contact": "You can reach us at contact@binmustaq.com or call us at +1-234-567-8900 during business hours.",
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I help you with your travel plans today?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);

    const lowercaseInput = input.toLowerCase();
    let botResponse = "I'm not sure about that. Could you please ask something about our packages, booking process, or contact information?";

    for (const [keyword, response] of Object.entries(FAQ_DATA)) {
      if (lowercaseInput.includes(keyword)) {
        botResponse = response;
        break;
      }
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Bouncing Chat Icon Button */}
      <motion.button
        initial={{ y: 0 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-all z-40 ${
          isOpen ? 'hidden' : ''
        }`}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* ChatBot Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              height: isMinimized ? '60px' : '500px'
            }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 w-[90vw] max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden z-40"
          >
            {/* Header */}
            <div className="bg-primary-600 p-4 flex justify-between items-center">
              <h3 className="text-white font-semibold">Travel Assistant</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <MinusCircle className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Messages + Input */}
            {!isMinimized && (
              <>
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.isBot
                            ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
                            : 'bg-primary-600 text-white'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t dark:border-gray-700">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ask about our travel packages..."
                      className="flex-1 p-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-700 dark:text-white"
                    />
                    <button
                      onClick={handleSend}
                      className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;

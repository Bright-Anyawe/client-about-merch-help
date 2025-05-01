'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQItem = ({ 
  question, 
  answer 
}: { 
  question: string; 
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 px-4 flex items-center justify-between hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const ContactInfoCard = ({ 
  icon, 
  title, 
  content 
}: { 
  icon: string; 
  title: string; 
  content: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <span className="text-blue-600 mr-3 text-2xl">{icon}</span>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600">{content}</p>
  </div>
);

export default function HelpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Help & Contact Us</h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              We're here to help! Find answers to common questions or get in touch with our team.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ContactInfoCard
                icon="✉️"
                title="Email Us"
                content="support@example.com"
              />
              <ContactInfoCard
                icon="📞"
                title="Call Us"
                content="+1 (555) 123-4567"
              />
              <ContactInfoCard
                icon="📍"
                title="Visit Us"
                content="123 Business Street, City, Country"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md">
              {[
                {
                  question: "How can I track my order?",
                  answer: "You can track your order by logging into your account and visiting the 'Orders' section. You'll find tracking information and updates there."
                },
                {
                  question: "What is your return policy?",
                  answer: "We offer a 30-day return policy for all products. Items must be in their original condition with tags attached. Please contact our support team to initiate a return."
                },
                {
                  question: "How long does shipping take?",
                  answer: "Standard shipping typically takes 3-5 business days within the country. International shipping may take 7-14 business days depending on the destination."
                },
                {
                  question: "Do you offer international shipping?",
                  answer: "Yes, we ship to most countries worldwide. Shipping rates and delivery times vary by location. You can check shipping options during checkout."
                }
              ].map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Send Us a Message</h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 
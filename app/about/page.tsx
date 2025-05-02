'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const TeamMemberCard = ({ name, role, imageUrl }: { name: string; role: string; imageUrl: string }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <Image src={imageUrl} alt={name} className="w-full h-64 object-cover"  />
    {/* <img src={imageUrl} alt={name} className="w-full h-64 object-cover" /> */}
    <div className="p-4">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  </div>
);

const TestimonialCard = ({ quote, author }: { quote: string; author: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-gray-400 mb-4 text-4xl">&quot;</div>
    <p className="text-gray-700 mb-4">{quote}</p>
    <p className="text-gray-900 font-semibold">{author}</p>
  </div>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>

        {/* Company History */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <TeamMemberCard
                  key={i}
                  name={`Team Member ${i}`}
                  role="Position"
                  imageUrl={`https://via.placeholder.com/400x400?text=Team+Member+${i}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">What People Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <TestimonialCard
                  key={i}
                  quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  author={`Client ${i}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Awards & Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-yellow-500 text-4xl mx-auto mb-4">🏆</div>
                  <h3 className="text-xl font-semibold mb-2">Award {i}</h3>
                  <p className="text-gray-600">Year 202{i}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
} 
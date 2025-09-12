import { Star, Phone, Mail, Instagram, Users, Trophy, Heart } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-40"
          style={{
            backgroundImage: 'url("/images/hero-background.webp")'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            {/* 5-Star Rating */}
            <div className="flex justify-center items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-medium">5-Star Rated</span>
            </div>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl font-medium mb-4 text-blue-200">
              The leading circus arts training facility in San Diego
            </p>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Youth Circus Classes,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                Enroll Now!
              </span>
            </h1>
            
            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-4 mb-8 text-lg">
              <div className="flex items-center justify-center gap-2">
                <Users className="w-5 h-5 text-yellow-400" />
                <span>Ages 5-17</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span>Aerial, Trampoline, Tumbling & More</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-yellow-400" />
                <span>Build Confidence & Develop Lifelong Skills</span>
              </div>
            </div>
            
            {/* Contact Form */}
            <div id="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Location & Training Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              World-Class Circus Training Located in the Heart of San Diego
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We offer contemporary and traditional circus training and performance opportunities for our youth and adults in a safe, noncompetitive, socially enriching and nurturing environment.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Google Maps */}
            <div className="bg-gray-200 rounded-2xl h-96 overflow-hidden shadow-lg">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4129.192699540375!2d-117.1886214!3d32.74480760000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf8b78dbc08df%3A0x36e4dc6b3393fd10!2sSan%20Diego%20Circus%20Center!5e1!3m2!1sen!2sus!4v1757651020740!5m2!1sen!2sus" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={true}
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="San Diego Circus Center Location"
               />
            </div>
            
            {/* CTA */}
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-6">Ready to Start Your Circus Journey?</h3>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of families who have discovered the joy of circus arts. Our experienced instructors will guide your child through a safe and fun introduction to aerial arts, tumbling, and more.
              </p>
              <a 
                href="#enrolling-classes"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-lg text-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                See Enrolling Classes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Parents and Kids Love Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of families who have unlocked a life-long love of movement and artistic expression
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "San Diego Circus Center has made my daughter stronger and more confident. It's a unique place that builds both physical skills and self-esteem."
              </p>
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80")'
                  }}
                />
                <div>
                  <p className="font-semibold text-gray-800">Karla M.</p>
                  <p className="text-gray-600 text-sm">Parent</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The first activity my daughter wanted to do! It's a fun, adaptable alternative to gymnastics with silks, tumbling, and more."
              </p>
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80")'
                  }}
                />
                <div>
                  <p className="font-semibold text-gray-800">Walker</p>
                  <p className="text-gray-600 text-sm">Parent</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;A wonderful, welcoming environment with a true sense of community. The instructors pass on their love for circus, making it great for all ages.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80")'
                  }}
                />
                <div>
                  <p className="font-semibold text-gray-800">John and Ivy</p>
                  <p className="text-gray-600 text-sm">Parents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Options Section */}
      <section id="enrolling-classes" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Enrolling Classes
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Secure your spot in an introductory session!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Petite Cirque */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div 
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("/images/Petite Cirque.webp")'
                }}
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Petite Cirque (ages 5-7)
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our Petite Cirque class introduces young students to a variety of exciting circus skills each week. This action-packed program helps kids build strength, flexibility, balance, and coordination while developing spatial awareness and body confidence. In a supportive and encouraging environment, students learn to try new things, believe in themselves, and—most importantly—have fun!
                </p>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg mb-6 text-center font-semibold">
                  No Experience Required!
                </div>
                <a 
                  href="https://goteamup.com/p/39027-san-diego-circus-center/c/schedule?view=week&offering_types=256879"
            target="_blank"
            rel="noopener noreferrer"
                  className="inline-block w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-6 rounded-lg text-lg hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 text-center"
          >
                  Enroll Now
          </a>
        </div>
            </div>
            
            {/* Youth Cirque */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div 
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("/images/Youth Cirque.webp")'
                }}
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Youth Cirque (ages 8-17)
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Youth Cirque introduces students to a wide range of circus skills each week, including both ground and aerial disciplines. This high-energy class builds strength, flexibility, balance, coordination, and body awareness, helping students gain confidence and control. Designed to nurture self-esteem, creative thinking, and teamwork, our supportive environment encourages students to challenge themselves, express their talents, and have fun—both on the ground and in the air.
                </p>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg mb-6 text-center font-semibold">
                  No Experience Required!
                </div>
                <a 
                  href="https://goteamup.com/p/39027-san-diego-circus-center/c/schedule?view=week&offering_types=1931,256880,111682"
          target="_blank"
          rel="noopener noreferrer"
                  className="inline-block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-6 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 text-center"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Schedule Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Full Schedule
            </h2>
            <p className="text-xl text-gray-300">
              Book your introductory class today!
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              {/* TeamUp Schedule Widget */}
              <div className="w-full">
                <iframe 
                  src="https://goteamup.com/p/39027-san-diego-circus-center/c/schedule?offering_types=1931,256879,256880,111682&embed=1&hide_nav=1"
                  width="100%"
                  height="700px"
                  style={{
                    border: 0,
                    display: 'block',
                    overflowY: 'scroll',
                    overscrollBehavior: 'auto',
                    backgroundColor: '#fff'
                  }}
                  allow="fullscreen"
                  title="San Diego Circus Center Schedule"
                />
              </div>
            </div>
            
            {/* CTA Below Schedule */}
            <div className="text-center mt-8">
              <p className="text-lg text-gray-300 mb-4">
                Questions about classes? Ready to get started?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact-form"
                  className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-6 rounded-lg text-lg hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-200"
                >
                  Contact Us
        </a>
        <a
                  href="tel:+16194871239"
                  className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
                >
                  Call (619) 487-1239
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Amazing Coaches
            </h2>
            <p className="text-xl text-gray-600">
              Expert instructors passionate about circus arts and youth development
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Ella Rydeen", image: "/images/Ella Rydeen.webp" },
              { name: "Isabel Guevara", image: "/images/Isabel Guevara.webp" },
              { name: "Olivia Egerstedt", image: "/images/Olivia Egerstedt.webp" },
              { name: "Paige Horil", image: "/images/Paige Horil.webp" },
              { name: "MarySue Jurgella", image: "/images/MarySue Jurgella.webp" },
              { name: "Mara Martin", image: "/images/Mara Martin.webp" },
              { name: "Lauren Herley", image: "/images/Lauren Herley.webp" },
              { name: "Jon Bookout", image: "/images/Jon Bookout.webp" }
            ].map((coach, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-full aspect-square rounded-2xl bg-cover bg-center mb-4 shadow-lg"
                  style={{ backgroundImage: `url("${coach.image}")` }}
                />
                <h3 className="text-xl font-bold text-gray-800">{coach.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Drop Us a Line</h3>
              <p className="text-gray-300 mb-6">
                We are always looking for a next great project
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-6">
                We appreciate each customer and we are proud that 60% of clients come back to work with us again.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>+1 (619) 487-1239</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>info@sandiegocircuscenter.org</span>
                </div>
              </div>
              
              <div>
                <p className="text-gray-300 mb-4">We are on Socials</p>
                <div className="flex items-center gap-4">
                  <Instagram className="w-8 h-8 text-purple-400 hover:text-purple-300 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 San Diego Circus Center. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

import {
  Star,
  Phone,
  Mail,
  Instagram,
  Users,
  Trophy,
  Heart,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { FooterContactForm } from "@/components/FooterContactForm";
import { Header } from "@/components/Header";
import { TrackedButton } from "@/components/TrackedButton";
import { TrackedContactLink } from "@/components/TrackedContactLink";
import { TrackedSocialLink } from "@/components/TrackedSocialLink";
import { TrackedIframe } from "@/components/TrackedIframe";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 overflow-hidden">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: 'url("/images/mobile hero.webp")',
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-4 text-center text-white py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-5 lg:gap-5 items-start">
              {/* Left Column - Text Content */}
              <div className="lg:text-left px-4 sm:px-6 lg:px-0">
                {/* 5-Star Rating */}
                <div className="flex justify-center lg:justify-start items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-300 text-yellow-300"
                    />
                  ))}
                  <span className="ml-2 text-base font-medium text-white">
                    Trusted by 10,000+ Families
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl lg:text-5xl font-semibold mb-6 leading-tight text-white ">
                  Youth Circus Classes{" "}
                  <span className="text-yellow-300">Enrolling Now!</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
                  Come learn at the leading circus arts training facility in San
                  Diego
                </p>

                {/* Key Benefits */}
                <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-3 mb-8 text-sm sm:text-base lg:text-lg">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Users className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    <span className="text-white font-medium drop-shadow-md">
                      Ages 5-17. No Experience Required
                    </span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Trophy className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    <span className="text-white font-medium drop-shadow-md">
                      Aerial, Trampoline, Tumbling & More
                    </span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Heart className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    <span className="text-white font-medium drop-shadow-md">
                      Build Confidence & Develop Lifelong Skills
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div id="contact-form" className="lg:mt-8 px-4 sm:px-6 lg:px-0">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Training Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-6 text-balance">
              World-Class Circus Training Located in the Heart of San Diego
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed text-balance">
              We offer contemporary and traditional circus training and
              performance opportunities for our youth and adults in a safe,
              noncompetitive, socially enriching and nurturing environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Google Maps */}
            <div className="bg-gray-200 rounded-2xl h-96 overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66067.08319264601!2d-117.2286214!3d32.74480760000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf8b78dbc08df%3A0x36e4dc6b3393fd10!2sSan%20Diego%20Circus%20Center!5e0!3m2!1sen!2sus!4v1757651020740!5m2!1sen!2sus"
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
              <h3 className="text-3xl font-semibold mb-6">
                Ready to Start Your Circus Journey?
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Join hundreds of families who have discovered the joy of circus
                arts. Our experienced instructors will guide your child through
                a safe and fun introduction to aerial arts, tumbling, and more.
              </p>
              <TrackedButton
                href="#enrolling-classes"
                trackingData={{
                  buttonType: "see_enrolling_classes",
                  buttonLocation: "hero_section",
                }}
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-4 px-8 rounded-lg text-xl hover:from-blue-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #0249AC 0%, #0260D9 50%, #0377FF 100%)",
                }}
              >
                See Enrolling Classes
              </TrackedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-5">
              Parents and Kids Love Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of families who have unlocked a life-long love of
              movement and artistic expression
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-center">
            {/* Left Column - Large Family Photo Testimonial 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-fit">
              <div
                className="h-56 bg-cover bg-top"
                style={{
                  backgroundImage:
                    'url("/images/Summer Camp Parent Testimonial.webp")',
                }}
              />
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "A unique place that gets kids moving in exciting ways. My
                  daughters love it—it's fun, safe, and a great alternative to
                  traditional sports."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">KF</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Katelyn F.</p>
                    <p className="text-gray-600 text-sm">Parent</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column - Two Headshot Testimonials Stacked */}
            <div className="space-y-6">
              {/* Karla M Testimonial */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-5 leading-relaxed">
                  "San Diego Circus Center has made my daughter stronger and
                  more confident. It's a unique place that builds both physical
                  skills and self-esteem."
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: 'url("/images/Karla M Pic.webp")',
                    }}
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Karla M.</p>
                    <p className="text-gray-600 text-sm">Parent</p>
                  </div>
                </div>
              </div>

              {/* Walker Testimonial */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-5 leading-relaxed">
                  "The first activity my daughter wanted to do! It's a fun,
                  adaptable alternative to gymnastics with silks, tumbling, and
                  more."
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: 'url("/images/Walker Headshot.webp")',
                    }}
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Walker</p>
                    <p className="text-gray-600 text-sm">Parent</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Large Family Photo Testimonial 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-fit">
              <div
                className="h-56 bg-cover bg-top"
                style={{
                  backgroundImage:
                    'url("/images/Summer Camp Parent Testimonial 2.webp")',
                }}
              />
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "A wonderful, welcoming environment with a true sense of
                  community. The instructors pass on their love for circus,
                  making it great for all ages."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      J&I
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">John and Ivy</p>
                    <p className="text-gray-600 text-sm">Parents</p>
                  </div>
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
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-5">
              Enrolling Classes
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Secure your spot in an introductory session!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Petite Cirque */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="relative">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("/images/Petite Cirque.webp")',
                  }}
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  No Experience Required!
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  Petite Cirque (ages 5-7)
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                  Our Petite Cirque class introduces young students to a variety
                  of exciting circus skills each week. This action-packed
                  program helps kids build strength, flexibility, balance, and
                  coordination while developing spatial awareness and body
                  confidence. In a supportive and encouraging environment,
                  students learn to try new things, believe in themselves,
                  and—most importantly—have fun!
                </p>
                <div className="mt-auto">
                  <TrackedButton
                    href="https://goteamup.com/p/39027-san-diego-circus-center/c/schedule?view=week&offering_types=256879"
                    target="_blank"
                    rel="noopener noreferrer"
                    trackingData={{
                      buttonType: "enroll_petite_cirque",
                      buttonLocation: "class_cards",
                    }}
                    className="inline-block w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-4 px-6 rounded-lg text-lg hover:from-blue-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 text-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #0249AC 0%, #0260D9 50%, #0377FF 100%)",
                    }}
                  >
                    Enroll Now
                  </TrackedButton>
                </div>
              </div>
            </div>

            {/* Youth Cirque */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="relative">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("/images/Youth Cirque.webp")',
                  }}
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  No Experience Required!
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  Youth Cirque (ages 8-17)
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                  Youth Cirque introduces students to a wide range of circus
                  skills each week, including both ground and aerial
                  disciplines. This high-energy class builds strength,
                  flexibility, balance, coordination, and body awareness,
                  helping students gain confidence and control. Designed to
                  nurture self-esteem, creative thinking, and teamwork, our
                  supportive environment encourages students to challenge
                  themselves, express their talents, and have fun—both on the
                  ground and in the air.
                </p>
                <div className="mt-auto">
                  <TrackedButton
                    href="https://goteamup.com/p/39027-san-diego-circus-center/c/schedule?view=week&offering_types=1931,256880,111682"
                    target="_blank"
                    rel="noopener noreferrer"
                    trackingData={{
                      buttonType: "enroll_youth_cirque",
                      buttonLocation: "class_cards",
                    }}
                    className="inline-block w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-4 px-6 rounded-lg text-lg hover:from-blue-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 text-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #0249AC 0%, #0260D9 50%, #0377FF 100%)",
                    }}
                  >
                    Enroll Now
                  </TrackedButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Schedule Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-5">
              Full Schedule
            </h2>
            <p className="text-lg text-gray-300">
              Book your introductory class today!
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              {/* TeamUp Schedule Widget */}
              <div className="w-full">
                <TrackedIframe
                  src="https://goteamup.com/p/39027-san-diego-circus-center/c/schedule?offering_types=1931,256879,256880,111682&embed=1&hide_nav=1"
                  width="100%"
                  height="700px"
                  style={{
                    border: 0,
                    display: "block",
                    overflowY: "scroll",
                    overscrollBehavior: "auto",
                    backgroundColor: "#fff",
                  }}
                  allow="fullscreen"
                  title="San Diego Circus Center Schedule"
                  trackingSource="full_schedule_section"
                />
              </div>
            </div>

            {/* CTA Below Schedule */}
            <div className="text-center mt-8">
              <p className="text-lg text-gray-300 mb-4">
                Questions about classes? Ready to get started?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <TrackedButton
                  href="#contact-form"
                  trackingData={{
                    buttonType: "contact_us",
                    buttonLocation: "schedule_section",
                  }}
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg text-lg hover:from-blue-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-200"
                  style={{
                    background:
                      "linear-gradient(135deg, #0249AC 0%, #0260D9 50%, #0377FF 100%)",
                  }}
                >
                  Contact Us
                </TrackedButton>
                <TrackedContactLink
                  href="tel:+16194871239"
                  type="phone"
                  location="schedule_section"
                  className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg text-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
                >
                  Call (619) 487-1239
                </TrackedContactLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
              Our Amazing Coaches
            </h2>
            <p className="text-xl text-gray-600">
              Expert instructors passionate about circus arts and youth
              development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Ella Rydeen", image: "/images/Ella Rydeen.webp" },
              { name: "Isabel Guevara", image: "/images/Isabel Guevara.webp" },
              {
                name: "Olivia Egerstedt",
                image: "/images/Olivia Egerstedt.webp",
              },
              { name: "Paige Horil", image: "/images/Paige Horil.webp" },
              {
                name: "MarySue Jurgella",
                image: "/images/MarySue Jurgella.webp",
              },
              { name: "Mara Martin", image: "/images/Mara Martin.webp" },
              { name: "Lauren Herley", image: "/images/Lauren Herley.webp" },
              { name: "Jon Bookout", image: "/images/Jon Bookout.webp" },
            ].map((coach, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-full aspect-square rounded-2xl bg-cover bg-center mb-4 shadow-lg"
                  style={{ backgroundImage: `url("${coach.image}")` }}
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {coach.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 md:py-20 flex flex-col">
        <div className="container mx-auto px-6 md:px-8 flex-grow">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="flex flex-col justify-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Get More Information
              </h3>
              <p className="text-gray-300 mb-6 text-base md:text-lg leading-relaxed">
                Ready to start your circus journey? Send us a message and we'll
                get back to you soon.
              </p>
              <FooterContactForm />
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-300 mb-6 text-base md:text-lg leading-relaxed">
                Contact us to learn more about our youth circus programs and
                schedule a visit.
              </p>

              <div className="space-y-4 mb-8">
                <TrackedContactLink
                  href="tel:+16194871239"
                  type="phone"
                  location="footer"
                  className="flex items-center gap-3 hover:text-purple-300 transition-colors text-base md:text-lg"
                >
                  <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>(619) 487-1239</span>
                </TrackedContactLink>
                <TrackedContactLink
                  href="mailto:info@sandiegocircuscenter.org"
                  type="email"
                  location="footer"
                  className="flex items-center gap-3 hover:text-purple-300 transition-colors text-base md:text-lg"
                >
                  <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>info@sandiegocircuscenter.org</span>
                </TrackedContactLink>
              </div>

              <div>
                <p className="text-gray-300 mb-3 text-base md:text-lg">
                  Follow Us
                </p>
                <TrackedSocialLink
                  href="https://instagram.com/sdcircuscenter"
                  target="_blank"
                  rel="noopener noreferrer"
                  platform="instagram"
                  className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="text-base md:text-lg">@sdcircuscenter</span>
                </TrackedSocialLink>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="container mx-auto px-6 md:px-8">
            <p className="text-gray-400 text-center text-sm md:text-base">
              © 2025 San Diego Circus Center. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

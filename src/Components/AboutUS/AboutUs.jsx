// AboutUs.js
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <header className="py-12">
          <h1 className="text-[7vw] md:text-[4vw] lg:text-[4vw] 2xl:text-[3vw] font-extrabold text-gray-900">
            Welcome to Our Food Delivery Service
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Fast, fresh, and reliable delivery from your favorite restaurants,
            straight to your door.
          </p>
        </header>

        {/* Core Values Section */}
        <section className="mt-12">
          <h2 className="text-[6vw] sm:text-[4vw] xl:text-[2vw] font-bold text-gray-900">Core Values</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center">
                <i className="fas fa-utensils text-2xl"></i>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Quality
              </h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-lg">
                We ensure that every meal we deliver is fresh, delicious, and
                made with the best ingredients.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-blue-500 text-white rounded-full flex items-center justify-center">
                <i className="fas fa-clock text-2xl"></i>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Speed
              </h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-lg">
                Our team works efficiently to make sure your food arrives as
                quickly as possible without compromising quality.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-red-500 text-white rounded-full flex items-center justify-center">
                <i className="fas fa-heart text-2xl"></i>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Customer Focus
              </h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-lg">
                We care about your satisfaction and strive to provide
                exceptional service with every order.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="mt-12">
          <h2 className="text-[5vh] sm:text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="mt-4  text-gray-600 text-sm sm:text-lg">
            Our team is composed of passionate and dedicated individuals who
            work together to provide the best service. Meet some of the people
            behind our mission.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/033/129/417/small/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg"
                alt="team member"
                className="w-32 h-32 rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                John Doe
              </h3>
              <p className="mt-2 text-gray-600">CEO & Founder</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/037/098/807/small_2x/ai-generated-a-happy-smiling-professional-man-light-blurry-office-background-closeup-view-photo.jpg"
                alt="team member"
                className="w-32 h-32 rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Jane Smith
              </h3>
              <p className="mt-2 text-gray-600">Operations Manager</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://t4.ftcdn.net/jpg/06/79/50/91/360_F_679509191_FQW7KbRAaHVkCryRlomSQXOeM354SdJY.jpg"
                alt="team member"
                className="w-32 h-32 rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Alice Johnson
              </h3>
              <p className="mt-2 text-gray-600">Customer Support</p>
            </div>
          </div>
          {/* Mission Section */}
          <section className="mt-12">
            <h2 className="text-[5vh] sm:text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4   text-[3vh] sm:text-lg text-gray-500">
              We are committed to providing fast, fresh, and affordable meals
              delivered to your doorstep. Our mission is to offer a variety of
              restaurant options, ensuring a quick and convenient delivery
              service that satisfies every customer.
            </p>
          </section>

          {/* Vision Section */}
          <section className="mt-12 bg-white py-16 px-6 rounded-lg shadow-lg">
            <h2 className="text-[5vh] sm:text-3xl font-bold text-gray-900">Our Vision</h2>
            <p className="mt-4 text-[3vh] sm:text-lg text-gray-600">
              Our vision is to redefine food delivery by providing a seamless
              and enjoyable experience. We aim to be the go-to food delivery
              service, focusing on quality, customer satisfaction, and a broad
              range of menu options to cater to everyone's tastes.
            </p>
          </section>
        </section>

        {/* Customer Testimonials Section */}
        <section className="mt-12 bg-gray-100 py-16 px-2 rounded-lg">
          <h2 className="text-[5vh] sm:text-4xl font-bold text-gray-900">
            Customer Testimonials
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg  max-w-56 h-56">
              <p className="text-gray-600">
                "The food always arrives hot and on time! I love using this
                service for busy days."
              </p>
              <h4 className="mt-4 text-lg font-semibold text-gray-900">
                Michael R.
              </h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-56 h-56">
              <p className="text-gray-600">
                "A great variety of restaurants to choose from, and the app is
                so easy to use!"
              </p>
              <h4 className="mt-4 text-lg font-semibold text-gray-900">
                Sarah W.
              </h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-56 h-56">
              <p className="text-gray-600">
                "Fast delivery, great customer service, and always delicious
                food!"
              </p>
              <h4 className="mt-4 text-lg font-semibold text-gray-900">
                David L.
              </h4>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-12">
          <h2 className="text-[5vh] sm:text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-[3vw] sm:text-lg text-gray-600">
            Have questions? We're here to help! Reach out to our support team,
            and we'll get back to you as soon as possible.
          </p>
          <form className="mt-8 space-y-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 sm:p-4 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 sm:p-4 border border-gray-300 rounded-lg"
              rows="4"
            ></textarea>
            <button className="w-full bg-blue-500 text-white p-2 sm:p-4 rounded-lg">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

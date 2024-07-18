import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        {/* Header */}
        <header className="w-full bg-blue-600 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Training Hub</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#home" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#courses" className="hover:underline">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section
          className="w-full flex flex-col items-center justify-center bg-cover bg-center py-20"
          style={{ backgroundImage: "url('https://via.placeholder.com/1500')" }}
        >
          <h2 className="text-4xl text-white font-bold mb-4">
            Welcome to Training Hub
          </h2>
          <p className="text-lg text-white mb-6">
            Your journey to knowledge starts here
          </p>
          <a
            href="#courses"
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold"
          >
            Explore Courses
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-center text-gray-700 mb-6">
            Training Hub offers a variety of courses to help you achieve your
            personal and professional goals. Our experienced instructors and
            comprehensive course materials are designed to provide you with the
            knowledge and skills you need to succeed.
          </p>
        </section>

        {/* Courses Section */}
        <section id="courses" className="w-full bg-gray-200 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Course 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Course Title 1</h3>
                <p className="text-gray-700 mb-4">
                  A brief description of the course and what you will learn.
                </p>
                <a href="#course1" className="text-blue-600 hover:underline">
                  Learn More
                </a>
              </div>
              {/* Course 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Course Title 2</h3>
                <p className="text-gray-700 mb-4">
                  A brief description of the course and what you will learn.
                </p>
                <a href="#course2" className="text-blue-600 hover:underline">
                  Learn More
                </a>
              </div>
              {/* Course 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Course Title 3</h3>
                <p className="text-gray-700 mb-4">
                  A brief description of the course and what you will learn.
                </p>
                <a href="#course3" className="text-blue-600 hover:underline">
                  Learn More
                </a>
              </div>
              {/* Add more courses as needed */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-2 border rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="w-full bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Training Hub. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home
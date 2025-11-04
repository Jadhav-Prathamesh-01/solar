"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Fixed Navbar - Only visible in hero section */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-white">SolarBoost</span>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex gap-8">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Residential</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Commercial</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">About Us</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Contact</a>
            </nav>

            {/* Mobile Hamburger Button */}
            <button 
              className="md:hidden text-white p-2 focus:outline-none"
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                const hamburger = document.getElementById('hamburger');
                const overlay = document.getElementById('mobile-overlay');
                if (mobileMenu && hamburger && overlay) {
                  const isOpen = mobileMenu.classList.contains('translate-x-0');
                  if (isOpen) {
                    mobileMenu.classList.remove('translate-x-0');
                    mobileMenu.classList.add('translate-x-full');
                    hamburger.classList.remove('open');
                    overlay.classList.add('pointer-events-none');
                    overlay.classList.remove('opacity-100');
                    overlay.classList.add('opacity-0');
                  } else {
                    mobileMenu.classList.remove('translate-x-full');
                    mobileMenu.classList.add('translate-x-0');
                    hamburger.classList.add('open');
                    overlay.classList.remove('pointer-events-none');
                    overlay.classList.add('opacity-100');
                    overlay.classList.remove('opacity-0');
                  }
                }
              }}
            >
              <div id="hamburger" className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
          
          {/* Bottom border line with spacing */}
          <div className="mt-4 mx-4 md:mx-8">
            <div className="h-px bg-white opacity-30"></div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className="fixed top-0 right-0 h-full w-64 bg-transparent transform translate-x-full transition-transform duration-300 ease-in-out md:hidden"
        >
          <div className="flex flex-col items-start p-8 pt-20 space-y-6">
            <a href="#" className="text-white text-lg hover:text-gray-300 transition-colors">Residential</a>
            <a href="#" className="text-white text-lg hover:text-gray-300 transition-colors">Commercial</a>
            <a href="#" className="text-white text-lg hover:text-gray-300 transition-colors">About Us</a>
            <a href="#" className="text-white text-lg hover:text-gray-300 transition-colors">Contact</a>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          id="mobile-overlay"
          className="fixed inset-0 bg-transparent opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out md:hidden"
          onClick={() => {
            const mobileMenu = document.getElementById('mobile-menu');
            const hamburger = document.getElementById('hamburger');
            const overlay = document.getElementById('mobile-overlay');
            if (mobileMenu && hamburger && overlay) {
              mobileMenu.classList.remove('translate-x-0');
              mobileMenu.classList.add('translate-x-full');
              hamburger.classList.remove('open');
              overlay.classList.add('pointer-events-none');
              overlay.classList.remove('opacity-100');
              overlay.classList.add('opacity-0');
            }
          }}
        ></div>

        {/* Hamburger Animation Styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .hamburger {
              display: flex;
              flex-direction: column;
              width: 24px;
              height: 18px;
              justify-content: space-between;
              cursor: pointer;
            }
            
            .hamburger span {
              display: block;
              height: 2px;
              width: 100%;
              background-color: white;
              border-radius: 1px;
              transition: all 0.3s ease-in-out;
              transform-origin: center;
            }
            
            .hamburger.open span:nth-child(1) {
              transform: rotate(45deg) translate(6px, 6px);
            }
            
            .hamburger.open span:nth-child(2) {
              opacity: 0;
              transform: scaleX(0);
            }
            
            .hamburger.open span:nth-child(3) {
              transform: rotate(-45deg) translate(6px, -6px);
            }
          `
        }} />
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/heros.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Main Text Overlay - Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-left px-8">
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-black leading-tight tracking-wide">
              Where Power<br />
              Unlocks Potential
            </h1>
          </div>
        </div>

        {/* Bottom Left Text Overlay */}
        <div className="absolute bottom-20 left-8 max-w-sm">
          <h2 className="text-white text-sm md:text-base font-bold mb-2">
            Energy Infrastructure Platform
          </h2>
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
            Solar develops and operates an integrated portfolio of power, digital infrastructure, and compute assets purpose-built to fuel the world's most transformative technologies.
          </p>
        </div>
      </div>

      {/* What to Expect Section */}
      <div className="w-full bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Blue Heading */}
          <p className="text-blue-500 text-sm font-medium uppercase tracking-wide mb-6">
            WHAT TO EXPECT FROM THE BEST
          </p>
          
          {/* Main Heading */}
          <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-16 max-w-5xl">
            We have a proven track record in providing customized, turnkey solar solutions with a wide variety of installations methods
          </h2>
          
          {/* Content Section */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            {/* Ground mount title */}
            <div className="flex-shrink-0">
              <h3 className="text-black text-2xl font-semibold">
                Ground mount
              </h3>
            </div>
            
            {/* Description */}
            <div className="max-w-md md:ml-auto">
              <p className="text-gray-600 text-base leading-relaxed text-justify">
                Our ground mount solar solutions are the perfect way to utilize that parcel of unused land. The structure is installed either using helical or concrete piles. They are designed to withstand the harshest wind, hail and snow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nature Box Section */}
      <div className="w-full bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Rounded Box with Climate Background - Increased Width */}
          <div className="relative w-full h-96 rounded-3xl overflow-hidden">
            {/* Background Image */}
            <img 
              src="/Climate.jpg" 
              alt="Climate" 
              className="w-full h-full object-cover"
            />
            
            {/* Text Overlay - Centered (No Dark Overlay) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
              {/* "With Love For Nature" text - Reduced slightly */}
              <p className="text-white text-lg md:text-xl font-light mb-6 tracking-wide text-center">
                With Love For Nature
              </p>
              
              {/* SolarBoost Text Only (No Icon) - Reduced more */}
              <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center">
                SolarBoost
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Benefits Heading */}
          <h2 className="text-black text-2xl md:text-3xl font-bold mb-8 ml-8">
            Benefits
          </h2>
          
          {/* Benefits Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Control energy costs */}
            <div className="bg-gray-50 rounded-2xl p-8 h-80 flex flex-col">
              <h3 className="text-black text-xl font-semibold mb-4">
                Control energy costs
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                With solar you can secure predictable electricity costs for years to come
              </p>
              <div className="flex-1 flex items-center justify-center">
                <Image
                  src="/power.svg"
                  alt="Power icon"
                  width={80}
                  height={80}
                  style={{ width: 'auto', height: '80px' }}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            </div>

            {/* Card 2 - Help the environment */}
            <div className="bg-gray-50 rounded-2xl p-8 h-80 flex flex-col">
              <h3 className="text-black text-xl font-semibold mb-4">
                Help the environment
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Solar creates 91% less CO2 pollution than natural gas and 96% less CO2 than coal
              </p>
              <div className="flex-1 flex items-center justify-center">
                <Image
                  src="/leaf.svg"
                  alt="Leaf icon"
                  width={120}
                  height={120}
                  style={{ width: 'auto', height: '120px' }}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Card 3 - Energy independence */}
            <div className="bg-gray-50 rounded-2xl p-8 h-80 flex flex-col">
              <h3 className="text-black text-xl font-semibold mb-4">
                Energy independence
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Clean solar energy provides us with an unlimited, reliable source of energy
              </p>
              <div className="flex-1 flex items-center justify-center">
                <Image
                  src="/battery.svg"
                  alt="Battery icon"
                  width={120}
                  height={120}
                  style={{ width: 'auto', height: '120px' }}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="w-full bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Continuous Line - Straight (low), Slant Up, Straight (high) */}
          <div className="relative mb-16 h-8">
            <svg className="w-full h-full" viewBox="0 0 1200 32" preserveAspectRatio="none">
              <path 
                d="M0,24 L900,24 L930,12 L1200,12" 
                stroke="#d1d5db" 
                strokeWidth="1" 
                fill="none"
              />
            </svg>
          </div>

          {/* About Us Content */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            {/* About Us heading */}
            <div className="flex-shrink-0">
              <h2 className="text-black text-7xl md:text-8xl lg:text-9xl font-bold">
                About Us
              </h2>
            </div>
            
            {/* Description */}
            <div className="max-w-md md:ml-auto">
              <p className="text-black text-base leading-relaxed text-justify">
                Inspired by the legacy of our legendary namesake, we harness the power of human ingenuity and resolve to build the future of energy and digital infrastructure.
              </p>
            </div>
          </div>

          {/* About Image */}
          <div className="w-full">
            <Image
              src="/about.webp"
              alt="About us - Team meeting"
              width={1200}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="w-full bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Continuous Line - Below Our Team */}
          <div className="relative mb-16 h-8">
            <svg className="w-full h-full" viewBox="0 0 1200 32" preserveAspectRatio="none">
              <path 
                d="M0,24 L900,24 L930,12 L1200,12" 
                stroke="#d1d5db" 
                strokeWidth="1" 
                fill="none"
              />
            </svg>
            {/* Small "Our Team" heading positioned on the line */}
            <h2 className="absolute top-0 left-0 text-black text-sm font-medium uppercase tracking-wide bg-white px-2 -mt-2">
              Our Team
            </h2>
          </div>
          
          {/* Main content in two columns */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-12">
            {/* Left side - Large heading */}
            <div className="lg:w-1/2">
              <h1 className="text-black text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Fueled by<br />Conviction
              </h1>
            </div>
            
            {/* Right side - Description text */}
            <div className="lg:w-1/2">
              <p className="text-black text-base leading-relaxed">
                We believe that capturing the generational market opportunity we see at the intersection of energy and technology will require exceptional intellect, discernment, and grit. <span className="text-gray-500">United by that conviction, our team of sector veterans and proven builder-operators work hand in hand to shape the future of energy and digital infrastructure.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tailored for You Section */}
      <div className="w-full bg-gray-50 py-12 md:py-20 px-4 md:px-8 relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="relative flex flex-col items-center justify-center min-h-[500px] md:min-h-[700px] gap-4 md:gap-8">
            
            {/* Top images - above "Tailored" */}
            <div className="flex justify-between w-full px-2 md:px-8 gap-2 md:gap-8 items-start">
              {/* Top left image - citysolar with reduced width moved more right */}
              <div className="w-32 h-44 md:w-52 md:h-72 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg ml-4 md:ml-24">
                <Image
                  src="/citysolar.webp"
                  alt="City Solar"
                  width={208}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Top right image - farmsolar moved down */}
              <div className="w-36 h-44 md:w-64 md:h-72 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg mt-6 md:mt-12">
                <Image
                  src="/farmsolar.webp"
                  alt="Farm Solar"
                  width={256}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center content */}
            <div className="text-center z-10 max-w-xs md:max-w-md px-4">
              <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
                Tailored<br />for <span className="relative">you<span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 bg-yellow-400 -z-10"></span></span>.
              </h1>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                The Cocoon app connects you quickly and effortlessly with a pool of amazing therapists that will meet your specific needs.
              </p>
            </div>

            {/* Bottom images - below the paragraph */}
            <div className="flex justify-between w-full px-6 md:px-24 gap-2 md:gap-8">
              {/* Bottom left image - homesolar moved left */}
              <div className="w-36 h-28 md:w-64 md:h-48 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg -ml-2 md:-ml-8">
                <Image
                  src="/homesolar.webp"
                  alt="Home Solar"
                  width={256}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Bottom right image - Birdblockersolar */}
              <div className="w-36 h-28 md:w-64 md:h-48 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/Birdblockersolar.webp"
                  alt="Bird Blocker Solar"
                  width={256}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Animated nested chevrons indicator at bottom center */}
          <div className="flex justify-center mt-8 md:mt-12">
            <div className="relative">
              <style dangerouslySetInnerHTML={{
                __html: `
                  @keyframes chevronVerticalSequence {
                    0% { opacity: 0; transform: translateY(0px); }
                    20% { opacity: 1; transform: translateY(0px); }
                    40% { opacity: 1; transform: translateY(0px); }
                    60% { opacity: 1; transform: translateY(6px); }
                    80% { opacity: 1; transform: translateY(-3px); }
                    100% { opacity: 0; transform: translateY(0px); }
                  }
                  
                  .chevron-container {
                    animation: chevronVerticalSequence 2.5s infinite;
                  }
                `
              }} />
              <div className="chevron-container relative flex items-center justify-center">
                {/* First (smaller) chevron at top */}
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-500 absolute -translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                {/* Second (larger) chevron at bottom */}
                <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-400 relative z-10 translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Better matches. Better outcomes. Section */}
      <div className="w-full relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hands.webp"
          alt="Hands reaching toward each other"
          fill
          className="object-cover"
          priority
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-normal leading-tight mb-8">
              Better matches.<br />
              Better outcomes.
            </h1>
            <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              The only therapy app powered by a custom demographic search –<br />
              to find the therapist that is right for you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full bg-gray-50 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Form */}
            <div>
              <p className="text-blue-500 text-sm font-medium uppercase tracking-wide mb-4">
                CONTACT DETAILS
              </p>
              <h2 className="text-black text-3xl md:text-4xl font-normal leading-tight mb-8">
                Leave your contact details right here and we will call you <span className="text-blue-500">within 1 day</span>
              </h2>

              <form className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <p className="text-gray-700 text-sm mb-3">This project is:</p>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="projectType" value="residential" className="mr-2" />
                      <span className="text-gray-700">Residential</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="projectType" value="commercial" className="mr-2" />
                      <span className="text-gray-700">Commercial</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="projectType" value="industrial" className="mr-2" />
                      <span className="text-gray-700">Industrial</span>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-black placeholder-gray-500"
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  Submit
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Right Side - Contact Information with Image Background */}
            <div className="relative rounded-xl overflow-hidden">
              {/* Background Image */}
              <Image
                src="/solar-contact.jpg"
                alt="Solar contact background"
                fill
                className="object-cover"
              />
              
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40"></div>
              
              {/* Contact Information Content */}
              <div className="relative z-10 p-8 space-y-8">
                {/* Washington D.C. Office */}
                <div>
                  <h3 className="text-gray-300 text-sm font-medium mb-3">Washington D.C. Office:</h3>
                  <div className="text-white text-sm leading-relaxed">
                    <p>Address: 1436 Tuckerman</p>
                    <p>ST NW Apt 105 Washington</p>
                    <p>DC 20011-1097 USA</p>
                  </div>
                </div>

                {/* Toll Free */}
                <div>
                  <h3 className="text-gray-300 text-sm font-medium mb-3">Toll Free:</h3>
                  <p className="text-white text-sm">(000) 010-0101</p>
                </div>

                {/* Washington D.C. Region */}
                <div>
                  <h3 className="text-gray-300 text-sm font-medium mb-3">Washington D.C. Region:</h3>
                  <p className="text-white text-sm">(000) 010-0101</p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-gray-300 text-sm font-medium mb-3">Email:</h3>
                  <p className="text-white text-sm">info@solarboost.com</p>
                </div>

                {/* Business Hours */}
                <div>
                  <h3 className="text-gray-300 text-sm font-medium mb-3">Business Hours:</h3>
                  <div className="text-white text-sm leading-relaxed">
                    <p>Monday - Friday 8am to 4:30pm</p>
                    <p>Saturday - By Appointment</p>
                    <p>Sunday - Closed</p>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-gray-300 text-sm font-medium mb-3">Follow us on Social Media:</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-white hover:text-gray-300 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
            <footer className="w-full bg-white py-4 px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Left Side - Logo */}
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-gray-900">SolarBoost</span>
            </div>

            {/* Center - Navigation Links */}
            <nav className="flex flex-wrap gap-4 lg:gap-6 justify-center">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Residential</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Commercial</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">About Us</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Contact</a>
            </nav>

            {/* Right Side - Book A Call Button */}
            <div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors flex items-center gap-1">
                Book A Call
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              {/* Left Side - Privacy Policy and Copyright */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-6">
                <a href="#" className="text-gray-400 text-xs hover:text-gray-600 transition-colors">Privacy Policy</a>
                <p className="text-gray-400 text-sm">© All rights reserved / SolarBoost 2025</p>
              </div>

              {/* Right Side - Credits and Social Media */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8">
                {/* Credits */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 text-sm">
                  <div>
                    <span className="text-gray-400">Developed by:</span>
                    <span className="text-gray-900 font-medium ml-1">Prathamesh Jadhav</span>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-3">
                  <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

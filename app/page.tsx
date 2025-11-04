import Image from "next/image";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}

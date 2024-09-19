import React, { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Load Playfair Display and Dancing Script fonts
    const playfairLink = document.createElement('link');
    playfairLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap';
    playfairLink.rel = 'stylesheet';
    document.head.appendChild(playfairLink);

    const dancingScriptLink = document.createElement('link');
    dancingScriptLink.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap';
    dancingScriptLink.rel = 'stylesheet';
    document.head.appendChild(dancingScriptLink);

    return () => {
      // Clean up the added links when component unmounts
      document.head.removeChild(playfairLink);
      document.head.removeChild(dancingScriptLink);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 font-['Courier_New',_monospace]">Welcome to Our Simple Page</h1>
        <h2 className="text-2xl font-semibold mb-3 text-gray-700 font-['Playfair_Display',_serif]">Discover the Power of Simplicity</h2>
        <h3 className="text-xl mb-2 text-gray-600 font-['Dancing_Script',_cursive]">Embrace Minimalism in Design</h3>
      </div>
    </div>
  );
};

export default Index;

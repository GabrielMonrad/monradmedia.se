const minNavbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-white text-lg font-bold">Logo</h1>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Link 1
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Link 2
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Link 3
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default minNavbar;

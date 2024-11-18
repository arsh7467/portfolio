

function Header() {
    return (
        <div className="header bg-blue-600 text-white py-4 px-6 flex items-center justify-between">
            {/* Logo or Title */}
            <h1 className="text-2xl font-bold"><a href="/">MY PORTFOLIO</a></h1>
            
            {/* Navigation Links */}
            <nav className="navbar flex space-x-6">
                <a className="text-lg font-medium hover:text-gray-200" href="/">Home</a>
                <a className="text-lg font-medium hover:text-gray-200" href="/about">About</a>
                <a className="text-lg font-medium hover:text-gray-200" href="/my-projects">My Projects</a>
                <a className="text-lg font-medium hover:text-gray-200" href="/Contact">Contact Us</a>
            </nav>
            
            {/* Buttons */}
            <div className="flex space-x-4">
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100">Sign up</button>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100">Login</button>
            </div>
        </div>
    );
}

export default Header;

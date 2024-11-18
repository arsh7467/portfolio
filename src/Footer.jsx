function Footer() {
    return (
        <div className="bg-gray-800 text-white py-6 mt-10">
            <div className="max-w-screen-lg mx-auto text-center">
                <p className="text-sm mb-4">&copy; 2024 MY PORTFOLIO. All rights reserved.</p>
                <div className="flex justify-center space-x-6">
                    <a 
                        href="/policy" 
                        className="text-gray-400 hover:text-white transition duration-300"
                    >
                        Privacy Policy
                    </a>
                    <a 
                        href="/terms" 
                        className="text-gray-400 hover:text-white transition duration-300"
                    >
                        Terms of Service
                    </a>
                    <a 
                        href="/contact" 
                        className="text-gray-400 hover:text-white transition duration-300"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;

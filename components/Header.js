function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        try {
            setIsMobileMenuOpen(!isMobileMenuOpen);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <header data-name="header" className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-sepia-light shadow-vintage' : 'bg-transparent'
        }`}>
            <nav data-name="navigation" className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <h1 data-name="logo" className={`text-3xl font-serif font-bold ${
                        isScrolled ? 'text-sepia-dark' : 'text-antique-white'
                    }`}>
                        Vintage Garage
                    </h1>

                    {/* Mobile menu button */}
                    <button 
                        data-name="mobile-menu-button"
                        className="md:hidden text-sepia-dark hover:text-sepia-darker"
                        onClick={toggleMobileMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <div data-name="nav-links" className="hidden md:flex space-x-8">
                        {['Home', 'Collection', 'Services', 'Work', 'About', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`nav-link relative font-serif ${
                                    isScrolled ? 'text-sepia-dark' : 'text-antique-white'
                                }`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div data-name="mobile-menu" className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="pt-4 pb-3 space-y-3">
                        {['Home', 'Collection', 'Services', 'Work', 'About', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`block py-2 px-4 text-lg font-serif ${
                                    isScrolled ? 'text-sepia-dark' : 'text-antique-white'
                                } hover:bg-sepia-lighter rounded transition-colors duration-200`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}

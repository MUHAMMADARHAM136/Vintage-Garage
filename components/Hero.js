function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    
    const backgroundImages = [
        "https://app.trickle.so/storage/public/images/usr_09073a8e40000001/20d2db10-49c3-44ab-88a5-39576384ec53.jpeg",
        "https://app.trickle.so/storage/public/images/usr_09073a8e40000001/b10d701c-47dd-40fb-9f98-92c202dbc1b7.jpeg",
        "https://app.trickle.so/storage/public/images/usr_09073a8e40000001/286f5c45-6efb-4110-95e2-27eddfad8ceb.jpeg",
        "https://app.trickle.so/storage/public/images/usr_09073a8e40000001/1a69c593-7a52-4ee3-aca1-08c7b6f244ad.jpeg",
        "https://app.trickle.so/storage/public/images/usr_09073a8e40000001/81216ef6-f6af-465f-af0d-eb66323bf696.jpeg"
    ];

    React.useEffect(() => {
        try {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => 
                    prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
                );
            }, 5000);

            return () => clearInterval(interval);
        } catch (error) {
            reportError(error);
        }
    }, []);

    const handleExploreClick = (e) => {
        try {
            handleNavigation(e, 'collection');
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <section data-name="hero" className="relative h-screen flex items-center overflow-hidden">
            {backgroundImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-hero-image transition-opacity duration-1000 ease-in-out ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        backgroundImage: `url('${image}')`
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
            ))}
            <div className="container mx-auto px-6 relative z-10">
                <div data-name="hero-content" className="max-w-2xl opacity-0 animate-fade-in">
                    <h2 data-name="hero-title" className="text-6xl font-bold mb-6 text-white animate-slide-up">
                        Classic Cars, Timeless Stories
                    </h2>
                    <p data-name="hero-description" className="text-xl mb-8 text-gray-200 animate-slide-up-delay">
                        Step into our vintage garage where every vehicle tells a unique story of automotive history.
                    </p>
                    <button 
                        data-name="cta-button" 
                        className="bg-amber-800 text-white px-8 py-3 rounded-lg hover:bg-amber-900 transition-all duration-300 transform hover:scale-105 animate-bounce-in"
                        onClick={handleExploreClick}
                    >
                        Explore Collection
                    </button>
                </div>
            </div>
            <div data-name="scroll-indicator" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center animate-fade-in-up">
                <p className="text-sm mb-2">Scroll to explore</p>
                <svg 
                    className="w-6 h-6 mx-auto animate-bounce" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}

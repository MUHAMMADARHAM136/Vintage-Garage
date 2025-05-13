function AboutUs() {
    return (
        <section data-name="about-us" className="py-32">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div data-name="about-content">
                        <h2 data-name="section-title" className="text-4xl font-bold mb-8 vintage-text">About Us</h2>
                        <p data-name="about-text" className="text-gray-600 mb-6">
                            Since 1975, Vintage Garage has been the premier destination for classic car enthusiasts. Our passion for preserving automotive history drives everything we do.
                        </p>
                        <p data-name="about-text" className="text-gray-600 mb-8">
                            With over 45 years of experience, our master craftsmen combine traditional techniques with modern technology to restore and maintain classic vehicles to their original glory.
                        </p>
                        <div data-name="stats" className="grid grid-cols-3 gap-4 mt-8">
                            <div className="text-center">
                                <span className="block text-3xl font-bold vintage-text">45+</span>
                                <span className="text-gray-600">Years</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-3xl font-bold vintage-text">500+</span>
                                <span className="text-gray-600">Cars Restored</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-3xl font-bold vintage-text">100%</span>
                                <span className="text-gray-600">Satisfaction</span>
                            </div>
                        </div>
                    </div>
                    <div data-name="about-image" className="about-image-container">
                        <img src="https://images.unsplash.com/photo-1579762593251-07c01abb6599?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjA0NjB8MHwxfHNlYXJjaHwzN3x8Y2FyJTIwc3RvcmV8ZW58MHx8fHwxNzM3MDk0NDQxfDA&ixlib=rb-4.0.3&q=85" 
                             alt="Vintage Garage Workshop" 
                             className="rounded-lg shadow-xl"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

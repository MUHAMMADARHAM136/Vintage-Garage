function Services() {
    return (
        <section data-name="services" className="py-32 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 data-name="section-title" className="text-4xl font-bold mb-16 text-center text-gray-800">Our Services</h2>
                <div data-name="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div data-name="service-card" className="service-card relative overflow-hidden max-w-sm mx-auto w-full">
                        <div className="p-8 bg-white border-2 border-gray-200 rounded-lg shadow-lg">
                            <div className="text-center">
                                <div className="service-icon mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h3 data-name="service-title" className="text-2xl font-bold mb-4 text-gray-800">Restoration</h3>
                                <p data-name="service-description" className="text-gray-600 leading-relaxed">Full restoration of classic cars to their original glory. Our expert craftsmen preserve every authentic detail with meticulous attention to historical accuracy.</p>
                            </div>
                        </div>
                    </div>

                    <div data-name="service-card" className="service-card relative overflow-hidden max-w-sm mx-auto w-full">
                        <div className="p-8 bg-white border-2 border-gray-200 rounded-lg shadow-lg">
                            <div className="text-center">
                                <div className="service-icon mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                    </svg>
                                </div>
                                <h3 data-name="service-title" className="text-2xl font-bold mb-4 text-gray-800">Maintenance</h3>
                                <p data-name="service-description" className="text-gray-600 leading-relaxed">Regular maintenance and specialized care for vintage vehicles. Keep your classic running smoothly with our comprehensive service programs.</p>
                            </div>
                        </div>
                    </div>

                    <div data-name="service-card" className="service-card relative overflow-hidden max-w-sm mx-auto w-full">
                        <div className="p-8 bg-white border-2 border-gray-200 rounded-lg shadow-lg">
                            <div className="text-center">
                                <div className="service-icon mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 data-name="service-title" className="text-2xl font-bold mb-4 text-gray-800">Sales</h3>
                                <p data-name="service-description" className="text-gray-600 leading-relaxed">Expert evaluation and sales of classic vehicles. Find your perfect vintage automobile with our curated selection and expert guidance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CarDetails({ car }) {
    const specifications = {
        "Engine": car.engine || "V8",
        "Transmission": car.transmission || "Manual",
        "Mileage": car.mileage || "76,500 miles",
        "Exterior Color": car.exteriorColor || "Original Factory Color",
        "Interior Color": car.interiorColor || "Black Leather",
        "VIN": car.vin || "Available upon request",
        "Condition": car.condition || "Excellent",
        "Last Serviced": car.lastServiced || "Recent full service"
    };

    const features = [
        "Original matching numbers",
        "Complete restoration documentation",
        "Award-winning restoration",
        "Original owner's manual",
        "Tool kit included",
        "Recent mechanical overhaul",
        "Climate controlled storage"
    ];

    return (
        <div data-name="car-details" className="p-6">
            <div data-name="car-header" className="mb-6">
                <h2 className="text-3xl font-bold vintage-text mb-2">{car.name}</h2>
                <p className="text-2xl text-amber-800 font-bold">{car.price}</p>
            </div>

            <div data-name="car-image" className="mb-6">
                <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-64 object-cover rounded-lg"
                />
            </div>

            <div data-name="car-description" className="mb-6">
                <h3 className="text-xl font-bold mb-2">Description</h3>
                <p className="text-gray-600">{car.description}</p>
                <p className="text-gray-600 mt-2">
                    This classic beauty has been meticulously restored to its original glory, 
                    featuring matching numbers and complete documentation of its restoration process. 
                    It represents a perfect blend of vintage charm and reliable performance.
                </p>
            </div>

            <div data-name="car-specifications" className="mb-6">
                <h3 className="text-xl font-bold mb-2">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b border-gray-200 py-2">
                            <span className="font-semibold">{key}:</span>
                            <span className="text-gray-600">{value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div data-name="car-features">
                <h3 className="text-xl font-bold mb-2">Features & History</h3>
                <ul className="list-disc list-inside text-gray-600">
                    {features.map((feature, index) => (
                        <li key={index} className="mb-1">{feature}</li>
                    ))}
                </ul>
            </div>

            <div data-name="car-contact" className="mt-6 text-center">
                <button className="bg-amber-800 text-white px-8 py-3 rounded-lg hover:bg-amber-900 transition-colors duration-300">
                    Schedule Viewing
                </button>
                <p className="mt-2 text-gray-600">
                    Contact us at (555) 123-4567 for more information
                </p>
            </div>
        </div>
    );
}

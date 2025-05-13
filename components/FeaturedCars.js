function FeaturedCars() {
    const [selectedCar, setSelectedCar] = React.useState(null);

    const cars = [
        {
            id: 1,
            name: "1965 Mustang",
            description: "Restored classic American muscle car",
            price: "$75,000",
            image: "https://app.trickle.so/storage/public/images/usr_09073a8e40000001/20d2db10-49c3-44ab-88a5-39576384ec53.jpeg",
            engine: "289 V8",
            transmission: "4-Speed Manual",
            mileage: "82,453 miles",
            exteriorColor: "Vintage Red",
            interiorColor: "Black Vinyl",
            vin: "5F08K123456",
            condition: "Excellent",
            lastServiced: "January 2024"
        },
        {
            id: 2,
            name: "1957 Chevrolet",
            description: "Iconic vintage beauty in mint condition",
            price: "$85,000",
            image: "https://app.trickle.so/storage/public/images/usr_09073a8e40000001/b10d701c-47dd-40fb-9f98-92c202dbc1b7.jpeg",
            engine: "283 V8",
            transmission: "PowerGlide Automatic",
            mileage: "76,234 miles",
            exteriorColor: "Tropical Turquoise",
            interiorColor: "Two-tone Blue",
            vin: "VC57K123456",
            condition: "Restored",
            lastServiced: "December 2023"
        },
        {
            id: 3,
            name: "1970 Dodge Charger",
            description: "Powerful classic with original parts",
            price: "$95,000",
            image: "https://app.trickle.so/storage/public/images/usr_09073a8e40000001/286f5c45-6efb-4110-95e2-27eddfad8ceb.jpeg",
            engine: "426 HEMI V8",
            transmission: "3-Speed Automatic",
            mileage: "68,321 miles",
            exteriorColor: "Plum Crazy Purple",
            interiorColor: "Black Leather",
            vin: "XP29K123456",
            condition: "Excellent",
            lastServiced: "February 2024"
        },
        {
            id: 4,
            name: "1963 Corvette Sting Ray",
            description: "Iconic split-window design classic",
            price: "$125,000",
            image: "https://app.trickle.so/storage/public/images/usr_09073a8e40000001/81216ef6-f6af-465f-af0d-eb66323bf696.jpeg",
            engine: "327 V8",
            transmission: "4-Speed Manual",
            mileage: "54,234 miles",
            exteriorColor: "Riverside Red",
            interiorColor: "Black",
            vin: "30837S123456",
            condition: "Museum Quality",
            lastServiced: "November 2023"
        },
        {
            id: 5,
            name: "1959 Cadillac Eldorado",
            description: "Luxury vintage with iconic fins",
            price: "$110,000",
            image: "https://app.trickle.so/storage/public/images/usr_09073a8e40000001/e5041711-b3a3-400f-9e3a-29773acc76c8.jpeg",
            engine: "390 V8",
            transmission: "Hydra-Matic Automatic",
            mileage: "89,432 miles",
            exteriorColor: "Alpine White",
            interiorColor: "Red Leather",
            vin: "59J123456",
            condition: "Excellent",
            lastServiced: "March 2024"
        },
        {
            id: 6,
            name: "1968 Porsche 911",
            description: "European sports car excellence",
            price: "$135,000",
            image: "https://app.trickle.so/storage/public/images/usr_09073a8e40000001/1a69c593-7a52-4ee3-aca1-08c7b6f244ad.jpeg",
            engine: "2.0L Flat-Six",
            transmission: "5-Speed Manual",
            mileage: "92,544 miles",
            exteriorColor: "Irish Green",
            interiorColor: "Tan Leather",
            vin: "11835123456",
            condition: "Excellent",
            lastServiced: "January 2024"
        }
    ];

    const handleViewDetails = (car) => {
        try {
            setSelectedCar(car);
        } catch (error) {
            reportError(error);
        }
    };

    const handleCloseModal = () => {
        try {
            setSelectedCar(null);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <section data-name="featured-cars" className="py-32 vintage-bg">
            <div className="container mx-auto px-6">
                <h2 data-name="section-title" className="text-4xl font-bold mb-16 text-center vintage-text">Featured Classics</h2>
                <div data-name="car-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cars.map(car => (
                        <div key={car.id} data-name="car-card" className="vintage-border rounded-lg bg-white shadow-lg overflow-hidden">
                            <div data-name="car-image" className="h-48 overflow-hidden">
                                <img 
                                    src={car.image} 
                                    alt={car.name}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 data-name="car-name" className="text-2xl font-bold mb-3 vintage-text">{car.name}</h3>
                                <p data-name="car-description" className="text-gray-600 mb-4">{car.description}</p>
                                <p data-name="car-price" className="text-xl font-bold text-amber-800">{car.price}</p>
                                <button 
                                    data-name="car-details-button"
                                    onClick={() => handleViewDetails(car)}
                                    className="mt-4 w-full bg-amber-800 text-white py-2 px-4 rounded-lg hover:bg-amber-900 transition-colors duration-300"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal isOpen={selectedCar !== null} onClose={handleCloseModal}>
                {selectedCar && <CarDetails car={selectedCar} />}
            </Modal>
        </section>
    );
}

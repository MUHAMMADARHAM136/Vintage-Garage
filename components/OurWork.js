function OurWork() {
    const projects = [
        {
            id: 1,
            title: "Classic Car Workshop",
            description: "Professional maintenance and repair",
            image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjA0NjB8MHwxfHNlYXJjaHwxfHxjYXIlMjB3b3JrfGVufDB8fHx8MTczNzA5MzYwOXww&ixlib=rb-4.0.3&q=85",
            category: "Maintenance"
        },
        {
            id: 2,
            title: "Vintage Mercedes Restoration",
            description: "Complete body and interior restoration",
            image: "https://images.unsplash.com/photo-1670882011931-0d08b5ea3681?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjA0NjB8MHwxfHNlYXJjaHw4fHxjYXIlMjB3b3JrfGVufDB8fHx8MTczNzA5MzYwOXww&ixlib=rb-4.0.3&q=85",
            category: "Restoration"
        },
        {
            id: 3,
            title: "Engine Overhaul",
            description: "Performance engine rebuilding",
            image: "https://images.unsplash.com/photo-1548184274-f1d3776448b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjA0NjB8MHwxfHNlYXJjaHwxMXx8Y2FyJTIwd29ya3xlbnwwfHx8fDE3MzcwOTM2MDl8MA&ixlib=rb-4.0.3&q=85",
            category: "Mechanical"
        },
        {
            id: 4,
            title: "Custom Paint Job",
            description: "Premium quality paint restoration",
            image: "https://images.unsplash.com/photo-1586335963805-7b603f62a048?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjA0NjB8MHwxfHNlYXJjaHwxNXx8Y2FyJTIwd29ya3xlbnwwfHx8fDE3MzcwOTM2MDl8MA&ixlib=rb-4.0.3&q=85",
            category: "Paint"
        },
        {
            id: 5,
            title: "Classic Interior Upholstery",
            description: "Luxury leather restoration",
            image: "https://images.unsplash.com/photo-1531185907801-2771c11ab782?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjA0NjB8MHwxfHNlYXJjaHwxOXx8Y2FyJTIwd29ya3xlbnwwfHx8fDE3MzcwOTM2MDl8MA&ixlib=rb-4.0.3&q=85",
            category: "Interior"
        },
        {
            id: 6,
            title: "Chassis Restoration",
            description: "Complete frame rebuilding",
            image: "https://images.unsplash.com/photo-1621907643098-8221f7cd5d67?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjA0NjB8MHwxfHNlYXJjaHwzMHx8Y2FyJTIwd29ya3xlbnwwfHx8fDE3MzcwOTM2MzF8MA&ixlib=rb-4.0.3&q=85",
            category: "Restoration"
        }
    ];

    return (
        <section data-name="our-work" className="py-16 vintage-bg">
            <div className="container mx-auto px-6">
                <h2 data-name="section-title" className="text-4xl font-bold mb-12 text-center vintage-text">Our Work</h2>
                <div data-name="work-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <div key={project.id} data-name="work-card" className="work-card bg-white rounded-lg overflow-hidden shadow-lg">
                            <div data-name="work-image" className="h-64 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <span data-name="work-category" className="text-sm text-amber-800 font-semibold bg-amber-100 px-3 py-1 rounded-full">
                                    {project.category}
                                </span>
                                <h3 data-name="work-title" className="text-xl font-bold mt-3 mb-2 vintage-text">{project.title}</h3>
                                <p data-name="work-description" className="text-gray-600">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

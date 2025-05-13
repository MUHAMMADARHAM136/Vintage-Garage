function App() {
    React.useEffect(() => {
        // Handle initial hash routing
        try {
            const hash = window.location.hash.slice(1);
            if (hash) {
                setTimeout(() => {
                    scrollToSection(hash);
                }, 100);
            }
        } catch (error) {
            reportError(error);
        }
    }, []);

    return (
        <div data-name="app">
            <Header />
            <main>
                <section id="home">
                    <Hero />
                </section>
                <section id="collection">
                    <FeaturedCars />
                </section>
                <section id="services">
                    <Services />
                </section>
                <section id="work">
                    <OurWork />
                </section>
                <section id="about">
                    <AboutUs />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </main>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function Footer() {
    return (
        <footer data-name="footer" className="bg-amber-900 text-white py-8">
            <div className="container mx-auto px-6">
                <div data-name="footer-content" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div data-name="contact-info">
                        <h3 data-name="footer-title" className="text-xl font-bold mb-4">Contact Us</h3>
                        <p>123 Classic Road</p>
                        <p>Vintage City, VC 12345</p>
                        <p>Phone: (555) 123-4567</p>
                    </div>
                    <div data-name="hours">
                        <h3 data-name="footer-title" className="text-xl font-bold mb-4">Hours</h3>
                        <p>Monday - Friday: 9am - 6pm</p>
                        <p>Saturday: 10am - 4pm</p>
                        <p>Sunday: Closed</p>
                    </div>
                    <div data-name="social">
                        <h3 data-name="footer-title" className="text-xl font-bold mb-4">Follow Us</h3>
                        <div data-name="social-links" className="flex space-x-4">
                            <a href="#" className="hover:text-amber-200">Facebook</a>
                            <a href="#" className="hover:text-amber-200">Instagram</a>
                            <a href="#" className="hover:text-amber-200">Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

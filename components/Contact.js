function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState({ show: false, success: false, message: '' });

    const handleInputChange = (e) => {
        try {
            const { id, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [id]: value
            }));
        } catch (error) {
            reportError(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            setSubmitStatus({ show: false, success: false, message: '' });

            // Create a new contact message in the database
            const contactData = {
                ...formData,
                timestamp: new Date().toISOString(),
                status: 'new'
            };

            await trickleCreateObject('contact_messages', contactData);

            // Reset form and show success message
            setFormData({ name: '', email: '', message: '' });
            setSubmitStatus({
                show: true,
                success: true,
                message: 'Thank you! Your message has been sent successfully.'
            });
        } catch (error) {
            reportError(error);
            setSubmitStatus({
                show: true,
                success: false,
                message: 'Sorry, there was an error sending your message. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section data-name="contact" className="py-16 bg-amber-50">
            <div className="container mx-auto px-6">
                <h2 data-name="section-title" className="text-4xl font-bold mb-12 text-center vintage-text">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div data-name="contact-info">
                        <div className="mb-8">
                            <h3 data-name="info-title" className="text-2xl font-bold mb-4 vintage-text">Visit Our Workshop</h3>
                            <p className="text-gray-600">123 Classic Road</p>
                            <p className="text-gray-600">Vintage City, VC 12345</p>
                        </div>
                        <div className="mb-8">
                            <h3 data-name="info-title" className="text-2xl font-bold mb-4 vintage-text">Contact Information</h3>
                            <p className="text-gray-600">Phone: (555) 123-4567</p>
                            <p className="text-gray-600">Email: info@vintagarage.com</p>
                        </div>
                        <div>
                            <h3 data-name="info-title" className="text-2xl font-bold mb-4 vintage-text">Business Hours</h3>
                            <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                            <p className="text-gray-600">Saturday: 10am - 4pm</p>
                            <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                    </div>
                    <div data-name="contact-form">
                        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg vintage-border">
                            {submitStatus.show && (
                                <div 
                                    data-name="status-message"
                                    className={`mb-6 p-4 rounded-lg ${
                                        submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                    }`}
                                >
                                    {submitStatus.message}
                                </div>
                            )}
                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-amber-800"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-amber-800"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-amber-800"
                                    required
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-amber-800 text-white py-3 rounded-lg transition ${
                                    isSubmitting 
                                        ? 'opacity-50 cursor-not-allowed' 
                                        : 'hover:bg-amber-900'
                                }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

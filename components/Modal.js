function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        try {
            // Only close if clicking the overlay itself, not its children
            if (e.target === e.currentTarget) {
                onClose();
            }
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div 
            data-name="modal-overlay" 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={handleOverlayClick}
        >
            <div data-name="modal-content" className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
                <button 
                    data-name="close-button"
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                {children}
            </div>
        </div>
    );
}

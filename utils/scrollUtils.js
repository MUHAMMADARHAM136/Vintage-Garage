function scrollToSection(sectionId) {
    try {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    } catch (error) {
        reportError(error);
    }
}

function handleNavigation(e, sectionId) {
    try {
        e.preventDefault();
        scrollToSection(sectionId);
        
        // Update URL without page reload
        const newUrl = `${window.location.pathname}#${sectionId}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    } catch (error) {
        reportError(error);
    }
}

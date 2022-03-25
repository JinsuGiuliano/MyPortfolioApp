const contactForm = (callback) => {
    const script = document.createElement('script');
    script.src = '../contactform/contactform.js';
    script.type = "text/babel";
    document.body.appendChild(script);
};
export default contactForm; 
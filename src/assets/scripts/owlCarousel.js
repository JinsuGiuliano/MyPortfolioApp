
const owlCarousel = (callback) => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
    script.integrity = 'sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==';
    script.crossOrigin = 'anonymous'
    script.referrerpolicy = 'no-referrer'
    document.body.appendChild(script);
};
export default owlCarousel;
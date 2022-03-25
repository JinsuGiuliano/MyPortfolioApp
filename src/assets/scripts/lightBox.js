
const lightBox = (callback) => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js';
    script.integrity = 'sha512-k2GFCTbp9rQU412BStrcD/rlwv1PYec9SNrkbQlo6RZCf75l6KcC3UwDY8H5n5hl4v77IDtIPwOk9Dqjs/mMBQ==';
    script.crossOrigin = 'anonymous'
    script.referrerpolicy = 'no-referrer'
    document.body.appendChild(script);
};
export default lightBox;    

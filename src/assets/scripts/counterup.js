const counterUp = (callback) => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/counterup2/2.0.2/index.min.js';
    script.integrity = 'sha512-iELsXYafbp3drYeT4GnTWc0bRzoyA9zeMPohtYOL/xmCEjqc7xbPpV0UXRfhjGgy3co9XR2YkZq/CQvEa+Os8g==';
    script.crossOrigin = 'anonymous'
    script.referrerpolicy = 'no-referrer'
    document.body.appendChild(script);
};
export default counterUp; 
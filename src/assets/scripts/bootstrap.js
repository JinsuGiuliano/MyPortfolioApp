
const bootStrap = (callback) => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/js/bootstrap.min.js';
    script.integrity = 'sha512-UR25UO94eTnCVwjbXozyeVd6ZqpaAE9naiEUBK/A+QDbfSTQFhPGj5lOR6d8tsgbBk84Ggb5A3EkjsOgPRPcKA==';
    script.crossOrigin = 'anonymous'
    script.referrerpolicy = 'no-referrer'
    document.body.appendChild(script);
};
export default bootStrap;    

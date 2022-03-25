
const jquery = (callback) => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
    script.integrity = 'sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==';
    script.crossOrigin = 'anonymous'
    script.referrerpolicy = 'no-referrer'
    document.body.appendChild(script);
};
export default jquery;    

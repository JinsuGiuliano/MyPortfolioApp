
const typed = (callback) => {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js';
      script.integrity = 'sha512-3J8teBiHrSyaaRBajZyIEtpDsXdPq1gsznKWIVb5CnorQuFhjWGhWe54z8YNnHHr7MZuExb9m5kvf964HiT1Sw==';
      script.crossOrigin = 'anonymous'
      script.referrerpolicy = 'no-referrer'
      document.body.appendChild(script);
  };
  export default typed;    

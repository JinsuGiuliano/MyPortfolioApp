
const jqueryMigrate = (callback) => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.4.0/jquery-migrate.min.js';
    script.integrity = 'sha512-QDsjSX1mStBIAnNXx31dyvw4wVdHjonOwrkaIhpiIlzqGUCdsI62MwQtHpJF+Npy2SmSlGSROoNWQCOFpqbsOg==';
    script.crossOrigin = 'anonymous'
    script.referrerpolicy = 'no-referrer'
    document.body.appendChild(script);
};
export default jqueryMigrate;    

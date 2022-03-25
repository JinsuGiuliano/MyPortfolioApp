
const wayPoints = (callback) => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js';
    document.body.appendChild(script);
};
export default wayPoints;    

module.exports = getDate;

function getDate(){
    let today = new Date();

    let options = { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric' 
    };
    // console.log(today.toLocaleDateString("en-US")); // 9/17/2016
    let dateFormat = (today.toLocaleDateString("en-US", options)); 

    return dateFormat;
}
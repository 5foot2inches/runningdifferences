 const signGenerator = () => {
 const randomNumAstro = Math.floor(Math.random()* 12);
 const astrology = ["Gemini", "Taurus", "Libra", "Sagittarius", "Cancer", "Aries", "Aquarius", "Capricorn", "Pisces", "Virgo", "Leo", "Scorpio"];
 // don't forget to put string elements between quotes
 
return astrology[randomNumAstro];
 // this way we can use the randomNumAstro for i and it will correlate with the array
 //no need to use console.log

};

//signGenerator(); this was used to call function and check it works

const eventCalculator = () => {
    const randomNumEvent = Math.floor(Math.random()* 10);
    const event = ["getting married", "experience love at first sight", "get their dream job", "needing to be cautious", "going to their anual physical exam", "exploring the world", "fighting against lactose intolerance", "win the lottery", "feeling happy", "needing an ABBA disco night"];

    return event[randomNumEvent];
    // made a small mistake putting the random between () instead []
    // at irst I used console.log as I wanted to establish that it returned the value but it messed with my output

};

//eventCalculator();

const randomMessage = () => {
    // results from prior results
    const sign = signGenerator();
    const event = eventCalculator();

    console.log(`${sign} will be ${event}.`);
};

randomMessage();


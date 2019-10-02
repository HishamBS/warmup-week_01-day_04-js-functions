function isLeapYear(yr)
{
    let checkNum = typeof yr;
    if ( checkNum === 'number')
    {
    if (yr > 0)
    {
        ( ((yr % 4 === 0 ) && (yr % 100 !== 0) ) || (yr % 400 === 0 )) ? console.log("True") : console.log("False");
    }
    else
    {
        console.log("please put a date larger than 0");
    }
}
else
{
    console.log("please put a number");
}


}

isLeapYear(1997);
isLeapYear(1996);
isLeapYear(1900);
isLeapYear(2000);
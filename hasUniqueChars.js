// Write your code below
function hasUniqueChar (stringCheck)
{
    stringCheck = stringCheck.toString();
    
    for (let i = 0; i < stringCheck.length; i++)
    {
        for ( let j = 0; j < stringCheck.length; j++)
        {
            if (i === j)
            {

            }
            else if (stringCheck.charAt(i) === stringCheck.charAt(j))
            {
                return false;
            }
        }
    }

    return true;
}

console.log(hasUniqueChar("Monday"));
console.log(hasUniqueChar("Moonday"));
console.log(hasUniqueChar("Bob"));
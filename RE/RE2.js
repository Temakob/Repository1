function isValid(str,n)
{
    if (!((str[0] >= 'a' && str[0] <= 'z')
        || (str[0]>= 'A' && str[0] <= 'Z')
        || str[0] == '_'))
        return false;
  
    for (let i = 1; i < str.length; i++)
    {
        if (!((str[i] >= 'a' && str[i] <= 'z')
            || (str[i] >= 'A' && str[i] <= 'Z')
            || (str[i] >= '0' && str[i] <= '9')
            || str[i] == '_'))
            return false;
    }
    return true;
}

    let str = "_geeks123";
    let n = str.length;
  
    if (isValid(str, n))
        document.write("Valid");
    else
        document.write("Invalid");

        
        console.log( isValid(str,n) );
function unique(l, n)
{
    for(var i=0; i<n; i++)
    {
        for(var j=i-1; j>=0; j--)
            if(l[i] == l[j])
                return false;
    }
    return true;
}

function listUnique(jr, len)
{
    var result;
    do
    {
        result = [];
        for (var i=0; i<len; i++)
        {
            result.push(jr.randInt(1,20));
        }
    }
    while(!unique(result, len));
    result.sort(function(a, b){return a-b}); 
    return result;   
}

function generate(output)
{
    var jnum = document.getElementById("Jnum").value;
    var para = document.getElementById(output);
	if(!JRandomiser.validate(jnum))
	{
		para.innerHTML = "That is not a valid J number, try again";
		return 1;
	}

    var jr = new JRandomiser(jnum);
    var str = "{"
    for (var i=0; i<8; i++)
    {
        str  = str + "{";
        var three = listUnique(jr, jr.randInt(2,5)); 
        str = str + three + "}";
        if(i < 7)
                str = str + ", ";
    }
    str = str + "}";

    para.innerHTML = str;
    return 0;            
}

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
    var total;
    do
    {
    	total = 0;
        result = [];
        for (var i=0; i<len; i++)
        {
            result.push(jr.randInt(1,100));
            total += result[i];
        }
    }
    while(!unique(result, len) || total % 4 != 0);

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
	var str = ""   
    str  = str + "U = {";
    var three = listUnique(jr, 20); 
    str = str + three + "}";
    str = str + ", k = 4";
    para.innerHTML = str;
    return 0;            
}

function generate(){
	Jnum = document.getElementById('Jnum').value
	para = document.getElementById('result')
	while (para.firstChild) {
        para.removeChild(para.firstChild);
    }
	if(!JRandomiser.validate(Jnum)){
		node = document.createTextNode("Invalid J number entered")
		para.append(node)
		return 1;
	}

	r = new JRandomiser(Jnum)
	trickies = [7,8,15,16,31,32,63,64]
	sizes = [r.randInt(25,122),r.randInt(11,58), r.randInt(5,42)]
	tricky = 0
	for(i in sizes){
		if(trickies.includes(sizes[i])){
			tricky++
		}
	}
	if(tricky == 0)
	{
		sizes[2] = trickies[r.randInt(0,4)]
	}
	if(tricky == 2)
	{
		if(trickies.includes(sizes[0]))
			sizes[0] += 2
		else
			sizes[1] += 2
	}
	console.log(tricky)

	sizes.sort(function(a,b){return b-a})

	nodes = [document.createTextNode("Base address: \u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003 192.168.0.0"),
			document.createTextNode("Devices in staff network \u2003\u2003\u2003\u2003\u2003\u2003" + (sizes[0] < 100 ? "\u2003":"") + sizes[0].toString()),
			document.createTextNode("Devices in management network \u2003\u2003" + sizes[1].toString()),
			document.createTextNode("Devices in guest network \u2003\u2003\u2003\u2003\u2003\u2003\u2003" + (sizes[2] < 10 ? "\u2003":"") + sizes[2].toString())]

	for(i in nodes){
		para.append(nodes[i])
		para.append(document.createElement('br'))
		if(i==0)
			para.append(document.createElement('br'))
	}

	para.append(document.createElement('br'))
	para.append("All device counts include the default gateway")
}	
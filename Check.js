function RandomIP(){
	var ip = ""
	for (let i = 0; i < 4; i++) {
		ip += String(Math.floor(Math.random()*256)) + "."
	}
	return ip.slice(0,-1)
}

function RandomSubnet(){
	var sub = ""
	zeros = Math.floor(Math.random() * 31)
	num = (Math.pow(2,32)-1) - (Math.pow(2,zeros)-1)
	for (let i = 3; i >= 0; i--) {
		mask = 255 
		octet = (num >> (i*8)) & mask
		sub += String(octet) + "."
	}
	return sub.slice(0,-1)
}

function findnet(ip, snm){
	return ip & snm
}

function findhost(ip, snm){
	return ip & (~ snm)
}

function numerifier(txt){
	ns=[]
	xs = txt.split(".")
	num = 0
	for(i=0; i<xs.length; i++)
		ns[i] = Number(xs[i])
	for(i=0; i<ns.length; i++)
		num += ns[i] << (3-i)*8
	return num
}

function checker(){
	const ip = document.getElementById("ip").innerHTML.split(":")[1]
	const sub = document.getElementById("sub").innerHTML.split(":")[1]
	add = [0,0,0,0]
	snm = [0,0,0,0]
	ipn = numerifier(ip)
	subn = numerifier(sub)
	console.log("Problem:" + document.getElementById("NetInput").value)
	usernet = numerifier(document.getElementById("NetInput").value)
	userhost = numerifier(document.getElementById("HostInput").value)
	if(usernet == findnet(ipn,subn))
		document.getElementById("tc1").src = "11tick.jpg"
	else{
		document.getElementById("tc1").src = "11cross.jpg"
	}
	if(userhost == findhost(ipn,subn))
		document.getElementById("tc2").src = "11tick.jpg"
	else
		document.getElementById("tc2").src = "11cross.jpg"
}

function generate(){
	const para1 = document.getElementById("ip")
	while (para1.hasChildNodes()){
		para1.removeChild(para1.lastChild)
	}
	const para2 = document.getElementById("sub")
	while (para2.hasChildNodes()){
		para2.removeChild(para2.lastChild)
	}
	const node1 = document.createTextNode("IP address: " + RandomIP());
	const node2 = document.createTextNode("Subnet Mask: " + RandomSubnet());
	const node3 = document.createTextNode("Network Address: " );
	const node4 = document.createTextNode("Host Address:\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 " );
	para1.appendChild(node1);
	para2.appendChild(node2);
	
	para3 = document.getElementById('ansNet')
	while (para3.hasChildNodes()){
		para3.removeChild(para3.lastChild)
	}
	para4 = document.getElementById('ansHost')
	while (para4.hasChildNodes()){
		para4.removeChild(para4.lastChild)
	}
	network = document.createElement("input")
	host = document.createElement("input")
	network.id = "NetInput"
	host.id = "HostInput"
	tcsize = 20
	
	tickcross1 = document.createElement("img")
	tickcross1.width = tcsize
	tickcross1.height = tcsize
	tickcross1.id = "tc1"
	tickcross1.src = "blank.png"
	tickcross2 = document.createElement("img")
	tickcross2.width = tcsize
	tickcross2.height = tcsize
	tickcross2.id = "tc2"
	tickcross2.src = "blank.png"
	
	para3.appendChild(node3)
	para3.appendChild(network)
	para3.appendChild(tickcross1)
	para4.appendChild(node4)
	para4.appendChild(host)
	para4.appendChild(tickcross2)
	
	para5 = document.getElementById('btn')
	while (para5.hasChildNodes()){
		para5.removeChild(para5.lastChild)
	}
	check = document.createElement("button")
	check.innerHTML = "\nCheck Answer"
	check.addEventListener('click', checker);
	para5.appendChild(check)
}

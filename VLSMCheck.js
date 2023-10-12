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
	for(i=0; i<xs.length; i++){
		ns[i] = Number(xs[i])
		if(ns[i] > 255 || ns[i] < 0)
			return NaN
		}
	for(i=0; i<ns.length; i++)
		num += ns[i] << (3-i)*8
	return num
}

function checker(){
	const sizes = [Number(document.getElementById("sub1").innerHTML.split("devices")[0]),Number(document.getElementById("sub2").innerHTML.split("devices")[0]),Number(document.getElementById("sub3").innerHTML.split("devices")[0])]
	const ips = [numerifier(document.getElementById("ip1").value), numerifier(document.getElementById("ip2").value), numerifier(document.getElementById("ip3").value)]
	const snms = [numerifier(document.getElementById("snm1").value), numerifier(document.getElementById("snm2").value), numerifier(document.getElementById("snm3").value)]
	
	accumulator = 0
	for(let i = 0; i<snms.length; i++)
	{
		snmbits = Math.ceil(Math.log2(sizes[i]+2))
		subtractor = Math.pow(2,snmbits)
		
		if((numerifier("255.255.255.255") - subtractor + 1) != snms[i] || (numerifier("192.168.0.0") + accumulator) != ips[i])
			document.getElementById("tc" + String(i+1)).src = "11cross.jpg"
		else
			document.getElementById("tc" + String(i+1)).src = "11tick.jpg" //id = "tc + String(i)"
		accumulator += subtractor
	}
}

function generate(){
	const para1 = document.getElementById("sub1")
	while (para1.hasChildNodes()){
		para1.removeChild(para1.lastChild)
	}
	const para2 = document.getElementById("sub2")
	while (para2.hasChildNodes()){
		para2.removeChild(para2.lastChild)
	}
	const para3 = document.getElementById("sub3")
	while (para3.hasChildNodes()){
		para3.removeChild(para3.lastChild)
	}
	nums = [Math.floor(Math.random()*117)+3,Math.floor(Math.random()*97)+3,Math.floor(Math.random()*57)+2]
	nums.sort(function(a, b){return b - a}); 
	const node1 = document.createTextNode(String(nums[0]) + " devices in subnet 1");
	const node2 = document.createTextNode(String(nums[1]) + " devices in subnet 2");
	const node3 = document.createTextNode(String(nums[2]) + " devices in subnet 3");
	const node4 = document.createTextNode("Subnet 1 IP:\u00A0 " );
	const node5 = document.createTextNode("Subnet 2 IP:\u00A0 " );
	const node6 = document.createTextNode("Subnet 3 IP:\u00A0 " );
	const node7 = document.createTextNode("\u00A0Mask:\u00A0 " );
	const node8 = document.createTextNode("\u00A0Mask:\u00A0 " );
	const node9 = document.createTextNode("\u00A0Mask:\u00A0 " );
	para1.appendChild(node1);
	para2.appendChild(node2);
	para3.appendChild(node3);
	
	para4 = document.getElementById('ans1')
	while (para4.hasChildNodes()){
		para4.removeChild(para4.lastChild)
	}
	para5 = document.getElementById('ans2')
	while (para5.hasChildNodes()){
		para5.removeChild(para5.lastChild)
	}
	para6 = document.getElementById('ans3')
	while (para6.hasChildNodes()){
		para6.removeChild(para6.lastChild)
	}
	inpsize = 12
	ip1 = document.createElement("input")
	ip2 = document.createElement("input")
	ip3 = document.createElement("input")
	snm1 = document.createElement("input")
	snm2 = document.createElement("input")
	snm3 = document.createElement("input")
	ip1.id = "ip1"
	ip2.id = "ip2"
	ip3.id = "ip3"
	snm1.id = "snm1"
	snm2.id = "snm2"
	snm3.id = "snm3"
	ip1.size = inpsize
	ip2.size = inpsize
	ip3.size = inpsize
	snm1.size = inpsize
	snm2.size = inpsize
	snm3.size = inpsize
	
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
	tickcross3 = document.createElement("img")
	tickcross3.width = tcsize
	tickcross3.height = tcsize
	tickcross3.id = "tc3"
	tickcross3.src = "blank.png"

	para4.appendChild(node4)
	para4.appendChild(ip1)
	para4.appendChild(node7)
	para4.appendChild(snm1)
	para4.appendChild(tickcross1)
	para5.appendChild(node5)
	para5.appendChild(ip2)
	para5.appendChild(node8)
	para5.appendChild(snm2)
	para5.appendChild(tickcross2)
	para6.appendChild(node6)
	para6.appendChild(ip3)
	para6.appendChild(node9)
	para6.appendChild(snm3)
	para6.appendChild(tickcross3)
	
	para7 = document.getElementById('btn')
	while (para7.hasChildNodes()){
		para7.removeChild(para7.lastChild)
	}
	check = document.createElement("button")
	check.innerHTML = "\nCheck Answer"
	check.addEventListener('click', checker);
	para7.appendChild(check)
}

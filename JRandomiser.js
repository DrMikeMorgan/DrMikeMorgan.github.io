class JRandomiser{

  constructor(Jnum)
  {
    let pepper = "92648"
  	this.s = BigInt(parseInt(Jnum.substring(1,Jnum.length) + pepper, 10));
  	this.m = BigInt(Math.pow(2,32));
  	this.a = BigInt(1664525);
  	this.c = BigInt(1013904223);
    this.shifter = BigInt(Math.pow(2,16));
  }

  highBits()
  {
    return BigInt(this.s / this.shifter);
  }

  randInt(min, max)
  {
  	this.s = (this.a*this.s+this.c)%this.m;
  	return Number(this.highBits()%(BigInt(max)-BigInt(min)) + BigInt(min));
  }

  randFloat(min,max)
  {
  	this.s = ((this.a*this.s)+this.c)%this.m;
  	return Number(this.s)/Number(this.m) * (max-min) + min;
  }

  static validate(str)
  {
  	if(str.length < 6)
  		return false;
  	if(str.length > 7)
  		return false;
  	if(str[0] != 'j' && str[0] != 'J')
  		return false;
  	for(var i=1; i<6; ++i)
  		if(str[i] < '0' || str[i] > '9')
  		return false;
  	return true;
  }
}

var zNodes = [{id:0,pId:-1,name:"Aaaa"}];
for (var i = 0; i < 5000; i++) {
	var obj = {};
    obj.id = i+1;
    obj.name = '车'+i;
    obj.pId = 0;
    //console.log(obj)
    zNodes.push(obj)
}

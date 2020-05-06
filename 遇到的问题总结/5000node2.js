var zNodes = [{"id": "1", "name": "车", "pid": "0"}];
for (var i = 0; i < 50; i++) {
	var obj = {};
    obj.id = i+2;
    obj.name = '车'+i;
    obj.pid = 1;
    //console.log(obj)
    zNodes.push(obj)
}

由于之前的js只是匀速的单属性运动，当我们想要同时多个属性一起运动时，可以用json来包装属性，并用forin循环该对象里的每一个atrr属性值。
并且加入了fn回调函数，可以在运动完之后执行一些功能。


<script>
	function getStyle(obj,name){
				if(obj.currentStyle){
					return obj.currentStyle[name]
				}else{
					return getComputedStyle(obj,false)[name]
				}
			}
    function startMove(obj,attr,iTarget){/*参数一哪个东西动起来，东西的哪个属性动，动到哪里*/
				/*每次运动时先停止上次运动*/ 
				clearInterval(obj.timer);
				/*再把定时器打开*/
				//给每一个div开一个定时器就可以了，加一个自定义定时器属性
				obj.timer = setInterval(function(){
					var cur = 0
					if(attr == 'opacity'){//考虑到了透明度，如果是透明度一般都是0.几所以要变成小数
						cur = Math.round(parseFloat(getStyle(obj,attr))*100)
					}else{
						cur = parseInt(getStyle(obj,attr))
					}
					
					var speed = (iTarget - cur)/6
					speed = speed>0?Math.ceil(speed):Math.floor(speed)
					if(cur == iTarget){
						clearInterval(obj.timer)
					}
					else{
						if(attr == 'opacity'){
							obj.style.filter = 'alpha(opacity:'+(cur+speed)+')'
							obj.style.opacity = (cur+speed)/100
						}
						obj.style[attr] = cur + speed +'px'
						//obj.offsetWidth可读不可写，所以要用 style.width
						//[attr]可以把参数传进来，如果用obj.style.attr 则代表设置一个就叫attr的属性 = 。。。。。、
						//而[attr]则把参数或变量的值传了进来，实际就是[attr]=>['width'/'height']，取决去attr = '?'
					}
				},30)
			}
</script>
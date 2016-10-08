var data=['iphone5','iphone5s','iphone6','iphone6s','ipad mini3','ipad mini4'],
    timer=null,
    flag=0;
window.onload=function(){
    var play=document.getElementById('play'),
        stop=document.getElementById('stop');

    //开始抽奖
    play.onclick=playFun;
    stop.onclick=stopFun;

    //键盘事件
    document.onkeyup=function(event){
    	event=event||window.event;
    	//测试键盘相对应的键码 consle.log(event.keyCode);
    	if(event.keyCode==13){
    		if(flag==0){
               playFun();
               flag=1;
    		}else{
               stopFun();
               flag=0;
    		}
    	}
    }
}
function playFun(){
	var title=document.getElementById('title');
	var play=document.getElementById('play');
	clearInterval(timer);
	timer=setInterval(function(){
		var random=Math.floor(Math.random()*data.length);
		title.innerHTML=data[random];
	},50);
    play.style.background='#999';
};
function stopFun(){
	clearInterval(timer);
	var play=document.getElementById('play');
	play.style.background="#036";
};
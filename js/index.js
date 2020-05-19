(function () {
	var oArrow = document.getElementsByClassName('arrow')[0];
	var oInnerArrow = oArrow.getElementsByClassName('innerarrow')[0];
	var oMenu = document.getElementsByClassName('menu')[0];
	var oInnerMenu = document.getElementsByClassName('innermenu')[0];
	var oUl = oInnerMenu.getElementsByTagName('ul')[0];
	var listNum = oUl.getElementsByTagName('li').length;
	var key = false;
	console.log(oUl, listNum);
	oArrow.onclick = function () {
		if(!key){
			oInnerArrow.style.transform = 'rotate(180deg)';
			oMenu.style.right = '0';
			oUl.style.height	= `${listNum * 40}px`;
			key = true;
		}else{
			oInnerArrow.style.transform = 'rotate(0deg)';
			oMenu.style.right = '-100px';
			oUl.style.height = '40px';
			key = false;
		}
	}
})();

(function () {
	var choicePages = document.getElementsByClassName('option');
	for(var prop in choicePages){
		choicePages[prop].onmouseover = function () {
			this.style.top = '-20px';
			var ps = this.getElementsByTagName('p');
			for(var p in ps) {
				ps[p].style.opacity = '1';
			}
		}
		choicePages[prop].onmouseout = function () {
			this.style.top = '0px';
			var ps = this.getElementsByTagName('p');
			for(var p in ps) {
				ps[p].style.opacity = '0';
			}
		}
	}	
})();

(function () {
	var log = document.getElementsByClassName('log')[0];
	var logbar = document.getElementsByClassName('logbar')[0];
	log.onmouseover = function () {
		logbar.style.display = 'block';
		log.style.borderRadius = '0';
	}
	log.onmouseout = function () {
		logbar.style.display = 'none';
		log.style.borderBottomLeftRadius =  '20px';
		log.style.borderTopLeftRadius = '20px';
	}
	logbar.onmouseover = function () {
		logbar.style.display = 'block';
		log.style.borderRadius = '0';
	}
	logbar.onmouseout = function () {
		logbar.style.display = 'none';
		log.style.borderBottomLeftRadius =  '20px';
		log.style.borderTopLeftRadius = '20px';
	}
}())
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
})()
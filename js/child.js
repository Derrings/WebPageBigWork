var roll = document.getElementsByClassName('top-roller')[0];
HTMLDivElement.prototype.createBanner = function (imgUrl) {
    var len = imgUrl.length;
    // 创建横幅图ul
    var bannerUl = document.createElement('ul');
    bannerUl.style.width = this.clientWidth * (len+1) + 'px';
    bannerUl.style.height = this.clientHeight + 'px';
    bannerUl.style.position = 'absolute';
    bannerUl.style.overflow = 'hidden';
    bannerUl.style.listStyle = 'none';
    bannerUl.style.transitionProperty = 'left';
    bannerUl.style.transitionDuration = '.3s';
    bannerUl.style.left = '0';
    bannerUl.style.margin = '0';
    bannerUl.style.padding = '0';
    for (var i = 0; i <= len; i++) {
        var img = document.createElement('img');
        i === len? img.src = imgUrl[0]:img.src = imgUrl[i];
        img.style.width = this.clientWidth + 'px';
        img.style.height = this.clientHeight + 'px';
        img.style.display = 'block'
        var li = document.createElement('li');
        li.style.cssFloat = 'left';
        li.appendChild(img);
        bannerUl.appendChild(li);
    }
    this.appendChild(bannerUl);
    // 创建索引点ul
    var indexUl = document.createElement('ul');
    indexUl.style.position = 'absolute';
    indexUl.style.bottom = '10px';
    indexUl.style.width = 15 * (len) + 20 + 'px';
    indexUl.style.height = '20px';
    indexUl.style.background = 'rgba(0, 0, 0, .3)';
    indexUl.style.lineHeight = '20px';
    indexUl.style.borderRadius = '15px';
    indexUl.style.textAlign = 'center';
    indexUl.style.left = '0';
    indexUl.style.right = '0';
    indexUl.style.margin = 'auto';
    indexUl.style.listStyle = "none";
    indexUl.style.padding = '0';
    var indexList = [];
    for (var i = 0; i < len; i++) {
        var indexLi = document.createElement('li');
        if (i === 0) {
            indexLi.setAttribute('class', 'normal');
            indexLi.classList.add('active');
        } else {
            indexLi.setAttribute('class', 'normal');
        }
        indexUl.appendChild(indexLi);
        indexList.push(indexLi);
    }
    this.appendChild(indexUl);
    
    //创建按钮
    function buttonStyle(dom) {
        dom.style.height = '20px';
        dom.style.width = '20px';
        dom.style.borderRadius = '10px';
        dom.style.opacity = '.3';
        dom.style.position = 'absolute';
        dom.style.top = '0';
        dom.style.bottom = '0';
        dom.style.margin = 'auto';
        dom.style.cursor = 'pointer';
        dom.style.fontSize = '20px';
        dom.style.textAlign = 'center';
        dom.background = '#000';
        dom.color = '#fff';
        dom.lineHeight = '20px';
    }
    var prev = document.createElement('div');
    buttonStyle(prev);
    prev.innerText = '<';
    prev.style.left = '0';
    this.appendChild(prev);
    var next = document.createElement('div');
    buttonStyle(next);
    next.innerText = '>';
    next.style.right = '0';
    this.appendChild(next);

    //给轮播图加上划入出现按钮事件
    bannerUl.addEventListener('mouseenter', function () {
        console.log('a')
        prev.style.opacity = '.7';
        next.style.opacity = '.7';
    }, false)
    bannerUl.addEventListener('mouseleave', function () {
        prev.style.opacity = '.3';
        next.style.opacity = '.3';
    }, false)

//     //轮播图自己动
    var timer = null;
    var width = this.clientWidth;
    var curIndex = 0;
    function startMove() {
        timer = setTimeout(autoMove, 1500);
    }
    function autoMove() {
        curIndex++;
        bannerUl.style.left = -curIndex * width + 'px';
        ballMove();
    }
    function handleTransition() {
        bannerUl.addEventListener('transitionend', function () {
            clearTimeout(timer);
            if (curIndex === len) {
                bannerUl.style.transition = 'none';
                curIndex = 0;
                bannerUl.style.left = '0';
            }
            if (bannerUl.offsetLeft === 0) {
                bannerUl.style.transitionProperty = 'left';
                bannerUl.style.transitionDuration = '.3s';
            }
            startMove();
        }, false)
    }
    function ballMove() {
        var ballCurIndex = curIndex % (len);
        var active = document.getElementsByClassName('active')[0];
        indexList[ballCurIndex].classList.add('active');
        active.classList.remove('active');
    }
    startMove();
    handleTransition();

    //按钮点击翻转
    function clickbutton() {
        prev.addEventListener('click', function () {
            clearTimeout(timer);
            if (curIndex === 0) {
                curIndex = len;
                bannerUl.style.transition = 'none';
                bannerUl.style.left = -curIndex * width + 'px';
                if (bannerUl.offsetLeft === -curIndex * width) {
                    curIndex--;
                    bannerUl.style.transitionProperty = 'left';
                    bannerUl.style.transitionDuration = '.3s'
                    bannerUl.style.left = -curIndex * width + 'px';
                }
                ballMove();
            } else {
                curIndex--;
                bannerUl.style.left = -curIndex * width + 'px';
                ballMove();
            }
            startMove();
        }, false)
        next.addEventListener('click', function () {
            clearTimeout(timer);
            curIndex++;
            bannerUl.style.left = -curIndex * width + 'px';
            ballMove();
            startMove();
        }, false)
    }
    clickbutton();

//     //索引点点击翻转
    function clickIndex() {
        var len = indexList.length;
        for (var i = 0; i < len; i++) {
            (function (i) {
                indexList[i].addEventListener('click', function () {
                    clearTimeout(timer);
                    curIndex = i;
                    bannerUl.style.left = -curIndex * width + 'px';
                    ballMove();
                    startMove();
                }, false)
            }(i))
        }
    }
    clickIndex();
}

roll.createBanner(["./img/c_1.jpg",
                    "./img/c_2.jpg",
                    "./img/c_3.jpg",
                    "./img/c_4.jpg"]);
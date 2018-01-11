function show() {
    if (document.getElementById("radio1").checked) {
        document.getElementById("p1New").style.height = "213px";
    }
    else if (document.getElementById("radio2").checked) {
        document.getElementById("p1New").style.height = "45px";
    }
}
function hoverIcon1() {
    var targets = document.getElementsByClassName("imgLg");
    for (var i = 0; i < targets.length; i++) {
        targets[i].style.display = "none";
    }
    targets[0].style.display = "block";
}
function hoverIcon2() {
    var targets = document.getElementsByClassName("imgLg");
    for (var i = 0; i < targets.length; i++) {
        targets[i].style.display = "none";
    }
    targets[1].style.display = "block";
}
function hoverIcon3() {
    var targets = document.getElementsByClassName("imgLg");
    for (var i = 0; i < targets.length; i++) {
        targets[i].style.display = "none";
    }
    targets[2].style.display = "block";
}
function float1() {
    var shade = document.getElementsByClassName("shade"),
        float1 = document.getElementById("fL1");
    float = document.getElementsByClassName("floatLayer");
    for (var i = 0; i < float.length; i++) {
        float[i].style.display = "none";
    }
    shade[0].style.display = "block";
    float1.style.display = "block";
}
function floatBack() {
    var shade = document.getElementsByClassName("shade"),
        float1 = document.getElementsByClassName("floatLayer");
    shade[0].style.display = "none";
    for (var i = 0; i < float1.length; i++) {
        float1[i].style.display = "none";
    }
}
function float2() {
    var shade = document.getElementsByClassName("shade"),
        float1 = document.getElementById("fL2");
    float = document.getElementsByClassName("floatLayer");
    for (var i = 0; i < float.length; i++) {
        float[i].style.display = "none";
    }
    shade[0].style.display = "block";
    float1.style.display = "block";
}
function float3() {
    var shade = document.getElementsByClassName("shade"),
        float1 = document.getElementById("fL3");
    float = document.getElementsByClassName("floatLayer");
    for (var i = 0; i < float.length; i++) {
        float[i].style.display = "none";
    }
    shade[0].style.display = "block";
    float1.style.display = "block";
}
function float4() {
    var shade = document.getElementsByClassName("shade"),
        float1 = document.getElementById("fL4");
    float = document.getElementsByClassName("floatLayer");
    for (var i = 0; i < float.length; i++) {
        float[i].style.display = "none";
    }
    shade[0].style.display = "block";
    float1.style.display = "block";
}
function pageScroll() {
    //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
    window.scrollBy(0, -100);
    //延时递归调用，模拟滚动向上效果
    scrolldelay = setTimeout('pageScroll()', 100);
    //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
    var sTop = document.documentElement.scrollTop + document.body.scrollTop;
    //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
    if (sTop == 0) clearTimeout(scrolldelay);
}
function leftRoll() {
    var targets = document.getElementsByClassName("p2Items");
    if (parseInt(targets[0].style.left) < -400){
        return;
    }
    for (var i = 0; i < targets.length; i++) {
        if (targets[i].style.left == ""){
            targets[i].style.left = "0";
        }
            targets[i].style.left = (parseInt(targets[i].style.left) - 219).toString() + "px";
    }
}
function rightRoll() {
    var targets = document.getElementsByClassName("p2Items");
    if (parseInt(targets[0].style.left) >= 0){
        return;
    }
    for (var i = 0; i < targets.length; i++) {
        if (targets[i].style.left == ""){
            targets[i].style.left = "0";
        }
            targets[i].style.left = (parseInt(targets[i].style.left) + 219).toString() + "px";
    }
}
function showList1(){
    
}
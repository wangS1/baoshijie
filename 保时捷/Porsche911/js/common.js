//js兼容问题的解决函数


/**
 * 替换类名
  * @param element
 * @param oldStr
 * @param newStr
 */
function replaceClassName(element, oldStr, newStr) {
    var nameArr = element.className.split(" ");//类名分割成数组
    for (var i = 0; i < nameArr.length; i++) {
        if(nameArr[i] === oldStr) {
            nameArr[i] = newStr;  //如果有旧的属性名，则替换成新的
        }
    }
    element.className = nameArr.join(" ");//最后转换成用空格隔开的字符串
}


/**
 * 获取类名的兼容函数
 * @param element
 * @param classname
 * @returns {any}
 */
function getClassName(element, classname) {
    if (element.getElementsByClassName) {
        return element.getElementsByClassName(classname);
    }
    var filterArr = [];
    var all = element.getElementsByTagName("*");
    for (var i = 0; i < all.length; i++) {
        var arr = all[i].className.split("");
        for (var i = 0; i < arr.length; i++) {
            if(classname === arr[i]){
                filterArr.push(all[i]);
                break;
            }
        }
    }
    return filterArr;
}


/**
 * 获取内部文本的兼容函数
 * @param element
 * @returns {string}
 */
function getInnerText(element) {
    if (typeof element.innerText === "string") {
        return element.innerText;
    }
    else {
        return element.textContent;
    }
}


/**
 * 设置内部文本的兼容函数
 * @param element
 * @param content
 */
function setInnerText(element, content) {
    if (typeof element.innerText === "string") {
        element.innerText = content;
    }
    else {
        element.textContent = content;
    }
}



/**
 * 封装nextsibling兼容函数  下一个兄弟元素节点
 * @param element
 * @returns {*}
 */
function getNextSibling(element) {
    if (element.nextElementSibling) {//能力检测
        //如果支持就返回支持的方法
        return element.nextElementSibling;
    }
    else {
        //不支持就先获取元素节点
        var next = element.nextSibling;
        while (next && next.nodeType !== 1) {
            //循环条件为  next 有下一个节点（无下一个节点返回null所以为false）且 节点不是元素节点；
            next = next.nextSibling;
        }
        return next;
    }
}


/**
 * 封装previousSibling兼容函数  上一个兄弟元素节点
 * @param element
 * @returns {*}
 */
function getPreviousSibling(element) {
    if (element.previousElementSibling) {//能力检测
        //如果支持就返回支持的方法
        return element.previousElementSibling;
    }
    else {
        //不支持就先获取元素节点
        var previous = element.previousSibling;
        while (previous && previous.nodeType !== 1) {
            //循环条件为  previous 有上一个节点（无上一个节点返回null所以为false）且 节点不是元素节点；
            previous = previous.previousSibling;
        }
        return previous;
    }
}

/**
 * 封装firstElementChild兼容函数  第一个子元素节点
 * @param element
 * @returns {*}
 */
function getFirstElementChild(element) {
    if (element.firstElementChild) {//能力检测
        //如果支持就返回支持的方法
        return element.firstElementChild;
    }
    else {
        //不支持就先获取元素节点
        var firstNode = element.firstChild;
        while (firstNode && 1 !== firstNode.nodeType) {
            //循环条件为 有节点（无节点返回null所以为false）且 节点不是元素节点；
            firstNode = firstNode.nextSibling;
        }
        return firstNode;
    }
}

/**
 * 封装lastElementChild兼容函数  最后一个子元素节点
 * @param element
 * @returns {*}
 */
function getLastElementChild(element) {
    if (element.lastElementChild) {//能力检测
        //如果支持就返回支持的方法
        return element.lastElementChild;
    }
    else {
        //不支持就先获取元素节点
        var lastNode = element.lastChild;
        while (lastNode && 1 !== lastNode.nodeType) {
            //循环条件为 有节点（无节点返回null所以为false）且 节点不是元素节点；
            lastNode = lastNode.previousSibling;
        }
        return lastNode;
    }
}

/**
 * 匀速动画函数
 * @param obj
 * @param target
 */
//function animate (obj, target) {
//    clearInterval(obj.timer);
//    obj.timer = setInterval(function() {
//        var leader = obj.offsetLeft;
//        var step = 20;
//        step = leader - target > 0 ? -step : step;
//        if(Math.abs(leader - target) > Math.abs(step)) {
//            obj.style.left = leader + step + "px";
//        }else {
//            obj.style.right = target + "px";
//            clearInterval(obj.timer);
//        }
//    },15)
//}
/**
 * 缓动动画框架
 * @param obj
 * @param json
 * @param fn
 */
function animate(obj, json,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for(var k in json) {
            if(k === "opacity") {
                var leader = getStyle(obj,k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = target - leader > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            }else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(obj,k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = target - leader > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if(leader !== target) {
                flag = false;
            }
        }
        if(flag) {
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    }, 15)
}
/**
 * 获取当前样式的兼容函数
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj, attr) {
    if(window.getComputedStyle) {
        return window.getComputedStyle(obj,null)[attr];
    }else {
        return obj.currentStyle[attr];
    }
}





/**
 * scroll的兼容函数
 * @returns {{top: number, left: number}}
 */
function scroll() {
    //返回值为对象，可以直接调用 top 或left
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

/**
 * 获取当前对象的任何计算后的样式的兼容函数
 * @param obj
 * @param attr(String)
 * @returns {*}
 */
function getStyle(obj, attr) {
    if(window.getComputedStyle) {
        return window.getComputedStyle(obj,null)[attr];
    }else {
        return obj.currentStyle[attr];
    }
}

/**
 * 获取页面可视区域的兼容函数
 * @returns {{height: number, width: number}}
 */
function client(){
    return {
        height : window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0,
        width : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0
    }
}

/**
 * trim的兼容函数（清除字符串两边的空格）
 * @param str
 * @returns {XML|string|void|*}
 */
function trim(str) {
    return str.replace(/^\s+|\s+$/g,"");
}

/**
 * 添加事件的兼容函数
 * @param element
 * @param eventName
 * @param listener
 */
function addEvent(element,eventName,listener) {
    if(element.addEventListener){
        element.addEventListener(eventName,listener,false);
    }else if(element.attachEvent){
        element.attachEvent("on" + eventName,listener);
    }else {
        element["on"+eventName] = listener;
    }
}
/**
 * 移除事件的兼容函数
 * @param element
 * @param eventName
 * @param listener
 */
function removeEvent(element,eventName,listener) {
    if(element.removeEventListener){
        element.removeEventListener(eventName,listener,false);
    }else if(element.detachEvent){
        element.detachEvent("on" + eventName,listener);
    }else {
        element["on"+eventName] = null;
    }
}




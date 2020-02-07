
/**
 * @param 判断数组的三种方式
 * @param { obj.arr.constructor == Array }     constructor 指向该对象的构造函数
 * @param { obj.arr instanceof Array }
 * @param { Array.isArray(obj) }
 */

let obj1 = {
    name:'aaa',
    arr:{
        name:'bbb',
        age:12,
        city:{
            name:'shanghai',
            arra:[1,2,3,4]
        }
    }
}
/**
 * @param {*} param 需要拷贝的数据
 * @return {*} 拷贝之后的数据
 **/
function deepCopy(param) {
    // 第一步判断是否是简单类型
    // 如果是简单类型就直接返回了
    if (param === null || typeof param !== 'object') {
        return param
    }
    // 保存拷贝的值
    const copyObj = Array.isArray(param) ? [] : {};
    // 利用深度遍历循环递归对象每一层的每个属性值
    for(let key in param) { 
        copyObj[key] = deepCopy(param[key]);
    }
    return copyObj;
}



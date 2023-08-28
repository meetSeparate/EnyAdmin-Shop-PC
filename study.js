// function study() {
//     let n = 10;
//     if (1 == true) {
//         let n = 5;
//         console.log(123)
//     }
//     console.log(n)
// }
//
// study()


// function study() {
//     let a = b = 0;
//     a++
//
// }
// study()
//
// console.log(typeof a)
// console.log(typeof b)

// function study() {
//     let a = 1
//     if (a === 1) {
//         let test = '123';
//     }
//     console.log(test)
// }
//
// study()



// function operation(soldInfo) {
//     let a = {};
//     let b = {};
//     let c = {};
//     soldInfo.forEach(item => {
//         let aCount = 0
//         let bCount = 0
//         let cCount = 0
//
//         let aTemp = 0
//         let bTemp = 0
//         let cTemp = 0
//
//         aItem = item.filter(i => i.name === item.name)
//         if (!aItem) {
//             a.name = name
//         } else {
//             aCount += a.count;
//             aTemp += 1
//         }
//
//         bItem = item.filter(i => i.name === item.name)
//         if (!bItem) {
//             b.name = name
//         } else {
//             bCount += b.count;
//             bTemp += 1
//         }
//
//         cItem = item.filter(i => i.name === item.name)
//         if (!cItem) {
//             c.name = name
//         } else {
//             cCount += c.count;
//             cTemp += 1
//         }
//
//         a.val = aCount / aTemp
//         b.val = bCount / bTemp
//         c.val = cCount / cTemp
//     })
//     return {
//         a,
//         b,
//         c
//     }
// }


//
// sortData = {
//     apple: {
//         price: 20,
//         count: 10
//     },
//     pair: {
//         price: 25,
//         count: 8
//     },
//     banana: {
//         price: 15,
//         count: 13
//     },
// }
//
// const sortedData = Object.keys(sortData)
//     .map(key => ({key, ...sortData[key]}))
//     .sort((a, b) => a.price - b.price)
//     .map(item => item.key);


/*
    浅拷贝
    @param target 目标对象
    @param source 源对象
*/
// function extend(target, source) {
//     for (var key in source) {
//         if (source.hasOwnProperty(key)) {
//             var value = source[key]
//             if (typeof value !== 'undefined') {
//                 target[key] = value;
//             }
//         }
//     }
// }



/*
    深拷贝
*/

// var class2type= {}
//
// var typeArr = "Boolean Number String Function Array Date RegExp Object".split(" ");//将所有的类型放到一个数组
//
// for (var i=0; i<typeArr.length; i++) {
//     var name = typeArr[i];
//     class2type[ "[object " + name + "]" ] = name;
// }
//
// function getType( obj ) {
//     return obj == null ?
//         String( obj ) :
//         class2type[ Object.prototype.toString.call(obj) ] || "undefined";
// }
//
// function deepCopy(obj) {
//     var result, oClass = getType(obj), copy;
//     console.log(result, oClass)
//     if (oClass === "Object")
//         result = {}; //判断传入的如果是对象，继续遍历
//     else if (oClass === "Array")
//         result = []; //判断传入的如果是数组，继续遍历
//     else
//         return obj; //如果是基本数据类型就直接返回
//
//     for (var key in obj) {
//         if(obj.hasOwnProperty(key)){
//             copy = obj[key];
//             if(copy===null){
//                 break;
//             }
//             if(typeof copy ==='undefined'){
//                 result[key]=undefined;
//             }else if (getType(copy) === "Object"||getType(copy) === "Array")
//                 result[key] = deepCopy(copy); //递归方法
//             else
//                 result[key] = copy; //基本数据类型则赋值给属性
//         }
//     }
//     return result;
// }

// var obj={
//     a:1,
//     b:2,
//     c:{
//         c1:'456',
//         c2:'789'
//     }
// }
//
// var target = {}
//
// extend(target, obj)
//
// target.a = 2;
//
// console.log(target, obj)

// var o = deepCopy(obj);
//
// console.log(o)
//
// var obj = { name: '无言' }
// var obj1 = obj // 是浅拷贝吗？？？
// obj1.name = '梁鹤'
//
// console.log(obj.name);
// console.log(obj1.name);
// console.log(obj == obj1)





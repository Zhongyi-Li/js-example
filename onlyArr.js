//数组去重
const arr = [1,2,3,44,1,2,4,5]
const result = arr.filter((item,index,self)=> self.indexOf(item) === index)
// console.log(result);
//对象数组去重
const objArr = [
    {name:"obj1"},
    {name:"obj2"},
    {name:"obj3"},
    {name:"obj1"},
    {name:"obj2"}
]
const obj = {}
const newObjArr = []
for(let i=0;i<objArr.length;i++){
    if(!obj[objArr[i].name]){
        newObjArr.push(objArr[i])
        obj[objArr[i].name] = true
    }
}
console.log(newObjArr);


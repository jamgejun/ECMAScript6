// let [a,b,c] = [1,2,3]

// console.log(a)
// console.log(b)
// console.log(c)

// let [foo, [bar, [baz]] ] = ["foo", ["bar", ["baz"]] ]

// let [a1, ...b1] = [1,2,3,4]
// console.log(foo)
// console.log(bar)
// console.log(baz)
// console.log(a1)
// console.log(b1)

let [x] = new Set(["a","b","c"])
console.log(x)

function * fibs(){
    let a = 0;
    let b = 1;
    while(true) {
        yield a
        // [a, b] = [b, a+b]
        a++
    }
}

// 使用generator函数赋值
let [first, second, third, fourth, fifth] = fibs()
console.log(first, second, third, fourth, fifth)

// 值和位置有关
let [ v= 0, y,z] = [2,undefined, null]
console.log(v+" "+y+" "+" "+z)

// 对象的解构赋值，名称对上即可，不需要和位置也对上
let { height, color } = { width: 'this is width', height: 'this is height'}
console.log(height + color) // 如果对象没有，则默认为undefined

let { sin, cos, log, PI, random, pow, asin, acos, cbrt, } = Math
console.log(log(8)/log(2)) // loga/logb 表示以b为低，a的对数 如果不加，默认为e

console.log(sin(Math.PI/2)) // 输入一个数字表示一弧度大约57°左右

// 对象的解构赋值

let obj = {
    p: {
        obj_a: "hello",
        obj_b: "world"
    },
    nUll: null,
    undefine: undefined
}

let { p, p: { obj_a, obj_b }, xi="Gray", undefine = 3 , nUll =2 } = obj

console.log(p, obj_a, obj_b, xi, undefine, nUll) // 其中的p：只是匹配模式 undefined , null只有undefined会忽略赋值，null属于空指针会成功赋值。

const [...arr] = "hello"

console.log(arr) // 字符串转成数组

// 作为函数参数的默认赋值，原理和字符串，数组，对象的解构赋值相同。
let arr1 = [[1,2], [3,4]]
let arr2 = arr1.map(([...arr]) => {
    return arr.filter( x => x>2 )
})

console.log("map is changed ?",arr1)
console.log(arr2)

const map = new Map()

map.set('first', 'hello')
map.set('second', 2)

for (var [key, value] of map) {
    console.log(key +":"+ value)
}

console.log(map.entries())
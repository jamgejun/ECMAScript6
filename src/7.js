/*
函数的扩展
1. 函数参数的默认值
2. rest参数
3. 严格模式
4. name属性
5. 箭头函数
6. 尾调用优化
7. 函数参数的尾逗号
*/

/*
默认参数不能重复声明
参数不能有同名参数
默认参数是每次传值，不是默认值
可以和解构赋值一并使用
*/
function Point(x = 0, y = 0) {
    this.x = x
    this.y = y
}
const p = new Point()
console.log(p)


function Log({x, y = 5} = {}) {
    console.log(x, y)
}

// 惰性求值
Log({
    x: 'this is params',
    y: 'this is y'
})

// 不存在重载
Log({
    y: '5'
})
function ajax(url, { body="", method="GET", headers = {}}) {
    console.log(`url:${url}
    {
        body: ${body},
        methods: ${method},
        header: {
            ${ Object.entries(headers) }
        }
    }
    `)
}

ajax('http://example.com', {
    body: `<div>this is body</div>`,
    method: `POST`,
    headers: {
        expire: '6200',
        Content_type: 'text/xml',
    }
})

/*
第一个给解构赋值赋值了默认值 不管传入的参数如何，都会设置默认值，如果参数有值，则覆盖。
第二个没有给解构赋值设置默认值 如有传入的对象参数，那么一切按照传入的参数来计算
*/
function f1({x = 0, y =0 } = {}) {
    return [x, y]
}

function f2({x, y} = { x: 0, y: 0}) {
    return [x, y]
}

/*
默认参数的作用域问题
在设置默认参数的时候，会形成一个单独的作用域，在声明结束之后，会消失
如果参数作用域没有定义，则才会想外部作用域访问，默认声明方式为let

如果内部使用了var 声明，则会影响参数作用域，如果内部重复使用let声明，则会报错
*/

let x =  "global"

function f3(x, y=x) {
    console.log(y)
}
f3("params context")
console.log(x)

let foo = "global outer"
let baz = "global 5 outer"
function f4(foo, bar = () => foo) {
    var foo = "params f4 inner"
    console.log(bar())
}
f4("params true")

function f5(bar = () => baz) {
    baz = "params f5 change"
    console.log(bar())
}
f5()

/*
rest 参数，使用扩展运算符即可
length 不包括rest参数
*/

function add(...arry) {
    console.log(arry, add.length == 0)
}

add(1,2,5,6)

/*
严格模式
在使用了扩展运算符 解构赋值 默认。函数内及不可以使用严格模式 因为三者修改了参数规则，使得参数有了作用域
*/


/**
 * 箭头函数
 * this对象，就是定义时所在的对象，而不是使用时（this的指向固定）
 * 不可以当做构造函数，不能使用new命令
 * 不能使用arguments对象，该对象在函数体内不存在，可以用rest参数代替
 * 不可以使用yield命令，箭头函数不能作为generator函数来使用
 */


 let f6 = () => {
     console.log(this)
 }

let f7 = (a) => console.log(a)

let f8 = () => console.log(arguments)

// let f9 = () => yield a
 f6()
 f7(6)
 f8()

 const plus1 = a => a+1
 const mult2 = a => a*2

 console.log(mult2(plus1(5))) // 12

 const f9 = function add1(data) {
     return data*2
 }

 const f10 = function add2(data) {
     return data*2
 }

 console.log(f10(f9(2))) // 8

 /**
  * 尾调用
  * 指的是某个函数的尾部调用另一个函数
  * 
  * 通俗一点，执行函数的返回值是一个函数
  */

function g(x) {
    return x
}

function b() {
    let m = 1;
    let n = 2;
    return g(m+n)
}

console.log(b())

function pow(x, n) {
    if(n==0) {
        return 1
    } else {
        return x*pow(x, n-1)
    }
}
console.log(pow(2,32))

function pow2(x, n, total) {
    if (n == 0) {
        return total
    } else {
        return pow2(x, n-1, total*x)
    }
}
console.log(pow2(-2,32,1))

function fibonacci(n) {
    if( n<=1 ) {
        return 1
    } else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}
console.log(fibonacci(30))

function fibonacci2(start, ac1=1, ac2=1) {
    if(start <=1 ) {
        return ac2
    } else {
        return fibonacci2(start-1, ac2, ac1 +ac2)
    }
}

console.log(fibonacci2(10))
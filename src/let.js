// let和var的区别
{
    var a = []
    for (var i = 0; i < 10; i++) {
        a[i] = () => {
            console.log(i)
        }
    }
}
a[6](); // 10 变量溢出

// 使用let的情况, 不会变量提升,会产生暂时性死区

{
    // console.log(b); // 报错
    for (let b = 0; b < 10; b++) {
        // console.log(tmp) // 报错
        // let tmp = 'abc'
        a[b] = () => {
            console.log(b)
        }
    }
}
a[5](); // 5 变量不会存在溢出，只会存在声明作用于区域

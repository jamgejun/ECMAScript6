/*
字符串修饰符
1. i 表示大小写不敏感
2. m 表示多行匹配，因为在默认情况下，字符串只有一个^和$（开始和结尾） 所以遇到\n的时候不会产生进行匹配。
3. g 表示全局匹配，不会再遇到一个匹配之后就结束，会继续匹配后面的字符
4. u 能够识别unicode字符，即表示能够处理四个字节的utf-16编码
5. y 和g修饰符差不多，但是区别于g在于匹配成功之后的下一次，会在上一次结束的位置作为起始点。下一次开始以上次结束点开始，匹配也是一样
*/

let s1 = "this is mutitype\n muti"
let reg1 = /muti/
let reg2 = /muti/m

console.log(s1.match(reg1))
console.log(s1.match(reg2))

/* 
.点操作符
1. 表示的除了换行符之外的任意单个字符串

unicode字符表示法
1. 使用u{}的形式，来声明一个正则
2. 如果不加u {}里面则会被翻译为 匹配多少联系的字符

量词
{} 例如 a{2} 表示连续匹配两个a

预定义模式
\S 表示匹配所有的非空白字符串 加上了u操作符后，会匹配到utf-16的字符编码，如果没有则会忽略32位的字符
*/

let s2 = "𠮷"
let reg3 = /^.$/
let reg4 = /^.$/u

console.log(s2.match(reg3)) // null
console.log(s2.match(reg4)) // 匹配成功

let s3 = "abccddabco"
let reg5 = /\c{2}/g

console.log(s3.match(reg5))
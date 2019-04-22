/*
字符串修饰符
1. i 表示大小写不敏感
2. m 表示多行匹配，因为在默认情况下，字符串只有一个^和$（开始和结尾） 所以遇到\n的时候不会产生进行匹配。
3. g 表示全局匹配，不会再遇到一个匹配之后就结束，会继续匹配后面的字符
4. u 能够识别unicode字符，即表示能够处理四个字节的utf-16编码
5. y 和g修饰符差不多（粘连）但是区别于g在于匹配成功之后的下一次，会在上一次结束的位置作为起始点。下一次开始以上次结束点开始，匹配也是一样
6. s 表示匹配任意单个字符
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


/*
sticky 查看该正则表达式是否设置了y修饰符
flags 查看该正则表达式的修饰符
*/

console.log(/abc/gym.flags) // gmy
console.log(/teacher/y.sticky) // true
console.log(/student/.sticky) // false

/*
正则表达式的.操作符，表示任意单个的字符，但是有两个例外，utf-16的字符和行终止符\n不能被识别
dotAll 
*/

let s4 = "foo\nbar"
let reg6 = /foo[^]bar$/
let reg7 = /foo.bar$/
let reg8 = /foo.bar/s

console.log(s4.match(reg6)) // 一种变通的方式匹配，[^]表示下一行开始
console.log(s4.match(reg7)) // 未加上s修饰符时，.修饰符时匹配不到\n的
console.log(s4.match(reg8)) // 加上之后，能够匹配

/*
而dotAll 则是用于判断正则是否处于.操作符修饰中
*/
console.log(reg6.dotAll) 
console.log(reg7.dotAll)
console.log(reg8.dotAll)

/*
断言
1. 先行断言：表示x只在y前面的时候进行匹配/x(?=y)/
2. 先行否定断言：表示x不在y前面的时候进行匹配/x(?!y)/

后行断言匹配模式 从右往左
3. 后行断言：表示x只在y后面的时候进行匹配/(?<=x)y/
4. 后行否定断言：表示x不在y后面的时候进行匹配/(?<!x)y/
*/

let s5 = "hello world or GrayJay"
let reg9 = /o(?=r)/g // o在r的前面
let reg10 = /o(?!r)/g // o不在r的前面
let reg11 = /(?<=l)o/g // o在l的后面才匹配
let reg12 = /(?<!l)o/g  //o不在l后面才匹配

console.log(s5.match(reg9)) // 两个匹配结果，or
console.log(s5.match(reg10)) // 只要r前面没有o的都匹配
console.log(s5.match(reg11)) // l后面存在o的都匹配
console.log(s5.match(reg12)) // l后面不存在o的都匹配

/*
具名组匹配：正则表达式使用圆括号进行组匹配

exec返回一个数组，第一个默认为匹配后的结果，剩下的分别为括号里面的数据

通过具名组匹配原则，模式的头部添加"?+尖括号+组号" (?<year>)
*/

let s6 = "2019-04-19"
let reg13 = /(\d{4})-(\d{2})-(\d{2})/g
let reg14 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g


const {year, month, day} = reg14.exec(s6).groups
console.log(reg13.exec(s6))
console.log(`${year} + ${month} + ${day}`)

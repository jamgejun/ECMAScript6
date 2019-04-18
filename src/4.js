const str = new String()

// es6允许是用unicode表示16字节的字符和32位字节的字符，但是在es5 32位字节的字符需要用两个字节表示

console.log("\u0061", "\uD842\uDFB7")

// es6使用{}的方式，表示一个大于0xFFFF字节的字符

console.log("single code to show a 32 string: "+"\u{20BB7}")

console.log("\u{1F680}" + Math.pow(2,16))

// codePointAt 返回字符的码点，相比charCodeAt能够识别32位字符 属于charCodeAt的升级版

const s = "𠮷a"

console.log(s.codePointAt(0), s.charCodeAt(0)) // 返回值不同，后者只能返回D842 = Math.pow(16,3) + Math.pow(16,2) + Math.pow(16,1) + Math.pow(16,0)
console.log(s.codePointAt(1), s.charCodeAt(1))

// for of 会自动识别32位的字符
for (var sh of s) {
    console.log("auto confirm 32bit code "+sh.codePointAt(0).toString(16))
}

// 检测是否是32位的字符
let is32Bit = (s) => {
    return s.codePointAt(0) > 0xFFFF;
}

console.log(is32Bit("𠮷"))
console.log(is32Bit("a"))

// 检测是否含有32位的字符
let has32Bit = (s) => {
    for (var sh of s) {
        if(is32Bit(sh)) {
            return "yes"
            break;
        } 
    }
    return "no"
}

console.log(has32Bit("lsklsk𠮷a"))
console.log(has32Bit("ksdkjskjf"))

// use Unicode return a string es5 can not able to do it but es6 can
console.log(String.fromCharCode(0x20bb7))
console.log(String.fromCodePoint(0x20bb7))

// String.normalize() 将字符串标准化合成或者分解，统一unicode的表达

document.write("\u01D1" === "\u004F\u030C") // flase

document.write("\u01D1".normalize() === "\u004F\u030C".normalize())

// acept four parameter NFC stander parameter  NFD stander split string  NFKC compatibility composition  NFKD compatibility decomposition


// includes startWith endsWith indexOf ES5
// aboveAll return boolean

let s3 = "abcdefjhgh𠮷"
console.log(s3.includes("c"))
console.log(s3.startsWith("a"))
console.log(s3.endsWith("𠮷"))

// repeat padStart padEnd 表示从开头部分填充和结尾部分填充
console.log("hello".repeat(3))
console.log("hello".padStart(10, "50"))
console.log("world".padEnd(16, "kkk"))

//  mathAll 正则匹配

let s4 = "abcked"
let data = 100
let func = () => {
    return 100
}
let arr2 = [
    4,6,8,10,12
]
console.log(`this is template of String ${data + func()} + ${
    arr2.map((x) => {
       return  x*2
    }).join('+')
}`)
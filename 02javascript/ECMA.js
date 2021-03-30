/* ECMA
 */

/* 常量 表示一些固定不变的数据
整型常量：整数
实型常量：小数
字符串常量：
布尔常量：ture/false
自定义常量：ES6中新增的 const 常量名称 = 常量取值（不可改变）
 */

/* 变量 表示一些可以被修改的数据
var 变量名称 = 变量取值
变量间可以相互赋值
ES6之前可重复var 相同名称变量，后var的会覆盖前一个（是否会先抹去之前var占用的内容空间，然后重新占另一个内存空间）
ES6之前浏览器在解析JS代码之前会进行预解析（预处理）操作
预解析（预处理）：将当前JS代码中所有变量的定义和函数的定义放到所有代码的最前面，因此先使用后定义在ES6之前也是可以的，当前不可以
let 变量名称 = 变量取值 
let 不可重复定义同名变量，浏览器不会对let定义的变量进行预解析，所以不可以先使用后定义

全局变量与局部变量的区别：
1.有效范围不同：全局变量有效范围是从定义变量的那一行起直到文件末尾都可以使用；
局部变量有效范围是从定义变量的那一行开始知道大括号结束位置（只有在大括号中有效）；var定义的变量不区分局部变量和全局变量，后续都可以被使用。

 */

/* 关键字 被JS语言赋予了特殊含义的单词
关键字不能用作变量、函数的名称；
关键字严格区分大小写、多为小写
 */

/* 标识符 为了将莫些东西区分出来的符号（变量名称）
标识符命名规则：
英文字母大小写、阿拉伯数字0~9、下划线_、美元符号$组成
不能以数字开头
严格区分大小写
不可以使用关键字、保留字作为标识符
 */

/* 数据
静态数据：永久的数据，一般存在硬盘中，只要硬盘不损坏，数据永远存在
动态数据：在程序运行中，动态产生的临时数据，一般存储在内存中，数据会在关机重启后会被清空
*/

/* 数据类型 动态数据类型
Number 数值 NaN为数值类型
String 字符串
Boolean 布尔
Undefined 未定义
Null 空值（以上为基本数据类型）
Object 对象(引用数据类型)

数据类型检测：typeof 需要检测的数据  数值的特殊值 NaN 用 isNaN(num)进行判断
*/

/* 数据类型转换 转换为字符串类型
将 数值 数据类型转换为字符串类型： 常量or变量 + ''/String(变量or常量)/变量名称.toString()
将 布尔 数据类型转换为字符串类型：常量or变量 + ''/String(变量or常量)/变量名称.toString()
将 undefined 数据类型转换为字符串类型：常量or变量/+ '' String(变量or常量)
将 null 数据类型转换为字符串类型：常量or变量 + ''/String(变量or常量)

常量or变量 + ''：最简单的方式将所有类型的常量和变量转换为字符串类型，并不会改变原有数据的数据类型
String(变量or常量)：可以将所有类型的常量和变量转换为字符串类型（重新生成），并不会改变原有数据的数据类型
变量名称.toString()：是将拷贝的变量的数据类型进行转换，并不会改变原有变量的数据类型
*/

/* 数据类型转换 转换为数值类型 
将 字符串 数据类型转换为字符串类型：Number(变量or常量) +/- 常量or变量 parseInt/parseFloat
将 布尔 数据类型转换为字符串类型：Number(变量or常量) +/- 常量or变量 parseInt/parseFloat
将 undefined 数据类型转换为字符串类型：Number(变量or常量) +/- 常量or变量 parseInt/parseFloat
将 null 数据类型转换为字符串类型：Number(变量or常量) +/- 常量or变量 parseInt/parseFloat

Number(变量or常量)：可以将所有类型的常量和变量转换为数值类型（重新生成），并不会改变原有数据的数据类型,
字符串如果为空字符串转换结果为0，如果字符串中的数据不仅仅是数值转换结果为NaN(not a number)
布尔值true/false的转换结果为1/0
undefined的转换结果为NaN
null 转换结果为0

+/- 常量or变量：+'123' 减号会改变变量的正负值

parseInt/parseFloat：可将字符串中的数字提取出来，parseInt只提取整数部分，parseFloat提取小数；都会把要处理的数据当成字符串处理，
只能提取第一个为数字的字符串，若第一个不是则返回NaN。
*/

/* 数据类型转换 转换为布尔类型 
将 字符串 数据类型转换为布尔类型：Boolean(变量or常量) 空字符串转换结果为false 其他包括空格都为true
将 数值 数据类型转换为布尔类型：Boolean(变量or常量) 0及NaN转换结果为false 其他为true
将 undefined 数据类型转换为布尔类型：Boolean(变量or常量) 转换结果为false
将 null 数据类型转换为布尔类型：Boolean(变量or常量) 转换结果为false
 */

/* 运算符
按功能分类：算术运算符 位运算符 关系运算符 逻辑运算符
按操作数分类：单目运算 双目运算 三目运算（a==b?1:2） （操作数的数量，及常量/变量的个数）

优先级和结合性：结合性是指运算类似从左往右的运算顺序

算术运算符：+ - * / %  结合性从左往右，* / % 优先级大于+ -；
加法运算注意点：
1.数字与字符串相加，都会先转换成字符串再运算，即字符串拼接
2.除去字符串后任何非数值类型的数据参与加法运算之前，都会被自动转换成数值类型之后，再参与运算
3.任何数据与NaN进行运算结果都是NaN
减法运算注意点：
数字与字符串相减，会先转换成数值类型，再进行减法，其余相同
乘除法运算注意点：
与减法运算相同
取余运算注意点：
1.如果分子大于分母则正常取余，如果分子小于分母，则结果为分子  3 % 10 = 3
2.如果分母为0，则结果为NaN
3.取余结果的正负取决于 分子 -10 % 3 = -1

赋值运算符（位运算符？）：= += -= *= /= %= 
1.优先级低于算数运算符，算数运算结束后进行赋值运算
2.运算符左边只能放变量
3. res += 5 相当于 res = res + 5
4. res -= 5 相当于 res = res - 5
5. res *= 5 相当于 res = res * 5
6. res %= 5 相当于 res = res % 5

自增自减运算符：num++/++num num--/++num
1.num++ 先进行其他操作再进行++  let num = 1; num++ + 1 = 2（尽量不用此方法）
2.++num 先进行++再进行其他操作  let num = 1; ++num + 1 = 3（尽量不用此方法）
3.num--/++num 与 num++/++num 相同
4.++/-- 只能应用于变量 不能应用于常量及表达式上

关系运算符：> < >= <= == != === !== 结果返回 true/false 
1.若运算中含字符串，先将字符串转为数字再进行比较
2.任何数据与NaN/undefined做比较返回结果都是false 包括  两个NaN作比较
3.如果两个参与比较的数据都为字符串，那么就会逐个比较两个字符串单个符的unicode大小直到条件不满足为止
4.特殊比较的结果：null == 0 为false; null == undefined 为 true; NaN == NaN 为false 
5.===恒等于/!==不恒等于：会判断数据类型
6.关系运算符是左结合性，也就是从左至右依次比较，所以不能用来判断区间，但> < >= <= 的优先级大于 == != === !==

逻辑运算符：&& || ! 与 或 非 左结合性， && 优先级 大于 || 
1.如果条件不属于布尔类型，先转换成布尔类型再参与其他运算
2.&& 的运算中，如果条件不是布尔类型，返回值有一个特点：
格式：条件A && 条件B
如果条件A不成立为false，那么返回条件A
如果条件A成立为true，那么无论条件B是否成立，都会返回条件B
3.|| 的运算中，如果条件不是布尔类型，返回值有一个特点：
格式：条件A || 条件B
如果条件A成立为true，那么返回条件A
如果条件A不成立为false，那么无论条件B是否成立，都会返回条件B
4.&& 的运算中有一个短路的现象
格式：条件A && 条件B
由于逻辑与运算的规则是一假则假，所以只要条件A是假，那么条件B就不会运算
5.|| 的运算中有一个短路的现象
格式：条件A || 条件B
由于逻辑或运算的规则是一真则真，所以只要条件A是真，那么条件B就不会运算

逗号运算符： B
1.逗号一般用于简化代码  比如 利用逗号运算符定义多个变量
2.逗号运算符为左结合性，逗号运算符的优先级是所有运算符中最低的
3.逗号运算符的运算结果就是最后一个表达式的结果

三目运算符（条件运算符）：条件表达式 ? 结果A : 结果B

  */

/* 流程控制 顺序、选择、循环三种基本控制结构
选择结构：if switch
if：
switch：
switch(表达式) {
  case 表达式A:(绝对等于)
    语句A
    break;
  case 表达式A:
    语句A
    break;
    ... ...
  default: 
    前面所有case都不匹配执行的代码
    break;
}

循环结构：
while：
while(条件表达式){
  ...
}
死循环：条件表达式永远为真的循环结构我们称之为死循环

dowhile：先执行一次循环体，再进行判断
do {
  需要重复执行的代码
}while (条件表达式);

for: 
for(let num = 1;num<10;num++) {
  需重复执行的代码
}
1.初始化表达式、条件表达式、循环增量表达式都可省略 等于 while(1)死循环

打破循环关键字：
break：立即结束当前循环结构（整个循环，在嵌套循环时，结束所在循环，不影响外部循环），可用在switch语句以及循环结构中
continue：跳过本次循环，进入下次循环，只能用在循环结构中
  */

/* 数组
ES6数组解构赋值：[a,b,[c,d]] = [1,2,[3,4]]
注意点：1、格式需相同；2、左右数据个数可不相等，如果右侧个数少，那么左边剩余变量赋值为undefined；3、左边变量可设默认值 [a=11,b=22,c=33] = [1,2] 
4、扩展运算符：let [a,...b] = [1,2,3,4,5]  放在左边表示将剩余数据打包
let res = [...arr1,...arr2]放在右侧将数组中的值取出来
数组的增删改查：
arr.splice(开始的index,修改几个,改成的值,...)替换多个值；arr.splice(1,1)从index为1的元素开始，删除一条数据；arr.splice(n,arr.length-n)删除使数组剩余n个元素
arr.push(1)数组后方新增一条数据，会修改原数组，返回数组长度
arr.unshift(2)数组前方新增一条数据，会修改原数组，返回数组长度
arr.pop()删除数组的最后一条数据，会修改原数组，返回被删除的数据
arr.shift()删除数组的第一条数据，会修改原数组，返回被删除的数据
arr.toString()将数组转换为字符串
arr.join('*')将数组元素以'*'拼接为字符串
let arrn = arr1.concat(arr2)将数组arr2拼接到arr1后面，不会改变原数组，返回新的数组 ES6: let res = [...arr1,...arr2]
arr.reverse()将数组倒序排列，会修改原有数组
let res = arr.slice(1,2)截取数组中的片段，包头不包尾，不会对原有数组进行修改，返回截取的片段
let num = arr.indexOf(3需要查找的元素,4查找开始的index值)查找数组中第一个3的位置index，如果数组中不包含3则返回-1  let num = arr.lastIndexOf(3,4)从后开查
可以通过indexOf()和lastIndexOf()的返回值是否是-1来判断数组中是否包含某个值
ES6 arr.includes(3) 直接返回true/false
arr.fill(0)将数组所有元素变成0
   */

//数组计数排序：
//缺点：无法对负数排序，对数值较大的排序不友好

(function () {
  let arr = [9, 2, 3, 9, 1];
  let res = new Array(10);
  let c = [];
  res.fill(0);
  for (let i = 0; i < arr.length; i++) {
    let ri = arr[i]
    res[ri] = res[ri] + 1
  }
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[i]; j++) {
      c.push(i)
    }
  }
  console.log('计数排序法：', c)
})();

//数组选择排序
(function () {
  let arr = [6, -3, 100, 8, 6]
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  console.log('选择排序法：', arr)
})();

//数组冒泡排序
(function () {
  let arr = [6, -3, 100, 8, 6]
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  console.log('冒泡排序法：', arr)
})();

/*函数 专门用于封装代码 是一段可以被反复执行的代码块 function say() {执行代码} let say = function() {}
arguments 函数是所有实参的伪数组
函数扩展运算符：let [a,...b] = [1,2,3,4,5]  放在左边表示将剩余数据打包 let res = [...arr1,...arr2]放在右侧将数组中的值取出来
*/

//函数扩展运算符例子
(function () {
  function getSum(...values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
      sum += values[i]
    }
    console.log('函数扩展运算符：', sum)
  }
  getSum(10, 20, 30)
})();

//函数作为其他函数的参数
(function () {
  let say = function () {
    console.log('函数作为其他函数的参数')
  }

  function test(fn) {
    fn()
  }
  test(say)
})();

//函数作为其他函数的返回值
(function () {
  function test() {
    let say = function () {
      console.log('函数作为其他函数的返回值')
    }
    return say;
  }
  let fn = test();
  fn()
})();

/*匿名函数 没有名字的函数 function () {执行代码}
使用场景：作为其他函数的参数；作为其他函数的返回值；作为一个立即执行函数(function () {执行代码})()；

箭头函数 ES6 

递归函数 ES6 在函数中自己调用自己，在一定程度上实现循环的功能
function login() {
  let pwd = prompt("请输入密码");
  if(pwd !== "123456") {
    login()
  } 
    console.log("欢迎回来")
}
直到输入正确，循环几次，会输出几次欢迎回来，因为每次执行login都会开辟出新的存储空间进行执行，执行完成后会回到之前的函数位置继续执行。

函数中变量的作用域
全局变量：定义在{}外的变量，或者var在块级作用域的变量
局部变量：定义在函数的{}中的变量
块级作用域：定义在非函数的{}中的变量为局部变量，var在块级作用域的变量为全局变量

函数预解析：浏览器在执行JS代码时会分成两部分操作，预解析以及逐行执行代码，先加工处理后再执行；先将变量和函数声明提升到当前作用域最前面(注意时声明而不是赋值提前)，
然后将剩余代码按照书写顺序依次放在后面；通过let定义的变量不会被提升（不会预解析）
注意：如果将函数赋值给一个var定义的变量，那么函数不会被预解析，只有变量会被预解析；var func = function() {}; error: func is not a function
    在高级浏览器中不会对{}定义的函数进行提升，也就是会执行{}前的代码比如if等，在低级浏览器中会进行提升
    如果变量名称和函数名称同名，那么函数的优先级高于变量，预解析只会预解析函数。

JS面向对象
面向过程：强调的是功能行为，关注的是解决问题需要那些步骤；首先搞清楚要做什么，然后分析怎么做，最后用代码体现；具体的每一步都需要我们去实现和操作。
面向对象：是基于面向过程而言的，将功能封装进对象，强调了具备了功能的对象，关注的是解决问题需要哪些对象。
两者的注重点不同。
创建对象：利用系统默认类Object创建对象：let obj = new Object();let obj = {}; obj.name = "wx"

函数与方法的区别：与其他类绑定的函数就是方法；函数可以直接调用，方法需要通过对象来调用；this：谁调用了当前的函数或者方法，this就是谁，
因此函数this输出的是window，方法this输出的就是当前调用的对象。
*/

//构造函数 构造函数和工厂函数一样，都是专门用于创建对象的，构造函数的本质是工厂函数的简写；构造函数的函数名称首字母必须大写；构造函数只能通过new来调用；
function Person(myName, myAge) {
  //当new 一个对象系统会自动进行如下操作
  //let obj = new Object();系统自动添加
  //let this = obj;系统自动添加
  this.name = myName;
  this.age = myAge;
  this.currentType = '构造函数中的currentType';
  //由于obj1 和 obj2 中的 say方法相同但是，却分别分配了两块存储空间，可进行性能优化
  // this.say = function() {
  //   console.log("My name is " + this.name)
  // }
  //return this;系统自动添加
}
Person.prototype = {
  constructor: Person,
  say: function () {
    console.log("My name is " + this.name)
  },
  currentType: 'author'
}
let obj1 = new Person("WX", 27);
let obj2 = new Person("xw", 27);
console.log(obj1.say === obj2.say);
console.log(obj1.age)
console.log(obj1.currentType)
obj1.say()
obj2.say()
/** prototype 原型
 * 特点：1、存储在prototype中的方法可以被对应的构造函数创建出来的所有对象共享；2、prototype中除了可以存储方法以外，还可以存储属性；
 * 3、如果构造函数中存在相同的属性或者方法，对象在访问时，访问到的是构造函数中的数据而不是prototype中的数据;
 * 
 * 应用场景：prototype中一般情况下存储所有对象都相同的一些属性和方法，如果是对象特有的属性或者方法，我们会存储到构造函数中；
 * 
 * 对象的三角恋关系：1、每个“构造函数”中都有一个默认的属性，叫做prototype，prototype属性保存着一个对象，这个对象我们称之为“原型对象”；
 * 2、每个“原型对象”中都有一个默认的属性“constructor”,它对应的是当前原型对象对应的那个“构造函数”;3、通过构造函数创建出来的对象我们称
 * 之为“实例对象”，每个“实例对象”中都有一个默认的属性，叫做__proto__，__proto__指向创建它的那个构造函数的“原型对象”；如上obj1.__proto__ === Person.prototype
 * 
 * Function构造函数，所有的函数都是通过Function构造函数创建出来的实例。特殊：Function.__proto__ === Function.prototype，构造函数的__proto__与prototype相同
 * Object构造函数以及自定义的构造函数都为Function构造函数的实例，Object.__proto__ === Function.prototype;
 * 
 * 注意：Function构造函数 与 自定义构造函数 的原型对象prototype的 __proto__都指向（等于）Object构造函数的原型对象（Object.prototype）；
 * 而Object.prototype.__proto__ = NULL
 * 
 * 原型链：对象实例访问属性及方法的查找方式：自己本身(obj1)->此类构造函数的原型对象（obj1.__proto__/Person.prototype） 
 * -> Object构造函数的原型对象（Person.prototype.__proto__/Object.prototype）
 */
console.log(Object.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype, Person.prototype.__proto__ === Object.prototype, obj1.__proto__.__proto__ === Object.prototype)
//注意：obj1.currentType = 'test' 只会修改或添加对象实例obj1的属性或方法 并不会修改或添加obj1.__proto__/Person.prototype中的属性或方法
obj1.currentType = 'test'
console.log(obj1.currentType, obj1.__proto__.currentType, obj2.currentType)

/** JS面向对象的三大特性
 * 封装：隐藏实现细节（隐藏属性及方法），仅对外公开接口
 * 实例属性/实例方法：通过实例对象访问的属性/方法obj1.name/obj1.say()
 * 静态属性/静态方法：通过构造函数访问的属性/方法Person.name/Person.say() 可被继承
 */

function P() {
  this.name = 'wx';
  let age = 27;
  this.setAge = function (myAge) {
    if (myAge > 0) {
      age = myAge
    }
  };
  this.getAge = function () {
    return age;
  }
}
let p1 = new P();
p1.setAge(25); //设置操作私有属性
p1.age = 20; //设置公共变量
console.log(p1.getAge(), p1.age)

/** 
 * 继承性：在企业开发中如果构造函数和构造函数之间的关系是is a关系，那么就可以使用继承来优化代码，来减少代码的冗余度。
 * 
 * 修改函数默认this的三个方法：
 * bind方法：修改函数或者方法中的this为指定对象，并返回修改后的新函数，还可以将参数写在指定的this对象的后面进行传参，不会修改原函数/对象；
 * call方法：修改函数或者方法中的this为指定对象，并且立即调用该函数，还可以将参数写在指定的this对象的后面进行传参，不会修改原函数/对象；
 * apply方法：修改函数或者方法中的this为指定对象，并且立即调用该函数，还可以将参数写在指定的this对象的后面进行传参，传参需要用数组，不会修改原函数/对象；
 */
let obj = {
  name: 'wx'
}

function test(a, b) {
  console.log(a, b)
  console.log(this)
}
test(10, 20)
let bindfn = test.bind(obj, 10, 20);
bindfn()
test.call(obj, 50, 60)
test.apply(obj, [1, 2])

function Pthis() {
  this.say = function () {
    console.log(this);
  }
}
let pt = new Pthis();
pt.say.apply(obj)

//继承
function Person2(myName, myAge) {
  //当new 一个对象系统会自动进行如下操作
  //let obj = new Object();系统自动添加
  //let this = obj;系统自动添加
  this.name = myName;
  this.age = myAge;
  this.say = function () {
    console.log("My name is " + this.name, ',age ' + this.age)
  }
  //return this;系统自动添加
}
Person2.prototype.run = function () {
  console.log("it's proto func")
}

function Student(myName = '未知', myAge = 18, myScore = 0) {
  //let stu = new Object()
  //let this = stu;
  Person2.call(this, ...arguments); //Person.call(stu);也就是将Person中的this指向了stu；
  //经测试 Student.prototype = new Person2(); 已经将Person2中的属性方法继承给了Student.prototype，只是Student new实例的时候，无法重置this，因此无法将参数传递到
  this.score = myScore;
  this.study = function () {
    console.log("day day up")
  }
  //return this;
}
Student.prototype = new Person2();
Student.prototype.constructor = Student;
let stu = new Student('wxw', 27, 99)
stu.say();
stu.study();
console.log(stu.name, stu.age, stu.score)
stu.run()

/**多态：指事物的多种状态，同一件事件在不同的对象上，产生不同的结果；
 * 强类型语言：一般编译语言都是强类型语言，强类型语言要求变量的使用要严格符合定义，也就是定义时需规定变量的存储类型，不允许使用其他的数据类型；
 * 弱类型语言：一般解释型语言都是弱类型语言，定义变量时，不必定义其数据类型，允许使用各种数据类型，JS就是弱类型语言，所以不必多关注多态。
 * 在强类型语言中，多态一般配合继承使用；
 */

/**ES6类和对象
 * 定义类的区别：
 * ES6之前：通过构造函数来定义一个类
 * ES6：通过class关键字来定义类
 * 
 */
class PersonES6 {
  //构造实例属性
  constructor(myName = 'wx', myAge = 0) {
    this.name = myName;
    this.age = myAge;
    //设置实例方法
    this.say = function() {
      console.log("ES6 My name is " + this.name, ',age ' + this.age)
    }
  }
  //设置prototype 原型方法
  protoFunc() {
    console.log("ES6 prototype Func")
  }
  //ES6正式版不支持使用static定义静态属性，部分浏览器也不支持
  // static num = 666;
  //设置静态方法
  static run() {
    console.log('static run ' + PersonES6.num)
  }
}
// PersonES6.prototype = {name:'',say(){console.log('error')}}//错！！！通过ES6 创建的类 不能自定义该类的原型对象；
//因为不会将原有的属性或方法加入进去，比如protoFunc()方法，只能动态添加属性和方法
PersonES6.num = 666;
PersonES6.prototype.tage = 18;
let pes6 = new PersonES6('wxw', 27);
pes6.say();
pes6.__proto__.protoFunc();
console.log(PersonES6.num);
console.log(pes6.age);
console.log(pes6.__proto__.tage);
PersonES6.run();

/**ES6 继承*/
class StudentES6 extends PersonES6 {
  constructor(myName,myAge,myScore) {
    super(...arguments);//等同于 Person2.call(this, ...arguments);会找到父类对象，并将父类的this修改为当前对象。
    this.score = myScore;
  }
}

let ses6 = new StudentES6('wxw', 27, 99);
console.log('ES6 继承')
ses6.say();
ses6.__proto__.protoFunc();
StudentES6.prototype.protoFunc();
ses6.protoFunc();
console.log(StudentES6.num);
console.log(ses6.age);
console.log(ses6.__proto__.tage);
StudentES6.run();

/**获取对象类型*/
let gobj = new Object();
let garr = new Array();
let gp = new Person();
//typeof gobj 这种方法在以下三种数据类型只会返回object，因为构造函数本质是简单的工厂函数，是通过 new object创建的；
console.log(typeof garr)
//通过实例对象的原型对象的constructor访问该构造函数，获取该构造函数的name属性，来获取类型
console.log(garr.constructor.name,garr.__proto__.constructor.name)
//garr instanceof Array 这种方法可以判断某一对象是否由指定的构造函数构造出来的实例，注意：只要指定构造函数的原型对象出现在该对象的原型链中（例如继承），就认为是true
console.log(gp instanceof Person);
//isPrototypeOf 用于判断 某一原型对象是否是 一个 对象的原型对象，注意：只要指定的对象的原型链中存在该原型对象（例如继承），就认为是true
console.log(StudentES6.prototype.isPrototypeOf(ses6),PersonES6.prototype.isPrototypeOf(ses6))

//判断一个对象是否拥有某一个属性，不论属性实在自身类中还是原型对象中（构造函数的静态属性除外，因为其不属于该对象的属性）
console.log("name" in ses6,"width" in ses6,"num" in ses6)
//判断一个对象本身类中是否拥有某一个属性，在原型对象及其他地方不算
console.log(ses6.hasOwnProperty('name'),ses6.hasOwnProperty('tage'))

/*对象的增删改查*/
class PersonEdit{};
let pe = new PersonEdit();
//增加
pe.name = 'wx';
pe['age'] = 27;
pe.say = function() {
  console.log('obj say')
}
console.log('obj add',pe)
//删除
delete pe['age'];
console.log('obj delete',pe)
//改
pe['name'] = 'wxw';
console.log('obj change',pe)
//查询
pe.say();
pe['say']();
console.log('obj use',pe['name'])

/*对象遍历 */
//将指定对象中所有的属性和方法的名称取出来，依次赋值给key这个变量；注意：只会获取实例属性和方法；
for(let key in ses6) {
  if(ses6[key] instanceof Function) {//过滤掉方法
    continue;
  }
  // if(ses6[key].constructor.name == 'Function') {//过滤掉方法
  //   continue;
  // }
  console.log(key,ses6[key])
}

/**解构赋值
 * ES6数组解构赋值：[a,b,[c,d]] = [1,2,[3,4]]
 * 注意点：1、格式需相同；2、左右数据个数可不相等，如果右侧个数少，那么左边剩余变量赋值为undefined；3、左边变量可设默认值 [a=11,b=22,c=33] = [1,2] 
 * let [a,...b] = [1,2,3,4,5]  放在左边表示将剩余数据打包
 * let res = [...arr1,...arr2]放在右侧将数组中的值取出来
 * 
 * ES6对象结构赋值：左边要被赋值的变量名称，必须和对象的属性方法名称一致，才能够解构出来；
 */
let dobj = {
  dname: 'wx',
  dage: 27
}
let {dname,dage,dheight} = dobj;
console.log('解构赋值',dname,dage,dheight)

//解构赋值的应用场景
let darr = [1,3];
function dsum([a,b]) {
  return a + b
}
let dres = dsum(darr);
console.log('数组解构赋值应用：',dres);

function dsay({dname,dage}) {
  console.log('对象解构赋值应用：',dname,dage);
}
dsay(dobj);

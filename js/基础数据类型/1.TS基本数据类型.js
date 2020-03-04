(function () {
    // 1. boolean  布尔类型
    var isDone = false;
    isDone = true;
    // isDone = 2 不能将类型“2”分配给类型“boolean”。
    // 2. number  二进制，八进制，十六进制
    var num = 10;
    // 3.string
    var str = 'xxxx';
    // 4.null和undefined   null和undefined是任意类型的子类型，给任意类型赋值为null和undefined
    var u = null;
    // u = "abc"   //不能将类型“"abc"”分配给类型“null”
    var unde = undefined;
    // unde='xxx' 不能将类型“"xxx"”分配给类型“undefined”
    // 
    // 5.数组   指定数组及数组数据类型
    var list = [1, 2, 3];
    var list2 = [1, 2, 3]; //数组泛型
    // 6. 元组  Tuple  元组类型允许表示一个已知元素数量和类型的数组
    // 个元素的类型不必相同，数组的个数是一定的
    var t = [1, 'abc'];
    // t = ['abc',2，5]  error  类型不匹配&&个数不匹配
    // 7.枚举是对标准数据类型的一个补充
    var Color;
    (function (Color) {
        Color[Color["Red"] = 3] = "Red";
        Color[Color["Yellow"] = 4] = "Yellow";
        Color[Color["Blue"] = 5] = "Blue";
    })(Color || (Color = {}));
    var color = Color.Red; //根据名称取对应保存的数值
    var numColor = Color[0]; //根据数值读取对应的名称
    // 8.any(任意值)类型,存储的数据类型可以使人事类型的值
    var list3 = [1, 's', true];
    // 9. void(空值)  代表函数的返回值只能是undefined和null
    function fn() {
        // reutrn 2
        // return null
    }
    // 10.object
    function fn2(obj) {
        // return {}
        // return []
        // return () => {}
        // return undefined
        return null;
    }
    // fn2({})   fn2(1) error
    // 11.联合类型(Union Types)表示取值可以为多种类型中的一种
    // 需求:定义一个函数得到一个数字或者字符串值的字符串
    function toString1(x) {
        return x.toString();
    }
    // 需求:定义一个函数得到一个数字或字符串值的长度
    function getLength(x) {
        // return x.length   number类型没有length属性
        // 转类型断言
        return 1;
    }
})();

/**
 * 编译器自动编译会进行数据检查和结构  会出现不通过的情况
 * 通过类型断言的方式告诉编译器   我自己进行了检查
 * 类型断言的两种方式
 * 尖括号语法  && as语法
 *    let someValue:any = "this is a string";
 *    let strLength:number = (<string>someValue)bundleRenderer.renderToString
 *    let strLength2:number = (someValue as string).length
 */


 (() => {
    // 需求:定义一个函数得到一个数字或字符串值的长度
  function getLength(x:number|string):number {
    // return x.length   number类型没有length属性
    if ((<string>x).length) {
      return (x as string).length
    } else {
      return x.toString().length
    }
  }

 })()
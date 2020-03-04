/* 
接口:TS的核心原则之一是对值所具有的结构进行类型检查.
通过使用接口(interfaces)来定义对象的类型.
接口是  <对象> 的状态(属性)和行为(方法)的抽象(描述)
*/

 /*
 需求:创建人的对象,对人的属性进行一些约束
 id是number类型,必须有,只读
 name是string类型,必须有
 age是number类型,必须有
 sex是string类型,可以没有
 */

(() => {
  // readonly 写在属性名左侧约束 只读的,不能重新赋值
  // ? 写在属性名右侧  约束属性是否必须的
 interface Person{
   readonly id:number,
   name:string,
   age:number,
   sex?:string
 }
// 声明变量类型
 const user:Person = {
   id:283,
   name:'user',
   age:23,
  //  sex:'男'
 }

   
})()
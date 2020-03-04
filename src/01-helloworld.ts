
(function () {
  // TS文件无法直接运行，只能编译成js才能运行
  function getter(person:string):string {
    return 'Hello' + person
  }


  let user = 'user'
  console.log(getter(user))

  // let user2 = 2
  // console.log(getter(user2)) //error 类型“number”的参数不能赋给类型“string”的参数。
})()
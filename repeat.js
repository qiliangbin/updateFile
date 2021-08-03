class Repeat{
  constructor(params, count) {
    this.count = count  
    this.params = params
  }
  repeat() {
    let typeEle = this.judgeType(this.params)
    let repeatStr = ''
    let types = {
      isObj: '[object Object]',
      isNull: '[object Null]',
      isArr: '[object Array]',
      isUndefined: '[object Undefined]',
      isNumber: '[object Number]',
      isString: '[object String]'
    }
    if(typeEle === types.isUndefined || typeEle === types.isNull || typeEle === types.isObj) {
      return console.log('该类型不行🙅')
    }
    if(typeEle === types.isNumber){
      repeatStr = this.params.toString().repeat(this.count)
    }
    if(typeEle === types.isString) {
      repeatStr = this.params.repeat(this.count)
    }
    if(typeEle === types.isArr) {
      repeatStr = this.params.join(',').repeat(this.count)
    }
    return repeatStr
  }
  judgeType(params){
    let eleType = Object.prototype.toString.call(params)
    return eleType
  }
}
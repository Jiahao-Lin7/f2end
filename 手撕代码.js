//new 一个新的对象
function myNew() {
    var args = [...arguments]
    var constructor = args.shift()
    if (typeof constructor !== 'function') {
        throw new TypeError("error")
    }
    var res = null
    var newObj = Object.create(constructor.prototype)
    res = constructor.apply(newObj, args)
    flag = res && (typeof res == 'object' || typeof res == 'function')
    return flag ? res : newObj
}

//日期正则
var reg = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[0-1])$/ig
// （1）匹配 16 进制颜色值
var regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
// （2）匹配日期，如 yyyy-mm-dd 格式
var regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
// （3）匹配 qq 号
var regex = /^[1-9][0-9]{4,10}$/g;
// （4）手机号码正则
var regex = /^1[34578]\d{9}$/g;
// （5）用户名正则
var regex = /^[a-zA-Z\$][a-zA-Z0-9_\$]{4,16}$/;

//原型链
function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left)
    let prototype = right.prototype
    while (true) {
        if (!proto) return false
        if (proto === prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}

//call
function myCall(context) {
    let res = null
    if (typeof this !== 'function') {
        throw new TypeError('error')
    }
    let args = [...arguments].slice(1)
    context = context || window
    context.fn = this
    res = context.fn(...args)
    delete context.fn
    return res
}

//apply
function myApply(context) {
    let res = null
    if (typeof this !== 'function') {
        throw new TypeError('error')
    }
    context = context || window
    context.fn = this
    res = arguments[1] ? context.fn(...arguments[1]) : context.fn()
    delete context.fn
    return res
}

//bind
function myBind(context) {
    if (typeof this !== 'function') {
        throw new TypeError('error')
    }
    context = context || window
    let fn = this
    let args = [...arguments].slice(1)
    let func = function () {
        return fn.apply(this instanceof func ? this : context, args.concat(...arguments))
    }
    func.prototype = Object.create(fn.prototype)
    return func
}

//防抖
function debounce(func, wait) {
    let timer = null
    return function () {
        let args = [...arguments],
            context = this
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(() => {
            func.apply(context, args)
        }, wait)
    }
}

//节流                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
function throttle(func, wait) {
    let timer = null
    return function () {
        let args = [...arguments],
            context = this
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(context, args)
                timer = null
            }, wait)
        }
    }
}

//函数柯里化
function curry(fn, args) {
    return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args)
}

//手写Ajax请求
let xhr = new XMLHttpRequest()
xhr.open('Get', url, true)
xhr.onreadystatechange(() => {
    if (this.readyState !== 4) {
        return
    } else {
        if (this.state === 200) {
            handle(this.response)
        } else {
            console.error(this.stateText)
        }
    }
})
xhr.onerror = function () {
    console.error(this.statusText)
}
xhr.setRequestHeader('Accept', 'application/json')
xhr.responseType = 'json'
xhr.send(null)

//promise封装Ajax请求
function proAjax(url) {
    let promise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('Get', url, true)
        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) return
            if (this.state === 200) {
                resolve(this.response)
            } else {
                reject(this.stateText)
            }
        }
        xhr.onerror = function () {
            console.error(this.stateText)
        }
        xhr.responseType = 'json'
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.send(null)
    })
    return promise
}

//浅拷贝
Object.assign({}, obj)
obj1 = {
    ...obj2
}
arr.slice()
arr.concat()

function LiterCopy(obj) {
    if (!obj || typeof obj !== 'object') {
        return obj
    }
    let newObject = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObject[key] = obj[key]
        }
    }
    return newObject
}

//深拷贝
JSON.parse(JSON.stringify(obj))

function deepCopy(obj) {
    if (!obj || typeof obj !== 'object') {
        return obj
    }
    let newObject = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObject[key] = typeof obj === 'object' ? deepCopy(obj[key]) : obj[key]
        }
    }
    return newObject
}

//数组扁平化
arr.flat(Infinity)
arr.toString().split(',')

function flatten(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(flatten(arr[i]))
        } else {
            res.push(arr[i])
        }
    }
    return res
}
//数组去重
Array.from(new Set(arr))

function uniqueArray(arr) {
    let res = []
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1)
            res.push(arr[i])
        }
    }
    return res
}

//柯里化
var add = function (m) {
    var temp = function (n) {
        return add(m + n)
    }
    temp.toString = function () {
        return m
    }
    return temp
}

//Proxy进行数据监听
let onWatch = function (obj, getter, setter) {
    let handler = {
        get(target, property, receiver) {
            getter(target, property)
            return Reflect.get(target, property, receiver)
        },
        set(target, property, value, receiver) {
            setter(target, property, value)
            return Reflect.set(target, property, value)
        }
    }
    return new Proxy(obj, handler)
}
let proxy = onWatch(obj,
    (value, property) => {
        console.log(`value of ${property} is ${value}`);
    }, (value, property) => {
        console.log(`set value of ${property} to ${value}`);
    })

//手写Promise
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function myPromise(fn) {
    var self = this
    this.value = null
    this.state = PENDING
    this.onResolvedCallbacks = []
    this.onRejectCallbacks = []

    function resolve(value) {
        if (value instanceof myPromise) {
            return value.then(resolve, reject)
        }
        setTimeout(() => {
            if (self.state === PENDING) {
                self.state = RESOLVED
                self.value = value
                self.onResolvedCallbacks.forEach(callback => {
                    callback(value)
                })
            }
        }, 0)
    }

    function reject(value) {
        setTimeout(() => {
            if (self.state === PENDING) {
                self.state = REJECTED
                self.value = value
                self.onRejectCallbacks.forEach(callback =>{ callback(value)})
            }
        }, 0)
    }

    try {
        fn(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

myPromise.prototype.then = function (onResolved, onRejected) {
    onResolved = typeof onResolved === 'function' ?
        onResolved :
        function (value) {
            return value
        }

    onRejected = typeof onRejected === 'function' ?
        onRejected :
        function (error) {
            throw error
        }

    if (this.state === PENDING) {
        this.onResolvedCallbacks.push(onResolved)
        this.onRejectCallbacks.push(onRejected)
    }
    if (this.state === RESOLVED) {
        onResolved(this.value)
    }
    if (this.state === REJECTED) {
        onRejected(this.value)
    }
}
//PromiseAll
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            throw new TypeError('not array')
        }
        let counter = 0
        let res = []
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(value => {
                counter++
                res.push(value)
                if (counter === promises.length) {
                    return resolve(res)
                }
            }, error => {
                return reject(error)
            })
        }
    })
}
//PromiseRace
function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            // promises[i].then(resolve, reject)
            Promise.resolve(promises[i]).then(response => {
                resolve(response)
            },error => {
                reject(error)
            })
        }
    })
}

//驼峰命名
function trans(s) {
    return s.replace(/-\w/g, x => {
        return x.slice(1).toUpperCase()
    })
}

function Nesacs() {
    let newObject = null
    let res = null
    let args = [...arguments]
    let constructor = args.shift()
    if (typeof constructor !== 'function') {
        console.error('typeError')
    }
    newObject = Object.create(constructor.prototype)
    newObject.fn = this
    res = newObject.fn(...args)
    flag = res && (typeof res === 'function' || typeof res === 'object')
    return flag ? res : newObject
}

function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left)
    let prototype = right.prototype
    while (true) {
        if (!proto) return false
        if (proto === prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}

function myCall(context) {
    let args = [...arguments].slice(1)
    let res = null
    if (typeof this !== 'function') {
        console.error('error')
    }
    context = context || window
    context.fn = this
    res = context.fn(...args)
    delete context.fn
    return res
}

function myApply(context) {
    if (typeof this !== 'function') {
        console.error('error')
    }
    let args = [...arguments]
    let res = null
    context = context || window
    context.fn = this
    if (args[1]) {
        res = context.fn(...args[1])
    } else {
        res = context.fn()
    }
    delete context.fn
    return res
}

function myBind(context) {
    if(typeof this !== 'function'){
        console.error('type error')
    }
    var args = [...arguments].slice(1)
    context = context || window
    var self = this
    var fn = function(){
        return self.apply(this instanceof fn ? this : context, args.concat(...arguments))
    }
    fn.prototype = Object.create(self.prototype)
    return fn
}

function throttle(fn, wait) {
    let timer = null
    return function () {
        let args = [...arguments],
            context = this
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, wait)
    }
}

function debounce(fn, wait) {
    let timer = null
    return function () {
        let args = [...arguments],
            context = this
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(context, args)
                timer = null
            }, wait)

        }
    }
}

function curry(fn, args) {
    return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args)
}

function type(obj) {
    if (obj === null) {
        return 'null'
    }
    if (typeof obj === 'object') {
        let type = Object.prototype.toString.call(obj)
        type = type.slice(8, -1).toLowerCase()
        return type
    } else {
        return typeof obj
    }
}


var dfs = function (i, j, board, k, word, visited) {
    if (k === word.length) return true
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] !== word[k] || visited[i][j]) return false
    visited[i][j] = true
    let res = dfs(i + 1, j, board, k + 1, word, visited) || dfs(i - 1, j, board, k + 1, word, visited) || dfs(i, j + 1, board, k + 1, word, visited) || dfs(i, j - 1, board, k + 1, word, visited)
    visited[i][j] = false
    return res
}

var movingCount = function (m, n, k) {
    let count = 0
    const visited = new Array(m).fill(false)
    for (let i = 0; i < m; i++) {
        visited[i] = new Array(n).fill(false)
    }
    count = Semicount(0, 0, m, n, k, visited)
    return count
};

var Semicount = function (i, j, m, n, k, visited) {
    let count = 0
    if (i >= 0 && j >= 0 && i < m && j < n && getSum(i, j) <= k && !visited[i][j]) {
        visited[i][j] = true
        count = 1 + Semicount(i + 1, j, m, n, k, visited) +
            Semicount(i - 1, j, m, n, k, visited) +
            Semicount(i, j + 1, m, n, k, visited) +
            Semicount(i, j - 1, m, n, k, visited)
    }
    return count
}

var getSum = function (i, j) {
    let numI = i % 10 + Math.floor(i / 10)
    let numJ = j % 10 + Math.floor(j / 10)
    return numI + numJ
}

function myIn(fn, wait) {
    function IN() {
        fn()
        setTimeout(IN, wait)
    }
    setTimeout(IN, wait)
}

function qianxu(root) {
    let res = [root]
    let ans = []
    while (res.length !== 0) {
        let node = res.pop()
        if (node.right) res.push(node.right)
        if (node.left) res.push(node.left)
        ans.push(node.val)
    }
    return res
}

function zhongxu(root) {
    let res = []
    let stack = []
    while (stack.length !== 0 || !root) {
        if (root) {
            stack.push(root)
            root = root.left
        }
        let node = stack.pop()
        res.push(node.val)
        root = root.right
    }
}

function a() {
    let res = []
    function trans(root) {
        if (!root) {
            res.push(root.val)
            if (root.left) {
                trans(root.left)
            }
            if (root.right) {
                trans(root.right)
            }
        }

    }
    trans(root)
}

function XXX(root){
    let res = []
    function XX(root){
        if(!root){
            res.push(root.val)
            if(root.left){
                XX(root.left)
            }
            if(root.right){
                XX(root.right)
            }
        }
    }
    XX(root)
    return res
}

var res = []
    var verify = []
    var arr = s.split('').sort()
    var temp = []
    var cal = function(s,i,n,verify){
        if(i === n){
            res.push(temp.join(''))
            return
        }
        for(let j = 0; j < n; j++){
            if(verify[j] || (j > 0 && !verify[j-1] && arr[j-1] === arr[j])){
                continue
            }
            verify[j] = true
            temp.push(arr[j])
            cal(s,i+1,n,verify)
            temp.pop()
            verify[j] = false
        }
    }
    cal(s,0,s.length,verify)
    
    return res
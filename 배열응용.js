const arr = ['가', '나', '다', '라', '마', '라']
// while (true) {
//   let i = arr.indexOf('라')
//   if (i === -1) break
//   console.log(i)
//   arr.splice(i,1)
// }
// console.log(arr)
console.log(arr)
while (arr.indexOf('라')> -1) {
  arr.splice(arr.indexOf('라'), 1)
}
console.log(arr)
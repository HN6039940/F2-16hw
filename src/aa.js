const arys = [1,2,3,4,5]
// sumary=>(関数内容);==(sumary)=>{return 関数内容};
const sumArys =arys.map(sumary=>sumary + 1);

console.log(sumArys)

// map関数で新しい配列を作成する。

// 
const ary =[1,2,3]
ary.push(4)
// push関数

const ary2 = ary.slice(0,2)
// arryのインデックス0~1を持ってきて新しい配列に格納
// slice関数
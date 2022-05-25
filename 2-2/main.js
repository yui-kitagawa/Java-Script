function myfunc(){
	//idが「target」の要素を取得して、変数「change」に代入
let change = document.getElementById('target');
    // textComtentを使って「こんにちは」で書き換える
change.textContent = 'こんにちは！';
}

let elems = document.getElementsByTagName('h1');
// htmlを上から順番に、探した時に、最初に見つかったh1タグが0番目のようそとして取得される
console.log(elems[0]);
console.log(elems[1]);

let boxs = document.getElementsByName('box');
for( let i = 0; i < boxs.length; i++){
	console.log(boxs[i]);
}
//「box4」はname属性が「box」ではないので出力はされない
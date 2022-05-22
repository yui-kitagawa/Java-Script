//課題
class Taiyaki {

	constructor(name){
		this.name = name;
	}
	contents(){
		console.log(`中身は${this.name}です`);    /* テンプレートリテラル */
	}
}
let annko = new Taiyaki('あんこ');
annko.contents();
let  cream = new Taiyaki('クリーム');
annko.contents();
let  cheese = new Taiyaki('チーズ');
annko.contents();
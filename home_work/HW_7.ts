//1

let c1: number;
let c2: string;
let c3: any[];
let c4: string[];


const check_1: number = c1 + 5;
const check_2 = c2.substring(0);
const check_3: boolean = c3[0];
const check_4 = c3[1] + 5;
const check_5 = c4.push("lalaka");

//2
const a: number = 1;
const b: string[] = [];
const c: number[] = [];
const d: number[] = [];

const q1:number = a;
const q2:number = d[0];
const q3:number = q2 + q1 + d.length;
const q4:number = b.length + b[2].length;
const q5:boolean = b === c[1][0];
const q6:boolean = c[1][0] === c[1][0][0];
const q7:boolean = q6 === q5 === c[1][1];
//const q8: null = c[0]
// 0; //  null может быть присвоен только переменным, объявленным с явным типом null

//3
let e:any ;

const e1 = e;
e.push("lalaka");
const e2: boolean = e[2];
const e3: [10, 15] = e;
const e4: [string] = e;
const e5: Array<[string | 10]> = [...e[50]];
//4
let b1: { f: string };
b1 = { f: "lalaka" + "malaka" };

let b2:  {f1?:number[], f2: { f3: string } };
b2 = { f1: [10], f2: { f3: "malaka" } };

let b3:  { f1: boolean };
b3 = { f1: false };
//// @ts-expect-error
b3.f1 = true;

let b4: { [key: string]: boolean } = { a: true, b: false };
b4["c"] = false;
b4["q"] = false;
b4["a" + "b"] = true;

//5
function a1(num:number):void { }
function a2(num:number | string, boolean: boolean):void { }
function a3(arg?: { f1: string } | {}): void { }
function a4():number { return 2}
function a5(...arg:string[]):string { return }

a1(10);
a1(5 + 2);
a2(10, true);
a2("lalaka", false);
a3();
a3({});
a3({ f1: "malaka" });
const _a4: number = a4();
const _a5: string = a5(...["lalaka", "malaka"]);



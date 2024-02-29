//1
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var c1;
var c2;
var c3;
var c4;
var check_1 = c1 + 5;
var check_2 = c2.substring(0);
var check_3 = c3[0];
var check_4 = c3[1] + 5;
var check_5 = c4.push("lalaka");
//2
var a = 1;
var b = [];
var c = [];
var d = [];
var q1 = a;
var q2 = d[0];
var q3 = q2 + q1 + d.length;
var q4 = b.length + b[2].length;
var q5 = b === c[1][0];
var q6 = c[1][0] === c[1][0][0];
var q7 = q6 === q5 === c[1][1];
//const q8: null = c[0]
// 0; //  null может быть присвоен только переменным, объявленным с явным типом null
//3
var e;
var e1 = e;
e.push("lalaka");
var e2 = e[2];
var e3 = e;
var e4 = e;
var e5 = __spreadArray([], e[50], true);
//4
var b1;
b1 = { f: "lalaka" + "malaka" };
var b2;
b2 = { f1: [10], f2: { f3: "malaka" } };
var b3;
b3 = { f1: false };
//// @ts-expect-error
b3.f1 = true;
var b4 = { a: true, b: false };
b4["c"] = false;
b4["q"] = false;
b4["a" + "b"] = true;
//5
function a1(num) { }
function a2(num, boolean) { }
function a3(arg) { }
function a4() { return 2; }
function a5() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    return;
}
a1(10);
a1(5 + 2);
a2(10, true);
a2("lalaka", false);
a3();
a3({});
a3({ f1: "malaka" });
var _a4 = a4();
var _a5 = a5.apply(void 0, ["lalaka", "malaka"]);
console.log(1111);

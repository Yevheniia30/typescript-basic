var btn = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var add = function (num1, num2) {
    return num1 + num2;
};
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    console.log(add(+(input1 === null || input1 === void 0 ? void 0 : input1.value), +(input2 === null || input2 === void 0 ? void 0 : input2.value)));
});

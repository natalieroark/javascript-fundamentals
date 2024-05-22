// console.log(JSON.parse("{a: 'a', b: 'b', c: 'c'}"));

console.log("     Y     ".trim().length);

console.log(new Date().toLocaleDateString());

console.log(...["a", "b", "c", "d"]);

const obj1 = { a: "a", b: "b", c: "c" };
const obj2 = { ...obj1 };
console.log(obj2);

console.log("            ".trim() || false);

console.log(/^[0-9]*$/.test(false));

const newArr = [{ acctNum: 1} , { acctNum:2}].filter((each) => {
    each.acctNum != 1;
});
console.log(newArr);
function capitalizeWord(str) {
  //   return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
//   /\b\w/g là một biểu thức chính quy (regex) được sử dụng để tìm ký tự đầu tiên của mỗi từ trong chuỗi.
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWord("hello WORLD"));
console.log(capitalizeWord("rIKKei acaDEMy"));

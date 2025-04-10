let hour = Number(prompt("Nhập giờ (0-23):"));
let minute = Number(prompt("Nhập phút (0-59):"));
let second = Number(prompt("Nhập giây (0-59):"));

if (
  hour < 0 ||
  hour > 23 ||
  minute < 0 ||
  minute > 59 ||
  second < 0 ||
  second > 59
) {
  alert("Giá trị không hợp lệ");
} else {
  let period = hour >= 12 ? "PM" : "AM";
  // if(hour >= 12){
  //   period = "PM";
  // } else {
  //   period = "AM";
  // }

  let hour12 = hour % 12;
  hour12 = hour12 === 0 ? 12 : hour12; 

//The padStart() method pads a string from the star
// let text = "5";
// text = text.padStart(4,"0"); // 0005

  let result = (`${hour12.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")} ${period}`);

  alert(`${result}`);
}

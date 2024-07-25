// Mảng ban đầu
// Bài 1
let m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100];

// Xóa chữ
m1 = m.filter(item => typeof item === 'number');

console.log(m1);

// Tạo mảng mSquared
let mSquared = m1.map(item => Math.pow(item, 2));

console.log(mSquared);

// Hiển thị kiểu dữ liệu của các phần tử trong mảng ban đầu
m.forEach(item => {
    console.log(`${item}: ${typeof item}`);
});

// Bài 2
// Chuỗi ban đầu
const originalString = " High knowledge, high return";

// Chuyển chuỗi thành mảng
let arr = originalString.split('');

console.log(arr);

// Xóa bỏ khoảng trắng và chuyển chữ hoa thành chữ thường
arr = arr.filter(char => char !== ' ').map(char => char.toLowerCase());

console.log(arr);

// Chuyển đổi mảng thành chuỗi để hiển thị kết quả cuối cùng
const finalString = arr.join('');

console.log(finalString);
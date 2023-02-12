// Button
// const $button = $(`<button>Click Me!</button>`);
// $button.appendTo('body');


// Task 1
// $button.click(function () {
//     alert('Welcome to my page!');
// });

// Task 2
// const $button2 = $(`#button`);
// $button2.click(function () {
//     let message = $('#text-box').val();
//     alert(message);
// });


// Task 3
// let $div = $("#div");
// $div.hover(function () {
//     div.style.backgroundColor = "red";
// }, function () {
//     div.style.backgroundColor = "black";
// });


// Task 4
// const $p = $('#p');
// $p.click(function () {
//     const vals = "0123456789ABCDEF";
//     let colorString = "#";
//     for (let i = 0; i < 6; i++) {
//         let char = vals[Math.floor(Math.random() * vals.length)];
//         colorString += char
//     };
//     $('p').css('color', colorString);
// });


// Task 5
// const $button = $("#button");
// const $div = $("#div");
// $button.click(function () {
//     let $span = $("<span>Josh</span>");
//     $($span).appendTo($div);
// });


// Task 6
const $friends = ["Chad", "Dylan", "Josh", "Dillon", "Nels", "Anna", "Kacie", "Kevin", "Austin", "Ginger"];
const $button = $("#button");
const $ul = $("#ul");
$($button).click(function () {
    for (let i = 0; i < $friends.length; i++) {
        let $li = $("<li>" + ($friends[i]) + "</li>");
        $($li).appendTo($ul);
    }
});
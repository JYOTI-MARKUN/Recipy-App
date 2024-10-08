const notification = document.querySelector(".Notification-Num");
const unread_msg = document.querySelectorAll(".unread");
const mark_read = document.querySelector(".mark-read");

// const msg = document.querySelector(".messages-container");
// const closest_msg_div = unread_msg.closest(".msg-text");
// const msg_container = document.querySelector(".messages-container")

// console.log((unread_msg.closest(".msg-text")));
// console.log(notification.innerText);




mark_read.addEventListener("click",(e)=>{
notification.innerText = 0;
unread_msg.forEach((p)=>{p.remove()});
})

// msg_container.addEventListener("click",(e)=>{
//     console.log(e.target.closest(".msg-text"))
// })
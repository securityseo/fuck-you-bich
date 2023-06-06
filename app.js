const buttons = document.querySelectorAll(".button");
const emoji = document.getElementById("emoji");

for (const button of buttons) {
  button.addEventListener("click", () => {
    button.classList.toggle("button--active");
    console.log("emoji html ", emoji.innerHTML)
    emoji.innerHTML === "🖕🏻" ? emoji.innerHTML= "🤪" : emoji.innerHTML = "🖕🏻";
 
  });
}

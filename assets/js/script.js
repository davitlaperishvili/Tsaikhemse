let add_buttons = document.getElementsByClassName('add');
// console.log(add_buttons);
let bl = add_buttons.length;
//console.log(bl);
for (let i = 0; i < bl; i++){
   //console.log(i)
   add_buttons[i].addEventListener('click',function() {
      //console.log(i)
      this.classList.toggle('active');
      if(this.classList.contains('active')){
         this.textContent = "დამატებულია";
      } else{
         this.textContent = "დამატება";
      } 
   });
}

let menu_button = document.getElementsByClassName('MiniMenu');
//console.log(menu_button);
let item = menu_button.length;
//console.log(item);
let open_menu = document.getElementsByClassName('nav');
let menu = open_menu.length;
//console.log(menu);
// function OpenMenu() {
//    document.body.children[0].children[1].classList.toggle('open');
// }

for(let i = 0; i < item; i++){
   //console.log(i);'
   menu_button[i].addEventListener('click', function() {
      document.body.children[0].children[1].classList.toggle('open');
   });
}

// document.getElementById("MiniMenu").addEventListener("click", displayOpen);

// function displayOpen() {
//     document.getElementsByClassName("nav").classList.toggle('open');
// }
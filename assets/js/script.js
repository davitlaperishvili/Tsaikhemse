let add_buttons = document.getElementsByClassName('add');
let bl = add_buttons.length;
for (let i = 0; i < bl; i++){
   add_buttons[i].addEventListener('click',function() {
      this.classList.toggle('active');
      if(this.classList.contains('active')){
         this.textContent = "დამატებულია";
      } else{
         this.textContent = "დამატება";
      } 
   });
}

   // Menu-Button
let menu_button = document.getElementsByClassName('MiniMenu');
let item = menu_button.length;

for(let i = 0; i < item; i++){
   
   menu_button[i].addEventListener('click', function() {
      document.body.children[0].children[1].classList.toggle('open');
   });
}


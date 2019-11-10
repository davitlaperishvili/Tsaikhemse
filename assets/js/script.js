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
   



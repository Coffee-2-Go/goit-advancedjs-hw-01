import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let e={email:"",message:""};const s=document.querySelector(".feedback-form"),t=s.querySelector('input[name="email"]'),r=s.querySelector('textarea[name="message"]'),l=localStorage.getItem("feedback-form-state");l&&(e=JSON.parse(l),t.value=e.email,r.value=e.message);s.addEventListener("input",a=>{const{name:m,value:i}=a.target;e[m]=i,localStorage.setItem("feedback-form-state",JSON.stringify(e))});s.addEventListener("submit",a=>{if(a.preventDefault(),e.email=t.value.trim(),e.message=r.value.trim(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},t.value="",r.value=""});function o(a){a.addEventListener("focus",()=>{a.setAttribute("placeholder","Type area")}),a.addEventListener("blur",()=>{a.setAttribute("placeholder","")})}o(t);o(r);
//# sourceMappingURL=2-form.js.map

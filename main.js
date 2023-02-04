(()=>{"use strict";const e=function(){const e=document.querySelector("main");e.innerText="";const t=document.createElement("h1");t.classList.add("content-headings"),t.innerText="Inbox",e.appendChild(t);const n=document.createElement("div");n.classList.add("tasks"),n.innerText="Example task here",e.appendChild(n);const o=document.createElement("button");return o.innerText="Add todo",e.appendChild(o),o.addEventListener("click",(()=>{document.querySelector("#overlay").style.display="block",document.querySelector("#todo-form").style.display="block"})),e};(function(){const e=document.querySelector("#content"),t=function(){const e=document.createElement("header"),t=document.createElement("img");t.setAttribute("src","images/logo-transparent.png"),t.setAttribute("alt","To-do, Will-do logo"),t.setAttribute("class","logo"),e.appendChild(t);const n=document.createElement("img");return n.setAttribute("src","images/menu.svg"),n.setAttribute("alt","open or close navigation sidebar"),n.setAttribute("class","hamburger"),e.appendChild(n),e}(),n=document.createElement("main"),o=function(){const e=document.createElement("footer"),t=document.createElement("div");t.classList.add("footer-text"),t.innerText="Kieran Garvey - Odin Project 2023",e.appendChild(t);const n=document.createElement("img");return n.setAttribute("src","images/icons/github.svg"),n.setAttribute("alt","Link to github"),n.setAttribute("title","Go to my Github page"),n.addEventListener("click",(()=>{window.location.href="https://github.com/KGarvey92"})),e.appendChild(n),e}();e.appendChild(t),e.appendChild(n),e.appendChild(o);const d=function(){const e=document.createElement("nav");e.classList.add("show-nav");const t=document.createElement("ul");t.classList.add("nav-btns");const n=document.createElement("li");n.setAttribute("id","nav-inbox"),n.innerText="Inbox",t.appendChild(n);const o=document.createElement("li");o.setAttribute("id","nav-todos"),o.innerText="All Todos",t.appendChild(o);const d=document.createElement("li");d.setAttribute("id","nav-projectBtn"),d.innerText="Projects",t.appendChild(d),e.appendChild(t);const i=document.createElement("ul");i.classList.add("nav-projects");const c=document.createElement("li");return c.innerText="+",i.appendChild(c),e.appendChild(i),e}();e.appendChild(d),document.querySelector(".hamburger").addEventListener("click",(()=>{const e=document.querySelector("nav");"none"===e.style.display?e.style.display="block":e.style.display="none",e.classList.toggle("show-nav")})),function(){const e=document.querySelector("body"),t=document.createElement("div");t.setAttribute("id","overlay"),e.appendChild(t);const n=document.createElement("form");n.setAttribute("id","todo-form");const o=document.createElement("div");o.setAttribute("id","form-inputs");const d=document.createElement("label");d.setAttribute("for","title-input"),d.textContent="Todo:",o.appendChild(d);const i=document.createElement("input");i.setAttribute("id","title-input"),i.setAttribute("type","text"),o.appendChild(i);const c=document.createElement("label");c.setAttribute("for","due-date-input"),c.textContent="Due Date:",o.appendChild(c);const r=document.createElement("input");r.setAttribute("id","due-date-input"),r.setAttribute("type","date"),o.appendChild(r);const s=document.createElement("label");s.setAttribute("for","description-input"),s.textContent="Description:",o.appendChild(s);const a=document.createElement("textarea");a.setAttribute("id","description-input"),a.setAttribute("rows","3"),o.appendChild(a);const l=document.createElement("label");l.setAttribute("for","priority-select"),l.textContent="Priority:",o.appendChild(l);const u=document.createElement("select");u.setAttribute("id","priority-select");const p=document.createElement("option");p.setAttribute("value","high"),p.textContent="High",u.appendChild(p);const m=document.createElement("option");m.setAttribute("value","normal"),m.setAttribute("selected",""),m.textContent="Normal",u.appendChild(m);const h=document.createElement("option");h.setAttribute("value","low"),h.textContent="Low",u.appendChild(h),o.appendChild(u),n.appendChild(o);const b=document.createElement("button");b.setAttribute("type","submit"),b.textContent="Submit",n.appendChild(b),e.appendChild(n),t.addEventListener("click",(e=>{e.target===t&&(t.style.display="none",n.style.display="none")})),b.addEventListener("click",(e=>{e.preventDefault(),t.style.display="none",n.style.display="none"}))}()})(),e();const t=document.querySelector("#nav-inbox"),n=document.querySelector("#nav-todos"),o=document.querySelector("#nav-projectBtn");t.addEventListener("click",e),n.addEventListener("click",(function(){const e=document.querySelector("main");e.innerText="";const t=document.createElement("h1");t.classList.add("content-headings"),t.innerText="Todos",e.appendChild(t);const n=document.createElement("div");return n.classList.add("tasks"),n.innerText="Example todos here",e.appendChild(n),e})),o.addEventListener("click",(function(){const e=document.querySelector("main");e.innerText="";const t=document.createElement("h1");t.classList.add("content-headings"),t.innerText="Projects",e.appendChild(t);const n=document.createElement("div");return n.classList.add("projects"),n.innerText="Example project here",e.appendChild(n),e}))})();
document.addEventListener("DOMContentLoaded",function(){document.querySelector("#burger").addEventListener("click",function(){document.querySelector("#menu").classList.toggle("is-active")}),document.querySelector("#close").addEventListener("click",function(){document.querySelector("#menu").classList.remove("is-active")}),document.querySelectorAll(".section-work__item_step").forEach(function(e){e.addEventListener("click",function(e){const t=e.currentTarget.dataset.path;document.querySelectorAll(".step__content").forEach(function(e){e.classList.remove("step__content_aktive")}),document.querySelector(`[data-target="${t}"]`).classList.add("step__content_aktive"),document.querySelectorAll(".section-work__item_step").forEach(function(e){e.classList.remove("step")}),this.classList.add("step")})})}),lazyload();var swiper=new Swiper(".swiper-container",{direction:"horizontal",loop:!0,slideToClickedSlide:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:7e3}});$(function(){$("#accordion").accordion({collapsible:!0,heightStyle:"content",active:!1})});
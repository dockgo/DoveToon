$(function(){$(document).ready(function(){var o=1;$(".NoMarked").click(function(){var a=$(this);if(o==1){console.log(a.data('id'),a.data('link'));console.log('test');var i=a.data('id');var t=a.data('title');var n=a.data('link');var e=a.data('borkimage');var r=a.data('updated');d(i,t,n,e,r);o=2}else{var i=a.data('id');c(i);o=1}});$(".marked").click(function(){var a=$(this);if(o==1){var i=a.data('id');c(i);o=2}else{var i=a.data('id');var t=a.data('title');var n=a.data('link');var e=a.data('borkimage');var r=a.data('updated');d(i,t,n,e,r);o=1}});var a=$('.button-remove');$(a).click(function(){var a=$(this).closest(".container-badan-bookmark");var i=a.data("id");a.hide(500,function(){c(i);t();localStorage.removeItem(`post-${i}`)})})});var o=function(a){localStorage.i=JSON.stringify(a)};var d=function(a,i,t,n,e){var r=s();r.push({id:a,title:i,link:t,t:n,updated:e});o(r)};var s=function(){try{var a=JSON.parse(localStorage.i);return a}catch(i){return[]}};function t(){let a=localStorage.getItem("konten");a=JSON.parse(a);let i=document.querySelector('#bookmark-area-badan');if(a&&i){i.innerHTML='';Object.values(a).map(a=>{i.innerHTML+=`
        <div class="container container-badan-bookmark" data-id="${a.id}">
 <div class="container container-badan-bookmark-v1">
  <a href="${a.link}" tabindex="0" class="container container-badan-post" style="opacity: 1; transform: scale(1);">
   <div class="container area-thumbnail">
    <div class="container area-thumbnail-v1">
     <div class="container thumbnail-post">
        <img height="100%" loading="eager" src="${a.t}" width="100%" style="object-fit: cover;">
     <div class="container border-image">
      <div class="container border-image-v1">
       <div class="container border-image-v2"></div>
      </div>
     </div>
    </div>
   </div>
  </div>
    <div class="container pembatas-16x16"></div>
   <div class="container info-post-in-bookmark">
    <h6 aria-level="6" dir="auto" role="heading" class="css-post-bookmark">${a.title}</h6>
    <div class="container pembatas-8x8"></div>
    <div dir="auto" class="css-updated-post">${a.updated}</div>
    <div class="container pembatas-8x8"></div>
    <div dir="auto" class="css-sinopsi"></div>
        </div>
  </a>
  <div class="container pembatas-16x16"></div>
  <div tabindex="0" class="container button-remove" style="opacity: 1; padding: 4px; transform: scale(1);">
   <svg fill="#242424" height="28" viewBox="0 0 20 20" width="28" class="r-1q142lx"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.96968 14.9697L5.03034 16.0303L10 11.0607L14.9697 16.0303L16.0303 14.9697L11.0607 10L16.0303 5.03033L14.9697 3.96967L10 8.93934L5.03034 3.96968L3.96968 5.03033L8.93935 10L3.96968 14.9697Z"></path></svg>
  </div>
 </div>
</div>
        `})}}t();var c=function(t){var a=s();a=$.o(a,function(a,i){return a.id!=t});o(a)}})();

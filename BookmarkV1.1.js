$(function() {
  $(document).ready(function () {

    var action = 1;
    $(".NoMarked").click(function()
    {
    var $el = $(this);
    if ( action == 1 ) {
            console.log($el.data('id'), $el.data('link'));
            console.log('test')
            var id = $el.data('id');
            var title = $el.data('title');
            var ling = $el.data('link');
            var borkimage = $el.data('borkimage');
            var updated = $el.data('updated');
            addarticle(id, title, ling, borkimage, updated);
            action = 2;
        } else {
            var id = $el.data('id');
            removearticle(id)
            action = 1;
        }
 
  });
    
  $(".marked").click(function()
    {
    var $el = $(this);
    if ( action == 1 ) {
            var id = $el.data('id');
            removearticle(id)
            action = 2;
        } else {
          var id = $el.data('id');
            var title = $el.data('title');
            var ling = $el.data('link');
            var borkimage = $el.data('borkimage');
            var updated = $el.data('updated');
            addarticle(id, title, ling, borkimage, updated);
          
            action = 1;
        }
 
  });
  var event = $('.button-remove');

  $(event).click(function() {
  var $el = $(this).closest(".container-badan-bookmark");
  var id = $el.data("id");
  $el.hide(500, function(){
  removearticle(id)
  displayCart()
  localStorage.removeItem(`post-${id}`);
  });
  });
 });

 var setAllkonten = function(konten){
    localStorage.konten = JSON.stringify(konten);
 }
 var addarticle = function(id, title, ling, borkimage, updated) {
    var konten = getAllkonten();
    konten.push({
    id: id,
    title: title,
    link: ling,
    borkimage: borkimage,
    updated: updated
    });
    setAllkonten(konten);
 }

 var getAllkonten = function(){
    try {
    var konten = JSON.parse(localStorage.konten);
    return konten;
    } catch (e) {
    return [];
    }
 }

 function displayCart(){
  
    let cartItem = localStorage.getItem("konten");
    cartItem = JSON.parse(cartItem);
    let productContainer = document.querySelector('#bookmark-area-badan');

    if( cartItem && productContainer ){
        productContainer.innerHTML = '';
        Object.values(cartItem).map(item => {productContainer.innerHTML += `
        <div class="container container-badan-bookmark" data-id="${item.id}">
 <div class="container container-badan-bookmark-v1">
  <a href="${item.link}" tabindex="0" class="container container-badan-post" style="opacity: 1; transform: scale(1);">
   <div class="container area-thumbnail">
    <div class="container area-thumbnail-v1">
     <div class="container thumbnail-post">
        <img height="100%" loading="eager" src="${item.borkimage}" width="100%" style="object-fit: cover;">
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
    <h6 aria-level="6" dir="auto" role="heading" class="css-post-bookmark">${item.title}</h6>
    <div class="container pembatas-8x8"></div>
    <div dir="auto" class="css-updated-post">${item.updated}</div>
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
        `});
    }
 }
 displayCart();

 var removearticle = function(id){
    var konten = getAllkonten();
    konten = $.grep(konten, function(value, index) {
      return value.id != id;
    });
    setAllkonten(konten);
  }
})();

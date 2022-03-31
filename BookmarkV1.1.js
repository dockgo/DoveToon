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
            var borkimage = $el.data('borkimage');;
            addarticle(id, title, ling, borkimage);
            action = 2;
        } else {
            var id = $el.data('id');
            removearticle(id)
            action = 1;
        }
 
  });
  var event = $('.delmark');

  $(event).click(function() {
  var test = $(this).closest(".bs")
  var $el = $(this).closest(".bsx");
  var id = $el.data("id");
  test.hide(500, function(){
  removearticle(id)
  displayCart()
  });
  });
 });

 var setAllkonten = function(konten){
    localStorage.konten = JSON.stringify(konten);
 }
 var addarticle = function(id, title, ling, borkimage) {
    var konten = getAllkonten();
    konten.push({
    id: id,
    title: title,
    link: ling,
    borkimage: borkimage
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
        <div class="bs">
        <div data-id="${item.id}" id="${item.id}" class="bsx">
        <div class="delmark">Delete</div>
        <a href="${item.ling}" title="${item.title}">
        <div class="limit">
        <div class="ply"></div>
        <span class="type"></span>
        <img src="${item.borkimage}" class="ts-post-image wp-post-image attachment-medium size-medium" loading="lazy" width="165" height="225"/>
        </div>
        <div class="bigor">
        <div class="tt">${item.title}</div>

        </div>
        </a>
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

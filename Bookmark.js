function ready() {

  let carts = document.querySelectorAll('.NoMarked');

  for (let i = 0; i < carts.length; i++) {
      var button = carts[i]
      button.addEventListener('click', () => {
          console.log('add to carts data');
          addToCartClicked(carts[i])
      })
  }

  var addToCartClicked = function(carts) {
          var id = carts.getAttribute('post-id')
          var title = carts.getAttribute('post-name')
          var ling = carts.getAttribute('post-url')
          var borkimage = carts.getAttribute('post-img')
          var update = carts.getAttribute('updated')
          addarticle(id, title, ling, borkimage, update)
  }


  var setAllkonten = function(konten){
      localStorage.konten = JSON.stringify(konten);
  }
  var addarticle = function(id, title, ling, borkimage, update) {
      var konten = getAllkonten();
      konten.push({
      id: id,
      title: title,
      link: ling,
      borkimage: borkimage,
      updated: update
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
          <a href="${item.link}" title="${item.title}">
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
  
  let Removecarts = document.querySelectorAll('.delmark');

  for (let i = 0; i < Removecarts.length; i++) {
    var button = Removecarts[i]
        button.addEventListener('click', selectData)
  }
  
  function selectData(index) {  
        let webtask = localStorage.getItem("konten");
        let taskObj = JSON.parse(webtask);
        taskObj.splice(index, 1);
        localStorage.setItem("konten", JSON.stringify(taskObj));
        displayCart()
  }
  
  let remcarts = document.querySelectorAll('.marked');

  for (let i = 0; i < remcarts.length; i++) {
    var button = remcarts[i]
    button.addEventListener('click', () => {
        console.log('add to carts data');
        rencat(remcarts[i])
    })
}

 var rencat = function (remcarts){
    var id = remcarts.getAttribute('post-id')
    console.log(id)
    removearticle(id)
 }

  var removearticle = function(id){
    var konten = getAllkonten();
    konten = $.grep(konten, function(value, index) {
      return value.id != id;
    });
    setAllkonten(konten);
  }

}

ready()



var ScaleImage = function(){};

ScaleImage.prototype = {
  init: function() {
    var self = this;
    var exampleImg = document.querySelector('.example-image');
    var maskEl = document.querySelector('.img-preview');
    exampleImg.addEventListener('click', function() {
      maskEl.style.display = 'flex';
      self.initPreviewEvent();
    })
  },
  initPreviewEvent: function() {
    var maskEl = document.querySelector('.img-preview');
    var previewImg = document.querySelector('.img-preview img');

    maskEl.addEventListener('click', function() {
      maskEl.style.display = 'none';
    })
  }
}

window.ScaleImage = new ScaleImage();

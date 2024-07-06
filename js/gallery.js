function upDate(previewPic){
  console.log('previewPic.src is: ' + previewPic.src);
  console.log('previewPic.alt is: ' + previewPic.alt);
  document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
  document.getElementById('image').innerHTML = previewPic.alt;
    }

function unDo(){
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}

function setTab() {
    var im = document.getElementsByClassName('preview');
    console.log(im);
    for (var i=0; i<im.length; i++) {
      im[i].setAttribute("tabindex", "0");
     }
}

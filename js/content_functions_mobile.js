
function auto_content_item() {
  var content_item_width = window.getComputedStyle(document.getElementsByClassName('content_item')[0]).getPropertyValue('width');
  console.log(content_item_width)
  for (i=0; i < document.querySelectorAll('.content .content_carousel .content_item .image').length; i++) {
    document.querySelectorAll('.content .content_carousel .content_item .image')[i].style.height = content_item_width
  };
  console.log('adjusted');
}

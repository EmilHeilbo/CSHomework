var list_items_to_links = {
  init: function () {
    const HYPERLINK_REGEX = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    
    let _div = document.getElementById('links');
    let _items = Array.from(_div.getElementsByTagName('li'));
    
    _items.forEach(function (item) {
      let _text = item.firstChild.nodeValue;
      if (_text.match(HYPERLINK_REGEX)) {
        item.replaceChild(list_items_to_links.create_anchor(_text), item.firstChild);
      }
    })
  },
  create_anchor: function (link) {
    let text_element = document.createTextNode(link);
    let anchor_element = document.createElement('a');
    anchor_element.setAttribute('href', link)
    anchor_element.appendChild(text_element);

    return anchor_element;
  }
};

window.addEventListener('load', list_items_to_links.init);
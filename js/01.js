var listItemsToLinks = {
  init: () => {
    const HYPERLINK_REGEX = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    
    let div = document.getElementById('links');
    let listItems = Array.from(div.getElementsByTagName('li'));
    
    listItems.forEach((item) => {
      let text = item.firstChild.nodeValue;
      if (text.match(HYPERLINK_REGEX)) {
        item.replaceChild(listItemsToLinks.create_anchor(text), item.firstChild);
      }
    })
  },

  create_anchor: (link) => {
    let textElement = document.createTextNode(link);
    let anchorElement = document.createElement('a');
    anchorElement.setAttribute('href', link);
    anchorElement.setAttribute('rel', 'noreferrer');
    anchorElement.appendChild(textElement);

    return anchorElement;
  }
};

window.addEventListener('load', listItemsToLinks.init);
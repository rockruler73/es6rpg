/*
display.js
Shows/appends text to the site
 */
export default class Display {
  // constructor
  constructor(html = '', elementId = 'display') {
    this.html = html;
    this.elementId = elementId;
  }

  /*
  shows given HTML
  if no HTML is given, display the HTML that's in this object's html property already
  otherwise, set both the element's inner HTML and the object's property to the given html
  */
  show(html = null) {
    if (html === null) {
      document.getElementById(this.elementId).innerHTML = this.html;
    } else {
      document.getElementById(this.elementId).innerHTML = html;
      this.html = html;
    }
  }

  // append HTML to display screen
  append(html) {
    document.getElementById(this.elementId).innerHtml += html;
  }
}

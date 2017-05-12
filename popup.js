/**
 * @param {function(error, url)} callback - Called when the amazon link has
 *   been found or an error occurrs.
 */
function getAmazonUrl(callback) {
  var jimmyDoreShow = 'http://www.jimmydorecomedy.com';
  var x = new XMLHttpRequest();
  x.open('GET', jimmyDoreShow);
  x.responseType = 'document';
  x.onload = function() {
    var links = this.responseXML &&
                this.responseXML.getElementById("amazonblock") &&
                this.responseXML.getElementById("amazonblock").getElementsByTagName("a");

    var link = (links && links.length) ? links[0].href : null;

    if (link) {
      return callback(null, link);
    } else {
      return callback("Unable to parse Amazon URL.", null);
    }
  };
  x.onerror = function() {
    return callback("Network error.", null);
  };
  x.send();
}

/**
 * @param {error} string - error message to display to the user
 */
function renderError(error) {
  document.getElementById('status').textContent = error;
}

document.addEventListener('DOMContentLoaded', function() {
  getAmazonUrl(function (error, link) {
    if (error) {
      renderError(error);
    } else {
      var a = document.getElementById('amazonLink');
      a.onclick = function () {
        chrome.tabs.create({ url: link });
      };

      var button = document.getElementById('button');
      button.hidden = false;
    }
  });
});
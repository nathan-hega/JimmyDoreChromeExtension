/**
 * @param {function(error, url)} callback - Called when the amazon link has
 *   been found or an error occurrs.
 */
function getJimmyDoreContent(callback) {
  var jimmyDoreShow = 'http://www.jimmydorecomedy.com';
  var x = new XMLHttpRequest();
  x.open('GET', jimmyDoreShow);
  x.responseType = 'document';
  x.onload = function() {
    if (!this.responseXML) {
      return callback("Unable to parse Amazon URL.", null);
    }
    var data = {
      link: null,
      image: null
    }

    var amazonBlock = this.responseXML.querySelector("#amazonblock");
    var link = amazonBlock && amazonBlock.querySelector("a");
    data.link = (link) ? link.href : null;

    var image = amazonBlock && amazonBlock.querySelector("img");
    data.image = (image) ? image.src : null;

    if (data.link && data.image) {
      return callback(null, data);
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
  getJimmyDoreContent(function (error, data) {
    if (error) {
      renderError(error);
    } else {
      var a = document.getElementById('amazonLink');
      a.onclick = function () {
        chrome.tabs.create({ url: data.link });
      };

      var button = document.getElementById('support');
      button.src = data.image;
    }
  });
});
_Note: This extension is currently under construction. Once approved by the Jimmy Dore show, I will publish to the Chrome Webstore for wider spread use._

# Introduction
> We don't encourage anyone to shop at Amazon.com, but if you do why not support a good progressive cause like the Jimmy Dore show?

**Because I constantly forget to visit the Jimmy Dore website before going to Amazon!**

This chrome extension will help with that. It places a little Jimmy Dore icon next to the URL bar in Chrome browsers. Clicking the icon will request the Jimmy Dore website via `XMLHttpRequest`, parse the HTML for the Amazon URL with some vanilla Javascript, and then add a button pop up for users to click. When users click the button, a new tab will be opened that contains the Amazon link found on the Jimmy Dore website. This should help generate additional revenue to help support the show, **which is needed due to YouTube de-monetizing independent news media via their terrible new policies.** [Check out this video for more information on YouTube's garbage policy update](https://www.youtube.com/watch?v=YSPOz80PyvA).

## Development
This chrome extension is pretty basic right now. I am trying to connect to the Jimmy Dore show in order to get some support form them both in terms of permission to publish an extension that uses the show's name as well as icon / image support for the extension itself.

I would like the functionality of this extension to be expanded even more so that if users go to Amazon without having the Jimmy Dore campaign activated via query parameters, the extension alerts them or automatically redirects them to the proper page. The idea is to make it so people **can not** forget to visit Amazon without first considering Jimmy Dore. I was hoping Amazon would make this easier for me by setting a cookie that I could check to see if users went to the Jimmy Dore website first. Unfortunately, it seems that the campaign information for Jimmy Dore is masked on their backend in some session cookies that I couldn't figure out, so another approach is required (possibly by searching Chrome's network history for a Jimmy Dore link?). Once I have some support form the show, I will dive into this - or, other fans of the show will help make this extension even better!

Read more about Chrome extensions [here](https://developer.chrome.com/extensions/overview).

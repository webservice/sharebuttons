/* 
Social Share Links:
WhatsApp:
https://wa.me/?text=[post-title] [post-url]
Facebook:
https://www.facebook.com/sharer.php?u=[post-url]
Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]
telegram:
https://t.me/share/url?url=[post-url]&text=[post-title]
linkedIn:
https://www.linkedin.com/sharing/share-offsite/?url=[post-url]
*/

const facebookBtn = document.querySelector(".fb");
const twitterBtn = document.querySelector(".tw");
const telegramBtn = document.querySelector(".tg");
const whatsappBtn = document.querySelector(".wp");
const linkedinBtn = document.querySelector(".ln");

function init() {
    const postTitle_ = document.querySelector("meta[property='og:title']");

    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI(postTitle_.getAttribute('content'));

    facebookBtn.setAttribute(
        "href",
        `https://www.facebook.com/sharer.php?u=${postUrl}`
    );

    twitterBtn.setAttribute(
        "href",
        `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
    );

    telegramBtn.setAttribute(
        "href",
        `https://t.me/share/url?url=${postUrl}&text=${postTitle}`
    );

    whatsappBtn.setAttribute(
        "href",
        `https://wa.me/?text=${postTitle}%20${postUrl}`
    );

    linkedinBtn.setAttribute(
      "href",
      `https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}`
    );
}

init();

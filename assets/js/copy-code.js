// Simple copy-to-clipboard for fenced code blocks
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("pre > code").forEach(function (codeBlock) {
    var pre = codeBlock.parentNode;
    var btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.type = "button";
    btn.innerText = "Copy";
    btn.setAttribute("aria-label", "Copy code to clipboard");
    btn.addEventListener("click", function () {
      var text = codeBlock.innerText;
      navigator.clipboard.writeText(text).then(function () {
        btn.innerText = "Copied";
        setTimeout(function () { btn.innerText = "Copy"; }, 1800);
      }, function () {
        btn.innerText = "Fail";
        setTimeout(function () { btn.innerText = "Copy"; }, 1800);
      });
    });
    pre.style.position = "relative";
    pre.insertBefore(btn, codeBlock);
  });
});
const form = document.querySelector("form");
const input = document.querySelector("input");
self.__uv$config = {
  prefix: '/FireUnblocker/service/',
  bare: '/FireUnblocker/bare/',
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: '/FireUnblocker/uv/uv.handler.js',
  bundle: '/FireUnblocker/uv/uv.bundle.js',
  config: '/FireUnblocker/uv/uv.config.js',
  sw: '/FireUnblocker/uv/uv.sw.js',
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  window.navigator.serviceWorker
    .register("./sw.js", {
      scope: __uv$config.prefix,
    })
    .then(() => {
      let url = input.value.trim();
      if (!isUrl(url)) url = "https://www.google.com/search?q=" + url;
      else if (!(url.startsWith("https://") || url.startsWith("http://")))
        url = "http://" + url;
      localStorage.setItem("encodedUrl", __uv$config.encodeUrl(url));
      location.href = "/~";
    });
});

function isUrl(val = "") {
  if (
    /^http(s?):\/\//.test(val) ||
    (val.includes(".") && val.substr(0, 1) !== " ")
  )
    return true;
  return false;
}
// keyfly.si: www goes to the apex (one canonical host for search engines);
// everything else is the static export in out/.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.keyfly.si") {
      url.hostname = "keyfly.si";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};

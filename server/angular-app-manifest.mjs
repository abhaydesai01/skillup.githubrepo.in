
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "route": "/experience"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/blog"
  },
  {
    "renderMode": 2,
    "route": "/certificates"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12857, hash: '5e7716b02cc1d26c49cb64ac851e8ee6d95561f74c4dd05333bd7318066f4034', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1082, hash: 'e9ad163a9873874c44fe2694ed93bb8a0289b22a9648c46b22f4256242eaeac4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 31555, hash: '9a045e45866d3b8ba876299c0465a683dc251f3c604b60363772be4a204411a8', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'certificates/index.html': {size: 24237, hash: '9033d002a85f98fdee6cf970723c5153770a170e5f3fbf1a053c1b41848137e5', text: () => import('./assets-chunks/certificates_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32203, hash: '86e052506459181e1b1c323602c6b724f17629dbe54811272dd8c860058a3eb9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 29246, hash: '3efd6c448f5e8f8873e44d48e354ad57774948a8618b4cee0229384eb4babc3a', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 73772, hash: 'dfb15400cddae79a772cfea962563126b3272a68dc618892d5f6a6457b7218c0', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'index.html': {size: 80827, hash: '3e3b0f7d23772b7ec9b44fc218ca5f47ecbed40b05906a75d6d20042b987e3e6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 72978, hash: 'bd5856ccc9d48d06e666b7685eed7af39aba84e988479ee75608dbb8a3c12f02', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-XW64Q332.css': {size: 34422, hash: 'D2lumouW7M0', text: () => import('./assets-chunks/styles-XW64Q332_css.mjs').then(m => m.default)}
  },
};

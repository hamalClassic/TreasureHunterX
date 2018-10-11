"use strict";
cc._RF.push(module, 'f4979NXg9hMQ4XxHB/gqmtp', 'conf');
// plugin_scripts/conf.js

"use strict";

if (CC_DEBUG) {
  var backendAddress = {
    PROTOCOL: 'http',
    HOST: 'localhost',
    PORT: "9992",
    WS_PATH_PREFIX: "/cuisineconn"
  };
} else {
  var backendAddress = {
    PROTOCOL: 'https',
    HOST: 'mapdemo.red0769.com',
    PORT: "443",
    WS_PATH_PREFIX: "/cuisineconn"
  };
}
window.language = "en";
window.backendAddress = backendAddress;

cc._RF.pop();
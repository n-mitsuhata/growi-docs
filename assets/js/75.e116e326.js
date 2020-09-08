(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{638:function(e,t,a){"use strict";a.r(t);var o=a(48),r=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"https-with-let-s-encrypt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https-with-let-s-encrypt","aria-hidden":"true"}},[e._v("#")]),e._v(" HTTPS with Let's Encrypt")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("This cookbook supposes the usage of "),a("RouterLink",{attrs:{to:"/en/admin-guide/getting-started/docker-compose.html"}},[e._v("docker-compose")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("This chapter introduces how to launch GROWI with the HTTPS server with Let's Encript and nginx proxy.")]),e._v(" "),a("h2",{attrs:{id:"how-to-configure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-configure","aria-hidden":"true"}},[e._v("#")]),e._v(" How to Configure")]),e._v(" "),a("h3",{attrs:{id:"copy-docker-compose-override-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy-docker-compose-override-yml","aria-hidden":"true"}},[e._v("#")]),e._v(" Copy docker-compose.override.yml")]),e._v(" "),a("p",[e._v("Execute the follow command to copy "),a("code",[e._v("./exmaples/https-portal/docker-compose.override.yml")]),e._v(" into the base directory of GROWI.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd growi // the base directory of GROWI\n$ cp examples/https-portal/docker-compose.override.yml .\n")])])]),a("h3",{attrs:{id:"launch-growi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launch-growi","aria-hidden":"true"}},[e._v("#")]),e._v(" Launch GROWI")]),e._v(" "),a("p",[e._v("Launch GROWI and acess to the site.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker-compose up\n")])])]),a("p",[a("a",{attrs:{href:"https://example.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://example.com"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"set-custom-domain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-custom-domain","aria-hidden":"true"}},[e._v("#")]),e._v(" Set Custom Domain")]),e._v(" "),a("p",[e._v("In "),a("code",[e._v("./docker-compose.override.yml")]),e._v(", set "),a("code",[e._v("DOMAINS")]),e._v(" to a domain of your choice.")]),e._v(" "),a("div",{staticClass:"language-text:docker-compose.override.yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("services:\n  https-portal:\n    environment:\n      // replace 'example.com' with a domain of your choice\n      DOMAINS: 'example.com -> http://app:3000' \n")])])])])},[],!1,null,null,null);t.default=r.exports}}]);
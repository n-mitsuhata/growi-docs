(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{660:function(a,s,t){"use strict";t.r(s);var e=t(48),r=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"migrate-from-crowi-on-premises"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrate-from-crowi-on-premises","aria-hidden":"true"}},[a._v("#")]),a._v(" Migrate from Crowi On-premises")]),a._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[a._v("#")]),a._v(" Overview")]),a._v(" "),t("ul",[t("li",[a._v("Migrating from Crowi on-premises "),t("strong",[a._v("v1.6.x")]),a._v(" to GROWI on-premises "),t("strong",[a._v("v3.x")])]),a._v(" "),t("li",[a._v("Assuming to use the existing MongoDB")])]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("ul",[t("li",[a._v("Assuming to use the existing Redis or not to use Redis at all.")]),a._v(" "),t("li",[a._v("GROWI v3.0.7 or later uses MongoDB for the session store if "),t("code",[a._v("REDIS_URL")]),a._v(" is not set.")])])]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("ul",[t("li",[a._v("The specified version of ElasticSearch (v6.6 or later) and "),t("a",{attrs:{href:"#upgrade-elasticsearch-and-add-plugins"}},[a._v("the specified plugins")]),a._v(" are required.")])])]),a._v(" "),t("h2",{attrs:{id:"set-up-node-js-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-up-node-js-environment","aria-hidden":"true"}},[a._v("#")]),a._v(" Set up Node.js Environment")]),a._v(" "),t("ul",[t("li",[a._v("Set up Node.js, npm, and yarn. See "),t("a",{attrs:{href:"https://github.com/weseek/growi/blob/master/README.md#dependencies",target:"_blank",rel:"noopener noreferrer"}},[a._v("README.md#dependencies"),t("OutboundLink")],1),a._v(".\n"),t("ul",[t("li",[a._v("Upgrade Node.js to 10.x")]),a._v(" "),t("li",[a._v("Install yarn")])])])]),a._v(" "),t("h2",{attrs:{id:"upgrade-elasticsearch-and-add-plugins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-elasticsearch-and-add-plugins","aria-hidden":"true"}},[a._v("#")]),a._v(" Upgrade ElasticSearch and Add Plugins")]),a._v(" "),t("ol",[t("li",[a._v("Use v6.6 or later.")]),a._v(" "),t("li",[a._v("Install the plugins below.\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-kuromoji.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Japanese (kuromoji) Analysis plugin"),t("OutboundLink")],1),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" bin/elasticsearch-plugin "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" analysis-kuromoji\n")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("ICU Analysis Plugin"),t("OutboundLink")],1),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" bin/elasticsearch-plugin "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" analysis-icu\n")])])])])])])]),a._v(" "),t("h2",{attrs:{id:"change-the-launch-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-the-launch-process","aria-hidden":"true"}},[a._v("#")]),a._v(" Change the Launch Process")]),a._v(" "),t("h3",{attrs:{id:"before"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#before","aria-hidden":"true"}},[a._v("#")]),a._v(" Before")]),a._v(" "),t("h4",{attrs:{id:"preparation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparation","aria-hidden":"true"}},[a._v("#")]),a._v(" Preparation")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# clone")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/crowi/crowi.git\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" crowi\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# install dependencies and build client")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),t("h4",{attrs:{id:"example-launch-script"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-launch-script","aria-hidden":"true"}},[a._v("#")]),a._v(" Example Launch Script")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("export")]),a._v(" PASSWORD_SEED"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("somesecretstring\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("export")]),a._v(" MONGO_URI"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mongodb://MONGO_HOST:MONGO_PORT/crowi\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("export")]),a._v(" REDIS_URL"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("redis://REDIS_HOST:REDIS_PORT/crowi\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("export")]),a._v(" ELASTICSEARCH_URI"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://ES_HOST:ES_PORT/crowi\nnode app.js\n")])])]),t("h3",{attrs:{id:"after"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#after","aria-hidden":"true"}},[a._v("#")]),a._v(" After")]),a._v(" "),t("h4",{attrs:{id:"preparation-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparation-2","aria-hidden":"true"}},[a._v("#")]),a._v(" Preparation")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# clone")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/weseek/growi.git\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" growi\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# install dependencies and build client")]),a._v("\nyarn\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run build:prod\n")])])]),t("h4",{attrs:{id:"example-launch-script-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-launch-script-2","aria-hidden":"true"}},[a._v("#")]),a._v(" Example Launch Script")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("export")]),a._v(" PASSWORD_SEED"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("somesecretstring                   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# no changes")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("export")]),a._v(" MONGO_URI"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mongodb://MONGO_HOST:MONGO_PORT/crowi  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# no changes")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("export")]),a._v(" REDIS_URL"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("redis://REDIS_HOST:REDIS_PORT/crowi    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# no changes / remove this line")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("export")]),a._v(" ELASTICSEARCH_URI"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://ES_HOST:ES_PORT/crowi   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# no changes")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run server:prod\n")])])])])},[],!1,null,null,null);s.default=r.exports}}]);
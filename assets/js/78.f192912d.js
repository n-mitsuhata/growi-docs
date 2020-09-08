(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{640:function(t,a,e){"use strict";e.r(a);var s=e(48),o=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mongodb-auto-backup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-auto-backup","aria-hidden":"true"}},[t._v("#")]),t._v(" MongoDB Auto Backup")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#overview"}},[t._v("Overview")])]),e("li",[e("a",{attrs:{href:"#manage-with-a-container"}},[t._v("Manage with a Container")])]),e("li",[e("a",{attrs:{href:"#manage-with-docker-compose"}},[t._v("Manage with docker-compose")])]),e("li",[e("a",{attrs:{href:"#manage-with-google-cloud-platform"}},[t._v("Manage with Google Cloud Platform")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("p",[t._v("This chapter introduces how to set up auto backup for GROWI data using "),e("a",{attrs:{href:"https://github.com/weseek/mongodb-awesome-backup",target:"_blank",rel:"noopener noreferrer"}},[t._v("weseek/mongodb-awesome-backup"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),e("ul",[e("li",[t._v("Docker")]),t._v(" "),e("li",[t._v("AWS S3 bucket to upload backup files\n"),e("ul",[e("li",[t._v("Access key and secret key for a user authorized to access S3 bucket.")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("See "),e("RouterLink",{attrs:{to:"/en/admin-guide/admin-cookbook/mongodb-backup.html"}},[t._v("MongoDB Backup & Restore")]),t._v(" before you start.")],1)]),t._v(" "),e("h2",{attrs:{id:"manage-with-a-container"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manage-with-a-container","aria-hidden":"true"}},[t._v("#")]),t._v(" Manage with a Container")]),t._v(" "),e("ol",[e("li",[t._v("Start a container with CRONMODE "),e("code",[t._v("true")]),t._v("."),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker run --rm \\\n  -e MONGODB_HOST"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Target MongoDB Host"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \\\n  -e AWS_ACCESS_KEY_ID"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Your IAM Access Key ID"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \\\n  -e AWS_SECRET_ACCESS_KEY"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Your IAM Secret Access Key"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \\\n  -e S3_TARGET_BUCKET_URL"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Target S3 Bucket URL "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s3://"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \\\n  -e CRONMODE"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true \\\n  -e "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CRON_EXPRESSION=0 4 * * *"')]),t._v(" \\\n  weseek/mongodb-awesome-backup\n")])])])]),t._v(" "),e("li",[t._v("The container backs up all databases in the target MongoDB server at 4:00 AM everyday.")])]),t._v(" "),e("h4",{attrs:{id:"backup-version-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backup-version-control","aria-hidden":"true"}},[t._v("#")]),t._v(" Backup Version Control")]),t._v(" "),e("ul",[e("li",[t._v("(TBD: Looking for a contributor)")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("See "),e("a",{attrs:{href:"https://github.com/weseek/mongodb-awesome-backup",target:"_blank",rel:"noopener noreferrer"}},[t._v("weseek/mongodb-awesome-backup"),e("OutboundLink")],1),t._v(" for more options.")])]),t._v(" "),e("h2",{attrs:{id:"manage-with-docker-compose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manage-with-docker-compose","aria-hidden":"true"}},[t._v("#")]),t._v(" Manage with docker-compose")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("If GROWI is installed with "),e("RouterLink",{attrs:{to:"/en/admin-guide/getting-started/docker-compose.html"}},[t._v("growi-docker-compose")]),t._v(", preparing a backup container is even easier.")],1)]),t._v(" "),e("ul",[e("li",[t._v("Refer to weseek/growi-docker-compose "),e("a",{attrs:{href:"https://github.com/weseek/growi-docker-compose/tree/master/examples/backup-mongodb-data",target:"_blank",rel:"noopener noreferrer"}},[t._v("Example"),e("OutboundLink")],1),t._v(", and follow the steps below.")])]),t._v(" "),e("ol",[e("li",[t._v("clone"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/weseek/growi-docker-compose.git growi\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" growi\n")])])])]),t._v(" "),e("li",[t._v("Copy "),e("code",[t._v("docker-compose.override.yml")]),t._v(" to the root directory."),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -p examples/backup-mongodb-data/docker-compose.override.yml "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n")])])])]),t._v(" "),e("li",[t._v("Edit "),e("code",[t._v("docker-compose.override.yml")]),t._v(" and enter an appropriate value for "),e("code",[t._v("CRON_EXPRESSION")]),t._v(", "),e("code",[t._v("AWS_ACCESS_KEY_ID")]),t._v(", "),e("code",[t._v("AWS_SECRET_ACCESS_KEY")]),t._v(", and "),e("code",[t._v("S3_TARGET_BUCKET_URL")]),t._v("."),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" CRONMODE=true\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" CRON_EXPRESSION=0 4 * * *\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" AWS_ACCESS_KEY_ID=$"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Your IAM Access Key ID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" AWS_SECRET_ACCESS_KEY=$"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Your IAM Secret Access Key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" S3_TARGET_BUCKET_URL=s3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//$"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Your Bucket Name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n")])])])]),t._v(" "),e("li",[e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker-compose up\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"manage-with-google-cloud-platform"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manage-with-google-cloud-platform","aria-hidden":"true"}},[t._v("#")]),t._v(" Manage with Google Cloud Platform")]),t._v(" "),e("ul",[e("li",[t._v("(TBD: Looking for a contributor)")])])])},[],!1,null,null,null);a.default=o.exports}}]);
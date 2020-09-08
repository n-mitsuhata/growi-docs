(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{741:function(e,a,t){"use strict";t.r(a);var r=t(48),o=Object(r.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose","aria-hidden":"true"}},[e._v("#")]),e._v(" docker-compose")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#概要"}},[e._v("概要")])]),t("li",[t("a",{attrs:{href:"#growi-docker-compose-のダウンロード"}},[e._v("growi-docker-compose　のダウンロード")])]),t("li",[t("a",{attrs:{href:"#growi-の起動確認"}},[e._v("GROWI の起動確認")])]),t("li",[t("a",{attrs:{href:"#localhost-以外からのアクセス"}},[e._v("localhost 以外からのアクセス")])]),t("li",[t("a",{attrs:{href:"#elasticsearch-のメモリ容量を変更"}},[e._v("Elasticsearch のメモリ容量を変更")])]),t("li",[t("a",{attrs:{href:"#growi-のアップグレード"}},[e._v("GROWI のアップグレード")])]),t("li",[t("a",{attrs:{href:"#関連ページ"}},[e._v("関連ページ")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"概要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概要","aria-hidden":"true"}},[e._v("#")]),e._v(" 概要")]),e._v(" "),t("p",[e._v("この章では docker-compose を用いて GROWI を立ち上げる方法を紹介します。")]),e._v(" "),t("p",[e._v("セットアップには以下のソフトウェアが必要となるため、事前にインストールしてください。")]),e._v(" "),t("ul",[t("li",[e._v("Docker")]),e._v(" "),t("li",[e._v("docker-compose")])]),e._v(" "),t("h2",{attrs:{id:"growi-docker-compose-のダウンロード"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#growi-docker-compose-のダウンロード","aria-hidden":"true"}},[e._v("#")]),e._v(" growi-docker-compose　のダウンロード")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/weseek/growi-docker-compose",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/weseek/growi-docker-compose"),t("OutboundLink")],1),e._v(" の「Clone or download」ボタンから、ソースコードをダウンロードもしくは git コマンドにより clone します。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git clone https://github.com/weseek/growi-docker-compose.git growi\n")])])]),t("h2",{attrs:{id:"growi-の起動確認"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#growi-の起動確認","aria-hidden":"true"}},[e._v("#")]),e._v(" GROWI の起動確認")]),e._v(" "),t("p",[e._v("ダウンロードしたフォルダ内にて以下のコマンドを実行します。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd growi\ndocker-compose up\n")])])]),t("p",[t("code",[e._v("http://localhost:3000/")]),e._v(" にアクセスし、初回セットアップ画面("),t("code",[e._v("/installer")]),e._v(")の表示が確認できれば GROWI 起動完了です。")]),e._v(" "),t("h2",{attrs:{id:"localhost-以外からのアクセス"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#localhost-以外からのアクセス","aria-hidden":"true"}},[e._v("#")]),e._v(" localhost 以外からのアクセス")]),e._v(" "),t("p",[t("code",[e._v("docker-compose.yml")]),e._v(" ファイル内の "),t("code",[e._v("ports")]),e._v(" を変更することで "),t("code",[e._v("localhost")]),e._v(" 以外からのアクセスを許可することができます。")]),e._v(" "),t("p",[e._v("変更前")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("services:\n  app:\n    ports:\n      - 127.0.0.1:3000:3000\n")])])]),t("p",[e._v("変更後")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("services:\n  app:\n    ports:\n      - 3000:3000\n")])])]),t("h2",{attrs:{id:"elasticsearch-のメモリ容量を変更"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-のメモリ容量を変更","aria-hidden":"true"}},[e._v("#")]),e._v(" Elasticsearch のメモリ容量を変更")]),e._v(" "),t("p",[e._v("メモリに十分な空き容量がある場合、"),t("code",[e._v("docker-compose.yml")]),e._v(" ファイル内の "),t("code",[e._v("ES_JAVA_OPTS")]),e._v(" の値を変更することで、Elasticsearch のヒープ領域を増やすことができます。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('environment:\n  - "ES_JAVA_OPTS=-Xms2g -Xmx2g"\n')])])]),t("h2",{attrs:{id:"growi-のアップグレード"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#growi-のアップグレード","aria-hidden":"true"}},[e._v("#")]),e._v(" GROWI のアップグレード")]),e._v(" "),t("h3",{attrs:{id:"growi-を-v3-4-x-にアップグレードする"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#growi-を-v3-4-x-にアップグレードする","aria-hidden":"true"}},[e._v("#")]),e._v(" GROWI を v3.4.x にアップグレードする")]),e._v(" "),t("p",[e._v("以下のページで、v3.3.x 以下の GROWI を利用してる人向けに v3.4.x へのアップグレードの手順を説明しています。")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/ja/admin-guide/upgrading/34x.html"}},[e._v("GROWI v3.4.x へのアップグレード")])],1),e._v(" "),t("h3",{attrs:{id:"コンテナのアップグレード"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#コンテナのアップグレード","aria-hidden":"true"}},[e._v("#")]),e._v(" コンテナのアップグレード")]),e._v(" "),t("p",[t("code",[e._v("growi-docker-compose")]),e._v(" をダウンロードしたフォルダにて、コンテナを停止します。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd growi\ndocker-compose stop\n")])])]),t("p",[e._v("既存の Docker コンテナと Docker イメージを削除します。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker-compose rm app mongo elasticseach\ndocker rmi weseek/growi:3\n")])])]),t("p",[e._v("最新版を pull し、Docker イメージを作成した後、コンテナを立ち上げます。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git pull\ndocker-compose build\ndocker-compose up\n")])])]),t("p",[e._v("起動後、GROWI App の管理画面の全文検索管理ページ( "),t("code",[e._v("/admin/search")]),e._v(" )で、インデックスを再構築してください。")]),e._v(" "),t("h2",{attrs:{id:"関連ページ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#関連ページ","aria-hidden":"true"}},[e._v("#")]),e._v(" 関連ページ")]),e._v(" "),t("ul",[t("li",[e._v("複数の GROWI を立ち上げる")])]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/ja/admin-guide/admin-cookbook/multi-app.html"}},[e._v("growi-docker-compose Multiple Sites Example を利用した複数 app の起動手順")])],1),e._v(" "),t("ul",[t("li",[e._v("HTTPS プロキシを利用する")])]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/ja/admin-guide/admin-cookbook/lets-encrypt.html"}},[e._v("growi-docker-compose with HTTPS proxy Example を利用した HTTPS プロキシの利用手順")])],1),e._v(" "),t("ul",[t("li",[e._v("MongoDB にページデータとユーザーデータのバックアップをとる")])]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/ja/admin-guide/admin-cookbook/mongodb-backup-regular.html#manage-with-docker-compose"}},[e._v("growi-docker-compose with backup MongoDB container example を利用した MongoDB へのバックアップ作成手順")])],1),e._v(" "),t("ul",[t("li",[e._v("HackMD による複数人同時編集機能を利用する")])]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/ja/admin-guide/admin-cookbook/integrate-with-hackmd.html#既存の-hackmd-codimd-と連携する"}},[e._v("HackMD(CodiMD) Integration Example を利用した HackMD 統合")])],1)])},[],!1,null,null,null);a.default=o.exports}}]);
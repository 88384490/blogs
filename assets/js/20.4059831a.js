(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{369:function(n,t,s){"use strict";s.r(t);var e=s(9),a=Object(e.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[n._v("#")]),n._v(" Nginx")]),n._v(" "),s("blockquote",[s("p",[n._v("Nginx作为一款由毛子开发的轻量级服务器，有着便于设置、系统开销小、并发数高等特点。作者由2012年进行开发，2014年开源。")])]),n._v(" "),s("h3",{attrs:{id:"nginx-常用命令行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-常用命令行"}},[n._v("#")]),n._v(" nginx 常用命令行")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("nginx // 启动nginx\nnginx -c /usr/local/nginx-1.16.1/conf/nginx.conf // 带配置文件启动Nginx\nnginx -s reload // 重启nginx\nnginx -s stop // 停止nginx，并不保存相关信息\nnginx -s quit // 停止ngiinx，并保存相关信息\n")])])]),s("h3",{attrs:{id:"nginx的配置文件结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx的配置文件结构"}},[n._v("#")]),n._v(" nginx的配置文件结构")]),n._v(" "),s("ul",[s("li",[n._v("配置文件地址在Nginx\\conf\\nginx.conf"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('// 全局区域\n#user  nobody; // 配置nginx使用的用户名和组 user 名称 组名称\nworker_processes  1;// 配置工作衍生的线程\n\n#error_log  logs/error.log; // 指定错误日期的存放路径\n#error_log  logs/error.log  notice;\n#error_log  logs/error.log  info;\n\n#pid        logs/nginx.pid; // 配置nginx启动后主进程的ID\n\n// 事件区域, 指定使用的I/O模型 nginx默认apple模型\nevents {\n    worker_connections  1024;\n}\n\n// http区域\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n    charset utf-8;\n\n    #log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n    #                  \'$status $body_bytes_sent "$http_referer" \'\n    #                  \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    #access_log  logs/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    #keepalive_timeout  0;\n    keepalive_timeout  65;\n\n    #gzip  on;\n\n    // 对主机的设置\n    server {\n        listen       8090; //主机端口\n        server_name  localhost; //主机名\n\n        #charset koi8-r;\n\n        #access_log  logs/host.access.log  combined;\n\n        location / {\n            root   html;\n            index  index.html index.htm;\n            try_files $uri $uri/ /index.html;\n        }\n\n        #error_page  404              /404.html;\n\n        # redirect server error pages to the static page /50x.html\n        #\n        error_page   500 502 503 504  /50x.html;\n        location = /50x.html {\n            root   html;\n        }\n\n       ....\n    }\n    \n    // 一个主机就是一个server对象\n\n}\n\n')])])])])]),n._v(" "),s("p",[n._v("整个配置文件分为：全局、event、http三个区域。")]),n._v(" "),s("h3",{attrs:{id:"如何配置日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何配置日志"}},[n._v("#")]),n._v(" 如何配置日志")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("```json\n    http: { \n        log_format mylogformat '$http_x_forwarded_for - $remote_user $time_local'// 全局的日志格式配置\n        access_log // 表示全局的日志配置\n        \n        server: {\n            log_format // 表示单主机的日志格式配置\n            access_log // 表示单主机的日志配置\n        }\n    }\n```\n")])])]),s("h3",{attrs:{id:"rewrit-url-利用正则重定义url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rewrit-url-利用正则重定义url"}},[n._v("#")]),n._v(" Rewrit url 利用正则重定义url")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("```\n    ...\n    \n    server {\n        location / {\n            root html;\n            index index.html, index.htm;\n            rewrite ^(.*).htmp$ /rewrite.html;\n        }\n    }\n```\n")])])]),s("h3",{attrs:{id:"nginx-反向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-反向代理"}},[n._v("#")]),n._v(" nginx 反向代理")]),n._v(" "),s("blockquote",[s("p",[n._v("代理通常的意义分为正向代理和反向代理，正向代理是客户端访问中转服务器，再由中转服务器携带数据去访问目的服务器，然后将数据转发给客户端。我们通常说的翻墙就是这种模式(喝茶注意，国宝注意)")])]),n._v(" "),s("img",{attrs:{src:n.$withBase("/imgs/2020-4-13-nginx-1.jpg"),alt:"Nginx1",width:"500"}}),n._v(" "),s("blockquote",[s("p",[n._v("反向代理是将服务器的数据经由服务器程序转发给客户端，然后再代理客户端的数据转发给服务端，双方都经由中间服务器进行转发来达到互相访问的目的。\n面试说法：代理服务器来接收internet上的连接请求，然后将请求转发给网络上的服务器，并将从该服务器得到的结果返回给internet上请求连接的客户端，此时代理服务器对外将表现为一个服务器\n正向代理代理的是客户端，反向代理代理的是服务端")])]),n._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[n._v("server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    ...\n    location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        prox_pass http"),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("192.168")]),n._v("."),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("2.1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("8080")]),n._v("; "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 设置本地代理地址")]),n._v("\n        index index.html index.htm;\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n")])])]),s("p",[n._v("代理的第二种方法")]),n._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[n._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 设置服务器别名1")]),n._v("\n    upstream myserver"),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        server "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("88384490.")]),n._v("github.io;\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 设置服务器别名2")]),n._v("\n    upstream myserver"),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("2")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        server "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("82201230.")]),n._v("github.io\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n    server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        ...\n        localtion / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n            proxy_pass http"),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("//myserver1")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])])]),s("h3",{attrs:{id:"nginx-负载均衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-负载均衡"}},[n._v("#")]),n._v(" nginx 负载均衡")]),n._v(" "),s("blockquote",[s("p",[n._v("将多台服务器以对称的方式组成一个服务器集合，每台服务器都具有等价的地位，都可以单独对外提供服务而无需其他服务器的辅助(去中心化)\nnginx的负载均衡算法是以轮循的方式按配置的顺序访问每一台服务器\n一个域名关联着很多台服务器")])]),n._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[n._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 设置服务器别名")]),n._v("\n    upstream myserver "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 服务器1")]),n._v("\n        server "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("82201230.")]),n._v("github.io\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 服务器2")]),n._v("\n        server "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("88384490.")]),n._v("github.io\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n    server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        ...\n        localtion / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n            proxy_pass http"),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("//myserver1")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])])]),s("p",[n._v("每次访问时，nginx会循环调用服务器别名中的服务器，达到分担流量的目的")])])}),[],!1,null,null,null);t.default=a.exports}}]);
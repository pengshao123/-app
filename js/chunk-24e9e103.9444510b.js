(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24e9e103"],{"0d03":function(t,s,i){var a=i("6eeb"),e=Date.prototype,n="Invalid Date",r="toString",o=e[r],c=e.getTime;new Date(NaN)+""!=n&&a(e,r,(function(){var t=c.call(this);return t===t?o.call(this):n}))},"159b":function(t,s,i){var a=i("da84"),e=i("fdbc"),n=i("17c2"),r=i("9112");for(var o in e){var c=a[o],l=c&&c.prototype;if(l&&l.forEach!==n)try{r(l,"forEach",n)}catch(v){l.forEach=n}}},"17c2":function(t,s,i){"use strict";var a=i("b727").forEach,e=i("b301");t.exports=e("forEach")?function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1dde":function(t,s,i){var a=i("d039"),e=i("b622"),n=i("60ae"),r=e("species");t.exports=function(t){return n>=51||!a((function(){var s=[],i=s.constructor={};return i[r]=function(){return{foo:1}},1!==s[t](Boolean).foo}))}},4160:function(t,s,i){"use strict";var a=i("23e7"),e=i("17c2");a({target:"Array",proto:!0,forced:[].forEach!=e},{forEach:e})},"5faa":function(t,s,i){},"65f0":function(t,s,i){var a=i("861d"),e=i("e8b5"),n=i("b622"),r=n("species");t.exports=function(t,s){var i;return e(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!e(i.prototype)?a(i)&&(i=i[r],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===s?0:s)}},8418:function(t,s,i){"use strict";var a=i("c04e"),e=i("9bf2"),n=i("5c6c");t.exports=function(t,s,i){var r=a(s);r in t?e.f(t,r,n(0,i)):t[r]=i}},b0c0:function(t,s,i){var a=i("83ab"),e=i("9bf2").f,n=Function.prototype,r=n.toString,o=/^\s*function ([^ (]*)/,c="name";!a||c in n||e(n,c,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(t){return""}}})},b301:function(t,s,i){"use strict";var a=i("d039");t.exports=function(t,s){var i=[][t];return!i||!a((function(){i.call(null,s||function(){throw 1},1)}))}},b727:function(t,s,i){var a=i("f8c2"),e=i("44ad"),n=i("7b0b"),r=i("50c4"),o=i("65f0"),c=[].push,l=function(t){var s=1==t,i=2==t,l=3==t,v=4==t,d=6==t,u=5==t||d;return function(f,m,h,g){for(var b,p,w=n(f),_=e(w),C=a(m,h,3),y=r(_.length),x=0,L=g||o,E=s?L(f,y):i?L(f,0):void 0;y>x;x++)if((u||x in _)&&(b=_[x],p=C(b,x,w),t))if(s)E[x]=p;else if(p)switch(t){case 3:return!0;case 5:return b;case 6:return x;case 2:c.call(E,b)}else if(v)return!1;return d?-1:l||v?v:E}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},b7a1:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"moves"},[i("div",{staticClass:"title-cut"},[i("van-tabs",{attrs:{animated:"","line-width":"26px","title-active-color":"#ee0a24",border:!1},on:{click:function(s){return t.onClick(t.activeName)}},model:{value:t.activeName,callback:function(s){t.activeName=s},expression:"activeName"}},[i("van-tab",{attrs:{title:"正在热映",name:"1"}},[i("div",{staticClass:"moves-list"},[i("ul",{staticClass:"uls"},t._l(this.result1,(function(s,a){return i("li",{key:a,ref:"moviebox",refInFor:!0,staticClass:"lis",attrs:{id:s.id},on:{click:function(i){return t.viewmoves({name:"detailsv",params:{id:s.id}})}}},[i("div",{staticClass:"showing-left"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:s.images.small,loading:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576141964201&di=b65f41ae2c0efca1c382dec9882b63ed&imgtype=0&src=http%3A%2F%2Fhbimg.huabanimg.com%2F23907369b8a233f4b426d739875621c6b0fc248a1d28c-8V4M0p_fw658"},expression:"{src:item.images.small,loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576141964201&di=b65f41ae2c0efca1c382dec9882b63ed&imgtype=0&src=http%3A%2F%2Fhbimg.huabanimg.com%2F23907369b8a233f4b426d739875621c6b0fc248a1d28c-8V4M0p_fw658'}"}],attrs:{src:s.images.small,alt:""}})]),i("div",{staticClass:"showing-right"},[i("div",{staticClass:"showing-list"},[i("div",{staticClass:"showing-title"},[i("h2",[t._v(t._s(s.title))]),i("div",{staticClass:"title-logo"},[i("span",[t._v("3D IMAX")])])]),i("div",{staticClass:"showing-text"},[i("span",[t._v(t._s(s.original_title))])]),i("div",{staticClass:"showing-name"},[i("div",{staticClass:"showing-name1"},[t._v(" 主演: "),i("span",[t._v(t._s(s.avatarsInfo))])]),i("div",{staticClass:"showing-name2"},[t._v(" 导演: "),i("span",[t._v(t._s(s.directc))])])]),i("div",{staticClass:"showing-btn"},[i("div",{staticClass:"btn-grade"},[i("p",[t._v("淘票票评分")]),i("span",[t._v(t._s(s.rating.average)+"分")])]),i("div",{staticClass:"btn-button"},[t._v("购票")])])])])])})),0)])]),i("van-tab",{attrs:{title:"即将上映",name:"2"}},[i("div",{staticClass:"begongto"},[i("div",{staticClass:"begin-move"},[i("div",{staticClass:"about-head"},[i("div",{staticClass:"sp1"},[i("span",[t._v("近期最受欢迎")])]),i("div",{staticClass:"sp2"},[i("span",[t._v("全部"+t._s(this.index2)+"部")]),i("van-icon",{attrs:{name:"arrow",size:"6",color:"#DFE1E6"}})],1)]),i("div",{staticClass:"about-kiart"},[i("ul",{style:{width:this.maxW+"px"}},t._l(this.newmoves,(function(s,a){return i("li",{key:a,ref:"kist",refInFor:!0,attrs:{id:s.id},on:{click:function(i){return t.viewmoves({name:"detailsv",params:{id:s.id}})}}},[i("div",{staticClass:"about-image"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.images.small,expression:"item.images.small"}],attrs:{src:s.images.small,alt:""}})]),i("div",{staticClass:"about-text"},[i("p",{staticClass:"p1"},[t._v(t._s(s.title))]),i("p",{staticClass:"p2"},[t._v(t._s(s.year)+"上映")])])])})),0)])]),i("div",{staticClass:"moves-day"},[i("div",{staticClass:"te-day"},[t.showPrise?i("div",{staticClass:"new-day"},[i("div",{staticClass:"newdang-head"},[i("span",[t._v(" "+t._s(this.Ntomr)+" ")]),i("strong",[t._v(" (明天) ")])]),i("div",{staticClass:"newday"},[i("ul",{staticClass:"uls"},t._l(this.nexttimer,(function(s,a){return i("li",{key:a,ref:"moviebox",refInFor:!0,staticClass:"lis",attrs:{id:s.id},on:{click:function(i){return t.viewmoves({name:"detailsv",params:{id:s.id}})}}},[i("div",{staticClass:"showing-left"},[i("img",{attrs:{src:s.images.small,alt:""}})]),i("div",{staticClass:"showing-right"},[i("div",{staticClass:"showing-list"},[i("div",{staticClass:"showing-title"},[i("h2",[t._v(t._s(s.title))]),i("div",{staticClass:"title-logo"},[i("span",[t._v("3D IMAX")])])]),i("div",{staticClass:"showing-text"},[i("span",[t._v(t._s(s.original_title))])]),i("div",{staticClass:"showing-name"},[i("div",{staticClass:"showing-name1"},[t._v(" 主演: "),i("span",[t._v(t._s(s.Newstar))])]),i("div",{staticClass:"showing-name2"},[t._v(" 导演: "),i("span",[t._v(t._s(s.newstor))])])]),i("div",{staticClass:"showing-btn"},[i("div",{staticClass:"btn-grade"},[i("span",[t._v("9999")]),i("p",[t._v("人想看")])]),i("div",{staticClass:"btn-button"},[t._v("购票")])])])])])})),0)])]):t._e(),t.showRentPrise?i("div",{staticClass:"new-day"},[i("div",{staticClass:"newdang-head"},[i("span",[t._v(" "+t._s(this.Aftomr)+" ")]),i("strong",[t._v(" (后天) ")])]),i("div",{staticClass:"newday"},[i("ul",{staticClass:"uls"},t._l(this.aftertimer,(function(s,a){return i("li",{key:a,ref:"moviebox",refInFor:!0,staticClass:"lis",attrs:{id:s.id},on:{click:function(i){return t.viewmoves({name:"detailsv",params:{id:s.id}})}}},[i("div",{staticClass:"showing-left"},[i("img",{attrs:{src:s.images.small,alt:""}})]),i("div",{staticClass:"showing-right"},[i("div",{staticClass:"showing-list"},[i("div",{staticClass:"showing-title"},[i("h2",[t._v(t._s(s.title))]),i("div",{staticClass:"title-logo"},[i("span",[t._v("3D IMAX")])])]),i("div",{staticClass:"showing-text"},[i("span",[t._v(t._s(s.original_title))])]),i("div",{staticClass:"showing-name"},[i("div",{staticClass:"showing-name1"},[t._v(" 主演: "),i("span",[t._v(t._s(s.Newstar))])]),i("div",{staticClass:"showing-name2"},[t._v(" 导演: "),i("span",[t._v(t._s(s.newstor))])])]),i("div",{staticClass:"showing-btn"},[i("div",{staticClass:"btn-grade"},[i("span",[t._v("9999")]),i("p",[t._v("人想看")])]),i("div",{staticClass:"btn-button"},[t._v("购票")])])])])])})),0)])]):t._e()])])])])],1)],1)])},e=[],n=(i("4160"),i("fb6a"),i("0d03"),i("b0c0"),i("159b"),{name:"moves",data:function(){return{activeName:name,result1:"",index1:"",index2:0,newmoves:"",maxW:0,tomorrow:"",afattomorrow:"",showPrise:!0,showRentPrise:!0,Ntomr:"",Aftomr:"",nexttimer:[],aftertimer:[]}},methods:{geimoves:function(){var t=this;this.$toast.loading({duration:0,message:"加载中..."}),this.axios({method:"GET",url:"https://douban.uieee.com/v2/movie/in_theaters"}).then((function(s){s.data.subjects.forEach((function(s){s.avatarsInfo="",s.index1=1,s.casts.forEach((function(t){s.avatarsInfo+=t.name+"、"})),t.index1+=s.index1,s.avatarsInfo=s.avatarsInfo.slice(0,-1),s.directc="",s.directors.forEach((function(t){s.directc+=t.name+"、",s.directc=s.directc.slice(0,-1)}))})),t.result1=s.data.subjects,t.$toast.clear()}))},viewmoves:function(t){this.$router.push(t)},timermoves:function(){var t=this,s=new Date;s.setTime(s.getTime()+864e5);var i=s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate(),a=i;this.tomorrow=a;var e=new Date;e.setTime(e.getTime()+1728e5);var n=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),r=n;this.afattomorrow=r;var o=new Date,c=o.getMonth(),l=o.getDate()+1,v=o.getDate()+2;c<10&&(c="0"+c),l<10&&(l="0"+l),v<10&&(v="0"+v),this.Ntomr=c+"月"+l+"日",this.Aftomr=c+"月"+v+"日",this.axios({method:"GET",url:"https://douban.uieee.com/v2/movie/coming_soon"}).then((function(s){s.data.subjects.forEach((function(s){s.Newstar="",s.casts.forEach((function(t){s.Newstar+=t.name+"、",s.Newstar=s.Newstar.slice(0,-1)})),s.newstor="",s.directors.forEach((function(t){s.newstor+=t.name+"、",s.newstor=s.newstor.slice(0,-1)})),s.mainland_pubdate==t.tomorrow&&t.nexttimer.push(s),s.mainland_pubdate==t.afattomorrow&&t.aftertimer.push(s)}))}))},getnewmoves:function(){var t=this;this.$toast.loading({duration:0,message:"加载中..."}),this.axios({methods:"GET",url:"https://douban.uieee.com/v2/movie/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a"}).then((function(s){s.data.subjects.forEach((function(s){t.index2+=1})),t.newmoves=s.data.subjects,setTimeout((function(){t.$nextTick((function(){var i=t.$refs.kist[0].clientWidth+10;t.maxW=i*s.data.subjects.length}))}),100),t.$toast.clear()}))},onClick:function(t){}},created:function(){this.geimoves(),this.timermoves(),this.getnewmoves()}}),r=n,o=(i("ff11"),i("2877")),c=Object(o["a"])(r,a,e,!1,null,null,null);s["default"]=c.exports},e8b5:function(t,s,i){var a=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},fb6a:function(t,s,i){"use strict";var a=i("23e7"),e=i("861d"),n=i("e8b5"),r=i("23cb"),o=i("50c4"),c=i("fc6a"),l=i("8418"),v=i("1dde"),d=i("b622"),u=d("species"),f=[].slice,m=Math.max;a({target:"Array",proto:!0,forced:!v("slice")},{slice:function(t,s){var i,a,v,d=c(this),h=o(d.length),g=r(t,h),b=r(void 0===s?h:s,h);if(n(d)&&(i=d.constructor,"function"!=typeof i||i!==Array&&!n(i.prototype)?e(i)&&(i=i[u],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return f.call(d,g,b);for(a=new(void 0===i?Array:i)(m(b-g,0)),v=0;g<b;g++,v++)g in d&&l(a,v,d[g]);return a.length=v,a}})},fdbc:function(t,s){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},ff11:function(t,s,i){"use strict";var a=i("5faa"),e=i.n(a);e.a}}]);
//# sourceMappingURL=chunk-24e9e103.9444510b.js.map
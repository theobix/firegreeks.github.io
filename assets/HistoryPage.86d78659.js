import{S as U,T as f,y as p,U as M,t as te,aR as ge,aB as F,Y as he,aS as _e,av as j,aT as K,aC as ae,ao as X,aw as G,r as V,x as ee,z as ye,aD as be,cV as xe,bF as we,s as ve,v as Pe,aq as Ce,ai as qe,F as N,a7 as ke,C as T,L as A,M as b,D as me,I as pe,aY as fe,aW as W,a9 as _,aV as R,E as q,ab as Se,O as z,u as Te,B as $e,a5 as Ie,H as J,aU as ne,b1 as De,G as oe}from"./index.a487fe88.js";import{Q as Be}from"./QCard.c32b3caf.js";import{e as Ae}from"./QSelect.9eee3110.js";import{u as Ve,a as Me,b as Qe,Q as Ne}from"./QTable.d1f92310.js";import{Q as Ee}from"./QPage.c11af4f9.js";import{u as Ye,C as Le}from"./ClosePopup.41013bbd.js";import{d as re}from"./date.4312e81d.js";import{u as Fe}from"./use-quasar.1ddc1a7f.js";import{g as ie,s as le}from"./touch.3df10340.js";import{c as Re}from"./use-prevent-scroll.618545e0.js";import{u as ze,a as Ue}from"./use-dark.ef1d0fb8.js";import{_ as He}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-key-composition.e0e174d9.js";import"./uid.42677368.js";import"./scroll.92d4726f.js";import"./format.bf96f825.js";import"./use-checkbox.87f1e1ce.js";import"./QList.a4b4417c.js";var Z=U({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:o}){const s=te(),v=f(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return p("td",{class:v.value},M(o.default));const r=s.vnode.key,t=(e.props.colsMap!==void 0?e.props.colsMap[r]:null)||e.props.col;if(t===void 0)return;const{row:n}=e.props;return p("td",{class:v.value+t.__tdClass(n),style:t.__tdStyle(n)},M(o.default))}}}),se=U({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:o}){const s=f(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>p("tr",{class:s.value},M(o.default))}}),ue=U({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:o}){const s=f(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>p(e.tag,{class:s.value},M(o.default))}});function Oe(e){const o=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((s,v)=>{const r=parseFloat(s);r&&(o[v]=r)}),o}var je=ge({name:"touch-swipe",beforeMount(e,{value:o,arg:s,modifiers:v}){if(v.mouse!==!0&&F.has.touch!==!0)return;const r=v.mouseCapture===!0?"Capture":"",t={handler:o,sensitivity:Oe(s),direction:ie(v),noop:he,mouseStart(n){le(n,t)&&_e(n)&&(j(t,"temp",[[document,"mousemove","move",`notPassive${r}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(n,!0))},touchStart(n){if(le(n,t)){const d=n.target;j(t,"temp",[[d,"touchmove","move","notPassiveCapture"],[d,"touchcancel","end","notPassiveCapture"],[d,"touchend","end","notPassiveCapture"]]),t.start(n)}},start(n,d){F.is.firefox===!0&&K(e,!0);const P=ae(n);t.event={x:P.left,y:P.top,time:Date.now(),mouse:d===!0,dir:!1}},move(n){if(t.event===void 0)return;if(t.event.dir!==!1){X(n);return}const d=Date.now()-t.event.time;if(d===0)return;const P=ae(n),k=P.left-t.event.x,u=Math.abs(k),x=P.top-t.event.y,m=Math.abs(x);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&m<t.sensitivity[1]){t.end(n);return}}else if(window.getSelection().toString()!==""){t.end(n);return}else if(u<t.sensitivity[2]&&m<t.sensitivity[2])return;const h=u/d,i=m/d;t.direction.vertical===!0&&u<m&&u<100&&i>t.sensitivity[0]&&(t.event.dir=x<0?"up":"down"),t.direction.horizontal===!0&&u>m&&m<100&&h>t.sensitivity[0]&&(t.event.dir=k<0?"left":"right"),t.direction.up===!0&&u<m&&x<0&&u<100&&i>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<m&&x>0&&u<100&&i>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>m&&k<0&&m<100&&h>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>m&&k>0&&m<100&&h>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(X(n),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Re(),t.styleCleanup=y=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const l=()=>{document.body.classList.remove("no-pointer-events--children")};y===!0?setTimeout(l,50):l()}),t.handler({evt:n,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:d,distance:{x:u,y:m}})):t.end(n)},end(n){t.event!==void 0&&(G(t,"temp"),F.is.firefox===!0&&K(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),n!==void 0&&t.event.dir!==!1&&X(n),t.event=void 0)}};if(e.__qtouchswipe=t,v.mouse===!0){const n=v.mouseCapture===!0||v.mousecapture===!0?"Capture":"";j(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}F.has.touch===!0&&j(t,"main",[[e,"touchstart","touchStart",`passive${v.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const s=e.__qtouchswipe;s!==void 0&&(o.oldValue!==o.value&&(typeof o.value!="function"&&s.end(),s.handler=o.value),s.direction=ie(o.modifiers))},beforeUnmount(e){const o=e.__qtouchswipe;o!==void 0&&(G(o,"main"),G(o,"temp"),F.is.firefox===!0&&K(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchswipe)}});const We={name:{required:!0},disable:Boolean},ce={setup(e,{slots:o}){return()=>p("div",{class:"q-panel scroll",role:"tabpanel"},M(o.default))}},Ke={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Xe=["update:modelValue","beforeTransition","transition"];function Ge(){const{props:e,emit:o,proxy:s}=te(),{getCache:v}=Ye();let r,t;const n=V(null),d=V(null);function P(a){const c=e.vertical===!0?"up":"left";S((s.$q.lang.rtl===!0?-1:1)*(a.direction===c?1:-1))}const k=f(()=>[[je,P,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=f(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),x=f(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),m=f(()=>`--q-transition-duration: ${e.transitionDuration}ms`),h=f(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),i=f(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),y=f(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);ee(()=>e.modelValue,(a,c)=>{const C=I(a)===!0?E(a):-1;t!==!0&&Q(C===-1?0:C<E(c)?-1:1),n.value!==C&&(n.value=C,o("beforeTransition",a,c),ye(()=>{o("transition",a,c)}))});function l(){S(1)}function w(){S(-1)}function $(a){o("update:modelValue",a)}function I(a){return a!=null&&a!==""}function E(a){return r.findIndex(c=>c.props.name===a&&c.props.disable!==""&&c.props.disable!==!0)}function H(){return r.filter(a=>a.props.disable!==""&&a.props.disable!==!0)}function Q(a){const c=a!==0&&e.animated===!0&&n.value!==-1?"q-transition--"+(a===-1?u.value:x.value):null;d.value!==c&&(d.value=c)}function S(a,c=n.value){let C=c+a;for(;C!==-1&&C<r.length;){const B=r[C];if(B!==void 0&&B.props.disable!==""&&B.props.disable!==!0){Q(a),t=!0,o("update:modelValue",B.props.name),setTimeout(()=>{t=!1});return}C+=a}e.infinite===!0&&r.length!==0&&c!==-1&&c!==r.length&&S(a,a===-1?r.length:-1)}function Y(){const a=E(e.modelValue);return n.value!==a&&(n.value=a),!0}function O(){const a=I(e.modelValue)===!0&&Y()&&r[n.value];return e.keepAlive===!0?[p(we,i.value,[p(y.value===!0?v(h.value,()=>({...ce,name:h.value})):ce,{key:h.value,style:m.value},()=>a)])]:[p("div",{class:"q-panel scroll",style:m.value,key:h.value,role:"tabpanel"},[a])]}function g(){if(r.length!==0)return e.animated===!0?[p(be,{name:d.value},O)]:O()}function D(a){return r=xe(M(a.default,[])).filter(c=>c.props!==null&&c.props.slot===void 0&&I(c.props.name)===!0),r.length}function L(){return r}return Object.assign(s,{next:l,previous:w,goTo:$}),{panelIndex:n,panelDirectives:k,updatePanelsList:D,updatePanelIndex:Y,getPanelContent:g,getEnabledPanels:H,getPanels:L,isValidPanelName:I,keepAliveProps:i,needsUniqueKeepAliveWrapper:y,goToPanelByOffset:S,goToPanel:$,nextPanel:l,previousPanel:w}}var Je=U({name:"QCarouselSlide",props:{...We,imgSrc:String},setup(e,{slots:o}){const s=f(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>p("div",{class:"q-carousel__slide",style:s.value},M(o.default))}});const Ze=["top","right","bottom","left"],et=["regular","flat","outline","push","unelevated"];var tt=U({name:"QCarousel",props:{...ze,...Ke,...Ve,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>et.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ze.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Me,...Xe],setup(e,{slots:o}){const{proxy:{$q:s}}=te(),v=Ue(e,s);let r=null,t;const{updatePanelsList:n,getPanelContent:d,panelDirectives:P,goToPanel:k,previousPanel:u,nextPanel:x,getEnabledPanels:m,panelIndex:h}=Ge(),{inFullscreen:i}=Qe(),y=f(()=>i.value!==!0&&e.height!==void 0?{height:e.height}:{}),l=f(()=>e.vertical===!0?"vertical":"horizontal"),w=f(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(i.value===!0?" fullscreen":"")+(v.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${l.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${H.value}`:"")),$=f(()=>{const g=[e.prevIcon||s.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||s.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&s.lang.rtl===!0?g.reverse():g}),I=f(()=>e.navigationIcon||s.iconSet.carousel.navigationIcon),E=f(()=>e.navigationActiveIcon||I.value),H=f(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),Q=f(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));ee(()=>e.modelValue,()=>{e.autoplay&&S()}),ee(()=>e.autoplay,g=>{g?S():r!==null&&(clearTimeout(r),r=null)});function S(){const g=qe(e.autoplay)===!0?Math.abs(e.autoplay):5e3;r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,g>=0?x():u()},g)}ve(()=>{e.autoplay&&S()}),Pe(()=>{r!==null&&clearTimeout(r)});function Y(g,D){return p("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${g} q-carousel__navigation--${H.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[p("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},m().map(D))])}function O(){const g=[];if(e.navigation===!0){const D=o["navigation-icon"]!==void 0?o["navigation-icon"]:a=>p(N,{key:"nav"+a.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${a.active===!0?"":"in"}active`,...a.btnProps,onClick:a.onClick}),L=t-1;g.push(Y("buttons",(a,c)=>{const C=a.props.name,B=h.value===c;return D({index:c,maxIndex:L,name:C,active:B,btnProps:{icon:B===!0?E.value:I.value,size:"sm",...Q.value},onClick:()=>{k(C)}})}))}else if(e.thumbnails===!0){const D=e.controlColor!==void 0?` text-${e.controlColor}`:"";g.push(Y("thumbnails",L=>{const a=L.props;return p("img",{key:"tmb#"+a.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${a.name===e.modelValue?"":"in"}active`+D,src:a.imgSrc||a["img-src"],onClick:()=>{k(a.name)}})}))}return e.arrows===!0&&h.value>=0&&((e.infinite===!0||h.value>0)&&g.push(p("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${l.value} absolute flex flex-center`},[p(N,{icon:$.value[0],...Q.value,onClick:u})])),(e.infinite===!0||h.value<t-1)&&g.push(p("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${l.value} absolute flex flex-center`},[p(N,{icon:$.value[1],...Q.value,onClick:x})]))),ke(o.control,g)}return()=>(t=n(o),p("div",{class:w.value,style:y.value},[Ce("div",{class:"q-carousel__slides-container"},d(),"sl-cont",e.swipeable,()=>P.value)].concat(O())))}});const at={class:"text-center"},nt={class:"text-center"},ot={class:"data"},rt={class:"data"},it={__name:"TravelDetails",props:{stops:Object,verticalLayout:Boolean,height:String},setup(e){const o=V("0"),s=e;function v(r){switch(r){case"AIRPLANE":return"flight_takeoff";case"BICYCLE":return"pedal_bike";case"BUS":return"airport_shuttle";case"TRAIN":case"SUBWAY":return"train";default:return"transportation"}}return(r,t)=>(T(),A(tt,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=n=>o.value=n),"transition-prev":"scale","transition-next":"scale",swipeable:"",animated:"","control-color":"black",arrows:"",padding:"",height:"auto",class:"no-wrap rounded-borders"},{default:b(()=>[(T(!0),me(pe,null,fe(s.stops,(n,d)=>(T(),A(Je,{key:d,name:d.toString(),class:W("no-wrap items-center justify-between "+(e.verticalLayout?"":"row"))},{default:b(()=>[_("div",{class:W("inline q-ml-sm items-center no-wrap "+(e.verticalLayout?"column justify-center":"row"))},[_("div",at,R(n.previousPoint.label),1),q(Se,{name:v(n.travelMethod),class:W(e.verticalLayout?"q-ma-xs":"q-ma-md")},null,8,["name","class"]),_("div",nt,R(n.point.label),1)],2),_("div",{class:W("column no-wrap q-pa-sm "+(e.verticalLayout?"q-mt-md":"")),style:{width:"200px"}},[_("div",null,[z("Distance: "),_("span",ot,R(n.distance.toFixed(2))+" km",1)]),_("div",null,[z("Emission: "),_("span",rt,R(n.emission.toFixed(2))+" kg",1)])],2)]),_:2},1032,["name","class"]))),128))]),_:1},8,["modelValue"]))}};var de=He(it,[["__scopeId","data-v-51a7639a"]]);const lt={class:"page-container"},st=_("h2",{class:"text-center"},"Travel History",-1),ut=_("h5",{class:"subtitle text-center"},"All previous travels",-1),ct=_("br",null,null,-1),dt=_("p",null,"On this page, you have access to all previously submitted travels along with their relevant information. Whether you're looking to review past trips, analyze travel patterns, or assess the environmental impact of your journeys, this comprehensive archive provides you with the data you need. ",-1),vt=_("p",null,[_("b",null,"Tips"),z(": You can sort ascending or descending by date.")],-1),Dt={__name:"HistoryPage",setup(e){const o=Fe(),{result:s,loading:v,error:r,refetch:t}=Te($e(`
    query getHistory ($page: Int!, $count: Int!, $descending: Boolean!) {
      travelHistory(page: $page, count: $count, descending: $descending) {
        id
        date
        start { coordinates, label }
        end { coordinates, label }
        distance
        emission
        stops {
          previousPoint { label }
          point { label }
          travelMethod
          distance
          emission
        }
      },
      overallStats {
        totalTravels
      }
    }
  `),{page:0,count:3,descending:!1}),n=[{name:"expand",label:"",field:"expand"},{name:"date",required:!0,label:"Date & Time",align:"left",field:i=>i.date,format:i=>re.formatDate(re.extractDate(i,"YYYY-MM-DD"),o.platform.is.mobile?"DD/MM/YY":"Do MMMM YYYY"),sortable:!0},{name:"start",label:"From",field:"start",format:i=>i.label},{name:"destination",label:"To",field:"end",format:i=>i.label},{name:"distance",label:"Distance (km)",field:"distance",format:i=>i.toFixed(2)+"km"},{name:"emission",label:"CO2 Emission (kg)",field:"emission",format:i=>i.toFixed(2)+"kg"}],d=V(),P=V([]),k=V(""),u=V({page:1,rowsPerPage:3,rowsNumber:10,descending:!0,sortBy:"date"});function x(i){const{page:y,rowsPerPage:l,descending:w}=i.pagination;t({page:y-1,count:l,descending:w}).then($=>{P.value=$.data.travelHistory,u.value.page=y,u.value.rowsPerPage=l,u.value.descending=w,u.value.rowsNumber=$.data.overallStats.totalTravels})}const m=Ie({});function h(i){i.expand=!i.expand,m[i.rowIndex*i.pageIndex]="0"}return ve(()=>{x({pagination:{page:1,rowsPerPage:3,descending:!0}})}),(i,y)=>(T(),A(Ee,{class:"q-pa-md"},{default:b(()=>[_("div",lt,[st,ut,ct,dt,vt,q(N,{onClick:y[0]||(y[0]=l=>x({pagination:{page:1,rowsPerPage:u.value.rowsPerPage}})),class:"bg-primary q-mt-sm q-mb-sm"},{default:b(()=>[z(" Refresh data ")]),_:1}),q(Ne,{flat:"",bordered:"",ref_key:"tableRef",ref:d,title:"Last Travels",rows:P.value,columns:n,"row-key":"id",pagination:u.value,"onUpdate:pagination":y[1]||(y[1]=l=>u.value=l),loading:J(v).value,filter:k.value,"binary-state-sort":"",onRequest:x},{body:b(l=>[(T(),A(se,{props:l,key:`m_${l.row.index}`,onClick:w=>h(l)},{default:b(()=>[q(Z,{"auto-width":""},{default:b(()=>[q(N,{dense:"",round:"",flat:"",icon:l.expand?"arrow_drop_up":"arrow_drop_down"},null,8,["icon"])]),_:2},1024),(T(!0),me(pe,null,fe(l.cols.slice(1,l.cols.length),w=>(T(),A(Z,{key:w.name,props:l},{default:b(()=>[z(R(w.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props","onClick"])),J(o).platform.is.mobile?oe("",!0):ne((T(),A(se,{key:0,props:l},{default:b(()=>[q(Z,{colspan:"100%"},{default:b(()=>[q(de,{stops:l.row.stops,"vertical-layout":!1,height:"70px"},null,8,["stops"])]),_:2},1024)]),_:2},1032,["props"])),[[De,l.expand]]),J(o).platform.is.mobile?(T(),A(Ae,{key:1,modelValue:l.expand,"onUpdate:modelValue":w=>l.expand=w},{default:b(()=>[q(Be,null,{default:b(()=>[q(ue,{class:"q-pa-none text-right ab"},{default:b(()=>[ne(q(N,{icon:"close",flat:"",round:"",dense:""},null,512),[[Le]])]),_:1}),q(ue,{class:"q-pa-none"},{default:b(()=>[q(de,{stops:l.row.stops,"vertical-layout":!0,height:"170px"},null,8,["stops"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])):oe("",!0)]),_:1},8,["rows","pagination","loading","filter"])])]),_:1}))}};export{Dt as default};

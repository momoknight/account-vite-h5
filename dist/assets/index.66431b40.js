var Be=Object.defineProperty;var ye=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var ve=(a,n,i)=>n in a?Be(a,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[n]=i,te=(a,n)=>{for(var i in n||(n={}))ke.call(n,i)&&ve(a,i,n[i]);if(ye)for(var i of ye(n))Se.call(n,i)&&ve(a,i,n[i]);return a};import{I as M,a as j,T as w,P as R,r as s,u as K,j as t,b as e,C as T,F as ae,d as z,c as le,e as N,D as Ae,f as P,K as De,g as $e,h as Te,B as G,i as Ie,k as je,N as Re,l as pe,q as ze,M as We,m as Me,n as Pe,o as se,R as ge,p as qe,s as Ye,t as Le,v as Ue,w as Ke,x as Oe}from"./vendor.d3015df0.js";const He=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}};He();var B=M.createFromIconfont("//at.alicdn.com/t/font_2236655_w1mpqp7n1ni.js");j.defaults.baseURL="http://47.103.140.189:7001";j.defaults.withCredentials=!0;j.defaults.headers["X-Requested-With"]="XMLHttpRequest";j.defaults.headers.Authorization=`${localStorage.getItem("token")||null}`;j.defaults.headers.post["Content-Type"]="application/json";j.interceptors.response.use(a=>typeof a.data!="object"?(w.show("\u670D\u52A1\u5668\u5F02\u5E38! "),Promise.reject(a)):a.data.code!=200?(a.data.msg&&w.show(a.data.msg),a.data.code==401&&(window.location.href="/login"),Promise.reject(a.data)):a.data);const xe="http://47.103.140.189:7001",O=j.get,H=j.post,ne={1:{icon:"canyin"},2:{icon:"fushi"},3:{icon:"jiaotong"},4:{icon:"riyong"},5:{icon:"gouwu"},6:{icon:"xuexi"},7:{icon:"yiliao"},8:{icon:"lvxing"},9:{icon:"renqing"},10:{icon:"qita"},11:{icon:"gongzi"},12:{icon:"jiangjin"},13:{icon:"zhuanzhang"},14:{icon:"licai"},15:{icon:"tuikuang"},16:{icon:"qita"}},Q={normal:0,pull:1,drop:2,loading:3,success:4,failure:5},de={normal:0,abort:1,loading:2,success:3,failure:4,complete:5},we=a=>(a&&a.startsWith("http")||(a=`${xe}${a}`),a),Xe="_item_wdu8w_1",Je="_header-date_wdu8w_7",Ve="_date_wdu8w_18",Ze="_money_wdu8w_22",Ge="_item-icon_wdu8w_37";var J={item:Xe,headerDate:Je,date:Ve,money:Ze,itemIcon:Ge};const Ne=({bill:a})=>{const[n,i]=s.exports.useState(0),[r,o]=s.exports.useState(0),c=K();s.exports.useEffect(()=>{const l=a.bills.filter(h=>h.pay_type==2).reduce((h,x)=>(h+=Number(x.amount),h),0);i(l);const v=a.bills.filter(h=>h.pay_type==1).reduce((h,x)=>(h+=Number(x.amount),h),0);o(v)},[a.bills]);const d=l=>{c(`/detail?id=${l.id}`)};return t("div",{className:J.item,children:[t("div",{className:J.headerDate,children:[e("div",{className:J.date,children:a.date}),t("div",{className:J.money,children:[t("span",{children:[e("img",{src:"//s.yezgea02.com/1615953405599/zhi%402x.png",alt:"\u652F"}),t("span",{children:["\xA5",r.toFixed(2)]})]}),t("span",{children:[e("img",{src:"//s.yezgea02.com/1615953405599/shou%402x.png",alt:"\u6536"}),t("span",{children:["\xA5",n.toFixed(2)]})]})]})]}),a&&a.bills.map(l=>e(T,{className:J.bill,onClick:()=>d(l),title:t(ae,{children:[e(B,{className:J.itemIcon,type:l.type_id?ne[l.type_id].icon:1}),e("span",{children:l.type_name})]}),description:e("span",{style:{color:l.pay_type==2?"#ecbe25":"#363636"},children:`${l.pay_type==1?"-":"+"}${l.amount}`}),help:t("div",{children:[z(Number(l.date)).format("HH:mm")," ",l.remark?`| ${l.remark}`:""]})},l.id))]})};Ne.propTypes={bill:R.object};const Qe="_popup-type_1t0jh_1",et="_header_1t0jh_7",tt="_cross_1t0jh_20",at="_content_1t0jh_28",st="_all_1t0jh_31",nt="_title_1t0jh_38",ot="_expense-wrap_1t0jh_43",ct="_income-wrap_1t0jh_44",rt="_active_1t0jh_58";var k={popupType:Qe,header:et,cross:tt,content:at,all:st,title:nt,expenseWrap:ot,incomeWrap:ct,active:rt};const Fe=s.exports.forwardRef(({onSelect:a},n)=>{const[i,r]=s.exports.useState(!1),[o,c]=s.exports.useState("all"),[d,l]=s.exports.useState([]),[v,h]=s.exports.useState([]);s.exports.useEffect(()=>{(async()=>{const{data:{list:p}}=await O("/api/type/list");l(p.filter(g=>g.type==1)),h(p.filter(g=>g.type==2))})()},[]),n&&(n.current={show:()=>{r(!0)},close:()=>{r(!1)}});const x=p=>{c(p.id),r(!1),a(p)};return e(le,{visible:i,direction:"bottom",onMaskClick:()=>r(!1),destroy:!1,mountContainer:()=>document.body,children:t("div",{className:k.popupType,children:[t("div",{className:k.header,children:["\u8BF7\u9009\u62E9\u7C7B\u578B",e(M,{type:"wrong",className:k.cross,onClick:()=>r(!1)})]}),t("div",{className:k.content,children:[e("div",{onClick:()=>x({id:"all"}),className:N({[k.all]:!0,[k.active]:o=="all"}),children:"\u5168\u90E8\u7C7B\u578B"}),e("div",{className:k.title,children:"\u652F\u51FA"}),e("div",{className:k.expenseWrap,children:d.map((p,g)=>e("p",{onClick:()=>x(p),className:N({[k.active]:o==p.id}),children:p.name},g))}),e("div",{className:k.title,children:"\u6536\u5165"}),e("div",{className:k.incomeWrap,children:v.map((p,g)=>e("p",{onClick:()=>x(p),className:N({[k.active]:o==p.id}),children:p.name},g))})]})]})})});Fe.propTypes={onSelect:R.func};const oe=s.exports.forwardRef(({onSelect:a,mode:n="date"},i)=>{const[r,o]=s.exports.useState(!1),[c,d]=s.exports.useState(new Date),l=v=>{d(v),o(!1),n=="month"?a(z(v).format("YYYY-MM")):n=="date"&&a(z(v).format("YYYY-MM-DD"))};return i&&(i.current={show:()=>{o(!0)},close:()=>{o(!1)}}),e(le,{visible:r,direction:"bottom",onMaskClick:()=>o(!1),destroy:!1,mountContainer:()=>document.body,children:e("div",{children:e(Ae,{visible:r,value:c,mode:n,onOk:l,onCancel:()=>o(!1)})})})});oe.propTypes={mode:R.string,onSelect:R.func};const it="_add-wrap_t7ufu_1",ut="_header_t7ufu_7",lt="_close_t7ufu_10",pt="_filter_t7ufu_15",dt="_type_t7ufu_21",mt="_expense_t7ufu_30",ht="_active_t7ufu_33",_t="_income_t7ufu_38",ft="_time_t7ufu_43",yt="_arrow_t7ufu_52",vt="_money_t7ufu_56",gt="_sufix_t7ufu_61",xt="_amount_t7ufu_66",wt="_type-warp_t7ufu_70",Nt="_type-body_t7ufu_79",Ft="_type-item_t7ufu_83",bt="_iconfont-wrap_t7ufu_90",Ct="_iconfont_t7ufu_90",Et="_remark_t7ufu_116";var y={addWrap:it,header:ut,close:lt,filter:pt,type:dt,expense:mt,active:ht,income:_t,time:ft,arrow:yt,money:vt,sufix:gt,amount:xt,typeWarp:wt,typeBody:Nt,typeItem:Ft,iconfontWrap:bt,iconfont:Ct,remark:Et};const me=s.exports.forwardRef(({detail:a={},onReload:n},i)=>{const r=s.exports.useRef(),o=a&&a.id,[c,d]=s.exports.useState(!1),[l,v]=s.exports.useState("expense"),[h,x]=s.exports.useState([]),[p,g]=s.exports.useState([]),[_,S]=s.exports.useState({}),[b,I]=s.exports.useState(""),[W,A]=s.exports.useState(""),[Z,Y]=s.exports.useState(!1),[f,C]=s.exports.useState(new Date);s.exports.useEffect(()=>{a.id&&(v(a.pay_type==1?"expense":"income"),S({id:a.type_id,name:a.type_name}),A(a.remark),I(a.amount),C(z(Number(a.date)).$d))},[a]),i&&(i.current={show:()=>{d(!0)},close:()=>{d(!1)}}),s.exports.useEffect(async()=>{const{data:{list:u}}=await O("/api/type/list"),X=u.filter(ue=>ue.type==1),Ee=u.filter(ue=>ue.type==2);x(X),g(Ee),o||S(X[0])},[]);const L=u=>{v(u),u=="expense"?S(h[0]):S(p[0])},D=()=>{r.current&&r.current.show()},U=u=>{C(u)},ce=u=>{S(u)},re=u=>{if(u=String(u),u!="close"){if(u=="delete"){let X=b.slice(0,b.length-1);I(X);return}if(u=="ok"){ie();return}u=="."&&b.includes(".")||u!="."&&b.includes(".")&&b&&b.split(".")[1].length>=2||I(b+u)}},ie=async()=>{if(!b){w.show("\u8BF7\u8F93\u5165\u5177\u4F53\u91D1\u989D");return}const u={amount:Number(b).toFixed(2),type_id:_.id,type_name:_.name,date:z(f).unix()*1e3,pay_type:l=="expense"?1:2,remark:W||""};o?(u.id=o,await H("/api/bill/update",u),w.show("\u4FEE\u6539\u6210\u529F")):(await H("/api/bill/add",u),I(""),v("expense"),S(h[0]),C(new Date),A(""),w.show("\u6DFB\u52A0\u6210\u529F")),d(!1),n&&n()};return e(le,{visible:c,direction:"bottom",onMaskClick:()=>d(!1),destroy:!1,mountContainer:()=>document.body,children:t("div",{className:y.addWrap,children:[e("header",{className:y.header,children:e("span",{className:y.close,onClick:()=>d(!1),children:e(M,{type:"wrong"})})}),t("div",{className:y.filter,children:[t("div",{className:y.type,children:[e("span",{onClick:()=>L("expense"),className:N({[y.expense]:!0,[y.active]:l=="expense"}),children:"\u652F\u51FA"}),e("span",{onClick:()=>L("income"),className:N({[y.income]:!0,[y.active]:l=="income"}),children:"\u6536\u5165"})]}),t("div",{className:y.time,onClick:D,children:[z(f).format("MM-DD")," ",e(M,{className:y.arrow,type:"arrow-bottom"})]})]}),t("div",{className:y.money,children:[e("span",{className:y.sufix,children:"\xA5"}),e("span",{className:N(y.amount,y.animation),children:b})]}),e("div",{className:y.typeWarp,children:e("div",{className:y.typeBody,children:(l=="expense"?h:p).map(u=>t("div",{onClick:()=>ce(u),className:y.typeItem,children:[e("span",{className:N({[y.iconfontWrap]:!0,[y.expense]:l=="expense",[y.income]:l=="income",[y.active]:_.id==u.id}),children:e(B,{className:y.iconfont,type:ne[u.id].icon})}),e("span",{children:u.name})]},u.id))})}),e("div",{className:y.remark,children:Z?e(P,{autoHeight:!0,showLength:!0,maxLength:50,type:"text",rows:3,value:W,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8\u4FE1\u606F",onChange:u=>A(u),onBlur:()=>Y(!1)}):e("span",{onClick:()=>Y(!0),children:W||"\u6DFB\u52A0\u5907\u6CE8"})}),e(De,{type:"price",onKeyClick:u=>re(u)}),e(oe,{ref:r,onSelect:U})]})})});me.propTypes={detail:R.object,onReload:R.func};const Bt="_empty_1wb2f_1";var kt={empty:Bt};const be=({desc:a})=>t("div",{className:kt.empty,children:[e("img",{src:"//s.yezgea02.com/1619144597039/empty.png",alt:"\u6682\u65E0\u6570\u636E"}),e("div",{children:a||"\u6682\u65E0\u6570\u636E"})]});be.propTypes={desc:R.string};const St="_home_zxvan_1",At="_header_zxvan_7",Dt="_app-title_zxvan_20",$t="_data-wrap_zxvan_27",Tt="_income_zxvan_37",It="_type-wrap_zxvan_40",jt="_left_zxvan_49",Rt="_arrow_zxvan_52",zt="_content-wrap_zxvan_56",Wt="_add_zxvan_66";var F={home:St,header:At,appTitle:Dt,dataWrap:$t,income:Tt,typeWrap:It,left:jt,arrow:Rt,contentWrap:zt,add:Wt};const Mt=()=>{const[a,n]=s.exports.useState(0),[i,r]=s.exports.useState(0),o=s.exports.useRef(),c=s.exports.useRef(),d=s.exports.useRef(),[l,v]=s.exports.useState({}),[h,x]=s.exports.useState(z().format("YYYY-MM")),[p,g]=s.exports.useState(1),[_,S]=s.exports.useState([]),[b,I]=s.exports.useState(0),[W,A]=s.exports.useState(Q.normal),[Z,Y]=s.exports.useState(de.normal);s.exports.useEffect(()=>{f()},[p,l,h]);const f=async()=>{const{data:u}=await O(`/api/bill/list?page=${p}&page_size=5&date=${h}&type_id=${l.id||"all"}`);p==1?S(u.list):S(_.concat(u.list)),n(u.totalExpense.toFixed(2)),r(u.totalIncome.toFixed(2)),I(u.totalPage),Y(de.success),A(Q.success)},C=()=>{A(Q.loading),p!=1?g(1):f()},L=()=>{p<b&&(Y(de.loading),g(p+1))},D=()=>{o.current&&o.current.show()},U=()=>{c.current&&c.current.show()},ce=()=>{d.current&&d.current.show()},re=u=>{A(Q.loading),g(1),v(u)},ie=u=>{A(Q.loading),g(1),x(u)};return t("div",{className:F.home,children:[t("div",{className:F.header,children:[e("div",{className:F.appTitle,children:e("span",{children:"EasyJI"})}),t("div",{className:F.dataWrap,children:[t("span",{className:F.expense,children:["\u603B\u652F\u51FA\uFF1A\xA5 ",a]}),t("span",{className:F.income,children:["\u603B\u6536\u5165\uFF1A\xA5 ",i]})]}),t("div",{className:F.typeWrap,children:[e("div",{className:F.left,onClick:D,children:t("span",{className:F.title,children:["\u7C7B\u578B ",e(M,{className:F.arrow,type:"arrow-bottom"})]})}),e("div",{className:F.right,children:t("span",{className:F.time,onClick:U,children:[h,e(M,{className:F.arrow,type:"arrow-bottom"})]})})]})]}),e("div",{className:F.contentWrap,children:_.length?e($e,{animationDuration:200,stayTime:400,refresh:{state:W,handler:C},load:{state:Z,distance:200,handler:L},children:_.map((u,X)=>e(Ne,{bill:u},X))}):e(be,{})}),e("div",{className:F.add,onClick:ce,children:e(B,{type:"tianjia"})}),e(Fe,{ref:o,onSelect:re}),e(oe,{ref:c,mode:"month",onSelect:ie}),e(me,{ref:d,onReload:C})]})},Pt="_data_10pt6_1",qt="_total_10pt6_5",Yt="_time_10pt6_13",Lt="_date_10pt6_35",Ut="_title_10pt6_39",Kt="_expense_10pt6_45",Ot="_income_10pt6_51",Ht="_structure_10pt6_55",Xt="_head_10pt6_60",Jt="_tab_10pt6_70",Vt="_active_10pt6_80",Zt="_content_10pt6_88",Gt="_item_10pt6_88",Qt="_left_10pt6_93",ea="_type_10pt6_100",ta="_name_10pt6_115",aa="_right_10pt6_124",sa="_percent_10pt6_129",na="_momey_10pt6_135",oa="_proportion_10pt6_138";var m={data:Pt,total:qt,time:Yt,date:Lt,title:Ut,expense:Kt,income:Ot,structure:Ht,head:Xt,tab:Jt,active:Vt,content:Zt,item:Gt,left:Qt,type:ea,name:ta,right:aa,percent:sa,momey:na,proportion:oa};let he=null;const ca=()=>{const a=s.exports.useRef(),[n,i]=s.exports.useState("expense"),[r,o]=s.exports.useState(z().format("YYYY-MM")),[c,d]=s.exports.useState(0),[l,v]=s.exports.useState(0),[h,x]=s.exports.useState([]),[p,g]=s.exports.useState([]),[_,S]=s.exports.useState("expense");s.exports.useEffect(()=>(b(),()=>{he.dispose()}),[r]);const b=async()=>{const{data:f}=await O(`/api/bill/data?date=${r}`);d(f.total_expense),v(f.total_income);const C=f.total_data.filter(D=>D.pay_type==1).sort((D,U)=>U.number-D.number),L=f.total_data.filter(D=>D.pay_type==2).sort((D,U)=>U.number-D.number);x(C),g(L),A(_=="expense"?C:L)},I=f=>{i(f)},W=f=>{S(f),A(f=="expense"?h:p)},A=f=>{window.echarts&&(he=echarts.init(document.getElementById("proportion")),he.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{data:f.map(C=>C.type_name)},series:[{name:"\u652F\u51FA",type:"pie",radius:"55%",data:f.map(C=>({value:C.number,name:C.type_name})),emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}))},Z=()=>{a.current&&a.current.show()},Y=f=>{o(f)};return t("div",{className:m.data,children:[t("div",{className:m.total,children:[t("div",{className:m.time,onClick:Z,children:[e("span",{children:r}),e(M,{className:m.date,type:"date"})]}),e("div",{className:m.title,children:"\u5171\u652F\u51FA"}),t("div",{className:m.expense,children:["\xA5",c]}),t("div",{className:m.income,children:["\u5171\u6536\u5165\xA5",l]})]}),t("div",{className:m.structure,children:[t("div",{className:m.head,children:[e("span",{className:m.title,children:"\u6536\u652F\u6784\u6210"}),t("div",{className:m.tab,children:[e("span",{onClick:()=>I("expense"),className:N({[m.expense]:!0,[m.active]:n=="expense"}),children:"\u652F\u51FA"}),e("span",{onClick:()=>I("income"),className:N({[m.income]:!0,[m.active]:n=="income"}),children:"\u6536\u5165"})]})]}),e("div",{className:m.content,children:(n=="expense"?h:p).map(f=>t("div",{className:m.item,children:[t("div",{className:m.left,children:[t("div",{className:m.type,children:[e("span",{className:N({[m.expense]:n=="expense",[m.income]:n=="income"}),children:e(B,{type:f.type_id?ne[f.type_id].icon:1})}),e("span",{className:m.name,children:f.type_name})]}),t("div",{className:m.progress,children:["\xA5",Number(f.number).toFixed(2)||0]})]}),e("div",{className:m.right,children:e("div",{className:m.percent,children:e(Te,{shape:"line",percent:Number(f.number/Number(n=="expense"?c:l)*100).toFixed(2),theme:"primary"})})})]},f.type_id))}),t("div",{className:m.proportion,children:[t("div",{className:m.head,children:[e("span",{className:m.title,children:"\u6536\u652F\u6784\u6210"}),t("div",{className:m.tab,children:[e("span",{onClick:()=>W("expense"),className:N({[m.expense]:!0,[m.active]:_=="expense"}),children:"\u652F\u51FA"}),e("span",{onClick:()=>W("income"),className:N({[m.income]:!0,[m.active]:_=="income"}),children:"\u6536\u5165"})]})]}),e("div",{id:"proportion"})]})]}),e(oe,{ref:a,mode:"month",onSelect:Y})]})},ra="_user_1qic5_1",ia="_head_1qic5_5",ua="_info_1qic5_13",la="_content_1qic5_33",pa="_logout_1qic5_42";var V={user:ra,head:ia,info:ua,content:la,logout:pa};const da=()=>{const[a,n]=s.exports.useState({}),[i,r]=s.exports.useState(""),o=K();s.exports.useEffect(()=>{c()},[]);const c=async()=>{const{data:l}=await O("/api/user/get_userinfo");n(l),r(l.avatar)},d=async()=>{localStorage.removeItem("token"),o("/login")};return t("div",{className:V.user,children:[t("div",{className:V.head,children:[e("img",{className:V.avatar,style:{width:80,height:80,borderRadius:40},src:i,alt:""}),t("div",{className:V.info,children:[e("span",{children:a.username||"--"}),t("span",{children:[e("img",{style:{width:30,height:30,verticalAlign:"-10px"},src:"//s.yezgea02.com/1615973630132/geqian.png",alt:""}),e("b",{children:a.signature||"hello, world"})]})]})]}),t("div",{className:V.content,children:[e(T,{hasArrow:!0,title:"\u4E2A\u4EBA\u4FE1\u606F",onClick:()=>o("/userinfo"),icon:e("img",{style:{width:20,verticalAlign:"-7px"},src:"//s.yezgea02.com/1615974766264/gxqm.png",alt:""})}),e(T,{hasArrow:!0,title:"\u91CD\u7F6E\u5BC6\u7801",onClick:()=>o("/account"),icon:e("img",{style:{width:20,verticalAlign:"-7px"},src:"//s.yezgea02.com/1615974766264/zhaq.png",alt:""})}),e(T,{hasArrow:!0,title:"\u5173\u4E8E\u6211\u4EEC",onClick:()=>o("/about"),icon:e("img",{style:{width:20,verticalAlign:"-7px"},src:"//s.yezgea02.com/1615975178434/lianxi.png",alt:""})})]}),e(G,{className:V.logout,block:!0,onClick:d,children:"\u9000\u51FA\u767B\u5F55"})]})},ma="_auth_1je3d_1",ha="_head_1je3d_4",_a="_tab_1je3d_14",fa="_avtive_1je3d_23",ya="_form_1je3d_28",va="_operation_1je3d_37",ga="_agree_1je3d_40";var q={auth:ma,head:ha,tab:_a,avtive:fa,form:ya,operation:va,agree:ga};const xa=()=>{const a=s.exports.useRef(),[n,i]=s.exports.useState("login"),[r,o]=s.exports.useState(""),[c,d]=s.exports.useState(""),[l,v]=s.exports.useState(""),[h,x]=s.exports.useState(""),p=s.exports.useCallback(_=>{o(_)},[]),g=async()=>{if(!c){w.show("\u8BF7\u8F93\u5165\u8D26\u53F7");return}if(!l){w.show("\u8BF7\u8F93\u5165\u5BC6\u7801");return}try{if(n=="login"){const{data:_}=await H("/api/user/login",{username:c,password:l});console.log(_),localStorage.setItem("token",_.token),w.show("\u767B\u5F55\u6210\u529F"),window.location.href="/"}else{if(!h){w.show("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801");return}if(h!=r){w.show("\u9A8C\u8BC1\u7801\u9519\u8BEF");return}const{data:_}=await H("/api/user/register",{username:c,password:l});w.show("\u6CE8\u518C\u6210\u529F"),i("login")}}catch(_){w.show(_.msg)}};return s.exports.useEffect(()=>{document.title=n=="login"?"\u767B\u5F55":"\u6CE8\u518C"},[n]),t("div",{className:q.auth,children:[e("div",{className:q.head}),t("div",{className:q.tab,children:[e("span",{className:N({[q.avtive]:n=="login"}),onClick:()=>i("login"),children:"\u767B\u5F55"}),e("span",{className:N({[q.avtive]:n=="register"}),onClick:()=>i("register"),children:"\u6CE8\u518C"})]}),t("div",{className:q.form,children:[e(T,{icon:e(B,{type:"zhanghao"}),children:e(P,{clearable:!0,type:"text",placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7",onChange:_=>d(_)})}),e(T,{icon:e(B,{type:"mima"}),children:e(P,{clearable:!0,type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",onChange:_=>v(_)})}),n=="register"?t(T,{icon:e(B,{type:"mima"}),children:[e(P,{clearable:!0,type:"text",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",onChange:_=>x(_)}),e(Ie,{ref:a,charNum:4,onChange:p})]}):null]}),t("div",{className:q.operation,children:[n=="register"?t("div",{className:q.agree,children:[e(je,{}),t("label",{className:"text-light",children:["\u9605\u8BFB\u5E76\u540C\u610F",e("a",{children:"\u300A\u6398\u6398\u624B\u672D\u6761\u6B3E\u300B"})]})]}):null,e(G,{onClick:g,block:!0,theme:"primary",children:n=="login"?"\u767B\u5F55":"\u6CE8\u518C"})]})]})},wa="_header-warp_12wcp_1",Na="_block_12wcp_4",Fa="_header_12wcp_1",ba="_more_12wcp_21";var _e={headerWarp:wa,block:Na,header:Fa,more:ba};const ee=({title:a=""})=>{const n=K();return e("div",{className:_e.headerWarp,children:e("div",{className:_e.block,children:e(Re,{className:_e.header,left:e(M,{type:"arrow-left",theme:"primary",onClick:()=>n(-1)}),title:a})})})};ee.propTypes={title:R.string};const Ca="_detail_3fbab_1",Ea="_card_3fbab_8",Ba="_type_3fbab_16",ka="_expense_3fbab_29",Sa="_income_3fbab_32",Aa="_iconfont_3fbab_35",Da="_amount_3fbab_38",$a="_info_3fbab_43",Ta="_time_3fbab_48",Ia="_remark_3fbab_61",ja="_operation_3fbab_75",Ra="_van-icon_3fbab_82";var E={detail:Ca,card:Ea,type:Ba,expense:ka,income:Sa,iconfont:Aa,amount:Da,info:$a,time:Ta,remark:Ia,operation:ja,vanIcon:Ra};const za=()=>{const a=pe(),n=K(),{id:i}=ze.parse(a.search),[r,o]=s.exports.useState({}),c=s.exports.useRef();s.exports.useEffect(()=>{d()},[]);const d=async()=>{const{data:v}=await O(`/api/bill/detail?id=${i}`);o(v)},l=()=>{We.confirm({title:"\u5220\u9664",content:"\u786E\u8BA4\u5220\u9664\u8D26\u5355\uFF1F",onOk:async()=>{const{data:v}=await H("/api/bill/delete",{id:i});console.log("data\u662F",v),w.show("\u5220\u9664\u6210\u529F"),n(-1)}})};return t("div",{className:E.detail,children:[e(ee,{title:"\u8D26\u5355\u8BE6\u60C5"}),t("div",{className:E.card,children:[t("div",{className:E.type,children:[e("span",{className:N({[E.expense]:r.pay_type==1,[E.income]:r.pay_type==2}),children:e(B,{className:E.iconfont,type:r.type_id?ne[r.type_id].icon:1})}),e("span",{children:r.type_name||""})]}),r.pay_type==1?t("div",{className:N(E.amount,E.expense),children:["-",r.amount]}):t("div",{className:N(E.amount,E.incom),children:["+",r.amount]}),t("div",{className:E.info,children:[t("div",{className:E.time,children:[e("span",{children:"\u8BB0\u5F55\u65F6\u95F4"}),e("span",{children:z(Number(r.date)).format("YYYY-MM-DD HH:mm")})]}),t("div",{className:E.remark,children:[e("span",{children:"\u5907\u6CE8"}),e("span",{children:r.remark||"-"})]})]}),t("div",{className:E.operation,children:[t("span",{onClick:()=>c.current&&c.current.show(),children:[e(B,{type:"tianjia"}),"\u7F16\u8F91"]}),t("span",{onClick:l,children:[e(B,{type:"shanchu"}),"\u5220\u9664"]})]})]}),e(me,{ref:c,detail:r,onReload:d})]})},Wa="_userinfo_1wov8_1",Ma="_item_1wov8_8",Pa="_title_1wov8_12",qa="_avatar_1wov8_16",Ya="_avatar-url_1wov8_20",La="_desc_1wov8_26",Ua="_upload_1wov8_32",Ka="_signature_1wov8_35";var $={userinfo:Wa,item:Ma,title:Pa,avatar:qa,avatarUrl:Ya,desc:La,upload:Ua,signature:Ka};const Oa=()=>{const a=K(),[n,i]=s.exports.useState({}),[r,o]=s.exports.useState(""),[c,d]=s.exports.useState(""),l=localStorage.getItem("token");s.exports.useEffect(()=>{v()},[]);const v=async()=>{const{data:p}=await O("/api/user/get_userinfo");i(p),o(we(p.avatar)),d(p.signature)},h=p=>{if(console.log("file.file",p.file),p&&p.file.size>200*1024){w.show("\u4E0A\u4F20\u5934\u50CF\u4E0D\u5F97\u8D85\u8FC7 200 KB\uFF01\uFF01");return}let g=new FormData;g.append("file",p.file),j({method:"post",url:`${xe}api/upload`,data:g,headers:{"Content-Type":"multipart/form-data",Authorization:l}}).then(_=>{o(we(_.data))})},x=async()=>{await H("/api/user/edit_userinfo",{signature:c,avatar:r}),w.show("\u4FEE\u6539\u6210\u529F"),a(-1)};return t(ae,{children:[e(ee,{title:"\u4E2A\u4EBA\u4FE1\u606F"}),t("div",{className:$.userinfo,children:[t("div",{className:$.item,children:[e("div",{className:$.title,children:"\u5934\u50CF"}),t("div",{className:$.avatar,children:[e("img",{className:$.avatarUrl,src:r,alt:""}),t("div",{className:$.desc,children:[e("span",{children:"\u652F\u6301 jpg\u3001png\u3001jpeg \u683C\u5F0F\u5927\u5C0F 200KB \u4EE5\u5185\u7684\u56FE\u7247"}),e(Me,{className:$.filePicker,onChange:h,accept:"image/*",children:e(G,{className:$.upload,theme:"primary",size:"xs",children:"\u70B9\u51FB\u4E0A\u4F20"})})]})]})]}),t("div",{className:$.item,children:[e("div",{className:$.title,children:"\u4E2A\u6027\u7B7E\u540D"}),e("div",{className:$.signature,children:e(P,{clearable:!0,type:"text",value:c,placeholder:"\u8BF7\u8F93\u5165\u4E2A\u6027\u7B7E\u540D",onChange:p=>d(p)})})]}),e(G,{onClick:x,style:{marginTop:50},block:!0,theme:"primary",children:"\u4FDD\u5B58"})]})]})},Ha="_account_u7md4_1",Xa="_form_u7md4_4",Ja="_btn_u7md4_9";var fe={account:Ha,form:Xa,btn:Ja};const Va=a=>{const n=K(),{getFieldProps:i,getFieldError:r}=a.form,o=()=>{a.form.validateFields(async(c,d)=>{if(!c){if(console.log(d),d.newpass!=d.newpass2){w.show("\u65B0\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4");return}await H("/api/user/modify_pass",{old_pass:d.oldpass,new_pass:d.newpass,new_pass2:d.newpass2}),w.show("\u4FEE\u6539\u6210\u529F"),n(-1)}})};return t(ae,{children:[e(ee,{title:"\u91CD\u7F6E\u5BC6\u7801"}),t("div",{className:fe.account,children:[t("div",{className:fe.form,children:[e(T,{title:"\u539F\u5BC6\u7801",children:e(P,te({clearable:!0,type:"text",placeholder:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"},i("oldpass",{rules:[{required:!0}]})))}),e(T,{title:"\u65B0\u5BC6\u7801",children:e(P,te({clearable:!0,type:"text",placeholder:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"},i("newpass",{rules:[{required:!0}]})))}),e(T,{title:"\u786E\u8BA4\u5BC6\u7801",children:e(P,te({clearable:!0,type:"text",placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801"},i("newpass2",{rules:[{required:!0}]})))})]}),e(G,{className:fe.btn,block:!0,theme:"primary",onClick:o,children:"\u63D0\u4EA4"})]})]})};var Za=Pe()(Va);const Ga="_about_1urnl_1";var Qa={about:Ga};const es=()=>t(ae,{children:[e(ee,{title:"\u5173\u4E8E\u6211\u4EEC"}),t("div",{className:Qa.about,children:[e("h2",{children:"\u5173\u4E8E\u9879\u76EE"}),t("article",{children:["EasyJI\u662F\u4E00\u6B3E\u6781\u7B80\u8BB0\u8D26App\uFF0C\u91C7\u7528\u524D\u540E\u7AEF\u5206\u79BB\u5F00\u53D1\u3002",t("ul",{children:[e("li",{children:"\u670D\u52A1\u7AEF\u63A5\u53E3\u9009\u7528Egg.js\u6846\u67B6\u8FDB\u884C\u5F00\u53D1"}),e("li",{children:"\u524D\u7AEF\u9009\u7528React\u6846\u67B6\u8FDB\u884C\u5F00\u53D1"}),e("li",{children:"\u7EC4\u4EF6\u5E93\u9009\u7528ZarmUI"}),e("li",{children:"\u811A\u624B\u67B6\u9009\u7528Vite2.0"})]})]}),e("h2",{children:"\u5173\u4E8E\u4F5C\u8005"}),e("article",{children:"\u4E2A\u4EBA\u7B80\u5386\uFF1A"})]})]}),ts=[{path:"/",component:Mt},{path:"data",component:ca},{path:"user",component:da},{path:"login",component:xa},{path:"detail",component:za},{path:"userinfo",component:Oa},{path:"account",component:Za},{path:"about",component:es}],as="_tab_1udd2_1";var ss={tab:as};const Ce=({showNav:a})=>{const[n,i]=s.exports.useState(pe().pathname),r=K(),o=c=>{i(c),r(c)};return t(se,{visible:a,className:ss.tab,activeKey:n,onChange:o,children:[e(se.Item,{itemKey:"/",title:"\u8D26\u5355",icon:e(B,{type:"zhangdan"})}),e(se.Item,{itemKey:"/data",title:"\u7EDF\u8BA1",icon:e(B,{type:"tongji"})}),e(se.Item,{itemKey:"/user",title:"\u6211\u7684",icon:e(B,{type:"wode"})})]})};Ce.propTypes={showNav:R.bool};function ns(){const a=pe(),{pathname:n}=a,i=["/","/data","/user"],[r,o]=s.exports.useState(!1);return s.exports.useEffect(()=>{o(i.includes(n))},[n]),t(ge.Fragment,{children:[e(qe,{primaryColor:"#363636",locale:Ye,children:e(Le,{children:ts.map(c=>e(Ue,{exact:!0,path:c.path,element:e(c.component,{})},c.path))})}),e(Ce,{showNav:r})]})}Ke.render(e(ge.StrictMode,{children:e(Oe,{children:e(ns,{})})}),document.getElementById("root"));
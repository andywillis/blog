import{c as _}from"./vendor.c780f2ce.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const $="_icon_18fo7_1",g="_active_18fo7_10",c={icon:$,active:g};function d(t){return`
    <button
      class="${_(c.icon,t.active&&c.active)}"
      data-type="${t.name}"
      type="button"
    ></button>
  `}const m="_iconStrip_1mqre_1",y={iconStrip:m};function p(t){return`
    <div class="${y.iconStrip}">
      ${t.map(d).join("")}
    </div>
  `}const h=[{name:"tagcloud",active:!0},{name:"email",active:!0},{name:"flickr",active:!0},{name:"rss",active:!1}],v="_header_1ob9s_1",b="_nav_1ob9s_9",i={header:v,nav:b};function j(){return`
    <header class="${i.header}">
      <nav class="${i.nav}">
        ${d({name:"home",active:!0})}
        ${p(h)}
        </nav>
    </header>
  `}const k="_date_60akc_1",I={date:k};function q(t){return`<p class=${I.date}>${t}</p>`}const S="_blockquote_dmxhk_1",w={blockquote:S};function L(t){return`
    <p class=${w.blockquote}>
      ${t}
    </p>
  `}const C="_h1_dg2uk_1",T="_h2_dg2uk_8",x={h1:C,h2:T};function f({level:t,text:n}){return`
    <div class="${x[t]}">
      ${n}
    </div>
  `}const z="_imageContainer_12gzo_1",O="_image_12gzo_1",D="_fadeIn_12gzo_1",l={imageContainer:z,image:O,fadeIn:D};function E({src:t,alt:n}){return`
    <div class="${l.imageContainer}">
      <img
        class="${l.image}"
        src="${t}"
        alt="${n}"
      >
    </div>
  `}const F="_paragraph_1hkvs_2",H={paragraph:F};function N(t){return`
    <p class="${H.paragraph}">
      ${t}
    </p>
  `}const P="_table_4uyej_1",A={table:P};function B(t){return`
    <table class="${A.table}">
      ${t}
    </table>
  `}function M(t){switch(t.type){case"blockquote":return L(t.html);case"heading":return f({level:t.level,text:t.text});case"image":return E({src:t.src,alt:t.alt});case"table":return B(t.html);default:return N(t.html)}}function J(t){return`${M(t)}`}const K="_body_1l82z_1",W={body:K};function Y(t){return`
    <div class="${W.body}">
      ${t.map(J).join("")}
    </div>
  `}const G="_tag_fmrcv_1",Q={tag:G};function R(t){return`
    <li class="${Q.tag}">
      ${t.text}
    </li>
  `}const U="_tags_48fcp_1",V={tags:U};function X(t){return`
    <ul class=${V.tags}>
      ${t.map(R).join("")}
    </ul> 
  `}function Z(t){return f({level:"h1",text:t})}const tt="_entry_2e3fn_1",et={entry:tt};function nt(t){const{date:n,title:r,body:a,tags:e}=t;return`
    <div class="${et.entry}">
      ${Z(r)}
      ${q(n)}
      ${Y(a)}
      ${X(e)}
    </div>
  `}const ot="_entries_5jri3_1",at={entries:ot};function rt(t){return`
    <main class="${at.entries}">
      ${t.map(nt).join("")}
    </main>
  `}const st="_footer_u37sm_1",ct="_heading_u37sm_11",u={footer:st,heading:ct};function it(t){return`
    <footer class="${u.footer}">
      <h2 class="${u.heading}">${t}</h2>
    </footer>
  `}const lt="_journal_1phc2_1",ut="_fadeIn_1phc2_1",dt={journal:lt,fadeIn:ut};function ft(t){return`
    <div class="${dt.journal}">
      ${j()}
      ${rt(t.entries)}
      ${it(`\xA9 Andy Willis ${new Date().getFullYear()}`)}
    </div>
  `}async function _t(t){try{return(await fetch(t)).json()}catch(n){console.log(n)}}async function $t(){const t=await _t("/journal");return ft(t)}const gt=await $t();document.body.innerHTML=gt;
//# sourceMappingURL=index.914f1686.js.map

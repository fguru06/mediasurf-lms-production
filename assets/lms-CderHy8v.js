var e=[{name:`Violet`,bg:`var(--surface2)`,accent:`var(--purple)`},{name:`Teal`,bg:`var(--surface2)`,accent:`var(--teal)`},{name:`Rose`,bg:`var(--surface2)`,accent:`var(--red)`},{name:`Amber`,bg:`var(--surface2)`,accent:`var(--amber)`},{name:`Blue`,bg:`var(--surface2)`,accent:`var(--blue)`},{name:`Emerald`,bg:`var(--surface2)`,accent:`var(--green)`},{name:`Slate`,bg:`var(--surface2)`,accent:`var(--text3)`},{name:`Pink`,bg:`var(--surface2)`,accent:`var(--pink)`}],t=[`🎨`,`📐`,`💡`,`🚀`,`🎓`,`🔬`,`💻`,`🎭`,`🌍`,`⚡`,`🎵`,`📊`,`🧠`,`🏆`,`📸`,`🎯`,`🌱`,`🔮`,`📚`,`🛠️`,`🚗`,`🔧`,`🏗️`,`⚙️`],n=[`var(--purple)`,`var(--teal)`,`var(--red)`,`var(--amber)`,`var(--blue)`,`var(--green)`,`var(--pink)`,`var(--text3)`],r=[{id:`blank`,label:`Blank`},{id:`slide-layout`,label:`Slide Layout`},{id:`title-text`,label:`Title + Text`},{id:`text-image`,label:`Text + Image`},{id:`video-only`,label:`Video Focus`},{id:`two-col`,label:`Two Column`},{id:`image-top`,label:`Hero Image`},{id:`quiz-focus`,label:`Quiz Slide`},{id:`full-text`,label:`Article`},{id:`steps`,label:`Numbered Steps`},{id:`callout`,label:`Callout Box`},{id:`code-demo`,label:`Code Demo`},{id:`video-quiz`,label:`Video + Quiz`},{id:`faq`,label:`FAQ Accordion`},{id:`notes`,label:`Notes + Code`},{id:`media-guide`,label:`Media Guide`},{id:`assessment`,label:`Assessment`},{id:`compare`,label:`Compare Columns`}],i={blank:[],"slide-layout":[{type:`text`,content:`<h2>Slide Title</h2><p>Add your core teaching point here.</p>`},{type:`image`,content:``,alt:`Slide visual`},{type:`callout`,content:`<p><strong>Key takeaway:</strong> summarize the most important idea.</p>`,calloutStyle:`info`}],"title-text":[{type:`text`,content:``}],"text-image":[{type:`text`,content:``},{type:`image`,content:``}],"video-only":[{type:`video`,content:``}],"two-col":[{type:`text`,content:`Column 1 content...`},{type:`text`,content:`Column 2 content...`}],"image-top":[{type:`image`,content:``},{type:`text`,content:``}],"quiz-focus":[{type:`quiz`,content:``,questions:[{q:``,subtype:`multiple-choice`,options:[``,``,``,``],correct:0}]}],"full-text":[{type:`text`,content:``}],steps:[{type:`text`,content:`## Step 1
Describe the first step...

## Step 2
Describe the second step...

## Step 3
Describe the third step...`}],callout:[{type:`callout`,content:``,calloutStyle:`tip`},{type:`text`,content:``}],"code-demo":[{type:`text`,content:``},{type:`code`,content:``,language:`javascript`}],"video-quiz":[{type:`video`,content:``},{type:`quiz`,content:``,questions:[{q:``,subtype:`multiple-choice`,options:[``,``,``,``],correct:0}]}],faq:[{type:`text`,content:`<h2>Frequently Asked Questions</h2><p>Use this accordion to group common questions, support notes, or lesson checkpoints.</p>`},{type:`accordion`,items:[{title:`Question 1`,content:`<p>Answer the first common question here.</p>`},{title:`Question 2`,content:`<p>Answer the second common question here.</p>`}]}],notes:[{type:`text`,content:`<h2>Lesson Notes</h2><p>Use this template for guided reading, annotations, or recap content.</p>`},{type:`code`,content:`function example() {
  return "Sample code"
}`,language:`javascript`}],"media-guide":[{type:`video`,content:``},{type:`text`,content:`<h2>Media Guide</h2><p>Add a supporting explanation, transcript, or reflection prompt beneath the media.</p>`},{type:`callout`,content:`<p><strong>Watch for:</strong> key concepts, examples, or warnings.</p>`,calloutStyle:`warning`}],assessment:[{type:`text`,content:`<h2>Quick Check</h2><p>Use this template to pair a short concept recap with a short assessment.</p>`},{type:`quiz`,content:``,questions:[{q:`What is the main idea of this lesson?`,subtype:`multiple-choice`,options:[`A summary`,`A title`,`A footer`,`A caption`],correct:0}]}],compare:[{type:`text`,content:`<h2>Compare and Contrast</h2><p>Set up two ideas side by side, then highlight similarities and differences.</p>`},{type:`tabs`,items:[{title:`Option A`,content:`<p>Describe the first option here.</p>`},{title:`Option B`,content:`<p>Describe the second option here.</p>`}]}]};function a({paragraphs:e=2,withHeading:t=!0}={}){let n=[];t&&n.push(`<h2>Section heading</h2>`);let r=[`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,`Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`];for(let t=0;t<e;t++)n.push(`<p>${r[t%r.length]}</p>`);return n.join(``)}function o(e=`javascript`){let t=String(e||`javascript`).toLowerCase();return t===`python`?`def greet(name):
    return f"Hello, {name}!"

print(greet("world"))`:t===`html`?`<!doctype html>
<html>
  <body>
    <h1>Hello world</h1>
  </body>
</html>`:t===`css`?`.card {
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,.12);
}`:t===`sql`?`SELECT id, name, status
FROM lessons
WHERE status = 'published'
ORDER BY updated_at DESC;`:t===`json`?`{
  "title": "Sample",
  "enabled": true,
  "items": [1, 2, 3]
}`:t===`markdown`?`# Heading

- Point one
- Point two

> Add your lesson note here.`:t===`bash`?`echo "Preparing lesson assets"
mkdir -p output
cp source.md output/`:`function greet(name) {
  return \`Hello, \${name}!\`
}

console.log(greet('world'))`}function s(){return`What is the main idea of this section?`}function c(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6)}function l(e){return(e.modules||[]).reduce((e,t)=>e+(t.lessons||[]).length,0)}function u(e){let t=0;return(e.modules||[]).forEach(e=>(e.lessons||[]).forEach(e=>t+=e.duration||0)),t}function d(e){return!e||e<=0?`—`:e<60?e+`m`:Math.floor(e/60)+`h `+e%60+`m`}function f(e){return(e.modules||[]).length}function p(e){return(e||``).split(` `).map(e=>e[0]).join(``).slice(0,2).toUpperCase()}function m(e){return n[e%n.length]}function h(t){return e[t]||e[0]}function g(e){let t=(e.blocks||[]).map(e=>e.type);return t.includes(`quiz`)?`quiz`:t.includes(`video`)?`video`:t.includes(`audio`)?`audio`:t.length>1?`mixed`:t[0]||`text`}function _(e){return{video:`▶`,audio:`♪`,text:`T`,quiz:`?`,file:`⤓`,mixed:`M`,image:`🖼`}[e]||`•`}function v(e){let t=0;for(let n of e.blocks||[])if(n.type===`text`){let e=(n.content||``).trim().split(/\s+/).filter(Boolean).length;t+=Math.max(1,Math.round(e/200))}else n.type===`quiz`?t+=(n.questions||[]).length:n.type===`video`||n.type===`audio`?t+=5:n.type===`code`&&(t+=2);return Math.max(1,t)}export{o as _,m as a,d as c,l as d,f,a as g,p as h,i,c as l,_ as m,t as n,g as o,u as p,r,v as s,e as t,h as u,s as v};
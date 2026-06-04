(async()=>{try{if("serviceWorker"in navigator){for(const r of await navigator.serviceWorker.getRegistrations())await r.unregister()}if("caches"in window){for(const k of await caches.keys())await caches.delete(k)}}catch(e){}})();
let activeWorld=DATA.worlds[0].id, activeCat="全部", tool="cmd";
const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
const state={done:JSON.parse(localStorage.getItem("work_done")||"[]"),xp:+localStorage.getItem("work_xp")||0,fav:JSON.parse(localStorage.getItem("work_fav")||"[]")};
function save(){localStorage.setItem("work_done",JSON.stringify(state.done));localStorage.setItem("work_xp",state.xp);localStorage.setItem("work_fav",JSON.stringify(state.fav))}
function nav(id){
  closeAllModals();
  $$(".page").forEach(p=>p.classList.remove("active"));
  $("#"+id).classList.add("active");
  $$(".tabbar button").forEach(b=>b.classList.toggle("active",b.dataset.page===id));
}
let modalStack=[];
function activeModalId(){
  const m=$$(".modal").find(x=>x.classList.contains("active"));
  return m?m.id:null;
}
function openModal(id){
  const current=activeModalId();
  if(current && current!==id) modalStack.push(current);
  $$(".modal").forEach(m=>m.classList.remove("active"));
  $("#"+id).classList.add("active");
  if(id==="settings" && typeof renderThemeButtons==="function") renderThemeButtons();
  if(id==="search") setTimeout(()=>{try{searchInput.focus()}catch(e){}},80);
}
function closeModal(){
  const prev=modalStack.pop();
  $$(".modal").forEach(m=>m.classList.remove("active"));
  if(prev && $("#"+prev)) $("#"+prev).classList.add("active");
}
function closeAllModals(){
  modalStack=[];
  $$(".modal").forEach(m=>m.classList.remove("active"));
}
function unlocked(id){return id===1||state.done.includes(id-1)||state.done.includes(id)}
function role(){let c=state.done.length;if(c>=60)return"全栈工具师";if(c>=45)return"自动化工具师";if(c>=35)return"服务器学徒";if(c>=25)return"网络排障员";if(c>=15)return"安防巡检员";if(c>=8)return"电脑店技术员";return"技术学徒"}
function renderHome(){
  roleName.textContent=role();
  progressText.textContent=`已完成 ${state.done.length} 关 · ${state.xp} XP`;
  continueBtn.textContent=state.done.length===0?"开始学习":(state.done.length>=DATA.lessons.length?"全部完成":"继续闯关");
  progressBar.style.width=Math.min(100,Math.round(state.done.length/DATA.lessons.length*100))+"%";
  worldStrip.innerHTML=DATA.worlds.map(w=>`<article class="world-card" onclick="goWorld('${w.id}')"><div class="emoji">${w.emoji}</div><h3>${w.title}</h3><p>${w.desc}</p></article>`).join("");
  hotProblems.innerHTML=DATA.problems.slice(0,6).map(p=>`<div class="quick" onclick="openProblem('${attr(p.title)}')">${p.title}</div>`).join("");
  bossPreview.innerHTML=DATA.bosses.slice(0,2).map(b=>`<article class="card"><span class="sub">BOSS</span><h3>${b.title}</h3><p>${b.world}</p></article>`).join("");
}
function goWorld(id){activeWorld=id;nav("learn");renderLearn()}
function renderLearn(){worldTabs.innerHTML=DATA.worlds.map(w=>`<button class="chip ${w.id===activeWorld?"active":""}" onclick="goWorld('${w.id}')">${w.emoji} ${w.title}</button>`).join("");let list=DATA.lessons.filter(l=>l.world===activeWorld);lessonPath.innerHTML=list.map(l=>`<div class="node ${state.done.includes(l.id)?"done":unlocked(l.id)?"open":"lock"}" onclick="tryLesson(${l.id})"><div class="badge">${state.done.includes(l.id)?"✓":l.id}</div><div class="node-card"><h3>${l.title}</h3><p>${l.role} · +${l.xp} XP</p></div></div>`).join("")}
function tryLesson(id){if(!unlocked(id))return alert("先完成上一关");openLesson(id)}
let currentLesson=null;
let lessonStep=0;

function lessonSections(l){
  const cmdText=(l.commands||[]).join("\n");
  return [
    {name:"概览", html:`<section class="block"><span class="sub">SCENE</span><h3>场景</h3><p>${l.scene}</p></section>`},
    {name:"目标", html:`<section class="block"><span class="sub">TARGET</span><h3>本关目标</h3>${l.goal.map(x=>`<p>• ${x}</p>`).join("")}</section>`},
    {name:"讲解", html:`<section class="block"><span class="sub">KNOWLEDGE</span><h3>知识讲解</h3>${l.explain.map(x=>`<p>${x}</p>`).join("")}</section>`},
    {name:"步骤", html:`<section class="block"><span class="sub">WORKFLOW</span><h3>工作步骤 / 命令</h3><button class="copy" id="copyLessonCmd">复制</button><pre class="cmd">${esc(cmdText)}</pre></section>`},
    {name:"测试", html:`<section class="block"><span class="sub">QUIZ</span><h3>通关测试</h3>${l.quiz.map((q,qi)=>`<p>${q[0]}</p>${q[1].map((o,i)=>`<button class="option" data-a="${q[2]}" data-i="${i}" onclick="answer(this,${l.id},${l.xp})">${String.fromCharCode(65+i)}. ${o}</button>`).join("")}`).join("")}<p id="result"></p></section>`},
    {name:"关联", html:`<section class="block"><span class="sub">WORK LINK</span><h3>关联工作问题</h3><p>学完这一关，工作中遇到下面这些问题时就能用上。</p>${l.related.map(x=>`<button class="rowbtn" onclick="openProblem('${attr(x)}')">${x}</button> `).join("")}</section>`}
  ];
}

function renderLessonStep(){
  if(!currentLesson) return;
  const l=currentLesson;
  const sections=lessonSections(l);
  lessonStep=Math.max(0,Math.min(lessonStep,sections.length-1));
  lessonMeta.textContent=`${l.role} · +${l.xp} XP · ${lessonStep+1}/${sections.length}`;
  lessonTitle.textContent=l.title;
  lessonBody.innerHTML=
    `<div class="lesson-progress"><i style="width:${Math.round((lessonStep+1)/sections.length*100)}%"></i></div>`+
    `<div class="lesson-tabs">${sections.map((s,i)=>`<button class="${i===lessonStep?"active":""}" onclick="setLessonStep(${i})">${s.name}</button>`).join("")}</div>`+
    sections[lessonStep].html+
    `<div class="lesson-actions">
      <button class="ghost" onclick="prevLessonStep()" ${lessonStep===0?"disabled":""}>上一页</button>
      <button class="primary2" onclick="nextLessonStep()">${lessonStep===sections.length-1?(state.done.includes(currentLesson.id)?"关闭":"稍后继续"):"下一页"}</button>
    </div>`;
  const copyBtn=document.getElementById("copyLessonCmd");
  if(copyBtn) copyBtn.onclick=()=>copyText((l.commands||[]).join("\n"));
  try{document.querySelector("#lessonModal").scrollTop=0;}catch(e){}
}
function setLessonStep(i){lessonStep=i;renderLessonStep();}
function prevLessonStep(){lessonStep--;renderLessonStep();}
function nextLessonStep(){
  const sections=lessonSections(currentLesson);
  if(lessonStep < sections.length-1){lessonStep++;renderLessonStep();return;}
  closeModal();
}
function openLesson(id){
  let l=DATA.lessons.find(x=>x.id===id);
  if(!l) return;
  currentLesson=l;
  lessonStep=0;
  openModal("lessonModal");
  renderLessonStep();
}
function answer(btn,id,xp){let ok=+btn.dataset.i===+btn.dataset.a;btn.classList.add(ok?"correct":"wrong");btn.parentElement.querySelectorAll(".option").forEach(b=>{b.disabled=true;if(+b.dataset.i===+b.dataset.a)b.classList.add("correct")});if(!state.done.includes(id)){state.done.push(id);state.xp+=xp;save();renderAll()}result.textContent=ok?"回答正确，已通关":"答案已标出，本关已完成，建议复习"}
function renderWork(){let cats=["全部",...new Set(DATA.problems.map(p=>p.cat))];problemFilters.innerHTML=cats.map(c=>`<button class="chip ${c===activeCat?"active":""}" onclick="setCat('${attr(c)}')">${c}</button>`).join("");let list=DATA.problems.filter(p=>activeCat==="全部"||p.cat===activeCat);problemList.innerHTML=list.map(p=>`<article class="card" onclick="openProblem('${attr(p.title)}')"><span class="sub">${p.cat}</span><h3>${p.title}</h3><p>${p.steps[0]}</p></article>`).join("")}
function setCat(c){activeCat=c;renderWork()}
function openProblem(title){let p=DATA.problems.find(x=>x.title===title);if(!p)return;problemCat.textContent=p.cat;problemTitle.textContent=p.title;problemBody.innerHTML=`<section class="block"><h3>排查步骤</h3>${p.steps.map((s,i)=>`<p>${i+1}. ${s}</p>`).join("")}</section><section class="block"><h3>经验提醒</h3>${p.tips.map(t=>`<p>• ${t}</p>`).join("")}</section>`;openModal("problemModal")}
function renderTools(){
  toolContent.innerHTML="";
  $$(".seg button").forEach(b=>b.classList.toggle("active",b.dataset.tool===tool));
  if(tool==="cmd"){
    toolContent.innerHTML=DATA.commands.map(c=>`<article class="card"><span class="sub">${c.cat}</span><h3>${c.name}</h3><p>${c.desc}</p><button class="copy" onclick="copyText(${jsstr(c.example)})">复制</button><pre class="cmd">${esc(c.example)}</pre></article>`).join("");
  }else if(tool==="boss"){
    toolContent.innerHTML=DATA.bosses.map(b=>`<article class="card"><span class="sub">${b.world}</span><h3>${b.title}</h3>${b.steps.map(s=>`<p>• ${s}</p>`).join("")}</article>`).join("");
  }else{
    toolContent.innerHTML=`<article class="card"><h3>监控存储估算</h3><p>后续加入：摄像头数量、码率、天数 → 自动估算硬盘容量。</p></article><article class="card"><h3>装机/监控报价</h3><p>后续加入：配件、材料、人工 → 自动生成报价清单。</p></article>`;
  }
}
function renderMe(){doneCount.textContent=state.done.length;xpCount.textContent=state.xp;favCount.textContent=state.fav.length;achievements.innerHTML=[["电脑店技术员",8],["安防巡检员",15],["网络排障员",25],["服务器学徒",35],["自动化工具师",45],["全栈工具师",60]].map(a=>`<article class="card"><h3>${state.done.length>=a[1]?"✅":"🔒"} ${a[0]}</h3><p>完成 ${a[1]} 关解锁</p></article>`).join("")}
function renderSearch(){let k=(searchInput.value||"").toLowerCase();if(!k){searchResult.innerHTML=`<article class="card"><p>搜索工作问题、关卡、命令。</p></article>`;return}let arr=[];DATA.lessons.filter(l=>JSON.stringify(l).toLowerCase().includes(k)).slice(0,8).forEach(l=>arr.push(`<article class="card" onclick="openLesson(${l.id})"><span class="sub">关卡</span><h3>${l.title}</h3><p>${l.role}</p></article>`));DATA.problems.filter(p=>JSON.stringify(p).toLowerCase().includes(k)).slice(0,8).forEach(p=>arr.push(`<article class="card" onclick="openProblem('${attr(p.title)}')"><span class="sub">${p.cat}</span><h3>${p.title}</h3><p>${p.steps[0]}</p></article>`));DATA.commands.filter(c=>JSON.stringify(c).toLowerCase().includes(k)).slice(0,8).forEach(c=>arr.push(`<article class="card"><span class="sub">命令</span><h3>${c.name}</h3><pre class="cmd">${esc(c.example)}</pre></article>`));searchResult.innerHTML=arr.join("")||`<article class="card"><p>没找到</p></article>`}

function currentTheme(){return localStorage.getItem("work_theme")||"system"}
function setTheme(t){
  localStorage.setItem("work_theme",t);
  document.documentElement.setAttribute("data-theme",t);
  renderThemeButtons();
}
function renderThemeButtons(){
  const t=currentTheme();
  document.querySelectorAll("[data-theme-choice]").forEach(b=>{
    b.classList.toggle("active", b.dataset.themeChoice===t);
  });
}

function copyText(txt){
  try{
    navigator.clipboard.writeText(txt);
    toast("已复制");
  }catch(e){
    const ta=document.createElement("textarea");
    ta.value=txt;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    toast("已复制");
  }
}
function toast(msg){
  let t=document.getElementById("toast");
  if(!t){
    t=document.createElement("div");
    t.id="toast";
    document.body.appendChild(t);
  }
  t.textContent=msg;
  t.className="show";
  setTimeout(()=>t.className="",1400);
}
function jsstr(v){return JSON.stringify(String(v));}

function download(name,obj){let a=document.createElement("a"),blob=new Blob([JSON.stringify(obj,null,2)],{type:"application/json;charset=utf-8"});a.href=URL.createObjectURL(blob);a.download=name;a.click();URL.revokeObjectURL(a.href)}
function downloadData(){download("tech-quest-data.json",DATA)}function downloadProgress(){download("tech-quest-progress.json",state)}
function renderAll(){renderHome();renderLearn();renderWork();renderTools();renderMe();renderSearch();renderThemeButtons()}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}function attr(s){return String(s).replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,"&quot;")}
$$(".tabbar button").forEach(b=>b.onclick=()=>nav(b.dataset.page));$$(".seg button").forEach(b=>b.onclick=()=>{tool=b.dataset.tool;renderTools()});searchInput.oninput=renderSearch;document.querySelectorAll("[data-theme-choice]").forEach(b=>b.onclick=()=>setTheme(b.dataset.themeChoice));continueBtn.onclick=()=>{
  const next=DATA.lessons.find(l=>!state.done.includes(l.id)&&unlocked(l.id));
  if(next){openLesson(next.id);return;}
  alert("全部关卡已完成，可以去实战问题或工具箱继续练习。");
  nav("work");
};resetBtn.onclick=()=>{if(confirm("清空本机进度？")){state.done=[];state.xp=0;state.fav=[];save();renderAll();
try{
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(){
    if((localStorage.getItem('work_theme') || 'system') === 'system'){
      document.documentElement.setAttribute('data-theme','system');
      renderThemeButtons();
    }
  });
}catch(e){}closeModal()}};renderAll();
try{
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(){
    if((localStorage.getItem('work_theme') || 'system') === 'system'){
      document.documentElement.setAttribute('data-theme','system');
      renderThemeButtons();
    }
  });
}catch(e){}

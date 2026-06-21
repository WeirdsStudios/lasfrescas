/* ======================================================
   LAS FRESCAS — main.js
   ====================================================== */

const WA = '5537354762';

/* ══════════════════════════
   DATOS — EDITA AQUÍ
   ══════════════════════════ */

/* SABORES DE PALETA */
const SABORES_PALETA = [
  { id:'tamarindo', nm:'Tamarindo', color:'#8B6914', emoji:'🤎' },
  { id:'grosella',  nm:'Grosella',  color:'#C71585', emoji:'🍇' },
  { id:'limon',     nm:'Limón',     color:'#7CB518', emoji:'🍋' },
  { id:'guayaba',   nm:'Guayaba',   color:'#E8427C', emoji:'🌸' },
  { id:'chicle',    nm:'Chicle',    color:'#FF69B4', emoji:'🍬' },
  { id:'mango',     nm:'Mango',     color:'#F5A623', emoji:'🥭' },
];

/* SALSAS */
const SALSAS = [
  { id:'chamoy',           nm:'Chamoy',              img:'assets/images/salsas/chamoy.jpg',             emoji:'🌶️' },
  { id:'pulparindo-orig',  nm:'Pulparindo Original', img:'assets/images/salsas/pulparindo-original.jpg',emoji:'🟥' },
  { id:'pulparindo-mango', nm:'Pulparindo Mango',    img:'assets/images/salsas/pulparindo-mango.jpg',   emoji:'🥭' },
];

/* POLVOS */
const POLVOS = [
  { id:'tajin',        nm:'Tajín',             img:'assets/images/polvos/tajin.jpg',            emoji:'🫙' },
  { id:'mig-original', nm:'Miguelito Original', img:'assets/images/polvos/miguelito-original.jpg',emoji:'⭐' },
  { id:'mig-pina',     nm:'Miguelito Piña',     img:'assets/images/polvos/miguelito-pina.jpg',  emoji:'🍍' },
  { id:'mig-fresa',    nm:'Miguelito Fresa',    img:'assets/images/polvos/miguelito-fresa.jpg', emoji:'🍓' },
  { id:'mig-uva',      nm:'Miguelito Uva',      img:'assets/images/polvos/miguelito-uva.jpg',  emoji:'🍇' },
  { id:'mig-mora',     nm:'Miguelito MoraAzul', img:'assets/images/polvos/miguelito-mora.jpg', emoji:'🫐' },
];

/* TOPPINGS (stock: true=disponible, false=agotado) */
const TOPPINGS = [
  { id:'gusanos-gomita',   nm:'Gusanos de Gomita',       emoji:'🐛', img:'assets/images/toppings/gusanos-gomita.jpg',   stock:true  },
  { id:'ositos-gomita',    nm:'Ositos de Gomita',         emoji:'🐻', img:'assets/images/toppings/ositos-gomita.jpg',    stock:true  },
  { id:'swinkles',         nm:'Swinkles',                 emoji:'🌈', img:'assets/images/toppings/skwinkles.webp',       stock:true  },
  { id:'pulparindo',       nm:'Pulparindo',               emoji:'🍬', img:'assets/images/toppings/pulparindo.jpg',       stock:true  },
  { id:'mangochile-gomita',nm:'Mangochile de Gomita',     emoji:'🥭', img:'assets/images/toppings/mangochile-gomita.jpg',stock:true  },
  { id:'salvavidas',       nm:'Salvavidas de Gomita',     emoji:'🍭', img:'assets/images/toppings/salvavidas.jpg',       stock:true  },
  { id:'frutas-gomita',    nm:'Frutas de Gomita',         emoji:'🍊', img:'assets/images/toppings/frutas-gomita.jpg',    stock:true  },
  { id:'tiras-arcoiris',   nm:'Tiras Arcoíris',           emoji:'🌈', img:'assets/images/toppings/tiras-arcoiris.jpg',   stock:true  },
  { id:'fruta-temporada',  nm:'Fruta de Temporada',       emoji:'🍓', img:'assets/images/toppings/fruta-temporada.jpg',  stock:true  },
  { id:'banderillas',      nm:'Banderillas de Tamarindo',  emoji:'🍢', img:'assets/images/toppings/banderillas.webp',     stock:true  },
  { id:'tortolitos',       nm:'Tortolitos',               emoji:'🕊️', img:'assets/images/toppings/tortolitos.jpg',       stock:true  },
  { id:'picarescas',       nm:'Picarescas',               emoji:'🌶️', img:'assets/images/toppings/picafresas.jpg',       stock:true  },
  { id:'arandano',         nm:'Arándano Enchilado',       emoji:'🫐', img:'assets/images/toppings/arandano.jpg',         stock:true  },
];

/* PAQUETES */
const packages = [
  {qty:30,  price:1350, unit:45, pop:false, disc:''},
  {qty:50,  price:2150, unit:43, pop:true,  disc:'Ahorra $100'},
  {qty:75,  price:2925, unit:39, pop:false, disc:'Ahorra $300'},
  {qty:100, price:3800, unit:38, pop:false, disc:'Ahorra $700'},
  {qty:150, price:5550, unit:37, pop:false, disc:'Ahorra $1,200'},
  {qty:200, price:null, unit:null, pop:false, disc:'Precio especial'},
];

/* EXTRAS */
const extras = [
  { id:'deco', em:'🎉', nm:'Decoración Temática',
    dsc:'Globos, Vasos personalizados, Palillo decorativo y Estación de tatuajes de agua',
    pr:25, per:true },
];

/* TIPOS DE EVENTO */
const eventTypes = [
  {id:'boda',em:'💍',lbl:'Boda'},{id:'bautizo',em:'👶',lbl:'Bautizo'},
  {id:'cumple',em:'🎂',lbl:'Cumpleaños'},{id:'xv',em:'👑',lbl:'XV Años'},
  {id:'graduacion',em:'🎓',lbl:'Graduación'},{id:'empresa',em:'🏢',lbl:'Corporativo'},
  {id:'feria',em:'🎡',lbl:'Feria/Bazar'},{id:'otro',em:'🎉',lbl:'Otro'},
];

/* FERIAS */
const ferias = [
  {date:'22, 23 y 24 de Mayo 2026', nm:'Feria del Pueblo San Lucas Xolox', loc:'Tecamac, Estado de México', hrs:'11:00 AM – 9:00 PM', tag:'¡Ya terminó!', live:false},
  {date:'28 y 29 de Julio 2026', nm:'Feria del Cerdo San Lucas Xolox', loc:'Tecamac, Estado de México', hrs:'07:00 PM – 02:00 AM', tag:'¡Próximamente!', live:false},
  {date:'10 y 12 de Septiembre 2026', nm:'Bazar Popular de Aragón', loc:'Cerro Prieto, CDMX', hrs:'11:00 AM – 9:00 PM', tag:'¡Próximamente!', live:false},
];

/* ══════════════════════════
   ESTADO GLOBAL
   ══════════════════════════ */
let state = {
  step:0, pkg:null,
  /* Paso 2 - barra builder (4 fases) */
  barraPhase: 0,           // 0=sabores, 1=salsas, 2=polvos, 3=toppings
  paletteFlavors: [],      // máx 3 (con repetición)
  selectedSalsas: [],
  selectedPolvos: [],
  barraSlots: new Array(8).fill(null),  // 8 charolas
  /* Resto */
  extras:[], evType:'',
  date:'',time:'',loc:'',name:'',phone:'',email:'',notes:''
};
let activeSlot = null; // charola activa en el picker

/* ══════════════════════════
   PRICING
   ══════════════════════════ */
function calcTotal(){
  const p=packages.find(x=>x.qty===state.pkg);
  if(!p||!p.price) return null;
  let tot=p.price;
  state.extras.forEach(eid=>{
    const e=extras.find(x=>x.id===eid);
    if(e&&e.pr>0) tot+=e.per?e.pr*p.qty:e.pr;
  });
  return tot;
}
function calcApartado(){
  const t=calcTotal();
  return t?Math.ceil(t*0.5/10)*10:null; // 50%
}

/* ══════════════════════════
   PAQUETES
   ══════════════════════════ */
function renderPackages(){
  document.getElementById('pkgGrid').innerHTML=packages.map(p=>`
    <div class="pkg-card${state.pkg===p.qty?' sel':''}" onclick="selPkg(${p.qty})">
      ${p.pop?'<div class="pkg-pop">⭐ Más pedido</div>':''}
      <div class="pkg-qty">${p.qty}</div>
      <div class="pkg-ql">vasitos</div>
      ${p.price?`<div class="pkg-price">$${p.price.toLocaleString()}</div>
        <div class="pkg-unit">$${p.unit} c/u</div>
        ${p.disc?`<div class="pkg-save">✓ ${p.disc}</div>`:''}`:
       `<div class="pkg-price" style="font-size:13px;line-height:1.3">Cotización<br>especial</div>`}
    </div>`).join('');
}
function selPkg(qty){state.pkg=qty;renderPackages();}

/* ══════════════════════════════════════
   BARRA BUILDER — 4 fases
   ══════════════════════════════════════ */

/* --- Fase 0: Sabores de Paleta --- */
function renderSaboresFase(){
  const container=document.getElementById('saboresGrid');
  if(!container) return;
  // Muestra el contador
  const cnt=state.paletteFlavors.length;
  container.innerHTML=`
    <p class="fase-hint">Elige 3 sabores para tus paletas — puedes repetir 🍡</p>
    <div class="sabores-seleccion" id="saboresSel">
      ${[0,1,2].map(i=>`
        <div class="sabor-slot${state.paletteFlavors[i]?' filled':''}">
          ${state.paletteFlavors[i]?
            `<span style="background:${SABORES_PALETA.find(s=>s.id===state.paletteFlavors[i])?.color};color:#fff;border-radius:100px;padding:4px 14px;font-size:13px;font-weight:800">
              ${SABORES_PALETA.find(s=>s.id===state.paletteFlavors[i])?.emoji}
              ${SABORES_PALETA.find(s=>s.id===state.paletteFlavors[i])?.nm}
              <button onclick="removeSabor(${i})" style="background:none;border:none;color:#fff;font-size:14px;cursor:pointer;margin-left:4px;font-weight:900">✕</button>
            </span>`:
            `<span class="sabor-slot-empty">Paleta ${i+1}</span>`}
        </div>`).join('')}
    </div>
    <div class="sabores-opciones">
      ${SABORES_PALETA.map(s=>`
        <div class="sabor-card" onclick="addSabor('${s.id}')"
          style="--sc:${s.color}" title="Agregar ${s.nm}">
          <div class="sabor-chip" style="background:${s.color}">${s.emoji}</div>
          <div class="sabor-nm">${s.nm}</div>
        </div>`).join('')}
    </div>`;
}
function addSabor(id){
  if(state.paletteFlavors.length>=3) return;
  state.paletteFlavors.push(id);
  renderSaboresFase();
  updateBarraSubPhaseUI();
}
function removeSabor(idx){
  state.paletteFlavors.splice(idx,1);
  renderSaboresFase();
  updateBarraSubPhaseUI();
}

/* --- Fase 1: Salsas --- */
function renderSalsasFase(){
  const g=document.getElementById('salsasFaseGrid');
  if(!g) return;
  g.innerHTML=SALSAS.map(s=>{
    const sel=state.selectedSalsas.includes(s.id);
    return `<div class="sp-card${sel?' sp-sel':''}" onclick="toggleSalsa('${s.id}')">
      <div class="sp-img-wrap">
        <img src="${s.img}" alt="${s.nm}" onerror="this.outerHTML='<div class=\\'sp-emoji\\'>${s.emoji}</div>'">
        ${sel?'<div class="sp-check">✓</div>':''}
      </div>
      <div class="sp-name">${s.nm}</div>
    </div>`;
  }).join('');
}
function toggleSalsa(id){
  const i=state.selectedSalsas.indexOf(id);
  if(i>=0)state.selectedSalsas.splice(i,1);else state.selectedSalsas.push(id);
  renderSalsasFase();
}

/* --- Fase 2: Polvos --- */
function renderPolvosFase(){
  const g=document.getElementById('polvosFaseGrid');
  if(!g) return;
  g.innerHTML=POLVOS.map(p=>{
    const sel=state.selectedPolvos.includes(p.id);
    return `<div class="sp-card${sel?' sp-sel':''}" onclick="togglePolvo('${p.id}')">
      <div class="sp-img-wrap">
        <img src="${p.img}" alt="${p.nm}" onerror="this.outerHTML='<div class=\\'sp-emoji\\'>${p.emoji}</div>'">
        ${sel?'<div class="sp-check">✓</div>':''}
      </div>
      <div class="sp-name">${p.nm}</div>
    </div>`;
  }).join('');
}
function togglePolvo(id){
  const i=state.selectedPolvos.indexOf(id);
  if(i>=0)state.selectedPolvos.splice(i,1);else state.selectedPolvos.push(id);
  renderPolvosFase();
}

/* --- Fase 3: Toppings en la Barra --- */
function countTopping(id){return state.barraSlots.filter(s=>s&&s.id===id).length;}
function barraIsValid(){return state.barraSlots.every(s=>s!==null);}

function renderBarraSlots(){
  for(let i=0;i<8;i++){
    const slot=document.getElementById(`slot-${i}`);
    if(!slot) continue;
    const t=state.barraSlots[i];
    if(t){
      slot.style.backgroundImage=`url('${t.img}')`;
      slot.classList.add('filled');
      slot.title=t.nm;
    } else {
      slot.style.backgroundImage='';
      slot.classList.remove('filled');
      slot.title=`Charola ${i+1} — toca para elegir`;
    }
    slot.classList.toggle('active-slot',i===activeSlot);
  }
  updateBarraStatus();
  updateSlotList();
}

function updateBarraStatus(){
  const filled=state.barraSlots.filter(s=>s!==null).length;
  const el=document.getElementById('barraStatus');
  if(!el) return;
  el.textContent=`${filled} / 8 charolas listas`;
  el.className='barra-status'+(filled===8?' done':'');
}

function selectSlot(i){
  activeSlot=i;
  renderBarraSlots();
  openToppingPicker();
}
function openToppingPicker(){
  document.getElementById('toppingPicker')?.classList.add('open');
  renderToppingPicker();
}
function closeToppingPicker(){
  document.getElementById('toppingPicker')?.classList.remove('open');
  activeSlot=null;
  renderBarraSlots();
}
function renderToppingPicker(){
  const grid=document.getElementById('toppingPickerGrid');
  if(!grid) return;
  const titleEl=document.getElementById('pickerTitle');
  if(titleEl) titleEl.textContent=`¿Qué va en la charola ${activeSlot!==null?activeSlot+1:'?'}?`;
  grid.innerHTML=TOPPINGS.map(t=>{
    const count=countTopping(t.id);
    const current=activeSlot!==null&&state.barraSlots[activeSlot]?.id===t.id;
    const disabled=!t.stock||(count>=2&&!current);
    return `<div class="tp-card${disabled?' tp-disabled':''}${current?' tp-current':''}"
      onclick="${disabled?'':` pickTopping('${t.id}')`}"
      title="${!t.stock?'Agotado por el momento':count>=2&&!current?'Máximo 2 por topping':t.nm}">
      <div class="tp-img-wrap">
        <img src="${t.img}" alt="${t.nm}"
          onerror="this.outerHTML='<div class=\\'tp-emoji\\'>${t.emoji}</div>'">
        ${!t.stock?'<div class="tp-badge out">Agotado</div>':count>0?`<div class="tp-badge count">${count}/2</div>`:''}
        ${current?'<div class="tp-sel-check">✓</div>':''}
      </div>
      <div class="tp-name">${t.nm}</div>
    </div>`;
  }).join('');
}
function pickTopping(id){
  if(activeSlot===null) return;
  const t=TOPPINGS.find(x=>x.id===id);
  if(!t||!t.stock) return;
  const count=countTopping(id);
  const current=state.barraSlots[activeSlot]?.id===id;
  if(count>=2&&!current) return;
  state.barraSlots[activeSlot]=t;
  const slot=document.getElementById(`slot-${activeSlot}`);
  if(slot){
    slot.style.transition='transform .25s cubic-bezier(.34,1.56,.64,1)';
    slot.style.transform='scale(1.1)';
    setTimeout(()=>slot.style.transform='scale(1)',260);
  }
  closeToppingPicker();
}
function updateSlotList(){
  const list=document.getElementById('slotList');
  if(!list) return;
  list.innerHTML=state.barraSlots.map((s,i)=>`
    <div class="slot-list-item${s?' has-top':' empty'}" onclick="selectSlot(${i})">
      <span class="sli-num">${i+1}</span>
      ${s?`<img src="${s.img}" class="sli-img" alt=""
              onerror="this.outerHTML='<span style=font-size:16px>${s.emoji}</span>'">
           <span class="sli-nm">${s.nm}</span>
           <button class="sli-clear" onclick="clearSlot(event,${i})">✕</button>`:
          `<span class="sli-empty">Toca para elegir</span>`}
    </div>`).join('');
}
function clearSlot(e,i){e.stopPropagation();state.barraSlots[i]=null;renderBarraSlots();}

/* --- Navegación entre sub-fases --- */
const BARRA_PHASES=[
  {id:'sabores', title:'Sabores de Paleta', icon:'🍡', hint:'Elige 3 sabores'},
  {id:'salsas',  title:'Salsas',            icon:'🌶️', hint:'Selecciona las salsas'},
  {id:'polvos',  title:'Polvos',            icon:'✨', hint:'Selecciona los polvos'},
  {id:'barra',   title:'Tu Barra',          icon:'🍬', hint:'Llena las 8 charolas'},
];

function renderBarraSubPhases(){
  const tabs=document.getElementById('barraPhaseTabs');
  if(!tabs) return;
  tabs.innerHTML=BARRA_PHASES.map((ph,i)=>{
    let cls='barra-phase-tab';
    if(i<state.barraPhase) cls+=' done';
    if(i===state.barraPhase) cls+=' active';
    return `<div class="${cls}" onclick="goBarraPhase(${i})">
      <span>${ph.icon}</span><span>${ph.title}</span>
    </div>`;
  }).join('');
  // Mostrar/ocultar paneles
  ['sabores-panel','salsas-panel','polvos-panel','toppings-panel'].forEach((id,i)=>{
    const el=document.getElementById(id);
    if(el) el.style.display=i===state.barraPhase?'block':'none';
  });
  updateBarraSubPhaseUI();
}

function updateBarraSubPhaseUI(){
  const prevBtn=document.getElementById('barraPhaseBack');
  const nextBtn=document.getElementById('barraPhaseNext');
  if(prevBtn) prevBtn.style.display=state.barraPhase>0?'flex':'none';
  if(nextBtn){
    if(state.barraPhase<BARRA_PHASES.length-1){
      nextBtn.textContent='Siguiente →';
    } else {
      nextBtn.textContent='¡Listo! ✓';
    }
  }
  // Hint en título
  const subtitle=document.getElementById('barraSubtitle');
  if(subtitle) subtitle.textContent=BARRA_PHASES[state.barraPhase].hint;
}

function goBarraPhase(n){
  state.barraPhase=n;
  renderBarraSubPhases();
  if(n===0) renderSaboresFase();
  if(n===1) renderSalsasFase();
  if(n===2) renderPolvosFase();
  if(n===3){renderBarraSlots();updateSlotList();}
}

function nextBarraPhase(){
  // Validaciones por fase
  if(state.barraPhase===0&&state.paletteFlavors.length<3){
    alert('Elige 3 sabores de paleta para continuar 🍡');return;
  }
  if(state.barraPhase===3){
    // Intentar avanzar al siguiente paso del wizard
    if(!barraIsValid()){alert('Debes llenar las 8 charolas de tu barra 🍬');return;}
    nextStep();return;
  }
  goBarraPhase(state.barraPhase+1);
}
function prevBarraPhase(){
  if(state.barraPhase>0) goBarraPhase(state.barraPhase-1);
}

/* Inicializar barra cuando se entra al paso 2 */
function initBarraBuilder(){
  state.barraPhase=0;
  renderBarraSubPhases();
  renderSaboresFase();
}

/* ══════════════════════════
   EXTRAS
   ══════════════════════════ */
function renderExtras(){
  document.getElementById('extrasGrid').innerHTML=extras.map(e=>`
    <div class="ex-item${state.extras.includes(e.id)?' sel':''}" onclick="toggleExtra('${e.id}')">
      <span class="ex-em">${e.em}</span>
      <div class="ex-txt"><div class="ex-nm">${e.nm}</div><div class="ex-dsc">${e.dsc}</div></div>
      <div class="ex-pr">${e.per?`+$${e.pr}/persona`:`+$${e.pr}`}</div>
      <div class="ex-chk">${state.extras.includes(e.id)?'✓':''}</div>
    </div>`).join('');
  updateLiveTotal();
}
function toggleExtra(id){const i=state.extras.indexOf(id);if(i>=0)state.extras.splice(i,1);else state.extras.push(id);renderExtras();}
function updateLiveTotal(){const t=calcTotal();document.getElementById('ltNum').textContent=t?`$${t.toLocaleString()} MXN`:'Cotización especial';}

/* ══════════════════════════
   TIPOS DE EVENTO
   ══════════════════════════ */
function renderEventTypes(){
  document.getElementById('evGrid').innerHTML=eventTypes.map(e=>`
    <div class="ev-opt${state.evType===e.id?' sel':''}" onclick="selEvType('${e.id}')">
      <span class="ev-em">${e.em}</span>${e.lbl}
    </div>`).join('');
}
function selEvType(id){state.evType=id;renderEventTypes();}

/* ══════════════════════════
   FERIAS
   ══════════════════════════ */
function renderFerias(){
  const g=document.getElementById('feriasGrid');
  if(!ferias.length){
    g.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:48px 20px">
      <div style="font-size:48px">📅</div>
      <p style="margin-top:8px;color:var(--gray)">Próximamente anunciamos fechas</p>
    </div>`;return;
  }
  g.innerHTML=ferias.map(f=>`
    <div class="feria-c">
      <div class="feria-top">
        <div class="feria-date">📅 ${f.date}</div>
        <div class="feria-name">${f.nm}</div>
        <div class="feria-badge">${f.live?'🔴 ¡En curso!':f.tag}</div>
      </div>
      <div class="feria-bot">
        <div class="feria-loc">📍 ${f.loc}</div>
        <div class="feria-hrs">🕐 ${f.hrs}</div>
        <div class="feria-tag">¡Ven a probarnos!</div>
      </div>
    </div>`).join('');
}

/* ══════════════════════════
   WIZARD — NAVEGACIÓN
   ══════════════════════════ */
function nextStep(){
  if(state.step===0&&!state.pkg){alert('Elige un paquete para continuar');return;}
  if(state.step===1){
    if(state.paletteFlavors.length<3){alert('Elige 3 sabores de paleta 🍡');return;}
    if(!barraIsValid()){alert('Debes llenar las 8 charolas de tu barra 🍬');return;}
  }
  if(state.step===3){
    state.date=document.getElementById('evDate').value;
    state.time=document.getElementById('evTime').value;
    state.loc=document.getElementById('evLoc').value;
    state.name=document.getElementById('evName').value;
    state.phone=document.getElementById('evPhone').value;
    state.email=document.getElementById('evEmail').value;
    state.notes=document.getElementById('evNotes').value;
    if(!state.date||!state.time||!state.name||!state.phone){alert('Llena los campos obligatorios (*)');return;}
  }
  if(state.step<4) goStep(state.step+1);
}
function prevStep(){if(state.step>0)goStep(state.step-1);}

function goStep(n){
  document.getElementById('sp'+state.step).classList.remove('active');
  document.querySelectorAll('.ps').forEach((el,i)=>{
    el.classList.remove('active','done');
    if(i<n)el.classList.add('done');
    if(i===n)el.classList.add('active');
  });
  state.step=n;
  document.getElementById('sp'+n).classList.add('active');
  if(n===1) initBarraBuilder();
  if(n===2) renderExtras();
  if(n===4) renderSummary();
  document.querySelector('.wizard').scrollIntoView({behavior:'smooth',block:'start'});
}

function resetWizard(){
  state={step:0,pkg:null,barraPhase:0,
    paletteFlavors:[],selectedSalsas:[],selectedPolvos:[],
    barraSlots:new Array(8).fill(null),
    extras:[],evType:'',date:'',time:'',loc:'',name:'',phone:'',email:'',notes:''};
  activeSlot=null;
  goStep(0);renderPackages();renderEventTypes();
}

/* ══════════════════════════
   RESUMEN
   ══════════════════════════ */
function renderSummary(){
  const p=packages.find(x=>x.qty===state.pkg);
  const total=calcTotal();
  const apar=calcApartado();
  const evT=eventTypes.find(e=>e.id===state.evType);
  const selExt=extras.filter(e=>state.extras.includes(e.id));
  const salsasNm=state.selectedSalsas.map(id=>SALSAS.find(s=>s.id===id)?.nm).filter(Boolean);
  const polvosNm=state.selectedPolvos.map(id=>POLVOS.find(p=>p.id===id)?.nm).filter(Boolean);
  const saboresNm=state.paletteFlavors.map(id=>SABORES_PALETA.find(s=>s.id===id)?.nm).filter(Boolean);

  // Mini preview barra (2x4 grid de slots)
  const sb=document.getElementById('sumBarra');
  if(sb) sb.innerHTML=`<div class="sum-barra-preview">${
    state.barraSlots.map((s,i)=>`<div class="sbp-slot" title="${s?s.nm:'vacío'}">
      ${s?`<img src="${s.img}" alt="${s.nm}"
        onerror="this.outerHTML='<span style=font-size:18px>${s.emoji}</span>'">`:''}
    </div>`).join('')}</div>`;

  const rows=[
    {l:'Paquete',v:p?`${p.qty} vasitos${p.price?' — $'+p.price.toLocaleString():''}`:'-'},
    {l:'Sabores de Paleta',v:saboresNm.join(', ')||'—'},
    {l:'Salsas',v:salsasNm.length?salsasNm.join(', '):'Sin salsas'},
    {l:'Polvos',v:polvosNm.length?polvosNm.join(', '):'Sin polvos'},
    ...state.barraSlots.map((s,i)=>({l:`Charola ${i+1}`,v:s?.nm||'—'})),
    {l:'Extras',v:selExt.length?selExt.map(e=>e.nm).join(', '):'Sin extras'},
    {l:'Tipo evento',v:evT?`${evT.em} ${evT.lbl}`:'—'},
    {l:'Fecha',v:state.date?new Date(state.date+'T12:00').toLocaleDateString('es-MX',{weekday:'long',year:'numeric',month:'long',day:'numeric'}):'—'},
    {l:'Hora',v:state.time||'—'},{l:'Lugar',v:state.loc||'—'},
    {l:'Nombre',v:state.name||'—'},{l:'WhatsApp',v:state.phone||'—'},
  ];

  document.getElementById('sumBox').innerHTML=`<div class="sum-ttl">📋 Resumen de tu pedido</div>${
    rows.filter(r=>r.v&&r.v!=='—').map(r=>
      `<div class="sum-row"><span class="sum-lbl">${r.l}</span><span class="sum-val">${r.v}</span></div>`
    ).join('')}`;

  document.getElementById('sumTotal').innerHTML=total
    ?`<div><div style="color:rgba(255,255,255,.8);font-size:13px;font-weight:700">Total estimado</div></div>
      <div style="font-family:var(--fd);font-size:36px;font-weight:600;color:#fff">$${total.toLocaleString()} <span style="font-size:16px;font-weight:700">MXN</span></div>`
    :`<div style="color:#fff;font-family:var(--fd);font-weight:800">Requiere cotización especial</div>`;
  document.getElementById('apAmt').textContent=apar?`$${apar.toLocaleString()} MXN`:'A cotizar';

  // WhatsApp message
  const toppingsMsg=state.barraSlots.map((s,i)=>`   Charola ${i+1}: ${s?.nm||'—'}`).join('\n');
  const msg=encodeURIComponent(
    `¡Hola Las Frescas! 🍓 Quiero apartar una fecha.\n\n`+
    `📦 *Paquete:* ${p?p.qty+' vasitos':'Personalizado'}\n\n`+
    `🍡 *Sabores de Paleta:* ${saboresNm.join(', ')}\n`+
    `🌶️ *Salsas:* ${salsasNm.join(', ')||'Sin salsas'}\n`+
    `✨ *Polvos:* ${polvosNm.join(', ')||'Sin polvos'}\n\n`+
    `🍬 *Mi Barra:*\n${toppingsMsg}\n\n`+
    `💰 *Total estimado:* ${total?'$'+total.toLocaleString()+' MXN':'Por cotizar'}\n`+
    `🔒 *Apartado (50%):* ${apar?'$'+apar.toLocaleString()+' MXN':'Por cotizar'}\n\n`+
    `${evT?`🎉 *Tipo:* ${evT.lbl}\n`:''}`+
    `📅 *Fecha:* ${state.date}\n🕐 *Hora:* ${state.time}\n📍 *Lugar:* ${state.loc}\n\n`+
    `👤 *Nombre:* ${state.name}\n📲 *Tel:* ${state.phone}\n`+
    `${selExt.length?`✨ *Extras:* ${selExt.map(e=>e.nm).join(', ')}\n`:''}`+
    `${state.notes?`📝 *Notas:* ${state.notes}\n`:''}\n`+
    `¡Espero su confirmación! 🌟`);
  document.getElementById('waBtn').href=`https://wa.me/${WA}?text=${msg}`;
}

/* ══════════════════════════
   PDF
   ══════════════════════════ */
function printCotizacion(){
  const p=packages.find(x=>x.qty===state.pkg);
  const total=calcTotal();const apar=calcApartado();
  const evT=eventTypes.find(e=>e.id===state.evType);
  const selExt=extras.filter(e=>state.extras.includes(e.id));
  const salsasNm=state.selectedSalsas.map(id=>SALSAS.find(s=>s.id===id)?.nm).filter(Boolean);
  const polvosNm=state.selectedPolvos.map(id=>POLVOS.find(p=>p.id===id)?.nm).filter(Boolean);
  const saboresNm=state.paletteFlavors.map(id=>SABORES_PALETA.find(s=>s.id===id)?.nm).filter(Boolean);
  const fecha=state.date?new Date(state.date+'T12:00').toLocaleDateString('es-MX',{weekday:'long',year:'numeric',month:'long',day:'numeric'}):'—';
  const win=window.open('','_blank','width=720,height=960');
  win.document.write(`<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8">
  <title>Cotización Las Frescas</title><style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Helvetica Neue',Arial,sans-serif;font-size:13px;color:#1a0a12;padding:36px;max-width:640px;margin:0 auto}
  .logo{font-size:28px;font-weight:900;color:#E85D8A}.sub{font-size:11px;color:#9b8a92;margin-bottom:28px}
  h2{font-size:15px;font-weight:800;margin:20px 0 8px;border-bottom:2px solid #ffd8ea;padding-bottom:5px}
  .row{display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px dashed #f0e8ed}
  .lbl{color:#7a5868;font-weight:600}.val{font-weight:800;text-align:right;max-width:58%}
  .barra{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:10px 0}
  .bc{border:1.5px solid #ffd8ea;border-radius:8px;padding:8px;text-align:center;font-size:11px;font-weight:700;color:#E85D8A}
  .bc span{display:block;color:#7a5868;font-size:10px;font-weight:600;margin-top:2px}
  .total{background:#E85D8A;color:#fff;border-radius:12px;padding:16px 20px;margin:20px 0;display:flex;justify-content:space-between;align-items:center}
  .total .amt{font-size:30px;font-weight:900}
  .apar{border:2px solid #E85D8A;border-radius:12px;padding:14px 18px;margin-bottom:20px}
  .apar .amt{font-size:24px;font-weight:800;color:#E85D8A}
  .foot{margin-top:24px;font-size:11px;color:#9b8a92;text-align:center;border-top:1px solid #f0e8ed;padding-top:12px}
  .print-btn{background:#E85D8A;color:#fff;border:none;padding:13px;border-radius:100px;font-size:14px;font-weight:700;cursor:pointer;width:100%;margin-bottom:14px}
  @media print{.print-btn{display:none}}
  </style></head><body>
  <div class="logo">🍓 Las Frescas</div>
  <div class="sub">Cotización generada el ${new Date().toLocaleDateString('es-MX')}</div>
  <h2>📦 Paquete</h2>
  <div class="row"><span class="lbl">Cantidad</span><span class="val">${p?p.qty+' vasitos':'Personalizado'}</span></div>
  ${p?.price?`<div class="row"><span class="lbl">Precio base</span><span class="val">$${p.price.toLocaleString()} MXN</span></div>`:''}
  <h2>🍡 Sabores de Paleta</h2>
  <div class="row"><span class="lbl">Sabores elegidos</span><span class="val">${saboresNm.join(', ')||'—'}</span></div>
  <h2>🌶️ Salsas y Polvos</h2>
  <div class="row"><span class="lbl">Salsas</span><span class="val">${salsasNm.join(', ')||'Sin salsas'}</span></div>
  <div class="row"><span class="lbl">Polvos</span><span class="val">${polvosNm.join(', ')||'Sin polvos'}</span></div>
  <h2>🍬 Tu Barra (8 charolas)</h2>
  <div class="barra">${state.barraSlots.map((s,i)=>`<div class="bc">${i+1}<span>${s?.nm||'—'}</span></div>`).join('')}</div>
  <h2>📅 Datos del Evento</h2>
  <div class="row"><span class="lbl">Nombre</span><span class="val">${state.name}</span></div>
  <div class="row"><span class="lbl">WhatsApp</span><span class="val">${state.phone}</span></div>
  ${state.email?`<div class="row"><span class="lbl">Email</span><span class="val">${state.email}</span></div>`:''}
  ${evT?`<div class="row"><span class="lbl">Tipo</span><span class="val">${evT.em} ${evT.lbl}</span></div>`:''}
  <div class="row"><span class="lbl">Fecha</span><span class="val">${fecha}</span></div>
  <div class="row"><span class="lbl">Hora</span><span class="val">${state.time}</span></div>
  <div class="row"><span class="lbl">Lugar</span><span class="val">${state.loc}</span></div>
  ${selExt.length?`<div class="row"><span class="lbl">Extras</span><span class="val">${selExt.map(e=>e.nm).join(', ')}</span></div>`:''}
  ${state.notes?`<div class="row"><span class="lbl">Notas</span><span class="val">${state.notes}</span></div>`:''}
  ${total?`<div class="total"><span>Total estimado</span><span class="amt">$${total.toLocaleString()} MXN</span></div>
  <div class="apar"><div style="font-size:11px;font-weight:700;margin-bottom:4px">🔒 Apartado (50%)</div>
  <div class="amt">$${apar?.toLocaleString()||'—'} MXN</div>
  <div style="font-size:11px;color:#7a5868;margin-top:6px">El saldo restante se liquida el día del evento.</div></div>`:''}
  <button class="print-btn" onclick="window.print()">🖨️ Imprimir / Guardar PDF</button>
  <div class="foot">Las Frescas · Ecatepec, Estado de México<br>@las.frescasmx · @las.frescas50</div>
  </body></html>`);
  win.document.close();setTimeout(()=>win.focus(),400);
}

/* ══════════════════════════
   INIT
   ══════════════════════════ */
document.addEventListener('DOMContentLoaded',()=>{
  const hdr=document.getElementById('site-header');
  window.addEventListener('scroll',()=>hdr&&hdr.classList.toggle('scrolled',scrollY>40));
  document.getElementById('hamBtn')?.addEventListener('click',()=>document.getElementById('mob-menu').classList.add('open'));
  document.getElementById('mobClose')?.addEventListener('click',closeMob);
  const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('vis');}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  const evDate=document.getElementById('evDate');
  if(evDate){const m=new Date();m.setDate(m.getDate()+7);evDate.min=m.toISOString().split('T')[0];}
  // Cerrar picker al tocar fuera
  document.addEventListener('click',e=>{
    const picker=document.getElementById('toppingPicker');
    if(picker&&picker.classList.contains('open')&&
       !picker.contains(e.target)&&!e.target.closest('.tray-slot') && !e.target.closest('.slot-list-item'))
      closeToppingPicker();
  });
  renderPackages();renderEventTypes();renderFerias();
});
function closeMob(){document.getElementById('mob-menu').classList.remove('open');}
function showNotif(){}

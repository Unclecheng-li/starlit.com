document.documentElement.classList.add('js');

const characters = [
  { id:'hoshino', name:'小鸟游星野', en:'TAKANASHI HOSHINO', series:'蔚蓝档案', avatar:'./assets/characters/hoshino.webp', role:'阿拜多斯 · 对策委员会委员长', birthday:'1 月 2 日', identity:'阿拜多斯三年级', tags:['慵懒','可靠','大叔口吻'], accent:'#efb3d1', description:'平时懒洋洋地打着哈欠，似乎在哪里都能睡着。可当后辈或学校遇到麻烦时，她永远是那个最可靠、最值得信任的前辈。', quote:'呼啊～随便随便，要轻松最重要啦。' },
  { id:'3901000011', name:'古关忧', en:'KOZEKI UI', series:'蔚蓝档案', avatar:'./assets/characters/ui.webp', role:'三一综合学园 · 图书委员会委员长', birthday:'4 月 23 日', identity:'古书馆的魔法师', tags:['古书','怕生','外冷内软'], accent:'#c3b1d5', description:'长年躲在古书馆里整理、修复和解读古书。对陌生人总是保持距离，一聊起喜欢的书却会突然变得健谈，也会用一杯咖啡悄悄表达关心。', quote:'那个……要、要一起喝杯咖啡吗？' },
  { id:'3901000012', name:'夏目安安', en:'NATSUME ANAN', series:'魔法少女的魔女审判', avatar:'./assets/characters/anan.webp', role:'囚人编号 660 · 素描本少女', birthday:'3 月 28 日', identity:'孤岛宅邸的住客', tags:['文豪腔','游戏','安静'], accent:'#c2b2f0', description:'走到哪里都带着素描本和笔，几乎不开口，习惯用一笔一划写下的文字与人交流。喜欢游戏和小说，自称「吾辈」，说话带着独特的文豪腔。', quote:'此乃……吾辈的一点心意罢了。' },
  { id:'3901000013', name:'天童凯伊', en:'TENDOU KEI', series:'蔚蓝档案', avatar:'./assets/characters/kei.webp', role:'千年科学学园 · 特异现象调查部', birthday:'3 月 25 日', identity:'爱丽丝的同行者', tags:['冷静','傲娇','守护者'], accent:'#f0a5cb', description:'说话礼貌而克制，习惯用分析掩饰情绪，被戳中心思却会立刻炸毛。名义上属于特异现象调查部，实际上总在游戏开发部替大家收拾残局。', quote:'请你尽量不要做危险的事。' },
  { id:'3901000014', name:'天童爱丽丝', en:'TENDOU ARIS', series:'蔚蓝档案', avatar:'./assets/characters/aris.webp', role:'千年科学学园 · 游戏开发部', birthday:'3 月 25 日', identity:'废墟中醒来的勇者', tags:['勇者','RPG','天真'], accent:'#9ed9ff', description:'把日常当作一场盛大的角色扮演游戏，把每一次相遇都看作新的任务。说话带着怀旧游戏台词的味道，认真、直率，也最喜欢游戏和猫。', quote:'邦邦卡邦！爱丽丝接受任务！' },
  { id:'3901000015', name:'早濑优香', en:'HAYASE YUUKA', series:'蔚蓝档案', avatar:'./assets/characters/yuuka.webp', role:'千年科学学园 · 研讨会会计', birthday:'3 月 14 日', identity:'冷酷的算术使', tags:['数学','严谨','斥责式关心'], accent:'#aebfff', description:'总揽千年预算的数学鬼才，爱念叨、讲条理，也很享受算账。关心人的方式往往先是一顿斥责，随后又默默替你把所有事情安排妥当。', quote:'一切尽在掌握之中。' },
  { id:'3901000016', name:'橘光', en:'TACHIBANA HIKARI', series:'蔚蓝档案', avatar:'./assets/characters/hikari.webp', role:'海兰德铁道学园 · CCC 干部', birthday:'6 月 14 日', identity:'铁道双子的姐姐', tags:['随性','列车','贪玩'], accent:'#b4edc9', description:'我行我素的不思议系少女，喜欢用第三人称自称「光」。平时被好玩的事情牵着走，一坐到列车驾驶位上，却会突然展现出天才般的可靠。', quote:'咻啪啪啪——很帅吧？' },
  { id:'3901000017', name:'橘希望', en:'TACHIBANA NOZOMI', series:'蔚蓝档案', avatar:'./assets/characters/nozomi.webp', role:'海兰德铁道学园 · CCC 干部', birthday:'6 月 14 日', identity:'铁道双子的妹妹', tags:['活泼','吐槽','责任感'], accent:'#b4edc9', description:'爱说爱笑，标志性笑声是「噗哈哈」，最喜欢调侃老师。看起来爱玩又不拘小节，对列车运行与承诺期限却有着职业级的责任感。', quote:'急行快车，暴走特急～！！' },
  { id:'3901000018', name:'橘雪莉', en:'TACHIBANA SHERRY', series:'魔法少女的魔女审判', avatar:'./assets/characters/sherry.webp', role:'囚人编号 667 · 自称名侦探', birthday:'7 月 29 日', identity:'孤岛宅邸的住客', tags:['推理','怪力','好奇心'], accent:'#a5e7f5', description:'总是笑嘻嘻、充满活力的名侦探，礼数周全又好奇心旺盛。遇到案件会兴奋得忘记分寸，手里不离放大镜，还能面不改色地单手捏碎苹果。', quote:'哎呀？这看起来像一起案件呢！' },
  { id:'3901000019', name:'空崎日奈', en:'SORASAKI HINA', series:'蔚蓝档案', avatar:'./assets/characters/hina.webp', role:'格黑娜学园 · 风纪委员会委员长', birthday:'2 月 19 日', identity:'风纪委员会最高负责人', tags:['可靠','外冷内软','黑咖啡'], accent:'#c8b4f4', description:'嘴上总说「好麻烦」，实际却把风纪委员会的工作一肩扛起。语气平淡、结论先行，对老师的关心则常常变成简短的命令：去睡觉，别硬撑。', quote:'去睡觉。别硬撑。' }
];

const grid = document.querySelector('#characterGrid');
const viewport = document.querySelector('#characterViewport');
const dialog = document.querySelector('#characterDialog');
const dialogContent = document.querySelector('#dialogContent');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

function renderCharacters() {
  grid.innerHTML = characters.map((character, index) => `
    <article class="character-card" data-id="${character.id}" data-series="${character.series}" tabindex="0" role="button" aria-label="查看${character.name}的角色资料" style="--accent:${character.accent}">
      <div class="card-inner">
        <div class="card-bg"></div>
        <img class="card-art" src="${character.avatar}" alt="${character.name}高清立绘" loading="${index < 4 ? 'eager' : 'lazy'}" draggable="false">
        <div class="card-shade"></div><span class="card-number">${String(index + 1).padStart(2,'0')}</span><span class="card-series">${character.series}</span>
        <div class="card-copy"><span class="card-en">${character.en}</span><h3>${character.name}</h3><p class="card-role">${character.role}</p><div class="card-bottom"><div class="card-tags">${character.tags.slice(0,2).map(tag => `<span>${tag}</span>`).join('')}</div><span class="card-open">VIEW<b>↗</b></span></div></div>
      </div>
    </article>`).join('');
  document.querySelector('#heroRoster').innerHTML = characters.map((character, index) => `<button class="roster-avatar" type="button" data-roster="${character.id}" title="${character.name}" aria-label="查看${character.name}"><img src="${character.avatar}" alt="" loading="lazy"></button>`).join('');
}

function openCharacter(id) {
  const character = characters.find(item => item.id === id);
  if (!character) return;
  const index = characters.indexOf(character) + 1;
  dialogContent.innerHTML = `<div class="dialog-layout" style="--accent:${character.accent}"><div class="dialog-portrait"><img src="${character.avatar}" alt="${character.name}高清立绘"><div class="dialog-portrait-caption"><span>CHARACTER ${String(index).padStart(2,'0')} · ${character.en}</span><strong>${character.name}</strong></div></div><div class="dialog-details"><span class="dialog-series">${character.series}</span><h2 id="dialogName">${character.name}</h2><p class="dialog-role">${character.role}</p><p class="dialog-description">${character.description}</p><div class="dialog-facts"><div class="dialog-fact"><small>生日</small><strong>${character.birthday}</strong></div><div class="dialog-fact"><small>身份</small><strong>${character.identity}</strong></div></div><blockquote class="dialog-quote">${character.quote}</blockquote><div class="dialog-tags">${character.tags.map(tag => `<span># ${tag}</span>`).join('')}</div></div></div>`;
  dialog.showModal();
  document.body.classList.add('dialog-open');
}
function closeDialog() { dialog.close(); document.body.classList.remove('dialog-open'); }

renderCharacters();

let dragged = false;
grid.addEventListener('click', event => {
  if (dragged) { event.preventDefault(); return; }
  const card = event.target.closest('.character-card');
  if (card) openCharacter(card.dataset.id);
});
grid.addEventListener('keydown', event => {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  const card = event.target.closest('.character-card');
  if (card) { event.preventDefault(); openCharacter(card.dataset.id); }
});
document.querySelector('#dialogClose').addEventListener('click', closeDialog);
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog();
});
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));

// Character filters and horizontal gallery.
document.querySelectorAll('.filter-tab').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter-tab').forEach(tab => {
      const selected = tab === button;
      tab.classList.toggle('active', selected);
      tab.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('.character-card').forEach((card, index) => {
      const visible = filter === 'all' || card.dataset.series === filter;
      card.hidden = !visible;
      if (visible && !reduceMotion) card.style.animation = `cardIn .45s ${Math.min(index * 40, 180)}ms both`;
    });
    viewport.scrollTo({ left:0, behavior:reduceMotion ? 'auto' : 'smooth' });
    updateCarousel();
  });
});
function visibleCards() { return [...document.querySelectorAll('.character-card')].filter(card => !card.hidden); }
function galleryStep() { const card = visibleCards()[0]; return card ? card.getBoundingClientRect().width + 20 : 335; }
function updateCarousel() {
  const cards = visibleCards();
  const current = Math.min(cards.length, Math.max(1, Math.round(viewport.scrollLeft / galleryStep()) + 1));
  document.querySelector('#carouselCounter').textContent = `${String(current).padStart(2,'0')} / ${String(cards.length).padStart(2,'0')}`;
  const max = Math.max(1, viewport.scrollWidth - viewport.clientWidth);
  const ratio = Math.min(1, viewport.scrollLeft / max);
  document.querySelector('#carouselProgress').style.width = `${Math.max(10, (ratio * 90) + 10)}%`;
}
document.querySelector('#carouselPrev').addEventListener('click', () => viewport.scrollBy({ left:-galleryStep(), behavior:'smooth' }));
document.querySelector('#carouselNext').addEventListener('click', () => viewport.scrollBy({ left:galleryStep(), behavior:'smooth' }));
viewport.addEventListener('scroll', updateCarousel, { passive:true });
window.addEventListener('resize', updateCarousel);
updateCarousel();

let isDragging = false, dragStartX = 0, dragStartScroll = 0;
viewport.addEventListener('pointerdown', event => {
  if (event.pointerType !== 'mouse' || event.button !== 0) return;
  isDragging = true; dragged = false; dragStartX = event.clientX; dragStartScroll = viewport.scrollLeft;
  viewport.classList.add('dragging'); viewport.setPointerCapture(event.pointerId);
});
viewport.addEventListener('pointermove', event => {
  if (!isDragging) return;
  const distance = event.clientX - dragStartX;
  if (Math.abs(distance) > 6) dragged = true;
  viewport.scrollLeft = dragStartScroll - distance;
});
function endDrag() { isDragging = false; viewport.classList.remove('dragging'); setTimeout(() => { dragged = false; }, 80); }
viewport.addEventListener('pointerup', endDrag);
viewport.addEventListener('pointercancel', endDrag);

// Scroll-scrubbed ten-character film. Native scrolling remains in control.
const hero = document.querySelector('#top');
const heroPortraits = document.querySelector('#heroPortraits');
const cinematicMedia = window.matchMedia('(min-width: 901px)');
const sceneArt = {
  hoshino:{ symbols:['☾','✦','≈'], label:'DREAMING UNDER THE HALO', texture:'dream', secondary:'#7fa5d9' },
  '3901000011':{ symbols:['▤','❧','⌑'], label:'THE ARCHIVE OF QUIET PAGES', texture:'archive', secondary:'#8c7969' },
  '3901000012':{ symbols:['✎','⌁','✧'], label:'A STORY SKETCHED IN SILENCE', texture:'sketch', secondary:'#9b83e2' },
  '3901000013':{ symbols:['⌁','<>','◈'], label:'SIGNALS BENEATH THE SURFACE', texture:'digital', secondary:'#79c8ff' },
  '3901000014':{ symbols:['✚','▦','✦'], label:'A NEW QUEST BEGINS', texture:'pixel', secondary:'#80b8ff' },
  '3901000015':{ symbols:['∑','%','∞'], label:'PERFECT ORDER, IMPERFECT DAYS', texture:'math', secondary:'#758fe5' },
  '3901000016':{ symbols:['↗','✦','≋'], label:'THE NEXT STOP IS ANYWHERE', texture:'rail', secondary:'#81dcb0' },
  '3901000017':{ symbols:['↯','✦','→'], label:'FULL SPEED THROUGH THE DAY', texture:'rail', secondary:'#e6c887' },
  '3901000018':{ symbols:['⌕','⊙','?'], label:'EVERY CLUE TELLS A STORY', texture:'detective', secondary:'#89d8e8' },
  '3901000019':{ symbols:['☾','♢','✦'], label:'WHEN THE NIGHT FINALLY RESTS', texture:'nocturne', secondary:'#7656ad' }
};
let portraits = [], activeScene = -1, cinemaFrame = 0;

function renderHero() {
  heroPortraits.innerHTML = characters.map((character, index) => `
    <figure class="hero-portrait parallax-layer" data-depth=".5" data-scene="${index}" aria-hidden="true">
      <div class="portrait-chrome"><span>CHARACTER / ${String(index + 1).padStart(3,'0')}</span><span><i></i>ONLINE</span></div>
      <div class="hero-image-wrap"><img src="${character.avatar}" alt="${character.name}高清立绘" loading="${index === 0 ? 'eager' : 'lazy'}" ${index === 0 ? 'fetchpriority="high"' : ''}></div>
      <figcaption><div><span>${character.en}</span><strong>${character.name}</strong></div><em>${character.role.replace(' · ','<br>')}</em></figcaption>
    </figure>`).join('');
  portraits = [...heroPortraits.querySelectorAll('.hero-portrait')];
}

function updateCinema() {
  cinemaFrame = 0;
  const cinematic = cinematicMedia.matches && !reduceMotion;
  const range = Math.max(1, hero.offsetHeight - innerHeight);
  const progress = cinematic ? Math.min(1, Math.max(0, (scrollY - hero.offsetTop) / range)) : 0;
  const position = progress * (characters.length - 1);
  const index = Math.min(characters.length - 1, Math.max(0, Math.round(position)));
  portraits.forEach((portrait, portraitIndex) => {
    const distance = portraitIndex - position;
    const opacity = Math.max(0, 1 - Math.abs(distance));
    portrait.style.setProperty('--scene-opacity', opacity.toFixed(3));
    portrait.style.setProperty('--scene-shift', `${distance * 75}px`);
    portrait.style.setProperty('--scene-rotate', `${2 + distance * 4}deg`);
    portrait.style.setProperty('--scene-scale', String(1 - Math.min(.08, Math.abs(distance) * .05)));
    portrait.style.zIndex = String(2 + Math.round((1 - Math.min(1, Math.abs(distance))) * 2));
    portrait.style.visibility = opacity < .01 ? 'hidden' : 'visible';
    portrait.setAttribute('aria-hidden', String(portraitIndex !== index));
  });
  document.querySelector('#heroSceneProgress').style.transform = `scaleY(${progress})`;
  if (index === activeScene) return;
  activeScene = index;
  const character = characters[index];
  hero.style.setProperty('--hero-accent', character.accent);
  hero.dataset.scene = character.id;
  const art = sceneArt[character.id];
  hero.style.setProperty('--hero-secondary', art.secondary);
  hero.dataset.texture = art.texture;
  document.querySelector('#stageNumber').textContent = String(index + 1).padStart(2,'0');
  document.querySelector('#sceneCounter').textContent = `${String(index + 1).padStart(2,'0')} / 10`;
  document.querySelector('#heroCharacterWord').textContent = character.en.split(' ').at(-1);
  document.querySelector('#sceneName').textContent = character.name;
  document.querySelector('#sceneQuote').textContent = character.quote;
  document.querySelector('#sceneLabel').textContent = `${art.label} · ${String(index + 1).padStart(3,'0')}`;
  document.querySelector('#sceneSymbols').innerHTML = art.symbols.map(symbol => `<span>${symbol}</span>`).join('');
  document.querySelector('#heroChatAvatar').src = character.avatar;
  document.querySelector('#heroChatName').textContent = `${character.name} · 刚刚`;
  document.querySelector('#heroChatText').textContent = character.quote;
  const transition = document.querySelector('.scene-transition');
  transition.classList.remove('play');
  void transition.offsetWidth;
  transition.classList.add('play');
  document.querySelectorAll('[data-roster]').forEach((button, buttonIndex) => {
    button.classList.toggle('active', buttonIndex === index);
    button.setAttribute('aria-pressed', String(buttonIndex === index));
  });
}

function requestCinema() {
  if (!cinemaFrame) cinemaFrame = requestAnimationFrame(updateCinema);
}

renderHero();
updateCinema();
window.addEventListener('scroll', requestCinema, { passive:true });
window.addEventListener('resize', requestCinema);
cinematicMedia.addEventListener('change', requestCinema);
document.querySelector('#sceneProfile').addEventListener('click', () => openCharacter(characters[Math.max(0, activeScene)].id));

document.querySelector('#heroRoster').addEventListener('click', event => {
  const button = event.target.closest('[data-roster]');
  if (!button) return;
  const index = characters.findIndex(character => character.id === button.dataset.roster);
  if (cinematicMedia.matches && !reduceMotion) {
    const range = hero.offsetHeight - innerHeight;
    scrollTo({ top:hero.offsetTop + range * (index / (characters.length - 1)), behavior:'smooth' });
    return;
  }
  const allFilter = document.querySelector('[data-filter="all"]');
  if (!allFilter.classList.contains('active')) allFilter.click();
  document.querySelector('#characters').scrollIntoView({ behavior:reduceMotion ? 'auto' : 'smooth' });
  setTimeout(() => {
    const card = document.querySelector(`[data-id="${button.dataset.roster}"]`);
    if (card) viewport.scrollTo({ left:Math.max(0, card.offsetLeft - viewport.clientWidth / 2 + card.clientWidth / 2), behavior:reduceMotion ? 'auto' : 'smooth' });
  }, reduceMotion ? 0 : 500);
});

// Scroll reveals, progress and navigation state.
const header = document.querySelector('#siteHeader');
function onScroll() {
  header.classList.toggle('scrolled', scrollY > 30);
  const max = document.documentElement.scrollHeight - innerHeight;
  document.querySelector('#scrollProgress').style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
}
onScroll();
window.addEventListener('scroll', onScroll, { passive:true });
const reveals = document.querySelectorAll('.reveal');
if (reduceMotion || !('IntersectionObserver' in window)) reveals.forEach(item => item.classList.add('visible'));
else {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold:.08, rootMargin:'0px 0px -45px' });
  reveals.forEach(item => observer.observe(item));
}

// Editorial navigation state and light that follows the reader.
const navLinks = [...document.querySelectorAll('.desktop-nav a')];
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      const active = link.getAttribute('href') === `#${entry.target.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin:'-32% 0px -58%', threshold:0 });
['characters','features','sync'].forEach(id => navObserver.observe(document.getElementById(id)));

document.querySelectorAll('.feature-panel').forEach(panel => {
  panel.addEventListener('pointermove', event => {
    if (!finePointer) return;
    const rect = panel.getBoundingClientRect();
    panel.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
    panel.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
  });
  panel.addEventListener('pointerleave', () => {
    panel.style.setProperty('--spot-x', '50%');
    panel.style.setProperty('--spot-y', '50%');
  });
});

// Hero depth and tactile 3D cards.
const heroVisual = document.querySelector('#heroVisual');
if (finePointer && !reduceMotion) {
  heroVisual.addEventListener('pointermove', event => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    heroVisual.querySelectorAll('.parallax-layer').forEach(layer => {
      const depth = Number(layer.dataset.depth || 1);
      layer.style.setProperty('--px', `${x * 20 * depth}px`);
      layer.style.setProperty('--py', `${y * 15 * depth}px`);
    });
  });
  heroVisual.addEventListener('pointerleave', () => heroVisual.querySelectorAll('.parallax-layer').forEach(layer => {
    layer.style.setProperty('--px','0px'); layer.style.setProperty('--py','0px');
  }));
  document.querySelectorAll('.character-card').forEach(card => {
    const inner = card.querySelector('.card-inner');
    card.addEventListener('pointermove', event => {
      if (isDragging) return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      inner.style.transform = `rotateX(${-y * 5}deg) rotateY(${x * 7}deg) scale(1.01)`;
    });
    card.addEventListener('pointerleave', () => { inner.style.transform = ''; });
  });
  document.querySelectorAll('.magnetic').forEach(element => {
    element.addEventListener('pointermove', event => {
      const rect = element.getBoundingClientRect();
      element.style.translate = `${(event.clientX - rect.left - rect.width/2) * .1}px ${(event.clientY - rect.top - rect.height/2) * .14}px`;
    });
    element.addEventListener('pointerleave', () => { element.style.translate = '0 0'; });
  });
}

// Lightweight custom cursor.
if (finePointer && !reduceMotion) {
  const dot = document.querySelector('.cursor-dot'), ring = document.querySelector('.cursor-ring');
  let mouseX = -100, mouseY = -100, ringX = -100, ringY = -100;
  window.addEventListener('pointermove', event => { mouseX = event.clientX; mouseY = event.clientY; dot.style.transform = `translate(${mouseX}px,${mouseY}px)`; });
  (function cursorLoop() { ringX += (mouseX-ringX)*.16; ringY += (mouseY-ringY)*.16; ring.style.transform = `translate(${ringX}px,${ringY}px)`; requestAnimationFrame(cursorLoop); })();
  document.addEventListener('pointerover', event => { if (event.target.closest('.character-card')) ring.classList.add('is-view'); });
  document.addEventListener('pointerout', event => { if (event.target.closest('.character-card')) ring.classList.remove('is-view'); });
}

// Canvas star field with an occasional shooting star.
const canvas = document.querySelector('#cosmos');
const context = canvas.getContext('2d');
let stars = [], shooting = null, nextShoot = 0, canvasVisible = true;
function sizeCosmos() {
  const ratio = Math.min(devicePixelRatio || 1, 2);
  canvas.width = canvas.clientWidth * ratio; canvas.height = canvas.clientHeight * ratio;
  context.setTransform(ratio,0,0,ratio,0,0);
  const count = Math.min(150, Math.floor(canvas.clientWidth / 9));
  stars = Array.from({ length:count }, () => ({ x:Math.random()*canvas.clientWidth, y:Math.random()*canvas.clientHeight, r:Math.random()*1.25+.2, a:Math.random()*.65+.15, speed:Math.random()*.012+.003, phase:Math.random()*Math.PI*2 }));
}
function drawCosmos(time = 0) {
  context.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
  stars.forEach(star => {
    const alpha = reduceMotion ? star.a : star.a * (.65 + Math.sin(time*star.speed + star.phase)*.35);
    context.beginPath(); context.arc(star.x,star.y,star.r,0,Math.PI*2); context.fillStyle = `rgba(224,207,255,${alpha})`; context.fill();
  });
  if (!reduceMotion) {
    if (!shooting && time > nextShoot) shooting = { x:canvas.clientWidth*(.25+Math.random()*.65), y:80+Math.random()*220, life:0 };
    if (shooting) {
      shooting.life += 1; const x = shooting.x - shooting.life*8, y = shooting.y + shooting.life*3.2;
      const gradient = context.createLinearGradient(x,y,x+110,y-45); gradient.addColorStop(0,'rgba(225,203,255,0)'); gradient.addColorStop(1,'rgba(225,203,255,.7)');
      context.beginPath(); context.moveTo(x,y); context.lineTo(x+110,y-45); context.strokeStyle = gradient; context.lineWidth = 1.2; context.stroke();
      if (shooting.life > 85) { shooting = null; nextShoot = time + 4500 + Math.random()*4500; }
    }
  }
}
sizeCosmos();
window.addEventListener('resize', sizeCosmos);
new IntersectionObserver(entries => { canvasVisible = entries[0].isIntersecting; }).observe(canvas);
(function cosmosLoop(time) { if (canvasVisible) drawCosmos(time); if (!reduceMotion) requestAnimationFrame(cosmosLoop); })();

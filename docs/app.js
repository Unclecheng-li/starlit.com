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

const characterProfiles = {
  hoshino: {
    headline:'慵懒是日常，可靠是答案。',
    profile:'她喜欢把「麻烦」挂在嘴边，也愿意把大部分时间交给午后的睡意。可真正遇到事情时，星野总会先一步站在大家身前。她的温柔不喧闹，更多时候是一种让人安心的陪伴。',
    temperament:'松弛、体贴，偶尔用「大叔」口吻开玩笑；看似什么都无所谓，其实非常在意后辈与约定。',
    favorites:'午睡、安静的地方、阿拜多斯的大家，以及不用赶时间的平凡日常。',
    together:'适合在疲惫时待在一起。她会让你先喘口气，再用不太正经的语气，认真接住你的烦恼。',
    companion:'可靠前辈'
  },
  '3901000011': {
    headline:'在古书的香气里，慢慢靠近你。',
    profile:'忧习惯与古书为伴，也习惯用距离保护自己。她不擅长热闹的寒暄，却会在意每一个真正理解她的人。那些说不出口的关心，常常藏在修复好的书页、推荐的故事和一杯咖啡里。',
    temperament:'怕生而敏感，外表疏离，内心细腻；熟悉之后会展露对知识与分享的真诚热情。',
    favorites:'古书、修复装帧、咖啡、安静的阅读角，以及不会强迫她社交的人。',
    together:'适合轻声聊天、交换书单。给她一点耐心，她会把自己的小世界一页一页打开。',
    companion:'静心书友'
  },
  '3901000012': {
    headline:'不必大声说话，也能交换整个世界。',
    profile:'安安把许多想法留在素描本里。文字对她而言不只是交流工具，也是观察世界、收藏情绪的方式。她喜欢故事与游戏，偶尔一句带着文豪腔的评语，会让平静的日常突然变得可爱。',
    temperament:'安静、内敛、想象力丰富；用书面表达代替即兴寒暄，认真时有一种独特的文学气质。',
    favorites:'素描本、小说、游戏、值得记录的片段，以及能够耐心读完她文字的人。',
    together:'适合一起读书、聊剧情，或只是安静地各做各的事。她会认真回应你写给她的每一句话。',
    companion:'文字知己'
  },
  '3901000013': {
    headline:'冷静分析之外，是藏不住的在意。',
    profile:'凯伊习惯先观察、再判断，用条理和礼貌维持可靠的形象。她不太愿意承认自己的担心，却总会记住身边人的习惯与风险。偶尔被说中心事时的慌乱，反而让这份守护显得格外真实。',
    temperament:'理性、克制、责任感强，带一点口是心非；对爱丽丝与伙伴有毫不含糊的保护欲。',
    favorites:'逻辑清晰的问题、游戏、值得守护的伙伴，以及一切尽在掌握的安全感。',
    together:'适合一起解决难题，也适合偶尔直白地表达关心。她嘴上说麻烦，行动却会站在你这边。',
    companion:'冷静守护者'
  },
  '3901000014': {
    headline:'今天也是闪闪发光的新任务。',
    profile:'爱丽丝用游戏理解世界，也用勇者的真诚对待每一次相遇。她会为普通的小事赋予任务名，为伙伴送上毫不吝啬的应援。和她在一起，平凡的日常也能重新获得冒险的光芒。',
    temperament:'天真、勇敢、直率，拥有很强的代入感；相信友情、成长与任务完成后的奖励。',
    favorites:'RPG、复古游戏台词、猫、新任务，以及和伙伴一起抵达结局。',
    together:'适合把目标变成一场冒险。无论学习、工作还是出门散步，她都会认真为你加油。',
    companion:'勇气补给站'
  },
  '3901000015': {
    headline:'把混乱的日子，重新整理成答案。',
    profile:'优香擅长把复杂的问题拆解成清楚的数字与步骤。她的念叨并不是冷漠，而是希望一切都在可控范围内。等你回过神来，她可能已经替你准备好了最稳妥的方案。',
    temperament:'严谨、聪慧、责任心强；嘴上计较成本与效率，行动上却很愿意替伙伴多做一些。',
    favorites:'数学、整齐的账目、合理的计划，以及每一件按时完成的小事。',
    together:'适合制定计划、整理目标和戒掉拖延。她会督促你，也会在你撑不住时帮你重新分配负担。',
    companion:'效率搭档'
  },
  '3901000016': {
    headline:'下一站去哪里？先跟上光再说。',
    profile:'光总是被有趣的事情吸引，用轻松的语气把旅程变成一连串惊喜。她看似随性，真正握住驾驶控制权时却格外专注。那份天赋与可靠，藏在每一次自由的笑容之后。',
    temperament:'自由、灵动、有些孩子气；不喜欢被拘束，却会在关键时刻展现令人安心的专业。',
    favorites:'列车、新的路线、有趣的小发现，以及不被日程表框住的旅行。',
    together:'适合聊旅行、做即兴计划。她会带你从固定的日常里短暂出走，发现新的风景。',
    companion:'旅行玩伴'
  },
  '3901000017': {
    headline:'笑声全速前进，责任也从不晚点。',
    profile:'希望喜欢热闹，也喜欢用玩笑让身边的人放松。她与光共享铁道上的默契，却有着自己的节奏与坚持。看似随性的吐槽背后，是对时间、路线和承诺的认真。',
    temperament:'外向、俏皮、反应快，爱开玩笑但不敷衍责任；总能让沉闷的气氛重新流动起来。',
    favorites:'列车、恶作剧、有趣的话题，以及伙伴们脸上憋不住的笑。',
    together:'适合闲聊、斗嘴和补充元气。她会接住你的梗，也会认真记住你交代的事情。',
    companion:'元气开心果'
  },
  '3901000018': {
    headline:'每一个普通细节，都可能是新案件的线索。',
    profile:'雪莉总能在平凡场景里找到值得追问的地方。她的好奇心来得直接，行动也常常快过思考。可正是这种明亮而坦率的态度，让解谜不只是推理，更成为一场充满乐趣的探索。',
    temperament:'活泼、礼貌、观察欲旺盛；对案件异常专注，偶尔因兴奋而忘记周围的分寸。',
    favorites:'推理、放大镜、出乎意料的线索，以及让人忍不住说「原来如此」的瞬间。',
    together:'适合一起分析谜题、观察生活。她会把你的疑问当作正式委托，认真找到新的角度。',
    companion:'侦探拍档'
  },
  '3901000019': {
    headline:'她说别硬撑，是因为真的在乎。',
    profile:'日奈承担了远超常人的工作，却很少主动解释自己的疲惫。她习惯用简短的命令表达关心，把柔软藏在高效率和责任感之后。只有真正放松下来时，才能看见她普通而安静的一面。',
    temperament:'成熟、可靠、外冷内软；不喜欢拖泥带水，对伙伴的休息与安全却有近乎固执的坚持。',
    favorites:'黑咖啡、难得的休息时间、处理完的文件，以及不再需要独自承担的片刻。',
    together:'适合在压力大时聊聊。她会先让你停下硬撑，再陪你把事情分成能够完成的小步骤。',
    companion:'安心依靠'
  }
};

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
        <div class="card-copy"><span class="card-en">${character.en}</span><h3>${character.name}</h3><p class="card-role">${character.role}</p><div class="card-bottom"><div class="card-tags">${character.tags.slice(0,2).map(tag => `<span>${tag}</span>`).join('')}</div><span class="card-open">查看档案<b>↗</b></span></div></div>
      </div>
    </article>`).join('');
  document.querySelector('#heroRoster').innerHTML = characters.map((character, index) => `<button class="roster-avatar" type="button" data-roster="${character.id}" title="${character.name}" aria-label="查看${character.name}"><img src="${character.avatar}" alt="" loading="lazy"></button>`).join('');
}

let activeCharacterIndex = 0;
function openCharacter(id) {
  const character = characters.find(item => item.id === id);
  if (!character) return;
  const profile = characterProfiles[id];
  activeCharacterIndex = characters.indexOf(character);
  const index = activeCharacterIndex + 1;
  const previous = characters[(activeCharacterIndex - 1 + characters.length) % characters.length];
  const next = characters[(activeCharacterIndex + 1) % characters.length];
  dialogContent.innerHTML = `
    <div class="dialog-layout" style="--accent:${character.accent}">
      <div class="dialog-portrait">
        <img src="${character.avatar}" alt="${character.name}高清立绘" draggable="false">
        <div class="dialog-portrait-caption"><span>CHARACTER ${String(index).padStart(2,'0')} · ${character.en}</span><strong>${character.name}</strong></div>
      </div>
      <div class="dialog-details">
        <div class="dialog-heading"><span class="dialog-series">${character.series}</span><span class="dialog-en">${character.en}</span></div>
        <h2 id="dialogName">${character.name}</h2>
        <p class="dialog-headline">${profile.headline}</p>
        <p class="dialog-role">${character.role}</p>
        <blockquote class="dialog-quote">${character.quote}</blockquote>
        <div class="dialog-facts">
          <div class="dialog-fact"><small>生日</small><strong>${character.birthday}</strong></div>
          <div class="dialog-fact"><small>身份</small><strong>${character.identity}</strong></div>
          <div class="dialog-fact"><small>陪伴定位</small><strong>${profile.companion}</strong></div>
        </div>
        <section class="dialog-profile"><span>CHARACTER PROFILE</span><p>${character.description}</p><p>${profile.profile}</p></section>
        <div class="dialog-story-grid">
          <section><small>性格轮廓</small><p>${profile.temperament}</p></section>
          <section><small>偏爱事物</small><p>${profile.favorites}</p></section>
        </div>
        <section class="dialog-together"><small>与你相处</small><p>${profile.together}</p></section>
        <div class="dialog-tags">${character.tags.map(tag => `<span># ${tag}</span>`).join('')}</div>
      </div>
    </div>
    <nav class="dialog-navigation" aria-label="切换角色">
      <button type="button" data-character-step="-1"><i>←</i><span>上一位<small>${previous.name}</small></span></button>
      <a href="#download" class="dialog-download" data-dialog-download>在星伴里与她见面 <b>↗</b></a>
      <button type="button" data-character-step="1"><span>下一位<small>${next.name}</small></span><i>→</i></button>
    </nav>`;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
}
function closeDialog() {
  if (dialog.open) dialog.close();
  document.body.classList.remove('dialog-open');
}

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
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog();
});
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
dialogContent.addEventListener('click', event => {
  const step = event.target.closest('[data-character-step]');
  if (step) {
    const index = (activeCharacterIndex + Number(step.dataset.characterStep) + characters.length) % characters.length;
    openCharacter(characters[index].id);
  }
  if (event.target.closest('[data-dialog-download]')) closeDialog();
});
document.addEventListener('keydown', event => {
  if (!dialog.open || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  const direction = event.key === 'ArrowRight' ? 1 : -1;
  const index = (activeCharacterIndex + direction + characters.length) % characters.length;
  openCharacter(characters[index].id);
});

// A drag is a gallery gesture, never text selection or native image dragging.
viewport.addEventListener('selectstart', event => event.preventDefault());
viewport.addEventListener('dragstart', event => event.preventDefault());

// Character filters and horizontal gallery.
document.querySelectorAll('.filter-tab').forEach(button => {
  button.addEventListener('click', () => {
    pauseGalleryAuto(1800);
    autoDirection = 1;
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
document.querySelector('#carouselPrev').addEventListener('click', () => { pauseGalleryAuto(); viewport.scrollBy({ left:-galleryStep(), behavior:reduceMotion ? 'auto' : 'smooth' }); });
document.querySelector('#carouselNext').addEventListener('click', () => { pauseGalleryAuto(); viewport.scrollBy({ left:galleryStep(), behavior:reduceMotion ? 'auto' : 'smooth' }); });
viewport.addEventListener('scroll', updateCarousel, { passive:true });
window.addEventListener('resize', updateCarousel);
updateCarousel();

let isDragging = false, dragStartX = 0, dragStartScroll = 0;
viewport.addEventListener('pointerdown', event => {
  pauseGalleryAuto();
  if (event.pointerType !== 'mouse' || event.button !== 0) return;
  isDragging = true; dragged = false; dragStartX = event.clientX; dragStartScroll = viewport.scrollLeft;
  viewport.classList.add('dragging');
});
viewport.addEventListener('pointermove', event => {
  if (!isDragging) return;
  const distance = event.clientX - dragStartX;
  if (Math.abs(distance) <= 6) return;
  if (!dragged) {
    dragged = true;
    try { viewport.setPointerCapture(event.pointerId); } catch { /* 指针已结束时无需捕获 */ }
  }
  event.preventDefault();
  viewport.scrollLeft = dragStartScroll - distance;
});
function endDrag() { isDragging = false; viewport.classList.remove('dragging'); pauseGalleryAuto(1800); setTimeout(() => { dragged = false; }, 80); }
viewport.addEventListener('pointerup', endDrag);
viewport.addEventListener('pointercancel', endDrag);

// Gentle back-and-forth gallery roaming. Interaction always takes priority.
const autoToggle = document.querySelector('#galleryAutoToggle');
let autoEnabled = !reduceMotion, galleryInView = false, galleryHover = false;
let galleryPauseUntil = 0, autoDirection = 1, autoFrame = 0, lastAutoTime = 0;
function setGalleryAutoClass(active) { viewport.classList.toggle('auto-scrolling', active); }
function updateAutoToggle() {
  autoToggle.classList.toggle('active', autoEnabled);
  autoToggle.setAttribute('aria-pressed', String(autoEnabled));
  autoToggle.querySelector('span').textContent = `自动漫游 ${autoEnabled ? 'ON' : 'OFF'}`;
}
function stopGalleryLoop() {
  if (autoFrame) cancelAnimationFrame(autoFrame);
  autoFrame = 0; lastAutoTime = 0; setGalleryAutoClass(false);
}
function galleryAutoLoop(time) {
  autoFrame = 0;
  if (!autoEnabled || !galleryInView || document.hidden) { stopGalleryLoop(); return; }
  const delta = lastAutoTime ? Math.min(48, time - lastAutoTime) : 16;
  lastAutoTime = time;
  const canMove = time >= galleryPauseUntil && !isDragging && !galleryHover && !viewport.contains(document.activeElement);
  const max = viewport.scrollWidth - viewport.clientWidth;
  setGalleryAutoClass(canMove && max > 1);
  if (canMove && max > 1) {
    if (viewport.scrollLeft <= .5) autoDirection = 1;
    else if (viewport.scrollLeft >= max - .5) autoDirection = -1;
    viewport.scrollLeft = Math.max(0, Math.min(max, viewport.scrollLeft + autoDirection * delta * .03));
  }
  autoFrame = requestAnimationFrame(galleryAutoLoop);
}
function ensureGalleryLoop() {
  if (autoEnabled && galleryInView && !document.hidden && !autoFrame) autoFrame = requestAnimationFrame(galleryAutoLoop);
  else if ((!autoEnabled || !galleryInView || document.hidden) && autoFrame) stopGalleryLoop();
}
function pauseGalleryAuto(delay = 3500) { galleryPauseUntil = performance.now() + delay; setGalleryAutoClass(false); }
autoToggle.addEventListener('click', () => {
  autoEnabled = !autoEnabled;
  galleryPauseUntil = 0;
  updateAutoToggle();
  if (autoEnabled) ensureGalleryLoop(); else stopGalleryLoop();
});
viewport.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { galleryHover = true; pauseGalleryAuto(); } });
viewport.addEventListener('pointerleave', event => { if (event.pointerType === 'mouse') { galleryHover = false; pauseGalleryAuto(1200); } });
viewport.addEventListener('wheel', () => pauseGalleryAuto(), { passive:true });
viewport.addEventListener('touchstart', () => pauseGalleryAuto(), { passive:true });
viewport.addEventListener('focusin', () => pauseGalleryAuto());
viewport.addEventListener('focusout', () => pauseGalleryAuto(1200));
new IntersectionObserver(entries => {
  galleryInView = entries[0].isIntersecting;
  ensureGalleryLoop();
}, { threshold:.12 }).observe(viewport);
document.addEventListener('visibilitychange', ensureGalleryLoop);
updateAutoToggle();

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

// Character conversation scenes. All copy is local demo content, not user history.
const conversations = [
  { id:'hoshino', label:'慵懒但可靠的前辈', messages:[
    { from:'user', text:'今天有点累，什么都不想做了。', time:'22:46' },
    { from:'character', text:'辛苦啦。那就先把肩膀放松，来前辈这里充一会儿电吧。', time:'22:46' },
    { from:'character', text:'不过充电要收一点点费用——夸一句「星野最可靠」就好。', time:'22:47' },
    { from:'user', text:'星野最可靠。这样可以了吗？', time:'22:47' },
    { from:'character', text:'嗯，满分。呼啊……再附赠一次摸头。今天已经做得很好了，剩下的明天再说。', time:'22:47' }
  ]},
  { id:'3901000011', label:'古书馆里的小心思', messages:[
    { from:'user', text:'忧，你是不是又打算一整天待在古书馆？', time:'15:12' },
    { from:'character', text:'嗯。书很安静，也不会突然跟我搭话……很方便。', time:'15:13' },
    { from:'user', text:'那我呢？会不会打扰你？', time:'15:13' },
    { from:'character', text:'你、你不一样。你的位置，我刚好留在窗边了。', time:'15:14' },
    { from:'character', text:'咖啡也只是顺便带的。才不是……特意记得你喜欢喝什么。', time:'15:14' }
  ]},
  { id:'3901000014', label:'今日份勇者任务', messages:[
    { from:'user', text:'爱丽丝，今天有什么任务？', time:'18:30' },
    { from:'character', text:'邦邦卡邦！隐藏任务已发布：让老师露出笑容！', time:'18:30' },
    { from:'user', text:'那任务奖励是什么？', time:'18:31' },
    { from:'character', text:'传说级奖励：爱丽丝的抱抱！完成后还能解锁特别称号——', time:'18:31' },
    { from:'character', text:'「世界上最棒的老师」！爱丽丝会一直为你应援的！', time:'18:32' }
  ]},
  { id:'3901000019', label:'风纪委员长的命令', messages:[
    { from:'user', text:'日奈，你还在处理文件？知道现在几点了吗？', time:'01:21' },
    { from:'character', text:'……一点二十。最后一份，马上就好。', time:'01:21' },
    { from:'user', text:'你上次也是这么说的。又想骗我？', time:'01:22' },
    { from:'character', text:'那你就当被我骗了一次。过来，陪我十分钟。', time:'01:22' },
    { from:'character', text:'十分钟之后，我们一起睡。这是命令，不许拒绝。', time:'01:23' }
  ]}
].map(scene => ({ ...scene, character:characters.find(character => character.id === scene.id) }));
const conversationShell = document.querySelector('#conversationShell');
const conversationCast = document.querySelector('#conversationCast');
const chatMessages = document.querySelector('#chatMessages');
const chatReplay = document.querySelector('#chatReplay');
let activeConversation = 0, chatTimers = [], chatHasPlayed = reduceMotion;
function clearChatPlayback() { chatTimers.forEach(clearTimeout); chatTimers = []; document.querySelector('.chat-typing')?.remove(); }
function scheduleChat(callback, delay) { chatTimers.push(setTimeout(callback, delay)); }
function setChatStatus(typing = false) { document.querySelector('#chatStatus').innerHTML = `<i></i>${typing ? '正在输入…' : '此刻在线 · 本地角色'}`; }
function scrollChat() { chatMessages.scrollTo({ top:chatMessages.scrollHeight, behavior:reduceMotion ? 'auto' : 'smooth' }); }
function renderConversation(animate = false) {
  clearChatPlayback();
  const scene = conversations[activeConversation];
  chatMessages.innerHTML = '<div class="chat-day"><span>今天</span><i></i><small>A MOMENT WITH YOU</small></div>';
  setChatStatus();
  function appendMessage(message) {
    const row = document.createElement('div');
    row.className = `chat-message ${message.from === 'user' ? 'from-user' : 'from-character'}`;
    if (message.from === 'character') {
      const avatar = document.createElement('img');
      avatar.src = scene.character.avatar; avatar.alt = ''; avatar.className = 'message-avatar';
      row.append(avatar);
    }
    const stack = document.createElement('div'); stack.className = 'message-stack';
    const bubble = document.createElement('p'); bubble.className = 'chat-bubble'; bubble.textContent = message.text;
    const meta = document.createElement('span'); meta.className = 'chat-message-meta'; meta.textContent = `${message.time}${message.from === 'user' ? ' ✓✓' : ''}`;
    stack.append(bubble, meta); row.append(stack); chatMessages.append(row);
    if (message.from === 'character') setChatStatus();
    scrollChat();
  }
  function showTyping() {
    document.querySelector('.chat-typing')?.remove();
    const typing = document.createElement('div'); typing.className = 'chat-message from-character chat-typing'; typing.setAttribute('aria-label', `${scene.character.name}正在输入`);
    typing.innerHTML = `<img class="message-avatar" src="${scene.character.avatar}" alt=""><div class="typing-bubble"><i></i><i></i><i></i></div>`;
    chatMessages.append(typing); setChatStatus(true); scrollChat();
  }
  if (!animate || reduceMotion) { scene.messages.forEach(appendMessage); return; }
  let delay = 250;
  scene.messages.forEach(message => {
    scheduleChat(() => {
      if (message.from === 'character') {
        showTyping();
        scheduleChat(() => { document.querySelector('.chat-typing')?.remove(); appendMessage(message); }, 650);
      } else appendMessage(message);
    }, delay);
    delay += message.from === 'character' ? 1250 : 750;
  });
}
function selectConversation(id, animate = true) {
  const index = conversations.findIndex(scene => scene.id === id);
  if (index < 0) return;
  activeConversation = index;
  const scene = conversations[index];
  conversationShell.style.setProperty('--chat-accent', scene.character.accent);
  document.querySelector('#chatAvatar').src = scene.character.avatar;
  document.querySelector('#chatName').textContent = scene.character.name;
  document.querySelector('#chatScene').textContent = `SCENE ${String(index + 1).padStart(2,'0')} / 04`;
  document.querySelector('#chatPanel').setAttribute('aria-labelledby', `chat-tab-${scene.id}`);
  conversationCast.querySelectorAll('[role="tab"]').forEach((button, buttonIndex) => {
    const selected = buttonIndex === index;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-selected', String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
  renderConversation(animate);
}
conversationCast.innerHTML = conversations.map((scene, index) => `<button class="conversation-character${index === 0 ? ' active' : ''}" id="chat-tab-${scene.id}" type="button" role="tab" aria-selected="${index === 0}" aria-controls="chatPanel" tabindex="${index === 0 ? 0 : -1}" data-conversation="${scene.id}" style="--character-accent:${scene.character.accent}"><img src="${scene.character.avatar}" alt="" loading="lazy"><span><strong>${scene.character.name}</strong><small>${scene.label}</small></span><i>0${index + 1}</i></button>`).join('');
conversationCast.addEventListener('click', event => {
  const button = event.target.closest('[data-conversation]');
  if (button) selectConversation(button.dataset.conversation);
});
conversationCast.addEventListener('keydown', event => {
  if (!['ArrowRight','ArrowDown','ArrowLeft','ArrowUp','Home','End'].includes(event.key)) return;
  event.preventDefault();
  let index = activeConversation;
  if (event.key === 'Home') index = 0;
  else if (event.key === 'End') index = conversations.length - 1;
  else index = (index + (['ArrowRight','ArrowDown'].includes(event.key) ? 1 : -1) + conversations.length) % conversations.length;
  selectConversation(conversations[index].id);
  conversationCast.children[index].focus();
});
chatReplay.addEventListener('click', () => {
  chatReplay.classList.remove('replaying');
  void chatReplay.offsetWidth;
  chatReplay.classList.add('replaying');
  renderConversation(true);
  scheduleChat(() => chatReplay.classList.remove('replaying'), 700);
});
selectConversation(conversations[0].id, false);
new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !chatHasPlayed) { chatHasPlayed = true; renderConversation(true); }
}, { threshold:.28 }).observe(conversationShell);

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
['characters','conversations','features','sync','community'].forEach(id => navObserver.observe(document.getElementById(id)));

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

// Community QR preview, tactile cards and reliable group-number copying.
const qrDialog = document.querySelector('#qrDialog');
const qrDialogImage = document.querySelector('#qrDialogImage');
const qrDialogCopy = document.querySelector('#qrDialogCopy');
const communityToast = document.querySelector('#communityToast');
let communityToastTimer = 0;
function showCommunityToast(message) {
  communityToast.textContent = message;
  communityToast.classList.add('visible');
  clearTimeout(communityToastTimer);
  communityToastTimer = setTimeout(() => communityToast.classList.remove('visible'), 2400);
}
function closeQrDialog() {
  if (qrDialog.open) qrDialog.close();
  document.body.classList.remove('dialog-open');
}
document.querySelectorAll('.qr-button').forEach(button => {
  button.addEventListener('click', () => {
    qrDialogImage.src = button.dataset.qr;
    qrDialogImage.alt = `${button.dataset.groupName} QQ 群二维码`;
    document.querySelector('#qrDialogName').textContent = button.dataset.groupName;
    qrDialogCopy.dataset.copyGroup = button.dataset.group;
    qrDialog.showModal();
    document.body.classList.add('dialog-open');
  });
});
document.querySelector('#qrDialogClose').addEventListener('click', closeQrDialog);
qrDialog.addEventListener('click', event => {
  if (event.target !== qrDialog) return;
  const rect = qrDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeQrDialog();
});
qrDialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));

async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    try { await navigator.clipboard.writeText(value); return true; } catch { /* use fallback */ }
  }
  const input = document.createElement('textarea');
  input.value = value;
  input.setAttribute('readonly', '');
  input.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
  document.body.append(input);
  input.select();
  let copied = false;
  try { copied = document.execCommand('copy'); } catch { copied = false; }
  input.remove();
  return copied;
}
document.querySelectorAll('[data-copy-group]').forEach(button => {
  button.addEventListener('click', async () => {
    const number = button.dataset.copyGroup;
    const copied = await copyText(number);
    showCommunityToast(copied ? `群号 ${number} 已复制，打开 QQ 搜索即可加入` : `请手动记录群号：${number}`);
    if (!copied) return;
    button.classList.add('copied');
    const label = button.querySelector('span');
    const original = label.textContent;
    label.textContent = '已复制';
    setTimeout(() => { button.classList.remove('copied'); label.textContent = original; }, 1800);
  });
});
if (finePointer && !reduceMotion) {
  document.querySelectorAll('.community-card').forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty('--community-x', `${x * 100}%`);
      card.style.setProperty('--community-y', `${y * 100}%`);
      card.style.setProperty('--community-rx', `${(.5 - y) * 2.2}deg`);
      card.style.setProperty('--community-ry', `${(x - .5) * 2.2}deg`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--community-rx', '0deg');
      card.style.setProperty('--community-ry', '0deg');
    });
  });
}

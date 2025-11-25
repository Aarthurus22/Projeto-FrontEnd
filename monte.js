// monte.js — versão comentada de forma objetiva (pt-BR).
// Função: renderizar componentes por slot, gerenciar seleção, tema e finalizar montagem.

// Arquivos / chaves do Local Storage
const DATA_FILE = 'components.json';
const STORAGE_KEY = 'montagemPC_v1';     // seleção atual (slot -> itemId)
const SAVED_KEY = 'montagens_salvas';    // montagens finalizadas (array)
const THEME_KEY = 'montagem_tema';       // tema salvo ('dark' | 'light')

// Slots obrigatórios para habilitar "Finalizar Montagem"
const REQUIRED_SLOTS = ['cpu', 'mobo', 'ram', 'gpu', 'ssd', 'psu', 'case'];

let components = [];      // array carregado de components.json
let selection = {};       // mapa: slotKey -> item (obj completo)

/*
  init()
  - carrega components.json
  - restaura tema e seleção do Local Storage
  - renderiza cards nos slots e atualiza UI
  - anexa handlers dos controles
*/
async function init() {
  try {
    const res = await fetch(DATA_FILE);
    components = res.ok ? await res.json() : [];
  } catch (e) {
    console.error('Erro ao carregar components.json', e);
    components = [];
  }
  loadTheme();
  loadSelection();
  renderSlots();
  updateUI();
  attachControls();
}

/*
  findSlotForItem(item)
  - determina o slot (elemento com data-slot) para um item baseado no item.id
  - tenta startsWith(dataset.slot) e depois includes(dataset.slot)
  - retorna slot correspondente ou slot-outras como fallback
*/
function findSlotForItem(item) {
  const id = (item.id || '').toLowerCase();
  const slots = Array.from(document.querySelectorAll('[data-slot]'));
  let match = slots.find(s => id.startsWith(s.dataset.slot.toLowerCase()));
  if (!match) match = slots.find(s => id.includes(s.dataset.slot.toLowerCase()));
  return match || document.getElementById('slot-outras');
}

/*
  renderSlots()
  - limpa todos os slots
  - cria um card por item e insere no slot correspondente
  - conecta botões Selecionar e Info de cada card
*/
function renderSlots() {
  document.querySelectorAll('[data-slot]').forEach(s => s.innerHTML = '');
  components.forEach(item => {
    const slotEl = findSlotForItem(item);
    if (!slotEl) return;

    const card = document.createElement('div');
    card.className = 'card component-card';
    card.style.width = '18rem';
    card.dataset.id = item.id;
    card.dataset.slot = slotEl.dataset.slot;
    card.innerHTML = `
      <img src="${item.image}" class="card-img-top" alt="${item.title}">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description || ''}</p>
        <div>
          <button class="btn btn-primary btn-select">Selecionar</button>
          <button class="btn btn-outline-secondary btn-info ms-2 btn-show">Info</button>
        </div>
      </div>
    `;
    slotEl.appendChild(card);

    card.querySelector('.btn-select').addEventListener('click', () => toggleSelect(slotEl.dataset.slot, item));
    card.querySelector('.btn-show').addEventListener('click', () => showInfo(item));
  });
}

/*
  toggleSelect(slotKey, item)
  - seleciona/desseleciona um item no slot especificado
  - persiste a seleção no Local Storage e atualiza a UI
*/
function toggleSelect(slotKey, item) {
  if (selection[slotKey] && selection[slotKey].id === item.id) delete selection[slotKey];
  else selection[slotKey] = item;
  saveSelection();
  updateUI();
}

/*
  showInfo(item)
  - mostra um alerta simples com título e descrição do item
  - aqui pode ser trocado por modal se preferir
*/
function showInfo(item) {
  alert(`${item.title}\n\n${item.description || ''}`);
}

/*
  updateUI()
  - atualiza aparência dos cards (selecionado / não selecionado)
  - reconstrói o resumo na barra lateral
  - atualiza estado do botão "Finalizar Montagem"
*/
function updateUI() {
  // destacar cards conforme seleção
  document.querySelectorAll('.component-card').forEach(card => {
    const slotKey = card.dataset.slot;
    const id = card.dataset.id;
    const btn = card.querySelector('.btn-select');
    if (selection[slotKey] && selection[slotKey].id === id) {
      card.classList.add('card-select');
      btn.textContent = 'Selecionado';
      btn.classList.replace('btn-primary', 'btn-success');
    } else {
      card.classList.remove('card-select');
      btn.textContent = 'Selecionar';
      // garante classe btn-primary sem lançar erro
      if (btn.classList.contains('btn-success')) btn.classList.replace('btn-success', 'btn-primary');
      else { btn.classList.remove('btn-success'); btn.classList.add('btn-primary'); }
    }
  });

  // construir resumo da seleção
  const summary = document.getElementById('summaryList');
  summary.innerHTML = '';
  const keys = Object.keys(selection);
  if (!keys.length) {
    summary.innerHTML = '<p class="text-muted">Nenhum componente selecionado.</p>';
  } else {
    const ul = document.createElement('ul');
    ul.className = 'list-group list-group-flush';
    keys.forEach(slotKey => {
      const it = selection[slotKey];
      const slotLabel = (document.querySelector(`[data-slot="${slotKey}"]`) || {}).dataset?.label || slotKey;
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-start';
      li.innerHTML = `<div><strong>${it.title}</strong><div class="text-muted small">${slotLabel}</div></div>`;
      ul.appendChild(li);
    });
    summary.appendChild(ul);
  }

  updateFinalizeButton();
}

/*
  updateFinalizeButton()
  - habilita o botão Finalizar somente se todos os REQUIRED_SLOTS estiverem preenchidos
*/
function updateFinalizeButton() {
  const btn = document.getElementById('finalizeBtn');
  if (!btn) return;
  const allFilled = REQUIRED_SLOTS.every(s => !!selection[s]);
  btn.disabled = !allFilled;
}

/*
  saveSelection()
  - persiste apenas o mapa slot -> itemId no Local Storage
*/
function saveSelection() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Object.fromEntries(Object.entries(selection).map(([k,v]) => [k, v.id]))));
  } catch (e) { console.error(e); }
}

/*
  loadSelection()
  - restaura seleção do Local Storage, convertendo itemId para objeto completo (busca em components carregados)
*/
function loadSelection() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const map = JSON.parse(raw);
    Object.entries(map).forEach(([slotKey, id]) => {
      const found = components.find(c => c.id === id);
      if (found) selection[slotKey] = found;
    });
  } catch (e) { console.error(e); }
}

/*
  clearSelection()
  - limpa seleção (após confirmação), persiste e atualiza UI
*/
function clearSelection() {
  if (!confirm('Deseja limpar todas as seleções?')) return;
  selection = {};
  saveSelection();
  updateUI();
}

/*
  finalizeAssembly()
  - valida preenchimento completo; monta objeto resumo e salva em SAVED_KEY
  - notifica usuário ao finalizar
*/
function finalizeAssembly() {
  if (!REQUIRED_SLOTS.every(s => !!selection[s])) {
    alert('Preencha todos os componentes antes de finalizar a montagem.');
    return;
  }
  const data = { createdAt: new Date().toISOString(), items: REQUIRED_SLOTS.map(slotKey => {
    const it = selection[slotKey];
    return { slot: slotKey, title: it.title, id: it.id };
  })};
  try {
    const arr = JSON.parse(localStorage.getItem(SAVED_KEY) || '[]');
    arr.push(data);
    localStorage.setItem(SAVED_KEY, JSON.stringify(arr));
    alert('Montagem finalizada e salva!');
  } catch (e) {
    console.error(e);
    alert('Erro ao finalizar a montagem.');
  }
}

/*
  toggleTheme() / loadTheme()
  - alterna e persiste tema (classe body.dark-theme)
  - atualiza texto e aria-pressed do botão
*/
function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById('themeToggle');
  const isDark = body.classList.toggle('dark-theme');
  try { localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light'); } catch(e){}
  if (btn) { btn.textContent = `Modo: ${isDark ? 'Escuro' : 'Claro'}`; btn.setAttribute('aria-pressed', String(isDark)); }
}

function loadTheme() {
  try {
    const t = localStorage.getItem(THEME_KEY) || 'light';
    const btn = document.getElementById('themeToggle');
    if (t === 'dark') {
      document.body.classList.add('dark-theme');
      if (btn) { btn.textContent = 'Modo: Escuro'; btn.setAttribute('aria-pressed', 'true'); }
    } else {
      if (btn) { btn.textContent = 'Modo: Claro'; btn.setAttribute('aria-pressed', 'false'); }
    }
  } catch (e) { console.error(e); }
}

/*
  attachControls()
  - conecta eventos dos botões principais
*/
function attachControls() {
  const clearBtn = document.getElementById('clearBtn');
  const themeBtn = document.getElementById('themeToggle');
  const finalizeBtn = document.getElementById('finalizeBtn');
  if (clearBtn) clearBtn.addEventListener('click', clearSelection);
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  if (finalizeBtn) finalizeBtn.addEventListener('click', finalizeAssembly);
}

/* inicia o app */
init();
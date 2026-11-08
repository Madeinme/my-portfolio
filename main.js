// 포트폴리오에 표시할 프로젝트 목록
const projects = [
  {
    title: 'Todo App',
    icon: '✅',
    description: '할 일을 추가·완료·삭제하고 전체/진행 중/완료로 필터링할 수 있는 할 일 관리 앱입니다. LocalStorage에 저장됩니다.',
    tags: ['LocalStorage', '필터', 'DOM'],
    url: 'to-do/index.html',
  },
  {
    title: '환율 변환기',
    icon: '💱',
    description: 'USD, EUR, KRW, JPY 사이의 환율을 실시간으로 변환하고 최근 변환 기록을 관리하는 앱입니다.',
    tags: ['Fetch API', '디바운스', '캐싱'],
    url: 'fxconverter/index.html',
  },
  {
    title: '스네이크 게임',
    icon: '🐍',
    description: '캔버스로 만든 뱀 게임입니다. 난이도 선택, 레벨업에 따른 속도 증가, 일시정지, 최고 점수 저장을 지원합니다.',
    tags: ['Canvas', '게임 루프', '키보드'],
    url: 'snakegame/index.html',
  },
];

// 프로젝트 하나로 카드 요소를 만든다 (카드 전체가 링크라서 클릭하면 해당 프로젝트로 이동)
function createCard(project) {
  const card = document.createElement('a');
  card.className = 'project-card';
  card.href = project.url;

  const icon = document.createElement('div');
  icon.className = 'card-icon';
  icon.textContent = project.icon;
  icon.setAttribute('aria-hidden', 'true');

  const title = document.createElement('h3');
  title.className = 'card-title';
  title.textContent = project.title;

  const desc = document.createElement('p');
  desc.className = 'card-desc';
  desc.textContent = project.description;

  const tags = document.createElement('ul');
  tags.className = 'card-tags';
  project.tags.forEach((tag) => {
    const li = document.createElement('li');
    li.textContent = tag;
    tags.appendChild(li);
  });

  const link = document.createElement('span');
  link.className = 'card-link';
  link.innerHTML = '프로젝트 보기 <span class="arrow">→</span>';

  card.append(icon, title, desc, tags, link);
  return card;
}

function initApp() {
  const grid = document.getElementById('project-grid');
  projects.forEach((project) => grid.appendChild(createCard(project)));

  // 프로젝트 개수와 올해 연도 표시
  document.getElementById('project-count').textContent = projects.length;
  document.getElementById('year').textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', initApp);

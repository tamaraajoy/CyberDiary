function loadArticles() {
  const container = document.getElementById('articles');
  if (!container) return;

  const data = JSON.parse(localStorage.getItem('materi') || '[]');
  container.innerHTML = data.map((article, i) => `
    <article class="card" onclick="openDetail(${i})">
      <img src="${article.image}" alt="${article.title}">
      <div class="card-content">
        <h2>${article.title}</h2>
        <p>${article.description}</p>
      </div>
    </article>
  `).join('');
}

function openDetail(i) {
  localStorage.setItem('materi_terpilih', i);
  window.location.href = 'detail.html';
}

loadArticles();

document.addEventListener('DOMContentLoaded', async function () {
  const sidebar = document.getElementById('sidebar');
  const pages = document.querySelectorAll('.page');

  const response = await fetch('items.json');
  const items = await response.json();

  items.forEach((item, index) => {
    const li = document.createElement('li');
    const button = document.createElement('button');

    button.className =
      'w-full text-left px-4 py-2 bg-blue-100 rounded hover:bg-blue-200';
    button.textContent = item.label;
    button.onclick = () => showPage(item.id, button);

    if (index === 0) {
      button.classList.add('active');
    }

    li.appendChild(button);
    sidebar.appendChild(li);
  });

  showPage(items[0].id, sidebar.querySelector('button'));
});

function showPage(pageId, btn) {
  const pages = document.querySelectorAll('.page');
  pages.forEach((page) => page.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');

  const buttons = document.querySelectorAll('#sidebar button');
  buttons.forEach((b) => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

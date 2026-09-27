// 取得 DOM 元素
const jewelryItems = document.querySelectorAll('.jewelry-item');
const confirmModal = document.getElementById('confirmModal');
const closeModal = document.getElementById('closeModal');
const promiseBtn = document.getElementById('promiseBtn');
const bgMusic = document.getElementById('bgMusic');
const flyingRing = document.getElementById('flyingRing');
const flyingGem = document.getElementById('flyingGem');
const fadeOverlay = document.getElementById('fadeOverlay');
const mainCounter = document.getElementById('mainCounter');
const storeBg = document.getElementById('storeBg');
const parkBg = document.getElementById('parkBg');
const flyingEnvelope = document.getElementById('flyingEnvelope');
const letterNote = document.getElementById('letterNote');
const finishBtn = document.getElementById('finishBtn');

let selectedColor = '';

// 1. 點擊珠寶盒子
jewelryItems.forEach(item => {
    item.addEventListener('click', () => {
        selectedColor = item.getAttribute('data-color');
        
        // 替換動畫戒指的寶石顏色
        if (selectedColor === '紅色') {
            flyingGem.className = 'ring-gem red-gem';
        } else if (selectedColor === '藍色') {
            flyingGem.className = 'ring-gem blue-gem';
        } else if (selectedColor === '粉色') {
            flyingGem.className = 'ring-gem pink-gem';
        }
        
        confirmModal.classList.remove('hidden');
    });
});

// 2. 關閉視窗
closeModal.addEventListener('click', () => {
    confirmModal.classList.add('hidden');
});

// 3. 點擊「保證」：啟動音樂、戒指動畫、過場漸黑、替換藝術背景、彈出信封
promiseBtn.addEventListener('click', () => {
    bgMusic.play().catch(error => {
        console.log("音樂播放限制:", error);
    });

    confirmModal.classList.add('hidden');

    flyingRing.classList.remove('hidden-ring');
    flyingRing.classList.add('animate-ring');

    // 1.6秒後螢幕全黑
    setTimeout(() => {
        fadeOverlay.classList.add('fade-to-black');
    }, 1600);

    // 3.2秒後切換為藝術公園場景
    setTimeout(() => {
        mainCounter.style.display = 'none';
        storeBg.style.display = 'none';
        flyingRing.classList.add('hidden-ring');
        
        // 顯示高質感藝術公園背景
        parkBg.classList.remove('hidden-park');
        
        // 畫面重新變亮
        fadeOverlay.classList.remove('fade-to-black');
        
        // 信封從畫面正中間彈出
        flyingEnvelope.classList.add('animate-envelope');
    }, 3200);
});

// 4. 點擊彈窗外部也可關閉
confirmModal.addEventListener('click', (e) => {
    if (e.target === confirmModal) {
        confirmModal.classList.add('hidden');
    }
});

// 5. 點擊信封，打開長篇可滑動信件
flyingEnvelope.addEventListener('click', () => {
    flyingEnvelope.style.display = 'none';
    letterNote.classList.remove('hidden-letter');
});

// 6. 點擊「完成了」，浪漫落幕
finishBtn.addEventListener('click', () => {
    fadeOverlay.classList.add('fade-to-black');

    // 3 秒後重整頁面，回到最初的相遇
    setTimeout(() => {
        location.reload();
    }, 3000);
});
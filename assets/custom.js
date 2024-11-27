document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
      
      history.pushState(null, null, ' ');
    }
  });
});


const isSameDate = new Date() < new Date("2024-11-30T23:59:59");

if (isSameDate){
  const announcementBar = document.querySelector(".announcement-bar__announcement i");
    const deadline = new Date("2024-11-30T23:59:59").getTime();
  
    // Проверяем наличие элемента и текста WELCOME10
    if (announcementBar && announcementBar.textContent.includes("WELCOME10")) {
      function updateTimer() {
        const now = new Date().getTime();
        const timeLeft = deadline - now;
  
        if (timeLeft > 0) {
          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  
          // Обновляем текст в объявлении
          announcementBar.textContent = `SALE ENDS IN: ${days} DAYS, ${hours} HOURS, ${minutes} MINUTES`;
        } else {
          // Если срок истёк, скрываем код
          announcementBar.textContent = "";
          clearInterval(interval);
        }
      }
  
      // Обновляем таймер каждую минуту
      updateTimer(); // Начальная установка
      const interval = setInterval(updateTimer, 60000);
    }
}

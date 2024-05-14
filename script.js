document.addEventListener('DOMContentLoaded', function() {
    const monthElement = document.getElementById('month');
    const datesElement = document.getElementById('dates');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const today = new Date();
    let lastClickedDate = null;
  
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
  
    renderCalendar(currentMonth, currentYear);
  
    prevButton.addEventListener('click', () => {
      currentMonth -= 1;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear -= 1;
      }
      renderCalendar(currentMonth, currentYear);
    });
  
    nextButton.addEventListener('click', () => {
      currentMonth += 1;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear += 1;
      }
      renderCalendar(currentMonth, currentYear);
    });
  
    function renderCalendar(month, year) {
      monthElement.textContent = months[month] + ' ' + year;
      datesElement.innerHTML = '';
  
      const firstDayOfMonth = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
  
      for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDate = document.createElement('div');
        datesElement.appendChild(emptyDate);
      }
  
      for (let i = 1; i <= daysInMonth; i++) {
        const dateElement = document.createElement('div');
        dateElement.textContent = i;
        dateElement.classList.add('date');
        datesElement.appendChild(dateElement);
  
        dateElement.addEventListener('click', () => {
          const clickedDate = new Date(year, month, i);
          if (clickedDate.toDateString() === today.toDateString()) {
            if (lastClickedDate && lastClickedDate !== dateElement) {
              lastClickedDate.classList.remove('crossed');
            }
            dateElement.classList.toggle('crossed');
            lastClickedDate = dateElement;
          } else {
            alert("You have already cross out today's date, Now do deep work till tomorrow");
          }
        });
      }
    }
  });
  
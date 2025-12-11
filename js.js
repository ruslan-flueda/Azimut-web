/* const s1 = document.querySelector('#s-1');
const pb1 = document.querySelector('#pb-1 .perspective');
const pb2 = document.querySelector('#pb-2 .perspective');

let timeoutId;

s1.addEventListener('mouseenter', () => {
  // Сначала первая трансформация
  pb1.style.transform =
    'rotateX(0deg) rotateY(40deg) translateX(340px) translateY(20px) scale(1.6)';
  pb2.style.transform =
    'rotateX(0deg) rotateY(-40deg) translateX(-340px) translateY(-20px) scale(1.6)';

  // Через 2 секунды меняем на другую позицию, если курсор всё ещё над #s-1
  timeoutId = setTimeout(() => {
    if (s1.matches(':hover')) {
      pb1.style.transform =
        'rotateX(0deg) rotateY(-40deg) translateX(-340px) translateY(20px) scale(1.6)';
      pb2.style.transform =
        'rotateX(0deg) rotateY(40deg) translateX(340px) translateY(-20px) scale(1.6)';
    }
  }, 1000); // 2000 мс = 2 секунды
});

s1.addEventListener('mouseleave', () => {
  // Возвращаем исходное состояние
  pb1.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  pb2.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  clearTimeout(timeoutId); // отменяем таймер
});
 */

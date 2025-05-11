
export const initAnimateOnScroll = () => {
  // Add scroll reveal functionality
  const revealElements = document.querySelectorAll('.reveal, .staggered-item');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  revealElements.forEach(el => {
    observer.observe(el);
  });

  // Return cleanup function
  return () => {
    revealElements.forEach(el => {
      observer.unobserve(el);
    });
  };
};

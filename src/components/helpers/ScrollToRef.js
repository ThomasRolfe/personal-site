const ScrollToRef = (ref, yOffset = 0) => {
  const yValue = ref.current.getBoundingClientRect().y;
  window.scroll(0, yValue + yOffset);
};

export default ScrollToRef;

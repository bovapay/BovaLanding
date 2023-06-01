export default function getLayoutAnimation(number: number) {
  return {
    initial: { opacity: 0.5 },
    whileInView: { opacity: 1 },
    transition: { opacity: { delay: number * 0.15, duration: 0.3 } },
  };
}

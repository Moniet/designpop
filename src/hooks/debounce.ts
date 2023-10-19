export default function debounce(func: () => void, delay: number) {
  let timer: NodeJS.Timeout
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func()
    }, delay)
  }
}

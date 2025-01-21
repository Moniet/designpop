export const scrollTo = (id: string) =>
  window.scrollTo({
    top:
      document.getElementById(id)!.getBoundingClientRect()!.top +
      window.scrollY,
    behavior: "smooth"
  })

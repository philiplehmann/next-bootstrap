export const value = (form: HTMLFormElement, name: string): undefined | string => {
  const element = form.querySelector(`input#${name}`) as HTMLInputElement
  return element?.value
}

export const queryLogger = () => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor): void => {
    const name = `${target.constructor.name}#${propertyKey}`
    const method = descriptor.value!

    descriptor.value = (...args: any[]) => {
      // eslint-disable-next-line no-console
      console.time(name)
      // eslint-disable-next-line no-console
      console.count(name)
      const result = method(...args)
      result.then(() => {
        // eslint-disable-next-line no-console
        console.timeEnd(name)
      })
      return result
    }
  }
}

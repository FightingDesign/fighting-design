export const installComponents = (components: any) => {
  return (app: any) => {
    components.forEach((component: any) => {
      app.use(component)
    })
  }
}

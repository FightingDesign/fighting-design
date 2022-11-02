function FightingDesignResolver() {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^(F[A-Z]|f-[a-z])/))
        return {
          name,
          from: 'fighting-design',
          sideEffects: [
            `fighting-design/theme/${name.slice(1).toLowerCase()}.css`
          ]
        }
    }
  }
}

export default FightingDesignResolver

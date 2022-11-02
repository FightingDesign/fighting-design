import type { ResolveReturnInterface, FightingDesignResolverInterface } from './interface'

export const FightingDesignResolver = (): FightingDesignResolverInterface => {
  return {
    type: 'component',
    resolve: (name: string): ResolveReturnInterface | undefined => {
      if (name.match(/^(F[A-Z]|f-[a-z])/)) {
        return {
          name,
          from: 'fighting-design',
          sideEffects: [
            `fighting-design/theme/${name.slice(1).toLowerCase()}.css`
          ]
        }
      }
    }
  } as const
}

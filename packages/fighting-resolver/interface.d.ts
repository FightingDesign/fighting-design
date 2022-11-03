export interface FightingDesignResolverInterface {
  type: string
  resolve(name: string): ResolveReturnInterface | undefined
}

export interface ResolveReturnInterface {
  name: string
  from: string
  sideEffects: string[]
}

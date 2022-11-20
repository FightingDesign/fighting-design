/**
 * 寻找所需的子元素列表方法类型接口
 * 
 * @param children 孩子节点
 * @param componentName 子元素的名字
 * @returns { VNode[] } 所需要的所有孩子节点列表
 */
export interface GetChildrenInterface {
  (children: VNode[], componentName: string): VNode[]
}

import { isStr } from '../shared/utils';

/**
 * 该方法是用来协调子节点的，这里就会涉及到有名的 diff 算法
 * @param {*} returnFiber 因为你是处理子节点，因此传入的这个 fiber，就会称为父 fiber
 * @param {*} children 子节点的 vnode 数组
 */
export function reconcileChildren(returnFiber, children) {
  // console.log('测试returnFiber', returnFiber);
  // console.log('测试children', children);
  if (isStr(children)) return;

  console.log('测试非数组 children', children);
  // 接下来，需要做一些准备工作
  // 如果只有一个子节点，那么 children 就是一个 vnode 对象
  // 如果有多个子节点，那么 children 就是一个 vnode 数组
  // 所以我们这一步，就是为了将 children 统一都转为数组，方便我们后续的处理。
  const newChildren = isArray(children) ? children : [children];

  // 第二个准备工作，我们需要声明一些变量
  let previousNewFiber = null; // 上一个 fiber 对象
  let oldFiber = returnFiber.alternate?.child; // 上一个 fiber 对象对应的旧 fiber 对象
  let i = 0; // 记录 children 数组的索引（下标）
  let lastPlacedIndex = 0; // 上一次 DOM 节点插入的最远位置
  // 是否需要追踪副作用，该变量是一个布尔值
  // true：代表组件更新；false：代表组件初次渲染
  let shouldTrackSideEffects = !!returnFiber.alternate;
}

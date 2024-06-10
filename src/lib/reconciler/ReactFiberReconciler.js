import { updateNode } from '../shared/utils';
import { reconcileChildren } from './ReactChildFiber';

/**
 * @param {*} wip 需要处理的 fiber 对象节点
 * 注意这个 fiber 节点已经能够确定的是一个HostComponent
 */
export const updateHostComponent = (wip) => {
  // 1、创建真实的 DOM 节点对象
  if (!wip.stateNode) {
    // 进入此 if，说明当前的 fiber 节点没有创建过真实的 DOM 节点
    wip.stateNode = document.createElement(wip.type);

    // console.log('测试更新属性前', wip.stateNode);
    // 接下来，我们需要更新节点上的属性
    updateNode(wip.stateNode, {}, wip.props);
    // console.log('测试更新属性后', wip.stateNode);

    // 到目前位置，说明当前的 fiber 节点所对应的 stateNode 已经有值了，也就是说有对应的 DOM 了
    // 因此，接下来的下一步，我们就应该处理子节点了
    reconcileChildren(wip, wip.props.children);

    // 上一步执行完毕后，说明已经处理完了所有的子节点 vnode，fiber 的链表也形成了
    // console.log('测试wip', wip);
  }
};

/**
 * @param {*} wip 需要处理的 fiber 对象节点
 * 注意这个 fiber 节点已经能够确定的是一个HostComponent
 */
export const updateHostTextComponent = (wip) => {
  console.log('测试hostText', wip);
  wip.stateNode = document.createTextNode(wip.props.children);
};

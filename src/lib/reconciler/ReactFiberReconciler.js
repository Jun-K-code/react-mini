
/**
 * @param {*} wip 需要处理的 fiber 对象节点
 * 注意这个 fiber 节点已经能够确定的是一个HostComponent
 */
export const updateHostComponent = (wip) => {
    // 1、创建真实的 DOM 节点对象
    if(!wip.stateNode) {
        // 进入此 if，说明当前的 fiber 节点没有创建过真实的 DOM 节点
        wip.stateNode = document.createElement(wip.type);

        console.log("测试wip.stateNode", wip.stateNode);
        // 接下来，我们需要更新节点上的属性
        updateNode(wip.stateNode);
    }
}
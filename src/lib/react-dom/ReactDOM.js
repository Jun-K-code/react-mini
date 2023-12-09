class ReactDOMRoot {
    constructor(container) {
        // 将拿到的根 DOM 节点，在内部保存一份
        this._internalRoot = container;
    }

    /**
     * @param {*} children 要挂载到根节点的 vnode 树
     * 这里做一个讲课的约定：
     * 1、以前的虚拟DOM(栈结构)，我们称之为 vnode
     * 2、新的虚拟DOM(链表结构)，我们称之为 Fiber
     */
    render(children) {
        console.log(children);
    }
}
const ReactDom = {
    /**
     * @param {*} container 要挂载的根 DOM 节点
     * @return 返回值是一个对象，该对象会有一个 render 方法
     */
    createRoot(container) {
        return new ReactDOMRoot(container);
    },
};

export default ReactDom;

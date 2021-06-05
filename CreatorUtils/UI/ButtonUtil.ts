import { Button, Component, EventHandler, Node } from "cc";

/**
 * 对button操作的简单封装
 * 版本为ccc 3.1.x
 */
export default class ButtonUtil {

    /**
     * 
     * @param button 组件
     * @param node 事件所在脚本的节点
     * @param component 事件所在脚本
     * @param callback 事件名字
     * @param customData 数据
     */
    public static AddClick(button: Button, node: Node, component: string, callback: string, customData?: any) {
        let clickEventHandler = new EventHandler();
        clickEventHandler.target = node;
        clickEventHandler.component = component;
        clickEventHandler.handler = callback;
        clickEventHandler.customEventData = customData || null;

        button.clickEvents.push(clickEventHandler);

    }

    /**
     * 
     * @param node 添加组件的节点
     * @param zoomScale 绽放因子 默认0.95
     * @returns 
     */
    public static AddScaleButton(node: Node, zoomScale: number = 0.95): Button {
        let button = node.addComponent(Button);
        button.target = node;
        button.transition = Button.Transition.COLOR;
        button.duration = 0.1;
        button.zoomScale = zoomScale;
        return button;
    }

    /**
     * 
     * @param button 组件
     * @param state 是否禁用状态 默认为false
     */
    public static Interactable(button: Button | Node, state: boolean) {
        if (button instanceof Button) {
            button.interactable = state;
        } else if (button instanceof Node) {
            button = button.getComponent(Button)!;
            button && (button.interactable = state);
        }
    }



}
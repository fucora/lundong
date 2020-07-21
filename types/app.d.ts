
/**
 * 项目中的接口定义
 */
declare namespace Report {
    /**
     * 元素
     */
    interface StageElement {
        /**
         * id
         */
        id: string
        /**
         * 类型
         */
        type: string
        /**
         * 角色
         */
        role: string
        /**
         * 设计控制对象
         */
        ctrl: object
        /**
         * 实例属性
         */
        props: object
    }
    /**
     * 编辑区状态
     */
    interface StageState {
        /**
         * 布局对象
         */
        layouts?: StageElement[]
        /**
         * 元素对象
         */
        elements?: StageElement[]
        /**
         * x轴辅助线
         */
        xLines: []
        /**
         * y轴辅助线
         */
        yLines: []
        /**
         * 选中元素
         */
        select: StageElement[]
        /**
         * 页面
         */
        page: object
        /**
         * 缩放
         */
        scale: Number
    }

    interface StageApplyStateEvent extends Magix5.TriggerEventDescriptor {
        json: StageState
    }
}
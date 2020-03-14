class VNode {
    constructor(tag, data, children, text, elm) {
        this.tag = tag;
        this.data = data;
        this.children = children;
        this.text = text;
        this.elm = elm
    }
}
// 例如 这样一个组件
<
template >
    <
    span class = "demo"
v - show = "isShow" > his is a span. < /span> <
    /template>
    // js 代码是这样的
function render() {
    return new VNode(
        'span', {
            directives: [{
                rawName: 'v-show',
                expression: 'isShow',
                name: 'show',
                value: true
            }],
            staticClass: 'demo'
        }, [new VNode(undefined, undefined, undefined, 'This is a span.')])



}
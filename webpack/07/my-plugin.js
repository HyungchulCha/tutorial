class MyPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) { // 웹팩의 각 처리단계에서 호출될 콜백함수를 등록할 수 있다.
        compiler.hooks.done.tap('MyPlugin', () => {
            console.log('bundling completed');
        });
        compiler.hooks.emit.tap('MyPlugin', compilation => { // 웹팩의 실행이 완료됐을 때 호출되는 콜백함수를 등록한다.
            let result = '';
            for (const filename in compilation.assets) { // compilation.assets에는 웹팩이 생성할 파일의 목록이 들어있다.
                if (this.options.showSize) {
                    const size = compilation.assets[filename].size();
                    result += `${filename}(${size})\n`
                } else {
                    result += `${filename}\n`
                }
            }
            compilation.assets['fileList.txt'] = {
                source: function () {
                    return result;
                },
                size: function () {
                    return result.length;
                }
            }
        });
    }
}

module.exports = MyPlugin;
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        page1: './src/index1.js',
        //page2: './src/index2.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all', // chunks 속성의 기본값은 동적 임포트만 분할하는 async다.
            minSize: 10, // 일단 파일크기 제한에 걸리지 않게 낮은 값을 설정한다.
            minChunks: 1, // 한 개 이상의 청크에 포함되어 있어야 한다.
            cacheGroups: { // 외부 모듈은 내부 모듈보다 비교적 낮은 비율로 코드가 변경되기 때문에 브라우저에 오래 캐싱될 수 있다는 장점이 있다.
                reactBundle: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'react.bundle',
                    priority: 3,
                    minSize: 100,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: 2,
                    name: 'vendors'
                },
                defaultVendors: {
                    minChunks: 1, // 청크 개수 제한을 최소 한 개로 설정한다. 최소 한 개 이상의 청크에 포함되어 있어야 분할된다.
                    priority: 1,
                    name: 'default'
                }
            }
        }
    },
    plugins: [new CleanWebpackPlugin()],
    mode: 'production'
}
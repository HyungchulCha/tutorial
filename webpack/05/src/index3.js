async function myFunc() {
    // import('./util').then(({ add }) =>
    //     import('lodash').then(({ default: _ }) =>
    //         console.log('value', _.fill([1, 2, 3], add(10, 20)))
    //     )
    // )
    await new Promise(res => setTimeout(res, 1000));
    const [{ add }, { default: _ }] = await Promise.all([
        import(/* webpackPreload: true */ './util'),
        import(/* webpackPrefetch: true */ 'lodash')
    ]);
    console.log('value', _.fill([1, 2, 3], add(10, 20)));
    /*
        myFunc 함수가 이벤트 함수로 쓰인다면 그 이벤트가 발생하기 전까지 모듈을 가져오지 않는다.
        이를 게으른 로딩(lazy loading)이라고 불린다. 
        prefetch : 가까운 미래에 필요한 파일이라고 브라우저에게 알려주는 기능이다. 브라우저가 바쁘지 않을 때 미리 다운로드 된다.
        preload : 지금 당장 필요한 파일이라고 브라우저에게 알리는 기능이다. 남발하면 첫 페이지 로딩속도에 부정적인 영향을 줄 수 있다.
        첫 페이지 요청 시 전달된 HTML 태그 안에 미리 설정되어 있어야 하므로 웹팩이 지원할 수 있는 기능은 아니다.
        대신 웹팩은 page1.js 파일이 평가될 때 파일을 즉시 다운로드함으로써 어느 정도는 preload 기능을 흉내낸다.
    */
}
myFunc();
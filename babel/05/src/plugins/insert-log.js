module.exports = function ({ types: t }) {
  return {
    visitor: {
      FunctionDeclaration(path) {
        // FunctionDeclaration 노드가 생성되면 호출되는 함수를 정의한다.
        if (path.node.id.name.substr(0, 2) === 'on') {
          path.get('body').unshiftContainer(
            // body 배열의 앞쪽에 노드를 추가하기 위해 unshiftContainer 메서드를 호출한다.ㄴ
            'body',
            t.expressionStatement(t.callExpression(t.memberExpression(t.identifier('console'), t.identifier('log')), [t.stringLiteral(`call ${path.node.id.name}`)]))
          );
        }
      },
    },
  };
};

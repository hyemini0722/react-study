function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);
    return React.createElement(
        'button', {
            onClick: () => setIsClicked(true)
        }, isClicked ? 'Clicked!' : 'Click hear!'
    )
}

// ReactDOM의 render 함수를 사용해서 react 컴포넌트를 dom 컴테이너에 랜더링 하는 코드
// -> script 태그를 사용해서 컴포넌트를 가져왔다고 해도 컴포넌트가 화면에 보이는 것이 아니기 때문
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);
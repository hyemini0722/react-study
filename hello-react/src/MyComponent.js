import PropTypes from "prop-types";
import { Component } from "react";

class MyCompoent extends Component {
  static defaultProps = {
    name: "기본",
  };
  static propTypes = {
    name: PropTypes.string,
    favorieNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favorieNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다.
        <br />
        children 값은 {children}입니다.
        <br />
        제가 좋아하는 숫자는 {favorieNumber}입니다.
      </div>
    );
  }
}

export default MyCompoent;

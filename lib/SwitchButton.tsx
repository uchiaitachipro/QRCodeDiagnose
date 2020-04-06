import React from "react";

class SwitchButton extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { open: this.props.open };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event: any) {
    this.setState({ open: !this.state.open });
  }
  render() {
    let open = this.state.open,
      className = open ? "switch-button open" : "btn-switch";
    return (
      <label className={className} onClick={
          this.handleClick
          }>
        {" "}
        <input type="checkbox" checked={open} /> 男{" "}
      </label>
    );
  }
}

export default SwitchButton;

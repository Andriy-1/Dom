import React from "react";
import PreloaderSmall from "../../common/Preloader/PreloaderSmall";

class StatusProfileContainer extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditState = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditState = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
	componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
	}
	
	componentDidMount() {
		 this.props.getStatus(this.props.userId);
	 }
	render() {
    return (
		 <div>
        <hr />
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditState}>
						 {this.props.status || '-------'}
            </span>
          </div>
        )}

        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditState}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}
export default StatusProfileContainer;

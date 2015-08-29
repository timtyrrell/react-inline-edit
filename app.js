class InlineContainer extends React.Component {
  render() {
    return(
      <div>
        <InlineEdit />
        <InlineEdit text={"More Words"}/>
        <InlineEdit text={"Default to Edit"} editing={true}/>
      </div>
    );
  }
}

class InlineEdit extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      editing: props.editing,
      text: props.text
    }
  }

  static propTypes = {
    text: React.PropTypes.string,
    editing: React.PropTypes.bool
  };

  static defaultProps = {
    text: "Some Words",
    editing: false
  };

  _editElement = () => {
    this.setState({editing: true}, () => {
      // Focus and select all text
      $(this.refs.textField.getDOMNode()).select();
    });
  }

  _keyAction = (e) => {
     if(e.keyCode === 13) {
       // Enter to save
       this.setState({text: e.target.value, editing: false});
     } else if(e.keyCode === 27) {
       // ESC to cancel
       this.setState({editing: false});
     }
  }

  _renderElement = () => {
    if(this.state.editing) {
      return(
        <div>
          <input
            type="text"
            onKeyDown={this._keyAction}
            defaultValue={this.state.text}
            ref="textField" />
        </div>
      );
    } else {
      return(
        <div onDoubleClick={this._editElement}>
          {this.state.text}
        </div>
      );
    }
  }

  render() {
    return this._renderElement();
  }
}

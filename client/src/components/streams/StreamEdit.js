import React from "react";
import { connect } from "react-redux";
import { formValues } from "redux-form";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamsEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    console.log("StreamsEdit-props", this.props);

    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={{
            title: this.props.stream.title,
            description: this.props.stream.description,
          }}
          // Alternative solution using lodash 'pick' function:
          // _.pick(this.props.stream, "title", "description");
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("mapStateToProps - ownProps", ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamsEdit
);

import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-native';
import { View, Text, Button, Input, Item, H1 } from 'native-base';

export default class EditTodoItemModal extends React.Component {
  state = {
    title: '',
  };

  componentWillMount() {
    this.updateTitleFromProps(this.props);
  }

  componentWillReceiveProps(props) {
    this.updateTitleFromProps(props);
  }

  updateTitleFromProps(props) {
    if (!props.todoItem) {
      return;
    }

    this.setState({
      title: props.todoItem.title,
    });
  }

  render() {
    return (
      <View style={{ marginTop: 40 }}>
        <Modal
          animationType="slide"
          visible={this.props.modalVisible}
          onRequestClose={this.props.onCancel}
        >
          <View style={{ alignItems: 'center', marginTop: 30 }}>
            <H1>Edit todo</H1>

            <Item regular>
              <Input
                placeholder="New todo title"
                value={this.state.title}
                multiline
                onChangeText={title => this.setState({ title })}
              />
            </Item>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
              <Button light onPress={this.props.onCancel} style={{ marginRight: 10 }}>
                <Text>Cancel</Text>
              </Button>

              <Button onPress={() => this.props.onConfirm(this.state.title)}>
                <Text>Confirm</Text>
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

EditTodoItemModal.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types,react/no-unused-prop-types
  todoItem: PropTypes.object.isRequired,
  modalVisible: PropTypes.bool.isRequired,
};

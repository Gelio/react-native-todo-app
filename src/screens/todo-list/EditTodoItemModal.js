import React from 'react';
import PropTypes from 'prop-types';
import { Modal, DatePickerAndroid } from 'react-native';
import { View, Text, Button, Input, Item, H1 } from 'native-base';

import formatTodoDate from './formatTodoDate';

export default class EditTodoItemModal extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeDateClick = this.onChangeDateClick.bind(this);
  }

  state = {
    title: '',
    date: 0,
  };

  componentWillMount() {
    this.updateTitleFromProps(this.props);
  }

  componentWillReceiveProps(props) {
    this.updateTitleFromProps(props);
  }

  async onChangeDateClick() {
    try {
      const {
        action, year, month, day,
      } = await DatePickerAndroid.open({
        date: new Date(this.state.date),
      });

      if (action === DatePickerAndroid.dismissedAction) {
        return;
      }

      this.setState({
        date: new Date(year, month, day).getTime(),
      });
    } catch (error) {
      console.error('Cannot open date picker', error);
    }
  }

  updateTitleFromProps(props) {
    if (!props.todoItem) {
      return;
    }

    this.setState({
      title: props.todoItem.title,
      date: props.todoItem.date,
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
          <View style={{ marginTop: 30 }}>
            <H1 style={{ textAlign: 'center' }}>Edit todo</H1>

            <Item regular>
              <Input
                placeholder="New todo title"
                value={this.state.title}
                multiline
                onChangeText={title => this.setState({ title })}
              />
            </Item>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: 20,
              }}
            >
              <Text>Date: {formatTodoDate(new Date(this.state.date))}</Text>
              <Button onPress={this.onChangeDateClick}>
                <Text>Change date</Text>
              </Button>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
              <Button light onPress={this.props.onCancel} style={{ marginRight: 10 }}>
                <Text>Cancel</Text>
              </Button>

              <Button onPress={() => this.props.onConfirm(this.state.title, this.state.date)}>
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

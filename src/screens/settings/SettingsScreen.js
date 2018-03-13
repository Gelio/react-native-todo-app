import React from 'react';
import { ListItem, List, Left, Text, Picker, Body, Content, Container } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setSortOrder } from '../../actions/settingsActions';
import SORT_ORDER from '../../SortOrder';

class SettingsScreen extends React.Component {
  static navigationOptions = () => ({
    headerTitle: 'Settings',
  });

  constructor(props) {
    super(props);

    this.onSortOrderChange = this.onSortOrderChange.bind(this);
  }

  onSortOrderChange(newSortOrder) {
    this.props.setSortOrder(newSortOrder);
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Left>
                <Text>Item sort order</Text>
              </Left>

              <Body>
                <Picker
                  mode="dropdown"
                  iosHeader="Select one"
                  selectedValue={this.props.sortOrder}
                  onValueChange={this.onSortOrderChange}
                >
                  <Picker.Item label="Alphabetically" value={SORT_ORDER.ALPHABETIC} />
                  <Picker.Item
                    label="By date (latest to oldest)"
                    value={SORT_ORDER.DATE_ASCENDING}
                  />
                  <Picker.Item
                    label="By date (oldest to latest)"
                    value={SORT_ORDER.DATE_DESCENDING}
                  />
                </Picker>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

SettingsScreen.propTypes = {
  sortOrder: PropTypes.string.isRequired,
  setSortOrder: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    sortOrder: state.settings.sortOrder,
  };
}

const mapDispatchToProps = {
  setSortOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);

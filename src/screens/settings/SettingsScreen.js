import React from 'react';
import { View, Text, ListItem, CheckBox, Body } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { sortAlphabeticallyOff, sortAlphabeticallyOn } from '../../actions/settingsActions';

class SettingsScreen extends React.Component {
  static navigationOptions = () => ({
    headerTitle: 'Settings',
  });

  constructor(props) {
    super(props);

    this.toggleSortAlphabetically = this.toggleSortAlphabetically.bind(this);
  }

  toggleSortAlphabetically() {
    const action = this.props.sortAlphabetically ? 'sortAlphabeticallyOff' : 'sortAlphabeticallyOn';

    this.props[action]();
  }

  render() {
    return (
      <View>
        <ListItem onPress={this.toggleSortAlphabetically}>
          <CheckBox checked={this.props.sortAlphabetically} />

          <Body>
            <Text>Sort todos alphabetically</Text>
          </Body>
        </ListItem>
      </View>
    );
  }
}

SettingsScreen.propTypes = {
  sortAlphabetically: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    sortAlphabetically: state.settings.sortAlphabetically,
  };
}

const mapDispatchToProps = {
  sortAlphabeticallyOff,
  sortAlphabeticallyOn,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);

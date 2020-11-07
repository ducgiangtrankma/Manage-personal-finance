/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Text} from 'react-native';
import I18n from '../../assets/lang/i18n';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
class AppText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i18n: I18n,
    };
  }
  componentWillMount() {
    const {language} = this.props;
    if (language) {
      this.setMainLocaleLanguage(language);
    }
  }
  componentWillReceiveProps = (nextProps) => {
    const {language} = nextProps;
    if (language) {
      this.setMainLocaleLanguage(language);
    }
  };
  setMainLocaleLanguage = (language) => {
    let i18n = this.state.i18n;
    i18n.locale = language;
    this.setState({i18n});
  };
  render() {
    const percentFontSize = this.props.sizeScale;
    console.log(percentFontSize);
    const {i18nKey, style, numberOfLines, fontSize} = this.props; // Custom props
    const {i18n} = this.state;
    return (
      <Text
        style={[style, {fontSize: fontSize * percentFontSize}]}
        numberOfLines={numberOfLines}>
        {i18nKey ? i18n.t(i18nKey) : this.props.children}
      </Text>
    );
  }
}
AppText.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  numberOfLines: PropTypes.number,
  fontSize: PropTypes.number,
};

AppText.defaultProps = {
  style: {},
  numberOfLines: 1,
  fontSize: 15,
};
const mapStateToProps = (state) => {
  return {
    language: state.languageReducer.language,
    sizeScale: state.fontsSizeReducer.sizeScale,
  };
};

export default connect(mapStateToProps, null)(AppText);

// example :  <AppText fontSize={20} i18nKey={'logout'} />

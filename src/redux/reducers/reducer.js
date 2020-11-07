import {combineReducers} from 'redux';
import auth from './AuthReducer';
import languageReducer from './ChangeLanguageReducer';
import fontsSizeReducer from './ChangeFontSizeReducer';
import statusConnectReducer from './StatusConnectionReducer';
export default combineReducers({
  auth,
  languageReducer,
  fontsSizeReducer,
  statusConnectReducer,
});

/*------- Custom StackNavigation, StackNavigation in tab---------*/
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//screen
import {SignIn, SignUp, ForgotPassword} from '../features/Authentication';
import Insert from '../features/Insert';
import Report from '../features/Report';
import Calendar from '../features/Calendar';
import Other from '../features/Other';
const Stack = createStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sigin"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SigUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPass"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const InsertTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Insert"
        component={Insert}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const ReportTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Report"
        component={Report}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const CalendarTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Calendar"
        component={Calendar}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const OtherTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Other"
        component={Other}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export {Auth, InsertTab, ReportTab, CalendarTab, OtherTab};

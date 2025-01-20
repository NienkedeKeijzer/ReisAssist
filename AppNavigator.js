import React from 'react';
import { Icon, Touchable, useTheme } from '@draftbit/ui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { systemWeights } from 'react-native-typography';
import LinkingConfiguration from './LinkingConfiguration';
import BewaardScreen from './screens/BewaardScreen';
import BewaardVerwijderdeHalteScreen from './screens/BewaardVerwijderdeHalteScreen';
import BewaardVerwijderdeRouteScreen from './screens/BewaardVerwijderdeRouteScreen';
import DitIsMijnReisFunctionaliteitStap1Screen from './screens/DitIsMijnReisFunctionaliteitStap1Screen';
import DitIsMijnReisFunctionaliteitStap2Screen from './screens/DitIsMijnReisFunctionaliteitStap2Screen';
import DitIsMijnReisFunctionaliteitStap3Screen from './screens/DitIsMijnReisFunctionaliteitStap3Screen';
import DitIsMijnReisFunctionaliteitStap4Screen from './screens/DitIsMijnReisFunctionaliteitStap4Screen';
import HaltesScreen from './screens/HaltesScreen';
import HomeScreen from './screens/HomeScreen';
import InstellingenDeselectieBusScreen from './screens/InstellingenDeselectieBusScreen';
import InstellingenScreen from './screens/InstellingenScreen';
import ReisadviesScreen from './screens/ReisadviesScreen';
import ReisstapScreen from './screens/ReisstapScreen';
import VoegNieuwTrajectToeScreen from './screens/VoegNieuwTrajectToeScreen';
import VoegNieuweHalteToeScreen from './screens/VoegNieuweHalteToeScreen';
import XXHalteInformatieScreen from './screens/XXHalteInformatieScreen';
import XXHaltehulpScreen from './screens/XXHaltehulpScreen';
import XXHaltesSchermScreen from './screens/XXHaltesSchermScreen';
import palettes from './themes/palettes';
import Breakpoints from './utils/Breakpoints';
import useWindowDimensions from './utils/useWindowDimensions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

function DefaultDrawerIcon({ tintColor, navigation }) {
  return (
    <Touchable
      onPress={() => navigation.toggleDrawer()}
      style={[styles.headerContainer, styles.headerContainerLeft]}
    >
      <Icon
        name="EvilIcons/navicon"
        size={27}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </Touchable>
  );
}

export default function RootAppNavigator() {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#172b4cff',
        },
      }}
      linking={LinkingConfiguration}
    >
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          cardStyle: { flex: 1 },
          headerBackImage:
            Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
          headerShown: false,
          headerTitleStyle: { fontFamily: 'System_400Regular' },
        })}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Home',
          })}
        />
        <Stack.Screen
          name="ReisadviesScreen"
          component={ReisadviesScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Reisadvies',
          })}
        />
        <Stack.Screen
          name="XXHalteInformatieScreen"
          component={XXHalteInformatieScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'XX Halte informatie ',
          })}
        />
        <Stack.Screen
          name="HaltesScreen"
          component={HaltesScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Haltes',
          })}
        />
        <Stack.Screen
          name="DitIsMijnReisFunctionaliteitStap1Screen"
          component={DitIsMijnReisFunctionaliteitStap1Screen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Dit is mijn reis functionaliteit stap 1',
          })}
        />
        <Stack.Screen
          name="XXHaltehulpScreen"
          component={XXHaltehulpScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'XX Haltehulp',
          })}
        />
        <Stack.Screen
          name="XXHaltesSchermScreen"
          component={XXHaltesSchermScreen}
          options={({ navigation }) => ({
            title: 'XX Haltes scherm',
          })}
        />
        <Stack.Screen
          name="ReisstapScreen"
          component={ReisstapScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Reisstap',
          })}
        />
        <Stack.Screen
          name="BewaardScreen"
          component={BewaardScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Bewaard',
          })}
        />
        <Stack.Screen
          name="VoegNieuweHalteToeScreen"
          component={VoegNieuweHalteToeScreen}
          options={({ navigation }) => ({
            title: 'Voeg nieuwe halte toe',
          })}
        />
        <Stack.Screen
          name="VoegNieuwTrajectToeScreen"
          component={VoegNieuwTrajectToeScreen}
          options={({ navigation }) => ({
            title: 'Voeg nieuw traject toe',
          })}
        />
        <Stack.Screen
          name="DitIsMijnReisFunctionaliteitStap2Screen"
          component={DitIsMijnReisFunctionaliteitStap2Screen}
          options={({ navigation }) => ({
            title: 'Dit is mijn reis functionaliteit stap 2',
          })}
        />
        <Stack.Screen
          name="DitIsMijnReisFunctionaliteitStap3Screen"
          component={DitIsMijnReisFunctionaliteitStap3Screen}
          options={({ navigation }) => ({
            title: 'Dit is mijn reis functionaliteit stap 3',
          })}
        />
        <Stack.Screen
          name="DitIsMijnReisFunctionaliteitStap4Screen"
          component={DitIsMijnReisFunctionaliteitStap4Screen}
          options={({ navigation }) => ({
            title: 'Dit is mijn reis functionaliteit stap 4',
          })}
        />
        <Stack.Screen
          name="InstellingenScreen"
          component={InstellingenScreen}
          options={({ navigation }) => ({
            title: 'Instellingen',
          })}
        />
        <Stack.Screen
          name="BewaardVerwijderdeRouteScreen"
          component={BewaardVerwijderdeRouteScreen}
          options={({ navigation }) => ({
            title: 'Bewaard verwijderde route',
          })}
        />
        <Stack.Screen
          name="BewaardVerwijderdeHalteScreen"
          component={BewaardVerwijderdeHalteScreen}
          options={({ navigation }) => ({
            title: 'Bewaard verwijderde halte',
          })}
        />
        <Stack.Screen
          name="InstellingenDeselectieBusScreen"
          component={InstellingenDeselectieBusScreen}
          options={({ navigation }) => ({
            title: 'Instellingen deselectie bus',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});

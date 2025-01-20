import React from 'react';
import {
  Button,
  Icon,
  ScreenContainer,
  SimpleStyleScrollView,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { H3 } from '@expo/html-elements';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import FooterBlock from '../components/FooterBlock';
import HeaderBlock from '../components/HeaderBlock';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const ReisadviesScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [textInput2Value, setTextInput2Value] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
      scrollable={false}
    >
      <HeaderBlock />
      {/* Content */}
      <View
        style={StyleSheet.applyWidth(
          { backgroundColor: palettes.Contrasten.Achtergrond, flex: 20 },
          dimensions.width
        )}
      >
        {/* Reisplanner 2 */}
        <View
          style={StyleSheet.applyWidth(
            { gap: 10, marginBottom: 20, padding: 10 },
            dimensions.width
          )}
        >
          {/* Start locatie */}
          <View
            style={StyleSheet.applyWidth(
              { flex: 5, gap: 5, padding: 10 },
              dimensions.width
            )}
          >
            {/* Startlocatie */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              disabled={false}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { fontSize: 16 }
                ),
                dimensions.width
              )}
            >
              {'Vul hieronder je startlocatie in'}
            </Text>
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                const textInputValue = newTextInputValue;
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
              placeholder={'Huidige locatie'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    backgroundColor: theme.colors.background.brand,
                    borderColor: theme.colors.text.strong,
                    borderWidth: 5,
                  }
                ),
                dimensions.width
              )}
              value={textInputValue}
            />
          </View>
          {/* Eindlocatie */}
          <View
            style={StyleSheet.applyWidth(
              { gap: 5, padding: 10 },
              dimensions.width
            )}
          >
            {/* Eindlocatie */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { fontSize: 16, padding: 0 }
                ),
                dimensions.width
              )}
            >
              {'Vul hieronder je eindlocatie in'}
            </Text>
            {/* Text Input 2 */}
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInput2Value => {
                const textInputValue = newTextInput2Value;
                try {
                  setTextInput2Value(newTextInput2Value);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
              placeholder={textInput2Value.toString()}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    backgroundColor: theme.colors.background.brand,
                    borderColor: theme.colors.text.strong,
                    borderWidth: 5,
                  }
                ),
                dimensions.width
              )}
              value={textInput2Value}
            />
          </View>
          {/* Plan reis */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('ReisadviesScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            accessibilityHint={'Bereken je reisadviezen'}
            accessibilityRole={'button'}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                {
                  backgroundColor: palettes.Contrasten.Footer,
                  fontSize: 16,
                  marginBottom: 5,
                  marginLeft: 10,
                  marginRight: 10,
                }
              ),
              dimensions.width
            )}
            title={'Plan reis'}
          />
          {/* Reisopties */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('InstellingenScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                {
                  backgroundColor: palettes.Contrasten['Knop 1'],
                  marginLeft: 10,
                  marginRight: 10,
                }
              ),
              dimensions.width
            )}
            title={'Reisopties aanpassen'}
          />
        </View>
        {/* reisadviezen */}
        <SimpleStyleScrollView
          bounces={true}
          horizontal={false}
          keyboardShouldPersistTaps={'never'}
          nestedScrollEnabled={false}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          style={StyleSheet.applyWidth(
            { marginBottom: 70, paddingBottom: 20 },
            dimensions.width
          )}
        >
          {/* Advies blauw 1 */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.Contrasten.Extra,
                gap: 10,
                paddingBottom: 20,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 20,
              },
              dimensions.width
            )}
          >
            <H3
              selectable={false}
              {...GlobalStyles.H3Styles(theme)['H3'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.H3Styles(theme)['H3'].style,
                dimensions.width
              )}
            >
              {'Reisadvies 1'}
            </H3>
            {/* aankomst eindtijd */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    fontFamily: 'System',
                    fontSize: 20,
                    fontWeight: '700',
                    textAlign: 'center',
                  }
                ),
                dimensions.width
              )}
            >
              {'Begintijd 10:30 - Eindtijd 11:00\n'}
            </Text>
            {/* Extra informatie */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  padding: 10,
                },
                dimensions.width
              )}
            >
              <View
                accessibilityLabel={'Duur van de reis'}
                accessible={true}
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 5 },
                  dimensions.width
                )}
              >
                {/* duur rit */}
                <Icon name={'Ionicons/time'} size={30} />
                {/* duur rit */}
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  accessibilityLabel={'De reis duurt 30 minuten'}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    dimensions.width
                  )}
                >
                  {'0:30'}
                </Text>
              </View>
              {/* View 2 */}
              <View
                accessibilityLabel={'Aantal keer overstappen'}
                accessible={true}
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 5 },
                  dimensions.width
                )}
              >
                {/* overstap */}
                <Icon
                  size={24}
                  name={'MaterialCommunityIcons/swap-vertical-bold'}
                />
                {/* overstap */}
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    dimensions.width
                  )}
                >
                  {'1x'}
                </Text>
              </View>
              {/* View 3 */}
              <View
                accessibilityLabel={'Drukte meter'}
                accessible={true}
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 5 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  <Icon size={24} name={'Ionicons/man'} />
                  {/* Icon 2 */}
                  <Icon size={24} name={'Ionicons/man'} />
                  {/* Icon 3 */}
                  <Icon size={24} name={'Ionicons/man'} />
                </View>
                {/* Drukte */}
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    dimensions.width
                  )}
                >
                  {'Erg druk'}
                </Text>
              </View>
              {/* View 4 */}
              <View
                accessibilityLabel={'Dit is een toegankelijke reis'}
                accessible={true}
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 5 },
                  dimensions.width
                )}
              >
                {/* Toegankelijk */}
                <Icon size={24} name={'FontAwesome/wheelchair'} />
              </View>
            </View>
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  navigation.navigate('ReisstapScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              {...GlobalStyles.ButtonStyles(theme)['Button'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Button'].style,
                  { backgroundColor: palettes.Contrasten['Knop 2'] }
                ),
                dimensions.width
              )}
              title={'Bekijk de details van deze reis'}
            />
          </View>
          {/* Advies blauw 1 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.Contrasten.Achtergrond,
                gap: 10,
                paddingBottom: 20,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 20,
              },
              dimensions.width
            )}
          >
            <H3
              selectable={false}
              {...GlobalStyles.H3Styles(theme)['H3'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.H3Styles(theme)['H3'].style,
                dimensions.width
              )}
            >
              {'Reisadvies 2'}
            </H3>
            {/* aankomst eindtijd */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    fontFamily: 'System',
                    fontSize: 20,
                    fontWeight: '700',
                    textAlign: 'center',
                  }
                ),
                dimensions.width
              )}
            >
              {'Begintijd 10:45 - Eindtijd 11:33\n'}
            </Text>
            {/* Extra informatie */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  padding: 10,
                },
                dimensions.width
              )}
            >
              <View
                accessibilityLabel={'Duur van de reis'}
                accessible={true}
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 5 },
                  dimensions.width
                )}
              >
                {/* duur rit */}
                <Icon name={'Ionicons/time'} size={30} />
                {/* duur rit */}
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  accessibilityLabel={'De reis duurt 30 minuten'}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    dimensions.width
                  )}
                >
                  {'0:48'}
                </Text>
              </View>
              {/* View 2 */}
              <View
                accessibilityLabel={'Aantal keer overstappen'}
                accessible={true}
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 5 },
                  dimensions.width
                )}
              >
                {/* overstap */}
                <Icon
                  size={24}
                  name={'MaterialCommunityIcons/swap-vertical-bold'}
                />
                {/* overstap */}
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    dimensions.width
                  )}
                >
                  {'2x'}
                </Text>
              </View>
              {/* View 3 */}
              <View
                accessibilityLabel={'Drukte meter'}
                accessible={true}
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 5 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  <Icon size={24} name={'Ionicons/man'} />
                  {/* Icon 2 */}
                  <Icon size={24} name={'Ionicons/man'} />
                </View>
                {/* Drukte */}
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    dimensions.width
                  )}
                >
                  {'Een beetje druk'}
                </Text>
              </View>
              {/* View 4 */}
              <View
                accessibilityLabel={'Dit is een toegankelijke reis'}
                accessible={true}
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 5 },
                  dimensions.width
                )}
              >
                {/* Toegankelijk */}
                <Icon size={24} name={'FontAwesome/wheelchair'} />
              </View>
            </View>
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  navigation.navigate('ReisstapScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              {...GlobalStyles.ButtonStyles(theme)['Button'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Button'].style,
                  { backgroundColor: palettes.Contrasten['Knop 2'] }
                ),
                dimensions.width
              )}
              title={'Bekijk de details van deze reis'}
            />
          </View>
          {/* Advies blauw 1 3 */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.Contrasten.Extra,
                gap: 10,
                paddingBottom: 20,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 20,
              },
              dimensions.width
            )}
          >
            <H3
              selectable={false}
              {...GlobalStyles.H3Styles(theme)['H3'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.H3Styles(theme)['H3'].style,
                dimensions.width
              )}
            >
              {'Reisadvies 3 rijdt met vertraging'}
            </H3>
            {/* aankomst eindtijd */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: palettes.Contrasten['Attentie 1 (uitval)'],
                    fontFamily: 'System',
                    fontSize: 20,
                    fontWeight: '700',
                    textAlign: 'center',
                    textDecorationLine: 'none',
                  }
                ),
                dimensions.width
              )}
            >
              {'Begintijd 11:05 - Eindtijd 11:45\n'}
            </Text>
            {/* Extra informatie */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  padding: 10,
                },
                dimensions.width
              )}
            >
              <View
                accessibilityLabel={'Duur van de reis'}
                accessible={true}
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 5 },
                  dimensions.width
                )}
              >
                {/* duur rit */}
                <Icon
                  color={palettes.Contrasten['Attentie 1 (uitval)']}
                  name={'Ionicons/time'}
                  size={30}
                />
                {/* duur rit */}
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  accessibilityLabel={'De reis duurt 30 minuten'}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      { color: palettes.Contrasten['Attentie 1 (uitval)'] }
                    ),
                    dimensions.width
                  )}
                >
                  {'0:40'}
                </Text>
              </View>
              {/* View 2 */}
              <View
                accessibilityLabel={'Aantal keer overstappen'}
                accessible={true}
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 5 },
                  dimensions.width
                )}
              >
                {/* overstap */}
                <Icon
                  size={24}
                  name={'MaterialCommunityIcons/swap-vertical-bold'}
                />
                {/* overstap */}
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    dimensions.width
                  )}
                >
                  {'1x'}
                </Text>
              </View>
              {/* View 3 */}
              <View
                accessibilityLabel={'Drukte meter'}
                accessible={true}
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 5 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  <Icon size={24} name={'Ionicons/man'} />
                  {/* Icon 2 */}
                  <Icon size={24} name={'Ionicons/man'} />
                  {/* Icon 3 */}
                  <Icon size={24} name={'Ionicons/man'} />
                </View>
                {/* Drukte */}
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    dimensions.width
                  )}
                >
                  {'Erg druk'}
                </Text>
              </View>
              {/* View 4 */}
              <View
                accessibilityLabel={'Dit is een toegankelijke reis'}
                accessible={true}
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 5 },
                  dimensions.width
                )}
              >
                {/* Toegankelijk */}
                <Icon size={24} name={'FontAwesome/wheelchair'} />
              </View>
            </View>
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  navigation.navigate('ReisstapScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              {...GlobalStyles.ButtonStyles(theme)['Button'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Button'].style,
                  { backgroundColor: palettes.Contrasten['Knop 2'] }
                ),
                dimensions.width
              )}
              title={'Bekijk de details van deze reis'}
            />
          </View>
        </SimpleStyleScrollView>
      </View>
      <FooterBlock />
    </ScreenContainer>
  );
};

export default withTheme(ReisadviesScreen);

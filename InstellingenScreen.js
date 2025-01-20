import React from 'react';
import {
  Button,
  NumberInput,
  ScreenContainer,
  SimpleStyleScrollView,
  Switch,
  withTheme,
} from '@draftbit/ui';
import { H2, H3 } from '@expo/html-elements';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import FooterBlock from '../components/FooterBlock';
import HeaderBlock from '../components/HeaderBlock';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const InstellingenScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [numberInputValue2, setNumberInputValue2] = React.useState('');
  const [switchValue, setSwitchValue] = React.useState(false);
  const [switchValue2, setSwitchValue2] = React.useState(false);

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.Contrasten.Achtergrond },
        dimensions.width
      )}
    >
      <HeaderBlock />
      {/* Content 2 */}
      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          { flex: 20, marginBottom: 100, padding: 10 },
          dimensions.width
        )}
      >
        <H2
          selectable={false}
          {...GlobalStyles.H2Styles(theme)['H2'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.H2Styles(theme)['H2'].style, {
              marginBottom: 0,
              marginTop: 0,
            }),
            dimensions.width
          )}
        >
          {'Reisopties'}
        </H2>

        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Text'].style,
            dimensions.width
          )}
        >
          {
            'Pas hier de instellingen van je reis aan om een aangepast reisadvies te krijgen. Aanpassingen worden automatisch opgeslagen'
          }
        </Text>

        <View>
          {/* Vervoersmiddelen */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.Contrasten.Extra,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                flexWrap: 'wrap',
                marginBottom: 0,
                marginTop: 10,
                padding: 10,
              },
              dimensions.width
            )}
          >
            <H3
              selectable={false}
              {...GlobalStyles.H3Styles(theme)['H3'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.H3Styles(theme)['H3'].style, {
                  alignSelf: 'auto',
                  flex: 1,
                  marginTop: 0,
                }),
                dimensions.width
              )}
            >
              {'Vervoersmiddelen'}
            </H3>

            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row', justifyContent: 'space-between' },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    { fontFamily: 'System', fontWeight: '700' }
                  ),
                  dimensions.width
                )}
              >
                {'Gebruik alleen GVB lijnen'}
              </Text>
              <Switch
                onValueChange={newSwitchValue => {
                  const switchValue = newSwitchValue;
                  try {
                    setSwitchValue(newSwitchValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                activeTrackColor={palettes.Contrasten['Knop 1']}
                inactiveTrackColor={palettes.Brand.Background}
                value={switchValue}
              />
            </View>
          </View>
          {/* voertuigen */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: palettes.Contrasten.Extra,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 10,
                justifyContent: 'center',
                padding: 10,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text'].style,
                dimensions.width
              )}
            >
              {'Selecteer de voertuigen die je niet wilt gebruiken'}
            </Text>
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  navigation.navigate('InstellingenDeselectieBusScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              {...GlobalStyles.ButtonStyles(theme)['Button'].props}
              icon={'Ionicons/bus'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Button'].style,
                  { backgroundColor: palettes.Contrasten['Knop 1'] }
                ),
                dimensions.width
              )}
              title={'Bus'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              {...GlobalStyles.ButtonStyles(theme)['Button'].props}
              icon={'MaterialCommunityIcons/tram'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Button'].style,
                  { backgroundColor: palettes.Contrasten['Knop 1'] }
                ),
                dimensions.width
              )}
              title={'Tram'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              {...GlobalStyles.ButtonStyles(theme)['Button'].props}
              icon={'MaterialCommunityIcons/subway'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Button'].style,
                  { backgroundColor: palettes.Contrasten['Knop 1'] }
                ),
                dimensions.width
              )}
              title={'Metro'}
            />
            {/* Button 4 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              {...GlobalStyles.ButtonStyles(theme)['Button'].props}
              icon={'MaterialIcons/directions-boat'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Button'].style,
                  { backgroundColor: palettes.Contrasten['Knop 1'] }
                ),
                dimensions.width
              )}
              title={'Veerpont'}
            />
            {/* Button 5 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              {...GlobalStyles.ButtonStyles(theme)['Button'].props}
              icon={'FontAwesome/train'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Button'].style,
                  { backgroundColor: palettes.Contrasten['Knop 1'] }
                ),
                dimensions.width
              )}
              title={'Trein'}
            />
          </View>
          {/* Voorkeuren */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.Contrasten.Extra,
                borderRadius: 8,
                gap: 5,
                marginTop: 20,
                padding: 10,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row', justifyContent: 'space-between' },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    { fontFamily: 'System', fontWeight: '700' }
                  ),
                  dimensions.width
                )}
              >
                {'Minder lopen'}
              </Text>
              <Switch
                onValueChange={newSwitchValue => {
                  const switchValue = newSwitchValue;
                  try {
                    setSwitchValue2(newSwitchValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                activeTrackColor={palettes.Contrasten['Knop 1']}
                inactiveTrackColor={palettes.Brand.Background}
                value={switchValue2}
              />
            </View>

            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text'].style,
                dimensions.width
              )}
            >
              {
                'Selecteer deze optie om een reisadvies op te vragen waarbij u minder hoeft te lopen'
              }
            </Text>
          </View>
          {/* overstap */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.Contrasten.Extra,
                borderRadius: 8,
                marginTop: 20,
                padding: 10,
              },
              dimensions.width
            )}
          >
            {/* Text 2 */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { fontFamily: 'System', fontWeight: '700', marginBottom: 10 }
                ),
                dimensions.width
              )}
            >
              {'Extra overstaptijd'}
            </Text>

            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { marginBottom: 10 }
                ),
                dimensions.width
              )}
            >
              {
                'Stel hier het aantal minuten in die we als extra overstaptijd aan je reis toevoegen'
              }
            </Text>
            <NumberInput
              changeTextDelay={500}
              onChangeText={newNumberInputValue => {
                const numberInputValue = newNumberInputValue;
                try {
                  setNumberInputValue(newNumberInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter a number...'}
              webShowOutline={true}
              {...GlobalStyles.NumberInputStyles(theme)['Number Input'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.NumberInputStyles(theme)['Number Input'].style,
                  {
                    backgroundColor: palettes.Brand.Background,
                    borderColor: theme.colors.text.strong,
                  }
                ),
                dimensions.width
              )}
              value={numberInputValue}
            />
          </View>
          {/* snelheid */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.Contrasten.Extra,
                borderRadius: 8,
                marginTop: 20,
                padding: 10,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { fontFamily: 'System', fontWeight: '700', marginBottom: 10 }
                ),
                dimensions.width
              )}
            >
              {'Loopsnelheid'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { marginBottom: 10 }
                ),
                dimensions.width
              )}
            >
              {'Stel hier je loopsnelheid in kilometer per uur in'}
            </Text>
            <NumberInput
              changeTextDelay={500}
              onChangeText={newNumberInputValue => {
                const numberInputValue = newNumberInputValue;
                try {
                  setNumberInputValue2(newNumberInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter a number...'}
              webShowOutline={true}
              {...GlobalStyles.NumberInputStyles(theme)['Number Input'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.NumberInputStyles(theme)['Number Input'].style,
                  {
                    backgroundColor: palettes.Brand.Background,
                    borderColor: theme.colors.text.strong,
                  }
                ),
                dimensions.width
              )}
              value={numberInputValue2}
            />
          </View>
        </View>
      </SimpleStyleScrollView>
      <FooterBlock />
    </ScreenContainer>
  );
};

export default withTheme(InstellingenScreen);

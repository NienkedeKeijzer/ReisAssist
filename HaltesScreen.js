import React from 'react';
import {
  CheckboxRow,
  Icon,
  IconButton,
  ScreenContainer,
  SimpleStyleScrollView,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { H1, H2 } from '@expo/html-elements';
import { useIsFocused } from '@react-navigation/native';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import FooterBlock from '../components/FooterBlock';
import HeaderBlock from '../components/HeaderBlock';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const HaltesScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [checkboxHalteinfoValue, setCheckboxHalteinfoValue] =
    React.useState('');
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [checkboxRowValue2, setCheckboxRowValue2] = React.useState('');
  const [checkboxSeintjeValue, setCheckboxSeintjeValue] = React.useState('');
  const [checkboxStoringValue, setCheckboxStoringValue] = React.useState('');
  const [haltenaamValue, setHaltenaamValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      undefined;
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

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
      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: palettes.Contrasten.Achtergrond,
            flex: 20,
            gap: 10,
            paddingBottom: 100,
          },
          dimensions.width
        )}
      >
        {/* Halteinformatie */}
        <H1
          selectable={false}
          {...GlobalStyles.H1Styles(theme)['H1'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.H1Styles(theme)['H1'].style, {
              marginBottom: 0,
              marginTop: 5,
              padding: 10,
            }),
            dimensions.width
          )}
        >
          {'Halteinformatie'}
        </H1>
        {/* Zoek je halte */}
        <View style={StyleSheet.applyWidth({ padding: 10 }, dimensions.width)}>
          <H2
            selectable={false}
            {...GlobalStyles.H2Styles(theme)['H2'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.H2Styles(theme)['H2'].style, {
                marginBottom: 5,
                marginTop: 0,
              }),
              dimensions.width
            )}
          >
            {'Zoek je halte'}
          </H2>
          {/* haltenaam */}
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newHaltenaamValue => {
              try {
                setHaltenaamValue(newHaltenaamValue);
              } catch (err) {
                console.error(err);
              }
            }}
            webShowOutline={true}
            {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
            autoFocus={true}
            placeholder={textInputValue.toString()}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                {
                  backgroundColor: theme.colors.background.brand,
                  borderColor: theme.colors.text.strong,
                }
              ),
              dimensions.width
            )}
            value={haltenaamValue}
          />
          {/* Checkbox halteinfo */}
          <CheckboxRow
            onPress={newCheckboxHalteinfoValue => {
              try {
                setCheckboxHalteinfoValue(newCheckboxHalteinfoValue);
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'].props}
            color={palettes.Contrasten['Knop 1']}
            label={'Ik wil halteinformatie'}
            status={checkboxHalteinfoValue}
            style={StyleSheet.applyWidth(
              GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'].style,
              dimensions.width
            )}
            uncheckedColor={palettes.Contrasten['Knop 2']}
          />
          {/* Checkbox seintje */}
          <CheckboxRow
            onPress={newCheckboxSeintjeValue => {
              try {
                setCheckboxSeintjeValue(newCheckboxSeintjeValue);
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'].props}
            color={palettes.Contrasten['Knop 1']}
            label={'Ik wil voertuigseintje'}
            status={checkboxSeintjeValue}
            style={StyleSheet.applyWidth(
              GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'].style,
              dimensions.width
            )}
            uncheckedColor={palettes.Contrasten['Knop 1']}
          />
        </View>
        {/* Halteinformatie */}
        <>
          {!checkboxHalteinfoValue ? null : (
            <View>
              <H2
                selectable={false}
                {...GlobalStyles.H2Styles(theme)['H2'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.H2Styles(theme)['H2'].style, {
                    marginRight: 20,
                    paddingLeft: 20,
                  }),
                  dimensions.width
                )}
              >
                {'Halteinformatie '}
                {haltenaamValue}
              </H2>

              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      paddingBottom: 20,
                      paddingLeft: 20,
                      paddingRight: 20,
                      paddingTop: 0,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Hier worden de huidige vertrektijden weergegeven'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: palettes.Contrasten.Header,
                    flexDirection: 'row',
                    gap: 5,
                    justifyContent: 'space-between',
                    padding: 20,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  color={theme.colors.background.brand}
                  name={'FontAwesome/subway'}
                />
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      { color: theme.colors.background.brand, flex: 1 }
                    ),
                    dimensions.width
                  )}
                >
                  {'51 richting Isolatorweg'}
                </Text>
                {/* Text 2 */}
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        color: theme.colors.background.brand,
                        fontFamily: 'System',
                        fontWeight: '600',
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'15:15'}
                </Text>
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: palettes.Contrasten.Footer,
                    flexDirection: 'row',
                    gap: 5,
                    justifyContent: 'space-between',
                    padding: 20,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  color={theme.colors.background.brand}
                  name={'FontAwesome/subway'}
                />
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      { color: theme.colors.background.brand, flex: 1 }
                    ),
                    dimensions.width
                  )}
                >
                  {'51 richting Amsterdam Centraal'}
                </Text>
                {/* Text 2 */}
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        color: theme.colors.background.brand,
                        fontFamily: 'System',
                        fontWeight: '600',
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'15:18'}
                </Text>
              </View>
              {/* View 3 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: palettes.Contrasten.Header,
                    flexDirection: 'row',
                    gap: 5,
                    justifyContent: 'space-between',
                    padding: 20,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  color={theme.colors.background.brand}
                  name={'FontAwesome/subway'}
                />
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      { color: theme.colors.background.brand, flex: 1 }
                    ),
                    dimensions.width
                  )}
                >
                  {'53 richting Amsterdam Centraal'}
                </Text>
                {/* Text 2 */}
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        color: theme.colors.background.brand,
                        fontFamily: 'System',
                        fontWeight: '600',
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'15:25'}
                </Text>
              </View>
              {/* View 4 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: palettes.Contrasten.Footer,
                    flexDirection: 'row',
                    gap: 5,
                    justifyContent: 'space-between',
                    padding: 20,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  color={theme.colors.background.brand}
                  name={'FontAwesome/subway'}
                />
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      { color: theme.colors.background.brand, flex: 1 }
                    ),
                    dimensions.width
                  )}
                >
                  {'52 richting Noord'}
                </Text>
                {/* Text 2 */}
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        color: theme.colors.background.brand,
                        fontFamily: 'System',
                        fontWeight: '600',
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'15:26+3'}
                </Text>
              </View>
            </View>
          )}
        </>
        {/* Storingsinformatie */}
        <>
          {!checkboxStoringValue ? null : (
            <View>
              <H2
                selectable={false}
                {...GlobalStyles.H2Styles(theme)['H2'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.H2Styles(theme)['H2'].style, {
                    paddingLeft: 20,
                    paddingRight: 20,
                  }),
                  dimensions.width
                )}
              >
                {'Storingsinformatie '}
                {haltenaamValue}
              </H2>

              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    { paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }
                  ),
                  dimensions.width
                )}
              >
                {'Vind hier informatie over eventuele storingen op jouw halte'}
              </Text>
              {/* Roltrappen */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    paddingBottom: 0,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 0,
                  },
                  dimensions.width
                )}
              >
                {/* H2 2 */}
                <H2
                  selectable={false}
                  {...GlobalStyles.H2Styles(theme)['H2'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.H2Styles(theme)['H2'].style,
                      { marginBottom: 5, marginTop: 5 }
                    ),
                    dimensions.width
                  )}
                >
                  {'Roltrappen'}
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
                  {'Uitgang zuid roltrap links is buiten gebruik'}
                </Text>
              </View>
              {/* Liften */}
              <View
                style={StyleSheet.applyWidth({ padding: 20 }, dimensions.width)}
              >
                {/* H2 3 */}
                <H2
                  selectable={false}
                  {...GlobalStyles.H2Styles(theme)['H2'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.H2Styles(theme)['H2'].style,
                      { marginBottom: 5, marginTop: 5 }
                    ),
                    dimensions.width
                  )}
                >
                  {'Liften'}
                </H2>
                {/* Text 2 */}
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    dimensions.width
                  )}
                >
                  {'Lift op perron 4 is buiten gebruik'}
                </Text>
              </View>
            </View>
          )}
        </>
        {/* Seintje */}
        <>
          {!checkboxSeintjeValue ? null : (
            <View
              style={StyleSheet.applyWidth({ padding: 20 }, dimensions.width)}
            >
              {/* H2 2 */}
              <H2
                selectable={false}
                {...GlobalStyles.H2Styles(theme)['H2'].props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.H2Styles(theme)['H2'].style,
                  dimensions.width
                )}
              >
                {'Voertuigseintjes '}
                {haltenaamValue}
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
                  'Wanneer je op de halte staat, kan je een lijn selecteren. Je systeem roept voor jou om wanneer je geselecteerde voertuig er aan komt'
                }
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: palettes.Contrasten['Knop 1'],
                    borderRadius: 10,
                    gap: 10,
                    marginBottom: 10,
                    marginTop: 10,
                    maxHeight: 200,
                    maxWidth: 200,
                    padding: 10,
                  },
                  dimensions.width
                )}
              >
                <IconButton
                  color={theme.colors.background.brand}
                  icon={'FontAwesome/subway'}
                  size={40}
                />
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        color: theme.colors.background.brand,
                        fontFamily: 'System',
                        fontWeight: '400',
                        textAlign: 'center',
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Metro 51 naar\nIsolatorweg'}
                </Text>
              </View>
            </View>
          )}
        </>
      </SimpleStyleScrollView>
      <FooterBlock />
    </ScreenContainer>
  );
};

export default withTheme(HaltesScreen);

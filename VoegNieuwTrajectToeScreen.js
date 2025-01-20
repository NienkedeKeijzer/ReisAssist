import React from 'react';
import {
  Button,
  ScreenContainer,
  SimpleStyleScrollView,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { H2 } from '@expo/html-elements';
import { Text } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import FooterBlock from '../components/FooterBlock';
import HeaderBlock from '../components/HeaderBlock';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const VoegNieuwTrajectToeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');

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
          { flex: 20, padding: 10 },
          dimensions.width
        )}
      >
        <H2
          selectable={false}
          {...GlobalStyles.H2Styles(theme)['H2'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.H2Styles(theme)['H2'].style,
            dimensions.width
          )}
        >
          {'Nieuw traject toevoegen'}
        </H2>

        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              marginBottom: 0,
              marginTop: 10,
            }),
            dimensions.width
          )}
        >
          {
            'Voer hieronder de startlocatie voor je nieuwe opgeslagen traject in'
          }
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
          placeholder={'Enter a value...'}
          webShowOutline={true}
          {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextInputStyles(theme)['Text Input'].style,
              {
                backgroundColor: palettes.Brand.Background,
                borderColor: palettes.Brand.Strong,
                marginBottom: 10,
                marginTop: 10,
              }
            ),
            dimensions.width
          )}
          value={textInputValue}
        />
        {/* Text 2 */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              marginTop: 10,
            }),
            dimensions.width
          )}
        >
          {'Voer hieronder de eindlocatie voor je nieuwe opgeslagen traject in'}
        </Text>
        {/* Text Input 2 */}
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={true}
          changeTextDelay={500}
          onChangeText={newTextInput2Value => {
            const textInputValue = newTextInput2Value;
            try {
              setTextInputValue(newTextInput2Value);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'Enter a value...'}
          webShowOutline={true}
          {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextInputStyles(theme)['Text Input'].style,
              {
                backgroundColor: palettes.Brand.Background,
                borderColor: palettes.Brand.Strong,
                marginBottom: 10,
                marginTop: 10,
              }
            ),
            dimensions.width
          )}
          value={textInputValue}
        />
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('BewaardScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              { backgroundColor: palettes.Contrasten['Knop 1'] }
            ),
            dimensions.width
          )}
          title={'Toevoegen'}
        />
      </SimpleStyleScrollView>
      <FooterBlock />
    </ScreenContainer>
  );
};

export default withTheme(VoegNieuwTrajectToeScreen);

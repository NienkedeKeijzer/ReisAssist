import React from 'react';
import {
  Button,
  ScreenContainer,
  SimpleStyleScrollView,
  withTheme,
} from '@draftbit/ui';
import { H2 } from '@expo/html-elements';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import FooterBlock from '../components/FooterBlock';
import HeaderBlock from '../components/HeaderBlock';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const DitIsMijnReisFunctionaliteitStap3Screen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

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
            marginBottom: 100,
          },
          dimensions.width
        )}
      >
        {/* Stap 3 */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.Contrasten.Extra,
              gap: 10,
              padding: 20,
            },
            dimensions.width
          )}
        >
          {/* Stap */}
          <H2
            selectable={false}
            {...GlobalStyles.H2Styles(theme)['H2'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.H2Styles(theme)['H2'].style, {
                marginBottom: 5,
                marginTop: 5,
              }),
              dimensions.width
            )}
          >
            {'Stap 3'}
          </H2>
          {/* Tijd */}
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
              'Het is nu 13:20. Loop nu 10 minuten vanuit metro Weepserplein naar Bushalte Wibautstraat'
            }
          </Text>
          {/* Begeleidende tekst */}
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
              'Ga linksaf vanaf het perron omhoog\nGa bij deze uitgang naar rechts\nLoop rechtdoor\nJe bent nu op de bushalte Wibautstraat'
            }
          </Text>
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('DitIsMijnReisFunctionaliteitStap4Screen');
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                { backgroundColor: palettes.Contrasten.Footer }
              ),
              dimensions.width
            )}
            title={'Volgende stap'}
          />
        </View>
        {/* Noodcontact */}
        <View>
          <Button
            accessible={true}
            iconPosition={'left'}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                { backgroundColor: palettes.Contrasten['Knop 2'], margin: 10 }
              ),
              dimensions.width
            )}
            title={'Klantenservice contact'}
          />
          {/* Button 2 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                { backgroundColor: palettes.Contrasten['Knop 2'], margin: 10 }
              ),
              dimensions.width
            )}
            title={'Noodcontact'}
          />
        </View>
      </SimpleStyleScrollView>
      <FooterBlock />
    </ScreenContainer>
  );
};

export default withTheme(DitIsMijnReisFunctionaliteitStap3Screen);

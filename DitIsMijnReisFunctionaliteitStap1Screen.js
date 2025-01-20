import React from 'react';
import {
  Button,
  ScreenContainer,
  SimpleStyleScrollView,
  withTheme,
} from '@draftbit/ui';
import { H1, H2 } from '@expo/html-elements';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import FooterBlock from '../components/FooterBlock';
import HeaderBlock from '../components/HeaderBlock';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const DitIsMijnReisFunctionaliteitStap1Screen = props => {
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
        {/* Reisinformatie */}
        <View style={StyleSheet.applyWidth({ padding: 20 }, dimensions.width)}>
          <H1
            selectable={false}
            {...GlobalStyles.H1Styles(theme)['H1'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.H1Styles(theme)['H1'].style,
              dimensions.width
            )}
          >
            {'Reisbegeleiding'}
          </H1>
          {/* Duur van de reis */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Text'].style,
              dimensions.width
            )}
          >
            {'Deze reis duurt ongeveer 45 minuten'}
          </Text>
          {/* Reisinformatie */}
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
              'Je moet 1 keer overstappen\nJe reist eerst met metro 52 en daarna met bus 35'
            }
          </Text>
        </View>
        {/* Stap 1 */}
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
            {'Stap 1'}
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
            {'13:00 begin met 5 minuten lopen naar metrostation Sloterdijk'}
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
              'Loop 100 meter rechtdoor\nGa nu naar links\nJe bent nu op metrostation Sloterdijk'
            }
          </Text>
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('DitIsMijnReisFunctionaliteitStap2Screen');
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

export default withTheme(DitIsMijnReisFunctionaliteitStap1Screen);

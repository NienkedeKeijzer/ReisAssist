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

const DitIsMijnReisFunctionaliteitStap2Screen = props => {
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
        {/* Stap 2 */}
        <View
          style={StyleSheet.applyWidth(
            { gap: 10, padding: 20 },
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
            {'Stap 2'}
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
            {'om 13:10 vertrekt metro 52 richting Isolatorweg'}
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
            {'Stap in bij metro 52'}
          </Text>
          {/* Voertuigseintje aankomend */}
          <View
            style={StyleSheet.applyWidth(
              { backgroundColor: theme.colors.foreground.brand, padding: 10 },
              dimensions.width
            )}
          >
            {/* Aankomende voertuig */}
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
                'Metro 51 richting Gaasperplas komt nu aanrijden. Hier hoef je niet in te stappen'
              }
            </Text>
          </View>
          {/* Voertuigseintje volgende */}
          <View
            style={StyleSheet.applyWidth(
              { backgroundColor: theme.colors.foreground.brand, padding: 10 },
              dimensions.width
            )}
          >
            {/* Eerstvolgende voertuig */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text'].style,
                dimensions.width
              )}
            >
              {'Metro 52 richting Isolatorweg komt hierna'}
            </Text>
          </View>
          {/* Voertuigseintje aankomend 2 */}
          <View
            style={StyleSheet.applyWidth(
              { backgroundColor: theme.colors.foreground.brand, padding: 10 },
              dimensions.width
            )}
          >
            {/* Aankomende voertuig */}
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
                'Metro 52 richting Isolatorweg komt nu aanrijden. Stap nu in de metro'
              }
            </Text>
          </View>
          {/* Live halte feedback */}
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
              'De metro rijdt nu naar de halte Postjesweg\nOver 3 haltes moet je er uit'
            }
          </Text>
          {/* Live feedback uitstappen */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Text'].style,
              dimensions.width
            )}
          >
            {'De metro rijdt nu naar halte Weesperplein. Hier moet je er uit'}
          </Text>
          {/* Button halte gemist */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('DitIsMijnReisFunctionaliteitStap1Screen');
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                {
                  backgroundColor:
                    palettes.Contrasten['Attentie 2 (vertraging)'],
                }
              ),
              dimensions.width
            )}
            title={'Ik heb mijn halte gemist'}
          />
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('DitIsMijnReisFunctionaliteitStap3Screen');
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

export default withTheme(DitIsMijnReisFunctionaliteitStap2Screen);

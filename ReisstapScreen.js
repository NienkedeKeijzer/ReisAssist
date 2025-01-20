import React from 'react';
import {
  Button,
  ScreenContainer,
  SimpleStyleScrollView,
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

const ReisstapScreen = props => {
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
      {/* Content 2 */}
      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          { flex: 20, gap: 20, padding: 20, paddingTop: 0 },
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
          {'Reis van Station Sloterdijk naar Metro Isolatorweg'}
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
            'De reis begint om 15:00\n\nLoop om 15:00 naar station sloterdijk\n\nPak op het station metro 51 richting isolatorweg\n\nDeze rit duurt 11 minuten\n\nOm 15:11 kom je aan bij isolatorweg\n\nJe bent nu op je eindbestemming'
          }
        </Text>

        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: palettes.Contrasten['Attentie 2 (vertraging)'],
            }),
            dimensions.width
          )}
        >
          {
            'Let op!\nBij je overstap op station sloterdijk is er een storing bij roltrap 3 uitgang zuid. Gebruik de lift of trap of kies een andere route'
          }
        </Text>
        {/* H2 2 */}
        <H2
          selectable={false}
          {...GlobalStyles.H2Styles(theme)['H2'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.H2Styles(theme)['H2'].style, {
              marginBottom: 0,
            }),
            dimensions.width
          )}
        >
          {'Live reisbegeleiding'}
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
            'Met live reisbegeleiding reist ReisAssist met je mee. Hij verteld je waar je bent en wanneer je bijvoorbeeld bij je halte bent aangekomen'
          }
        </Text>
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
                backgroundColor: palettes.Contrasten.Footer,
                margin: 20,
                marginTop: 0,
              }
            ),
            dimensions.width
          )}
          title={'Activeer reisbegeleiding voor deze reis'}
        />
      </SimpleStyleScrollView>
      <FooterBlock />
    </ScreenContainer>
  );
};

export default withTheme(ReisstapScreen);

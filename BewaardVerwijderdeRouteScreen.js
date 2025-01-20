import React from 'react';
import {
  Button,
  ScreenContainer,
  SimpleStyleScrollView,
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

const BewaardVerwijderdeRouteScreen = props => {
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
          { flex: 20, marginBottom: 100, padding: 20, paddingTop: 0 },
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
          {'Favorieten'}
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
          {'Bekijk hier je bewaarde routes en haltes of voeg nieuwe toe'}
        </Text>

        <H3
          selectable={false}
          {...GlobalStyles.H3Styles(theme)['H3'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.H3Styles(theme)['H3'].style,
            dimensions.width
          )}
        >
          {'Bewaarde routes'}
        </H3>
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
          {'Selecteer een bewaarde route om deze opnieuw te plannen'}
        </Text>

        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              marginBottom: 10,
              marginTop: 10,
            }),
            dimensions.width
          )}
        >
          {
            'Je hebt nog geen bewaarde routes. Voeg hieronder een nieuw traject toe'
          }
        </Text>
        {/* Button 2 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('VoegNieuwTrajectToeScreen');
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
          title={'Voeg een nieuw traject toe'}
        />
        {/* H3 2 */}
        <H3
          selectable={false}
          {...GlobalStyles.H3Styles(theme)['H3'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.H3Styles(theme)['H3'].style,
            dimensions.width
          )}
        >
          {'Bewaarde haltes'}
        </H3>
        {/* Text 3 */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Text'].style,
            dimensions.width
          )}
        >
          {'Selecteer je halte om meer informatie te krijgen'}
        </Text>

        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.Contrasten.Extra,
              flexDirection: 'column',
              flexWrap: 'wrap',
              gap: 5,
              justifyContent: 'space-between',
              margin: 10,
              marginLeft: 0,
              marginRight: 0,
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
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                fontFamily: 'System',
                fontWeight: '700',
              }),
              dimensions.width
            )}
          >
            {'Metrostation Noord'}
          </Text>
          {/* Button 2 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('HaltesScreen');
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
            title={'Bekijk Halteinformatie'}
          />
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('BewaardVerwijderdeHalteScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            accessibilityLabel={'Verwijder dit traject'}
            icon={'AntDesign/close'}
            iconSize={20}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                { backgroundColor: palettes.Contrasten['Attentie 1 (uitval)'] }
              ),
              dimensions.width
            )}
            title={'Verwijder deze halte'}
          />
        </View>
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('VoegNieuweHalteToeScreen');
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
          title={'Voeg een nieuwe halte toe'}
        />
      </SimpleStyleScrollView>
      <FooterBlock />
    </ScreenContainer>
  );
};

export default withTheme(BewaardVerwijderdeRouteScreen);

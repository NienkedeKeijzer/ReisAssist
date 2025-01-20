import React from 'react';
import { Button, ScreenContainer, TextInput, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import FooterBlock from '../components/FooterBlock';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const HomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [multiSelectPickerValue, setMultiSelectPickerValue] = React.useState(
    []
  );
  const [textInput2Value, setTextInput2Value] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasLeftSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
      scrollable={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: palettes.Contrasten.Header,
            flex: 1,
            justifyContent: 'center',
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
              color: 'rgb(255, 255, 255)',
              fontFamily: 'System',
              fontWeight: '900',
              letterSpacing: 1,
            }),
            dimensions.width
          )}
        >
          {'ReisAssist door GVB'}
        </Text>
      </View>
      {/* Content */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: palettes.Contrasten.Achtergrond,
            flex: 20,
            flexDirection: 'column',
          },
          dimensions.width
        )}
      >
        <View
          accessibilityElementsHidden={true}
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              bottom: 0,
              justifyContent: 'center',
              left: 0,
              opacity: 0.8,
              position: 'absolute',
              right: 0,
              top: 0,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            accessibilityLabel={
              'ReisAssist Visuele modus wordt mede mogelijk gemaakt door GVB'
            }
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                marginBottom: 10,
                marginLeft: 50,
                marginRight: 50,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'ReisAssist Visuele modus wordt mede mogelijk gemaakt door'}
          </Text>
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Image'].props}
            source={imageSource(
              'https://assets.draftbit.app/apps/UdFLVoAW/assets/BQrhDV0xjhpTZK8ZYqxEJ'
            )}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Image'].style,
                { height: 50, width: 200 }
              ),
              dimensions.width
            )}
          />
        </View>
        {/* Reisplanner */}
        <View
          style={StyleSheet.applyWidth(
            { gap: 10, padding: 10 },
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
                    backgroundColor: palettes.Brand.Background,
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
                    backgroundColor: palettes.Brand.Background,
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
      </View>
      <FooterBlock />
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);

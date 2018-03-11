export default async function loadFonts() {
  /* eslint-disable global-require */
  await Expo.Font.loadAsync({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  });
  /* eslint-enable global-require */
}

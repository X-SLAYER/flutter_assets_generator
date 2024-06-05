# Flutter Asset Generator

This simple JS script automates the generation of a Dart class containing constants for assets in your Flutter project.
The generated class provides an organized and maintainable way to access asset paths throughout your codebase, improving readability and reducing the risk of typos or incorrect paths.

## Usage

Place the script under `scripts/android_insets_gen.js` folder in the main Flutter app root

Run this command
```bash
node assets_generator.js
```

if you want to skip some folders you can use `-s`

```bash
node assets_generator.js -s fonts
```

the dart class output will be under `/lib/constant/assets.dart`

Output example

```dart
class Assets {
  Assets._();

  static const appIcon = 'assets/images/app_icon.png';
  static const coin = 'assets/images/badges/coin.png';
  static const colored = 'assets/images/badges/colored.png';
  static const fire = 'assets/images/badges/fire.png';
  static const leaf = 'assets/images/badges/leaf.png';
  static const silver = 'assets/images/badges/silver.png';
  static const sun = 'assets/images/badges/sun.png';
  static const waterDrop = 'assets/images/badges/water_drop.png';
  static const cover = 'assets/images/cover.jpeg';
  static const emailBox = 'assets/images/email_box.png';
  static const facebook = 'assets/images/facebook.png';
  static const google = 'assets/images/google.png';
  static const hLogo = 'assets/images/h_logo.png';
  static const imagePlaceholder = 'assets/images/image_placeholder.png';
  static const logo = 'assets/images/logo.png';
  static const noData = 'assets/images/no_data.png';
  static const nordVpn = 'assets/images/nord_vpn.jpeg';
  static const profileCover = 'assets/images/profile_cover.png';
  static const tn = 'assets/images/tn.png';
  static const trackMock = 'assets/images/track_mock.png';
  static const userAvatar = 'assets/images/user_avatar.png';
  static const userShield = 'assets/images/user_shield.png';
  static const blog = 'assets/svg/blog.svg';
  static const calendar = 'assets/svg/calendar.svg';
  static const camera = 'assets/svg/camera.svg';
  static const centerFocus = 'assets/svg/center_focus.svg';
  static const clap = 'assets/svg/clap.svg';
  static const filter = 'assets/svg/filter.svg';
  static const follow = 'assets/svg/follow.svg';
  static const gallerie = 'assets/svg/gallerie.svg';
  static const homePin = 'assets/svg/home_pin.svg';
  static const hub = 'assets/svg/hub.svg';
  static const image = 'assets/svg/image.svg';
  static const info = 'assets/svg/info.svg';
  static const manage = 'assets/svg/manage.svg';
  static const music = 'assets/svg/music.svg';
  static const musicIcon = 'assets/svg/music_icon.svg';
  static const notification = 'assets/svg/notification.svg';
  static const pack = 'assets/svg/pack.svg';
  static const packDescription = 'assets/svg/pack_description.svg';
  static const photo = 'assets/svg/photo.svg';
  static const playlist = 'assets/svg/playlist.svg';
  static const playlistIcon = 'assets/svg/playlist_icon.svg';
  static const quantityLimit = 'assets/svg/quantity_limit.svg';
  static const services = 'assets/svg/services.svg';
  static const settings = 'assets/svg/settings.svg';
  static const share = 'assets/svg/share.svg';
  static const status = 'assets/svg/status.svg';
  static const statusIcon = 'assets/svg/status_icon.svg';
  static const subscribe = 'assets/svg/subscribe.svg';
  static const support = 'assets/svg/support.svg';
  static const tokens = 'assets/svg/tokens.svg';
  static const video = 'assets/svg/video.svg';
  static const videoIcon = 'assets/svg/video_icon.svg';
}

```

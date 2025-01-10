# Distance Between Two Locations - React Native Application

## Overview

This React Native application calculates and displays the straight-line distance between two selected locations on a map. The app supports geolocation, map type switching, and Lottie animations to enhance the user experience.

## Key Features:

- Map display with markers for two locations.
- Straight-line distance calculation between the locations.
- Dynamic distance updates as the markers are moved.
- Option to fetch the user's current location.
- Map type switching (standard, satellite, terrain).
- Manual latitude and longitude input for marker placement.

## Libraries Used:

- **react-native-maps**: For rendering the map and markers.
- **geolib**: For distance calculation.
- **@react-native-community/geolocation**: For geolocation.
- **lottie-react-native**: For animations.
- **react-native-vector-icons**: For icons.

## Setup

### Prerequisites:

- Node.js (LTS version).
- React Native CLI.
- Android Studio or Xcode (for iOS development).

### Installation Steps

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Muhammad-Ali-70/React-Native-Task-Bazaraf

   ```

2. Navigate to the project directory:

   ```bash
   cd React-Native-Task-Bazaraf

   ```

3. ```bash
   npm install

   ```

4. ```bash
   npx react-native run-android
   ```

## Configuration

- **Custom Fonts**: The app uses "Poppins-Bold" and "Poppins-Regular" fonts included in the assets.
- **Lottie Animation**: The app uses a loading screen with a Lottie animation (Loading2.json).
- **Custom Button Component**: A reusable button component is created in `./CustomButton.js`.

## Permissions

The app requests location permissions:

- **Android**: `ACCESS_FINE_LOCATION` permission.
- **iOS**: Standard location services permissions.

## Usage

Once the app is launched, the following actions can be performed:

- **Choose Source**: Select a location on the map to set as the source by tapping or dragging the marker.
- **Choose Destination**: Select a location on the map to set as the destination by tapping or dragging the marker.
- **Show Distance**: The app will dynamically calculate the straight-line distance between the source and destination as the markers are moved.
- **Reset Markers**: There is a button to remove the source or destination markers and start the selection process again.
- **Switch Map View**: The app allows you to toggle between different map types: standard, satellite, and terrain.

## Additional Information

- The application was built using the **React Native CLI**.
- The app was developed with the intention of providing a seamless user experience with intuitive navigation and dynamic features.
- All code is modular, clean, and well-documented for easy understanding and future enhancements.

  ## Video
  
https://github.com/user-attachments/assets/91b81626-db93-4568-b4bc-3fcab980d7f5

(If the video Doesn't play, [Follow This Drive Link](https://drive.google.com/file/d/1tBqpj7Z70YA_c68DJcU8lGB2HdE3h3_i/view?usp=drive_link))



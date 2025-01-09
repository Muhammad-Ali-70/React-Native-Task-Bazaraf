# Distance Between Two Locations - React Native Application

## Overview

This React Native application calculates and displays the straight-line (great-circle) distance between two selected locations on a map. The app includes user-friendly features such as geolocation, manual coordinate input, map type switching, and Lottie animations to enhance the user experience.

### Key Features:

- Map display with markers for two locations.
- Calculation of the straight-line distance between the selected locations.
- Dynamic updating of the distance as the user moves the markers.
- Option to fetch and display the user's current location as a marker.
- Map type switching (standard, satellite, terrain).
- Manual latitude and longitude input for precise marker placement.

## Libraries Used

The application utilizes the following libraries:

- **react-native-maps**: For rendering the map and markers.
- **geolib**: For calculating the distance between the source and destination.
- **@react-native-community/geolocation**: For retrieving the user's current location.
- **lottie-react-native**: For displaying Lottie animations.
- **react-native-vector-icons**: For using icons in the app.
- **PermissionsAndroid**: For managing permissions on Android devices.

## Project Setup

### Prerequisites

Ensure the following are installed on your machine:

- Node.js (preferably the latest LTS version).
- React Native CLI.
- Android Studio or Xcode (for iOS development).

### Installation Steps

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/distance-between-locations.git

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

### Custom Fonts and Lottie Animation

- The app uses custom fonts, such as **"Poppins-Bold"** and **"Poppins-Regular"**, which are included in the assets.
- Lottie animations are used for the loading screen, with a JSON animation file (**Loading2.json**) included in the assets folder.

### Custom Button Component

A custom button component has been created for reuse throughout the application. The component is located in `./CustomButton.js` and allows for consistent styling and functionality across different parts of the app.

### Permissions

The app requires location permissions to access the user's current location:

- **Android**: The app requests the `ACCESS_FINE_LOCATION` permission using the `PermissionsAndroid` module.
- **iOS**: The app requests location permissions via the standard iOS location services.

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

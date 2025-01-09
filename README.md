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

- **Custom Fonts**: The app uses "Poppins-Bold" and "Poppins-Regular" fonts included in the assets.
- **Lottie Animation**: The app uses a loading screen with a Lottie animation (Loading2.json).
- **Custom Button Component**: A reusable button component is created in `./CustomButton.js`.

## Permissions

The app requests location permissions:

- **Android**: `ACCESS_FINE_LOCATION` permission.
- **iOS**: Standard location services permissions.

## Usage

- **Choose Source**: Set a location on the map as the source by tapping or dragging the marker.
- **Choose Destination**: Set the destination location similarly.
- **Show Distance**: The straight-line distance is dynamically calculated.
- **Reset Markers**: Reset source or destination markers.
- **Switch Map View**: Toggle between standard, satellite, and terrain map types.

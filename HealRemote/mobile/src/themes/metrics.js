/*
    File: metrics.js
    This file keeps track of device dimensions so we can build responsive layouts.
*/

import {Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
}
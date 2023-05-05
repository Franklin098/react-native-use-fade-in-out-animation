import { useRef } from 'react';
import { Animated } from 'react-native';

interface FadeAnimationParams {
  duration?: number;
  useNativeDriver?: boolean;
}

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = (params?: FadeAnimationParams) => {
    const { duration = 300, useNativeDriver = true }: FadeAnimationParams =
      params || {};

    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver,
    }).start();
  };

  const fadeOut = (params?: FadeAnimationParams) => {
    const { duration = 300, useNativeDriver = true }: FadeAnimationParams =
      params || {};

    Animated.timing(opacity, {
      toValue: 0,
      duration,
      useNativeDriver,
    }).start();
  };

  return {
    fadeIn,
    fadeOut,
    opacity,
  };
};

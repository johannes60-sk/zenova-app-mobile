import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";

type AnimationProps = {
  opacityAnimation?: boolean;
  translateYAnimation?: boolean;
  duration?: number;
};

const defaultAnimation = {
  opacityAnimation: true,
  translateYAnimation: true,
  duration: 500,
};

const AnimateComponent = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  animationProps: AnimationProps = defaultAnimation
) => {
  return (props: P) => {
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(50);

    const { opacityAnimation, translateYAnimation, duration } = animationProps;

    useEffect(() => {
      if (opacityAnimation) {
        opacity.value = withTiming(1, { duration: duration });
      }
      if (translateYAnimation) {
        translateY.value = withSpring(0);
      }
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    }));

    return (
      <Animated.View style={animatedStyle}>
        <WrappedComponent {...props} />
      </Animated.View>
    );
  };
};

export default AnimateComponent;

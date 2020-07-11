import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";

export class GradientBackground extends Component {
  render() {
    const { from, to, children } = this.props;
    return (
      <LinearGradient
        colors={[from, to]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        {...this.props}
      >
        {children}
      </LinearGradient>
    );
  }
}

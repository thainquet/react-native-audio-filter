import { NativeModules } from 'react-native';

type AudioFilterType = {
  multiply(a: number, b: number): Promise<number>;
};

const { AudioFilter } = NativeModules;

export default AudioFilter as AudioFilterType;

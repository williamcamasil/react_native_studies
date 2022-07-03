import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Student} from '../../../Interfaces/Interfaces';

export type propsNavigationStack = {
  // Home: undefined;
  Home: undefined;
  Register?: {
    student: Student;
  };
  // Profile?: {
  //   name: string;
  //   age: number;
  // };
  // Search: undefined;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;

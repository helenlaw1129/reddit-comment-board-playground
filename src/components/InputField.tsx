import * as React from 'react';
import { View, TextInput } from 'react-native';
import EnterButton from './EnterButton';
import styles from '../styles';

interface Props {
  onChangeText: (text: string) => void;
  input: string;
  onSubmit: () => void;
  placeholder?: string;
}

export const InputField = React.memo<Props>(({ onChangeText, input, onSubmit, placeholder }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.inputField}
      onChangeText={onChangeText}
      value={input || ''}
      placeholder={placeholder || ''}
      onSumbitEditing={onSubmit}
    />
    <EnterButton onPress={onSubmit} />
  </View>
));

InputField.displayName = 'InputField';

export default InputField;

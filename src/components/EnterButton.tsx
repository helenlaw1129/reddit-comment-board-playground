import * as React from 'react';
import { Button } from 'react-native';

interface Props {
  onPress: () => void;
}

export const EnterButton = React.memo<Props>(({ onPress }) => <Button color="#000" title="Enter" onPress={onPress} />);

EnterButton.displayName = 'EnterButton';

export default EnterButton;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleBanner: {
    paddingVertical: 16,
  },
  inputContainer: {
    paddingBottom: 16,
    width: '100%',
    paddingHorizontal: 32,
    flexDirection: 'row',
  },
  inputField: {
    width: '100%',
    backgroundColor: '#E2E2E2',
    padding: 4,
  },
  title: {
    fontSize: 36,
    fontWeight: 200,
  },
  commentContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  commentLabel: {
    width: '90%',
    fontSize: 10,
    color: '#8c92ac',
  },
  commentContent: {
    width: '100%',
    marginRight: 32,
    borderBottomWidth: 1,
    paddingVertical: 4,
  },
});

export default styles;

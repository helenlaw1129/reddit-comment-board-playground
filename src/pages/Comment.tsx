import * as React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Context } from '../context/store';
import NewComment from '../models/CommentType';
import InputField from '../components/InputField';
import styles from '../styles';

const Comment = (): JSX.Element => {
  const [input, setInput] = React.useState({ 0: '' });
  const { comments, setComment } = React.useContext(Context);

  const onChangeText = React.useCallback(
    (text: string, key: string) => {
      const newInput = JSON.parse(JSON.stringify(input));
      newInput[key] = text;
      setInput(newInput);
    },
    [input]
  );

  const sendNewComment = React.useCallback(
    (key: string) => {
      try {
        const newComment = new NewComment(input[key]);
        const newCommentArr = [...comments];
        let replyRef: any = newCommentArr;
        if (key !== '0') {
          const keyArr = key.split('.');
          keyArr.splice(0, 1);
          for (let i = 0; i < keyArr.length; i++) {
            replyRef = replyRef[JSON.parse(keyArr[i])].reply;
          }
          replyRef.push(newComment);
        } else {
          newCommentArr.push(newComment);
        }
        setComment(newCommentArr);
        onChangeText('', key);
      } catch (err) {
        console.log('Something went wrong.');
      }
    },
    [comments, input, onChangeText, setComment]
  );

  const renderCommentsArr = React.useCallback(
    (comments: NewComment[], depth: number[]) => {
      //could not get the Dimensions right
      // const newWidth = Dimensions.get('window').width - 120 - depth.length * 10;
      const newWidth = 385 - depth.length * 10;

      return comments.map((comment, index) => (
        <View style={[styles.commentContainer, { width: newWidth }]} key={`${depth}-${index}`}>
          <Text style={[styles.commentLabel, { width: newWidth - 32 }]}>Comment #{[...depth, index].join('.')}:</Text>
          <Text style={[styles.commentContent, { width: newWidth - 64 }]}>{comment.content}</Text>
          <InputField
            onChangeText={(text) => onChangeText(text, [...depth, index].join('.'))}
            input={input[[...depth, index].join('.')]}
            onSubmit={() => sendNewComment([...depth, index].join('.'))}
            placeholder={`Comment to #${[...depth, index].join('.')}`}
          />
          {comment.reply.length !== 0 && renderCommentsArr(comment.reply, [...depth, index])}
        </View>
      ));
    },
    [input, onChangeText, sendNewComment]
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleBanner}>
        <Text style={styles.title}>COMMENTS</Text>
      </View>
      <InputField
        onChangeText={(text) => onChangeText(text, '0')}
        input={input['0']}
        onSubmit={() => sendNewComment('0')}
        placeholder="Enter a new comment here"
      />
      {renderCommentsArr(comments, [0])}
    </ScrollView>
  );
};

export default Comment;

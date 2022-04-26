import * as React from 'react';
import { Context } from './store';
import Comment from '../models/CommentType';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const ContextProvider = ({ children }: Props): JSX.Element => {
  const [comments, setComment] = React.useState<Comment[]>([]);

  return (
    <Context.Provider
      value={{
        comments,
        setComment,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

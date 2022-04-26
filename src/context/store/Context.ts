import { createContext, Dispatch, SetStateAction } from 'react';
import Comment from '../../models/CommentType';

interface Props {
  comments: Comment[];
  setComment: Dispatch<SetStateAction<Comment[]>>;
}

export const Context = createContext({} as Props);

export default Context;

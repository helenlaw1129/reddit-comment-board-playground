export interface Comment {
  content: string;
  reply: any[];
}

export class Comment {
  constructor(content) {
    this.content = content;
    this.reply = [];
  }
}

export default Comment;

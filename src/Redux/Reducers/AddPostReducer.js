import { posts } from "../../Data/Posts";
import { ADD_POST } from "../Types/Types";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  allPosts: [...posts],
};

export default function addPostReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      console.log(state, action);
      return {
        ...initialState,
        allPosts: [
          ...initialState.allPosts,
          {
            _id: uuidv4,
            content: action.payload.content,
            likes: {
              likeCount: 0,
              likedBy: [],
              dislikedBy: [],
            },

            comments: [],
            postMedia: {file: action.payload.postMedia.file},
            profileImage: {
              url: "https://placeimg.com/192/192/people",
              original_filename: "amlansaikia",
            },
            userId: action.payload.userId,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            username: action.payload.username,
            createdAt: "2022-05-15T16:43:34+05:30",
            updatedAt: "2022-05-15T16:43:34+05:30",
          },
        ],
      };
    default:
      return state;
  }
}

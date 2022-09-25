import { v4 as uuidv4} from 'uuid';

export const posts = [
  {
    _id: uuidv4,
    content:
      "Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others. —Jack Welch",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: ["Sky","cat"],
    postMedia: null,
    profileImage: {
      url: 'https://placeimg.com/192/192/people',
      original_filename: "amlansaikia",
    },
    userId: "amlansaikia_",
    firstName: "Amlan",
    lastName: "Saikia",
    username: "rohanmathur",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  

  {
    _id: "b09f0083-85c543",
    content:
      "A genuine leader is not a searcher for consensus, but a molder of consensus.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "dan-abramov-userId",
          firstName: "Dan",
          lastName: "Abramov",
          username: "dan_abramov",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653743304/648-600x400_bg9yl4.jpg",
      original_filename: "rohan-post-test-image",
      file: ""
    },
    profileImage: {
      url: "https://placeimg.com/192/192/people",
      original_filename: "rohanmathur-profile",
    },
    userId: "rohan-mathur-test-userId",
    firstName: "Amlan",
    lastName: "Saikia",
    username: "amlansaikia_",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  }


  


];

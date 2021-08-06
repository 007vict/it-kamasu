import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
  posts: [
    {id: 1, message: 'Hi!How are you?', likesCount: 55},
    {id: 2, message: 'It\'s my first post))', likesCount: 15},
    {id: 3, message: 'Ok!'}
  ]
}

test('length of posts should be incremented', () => {
  let action = addPostActionCreator('example.com')
  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(4)
});

test('message of new post should be correct', () => {
  let action = addPostActionCreator('example.com')
  let newState = profileReducer(state, action)
  expect(newState.posts[3].message).toBe('example.com')
});

test('after deleting length of messages should be decrement', () => {
  let action = deletePost(1)
  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(2)
});

test(`after deleting length of messages shouldn't be decrement if id incorrect`, () => {
  let action = deletePost(1000)
  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(3)
});




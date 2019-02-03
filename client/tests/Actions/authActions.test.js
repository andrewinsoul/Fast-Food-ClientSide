import ConfigureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import sinon from "sinon";
import * as types from "../../actions/types";
import * as authActions from "../../actions/authAction";
import * as apiRequests from "../../utilities/apiCalls";

const middleware = [thunk];
const mockStore = ConfigureMockStore(middleware);
jest.setTimeout(30000);

const user = {
  message: "User created successfully",
  id: 14,
  email: "andrewinsoul@gmail.com",
  token: "1asde34-sdsdf"
};

describe("unit test for the action signup creator", () => {
  it("should ensure the necessary actions was dispatched on successful signup",
    () => {
      const expectedActionType = {
        type: types.SET_CURRENT_USER,
        user,
        authenticated: true
      };
      expect(authActions.setCurrentUser(user)).toEqual(expectedActionType);
    });
  it("should complete user signup registration", async () => {
    const stubPostMethod = sinon.stub(apiRequests, "Post").resolves(user);
    const store = mockStore({ user: {} });
    await store.dispatch(authActions.setCurrentUser(user));
    expect(store.getActions()).toEqual([
      {
        user: {
          message: "User created successfully",
          id: 14,
          email: "andrewinsoul@gmail.com",
          token: "1asde34-sdsdf"
        },
        authenticated: true,
        type: "SET_CURRENT_USER"
      }
    ]);
    stubPostMethod.restore();
  });
  it("should ensure the necessary actions was dispatched on user signup failure",
    () => {
      const expectedAction = {
        type: types.SET_CURRENT_USER_FAIL,
        authenticated: false,
        error: 'An error occured'
      };
      expect(authActions.setCurrentUserFail('An error occured'))
        .toEqual(expectedAction);
    });
});

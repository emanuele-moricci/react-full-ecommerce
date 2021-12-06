import renderer from "react-test-renderer";

import Error from "src/pages/error/error.page";

describe("<Error />", () => {
  it("Should match the snapshot", () => {
    const component = renderer.create(<Error />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

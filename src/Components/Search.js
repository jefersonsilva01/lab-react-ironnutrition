// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {

  const search = e => {
    e.preventDefault();
    props.onSearchFood(e.target.value);
  }

  return (
    <div style={
      {
        width: "800px",
        margin: "0 auto"
      }
    }>
      <Divider>
        <h1>Search</h1>
      </Divider>

      <label>Search</label>
      <Input
        style={
          {
            margin: "8px 0"
          }
        }
        value={undefined}
        type="text"
        onChange={(e) => { search(e) }}
      />
    </div>
  );
}

export default Search;

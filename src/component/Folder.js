import React from 'react';
function Folder({ explorer }) {
  const [expand, setExpand] = React.useState(false);
  if (explorer.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)}>
          {explorer.name}
          <br />
        </span>
        <div
          style={{ display: expand ? 'block' : 'none', paddingLeft: '16px' }}
        >
          {explorer.items.map((ele) => {
            return <Folder explorer={ele} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span>{explorer.name} <br/></span>;
  }
}
export default Folder;

import React from "react";
import RightPageCard from "./rightPageCard";

const rightPage = (props) => {
  let components = props.components.map((component) => {
    return (
      <RightPageCard
        key={component.id}
        id={component.id}
        techType={component.techType}
        componentFunction={component.componentFunction}
        name={component.name}
      />
    );
  });

  return (
    <div>
      <input
        placeholder="Search Bar"
        style={{
          maxWidth: "700px",
          width: "700px",
          margin: "10px 150px 10px 10px",
        }}
      />
      {components}
      {/* <RightPageCard />
      <RightPageCard />
      <RightPageCard />
      <RightPageCard />
      <RightPageCard />
      <RightPageCard /> */}
    </div>
  );
};

export default rightPage;

import React from "react";
import { Card } from "../Components";
export const MovieList = () => {
  return (
    <main>
      <section>
        <div className="flex justify-start flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
};

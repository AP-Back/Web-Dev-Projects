import React from 'react';
import { Helmet } from "react-helmet";

const HelmetHeader = () => {
  return (
    <Helmet>
      <title>Movies DB</title>
      <style>
        {`
          body{
            background:#f1f5f8;
          }
        `}
      </style>
    </Helmet>
  );
};

export default HelmetHeader;

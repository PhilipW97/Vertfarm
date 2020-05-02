import React, { useEffect, useState } from "react";
import react from "react";
import styled from "styled-components";

export const Header = props => <Head>{props.header}</Head>;

const Head = styled.h1`
  text-align: left;
  margin: 10px;

  margin-left: 20px;
`;

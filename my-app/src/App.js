import React from "react";
import { connect } from "react-redux";
import Comic from "./components/Comic";
import styled from "styled-components";
import "./App.css";

const StyledDiv = styled.div`
  background-color: black;
`;

function App() {
    return (
        <StyledDiv className="App">
            <Comic />
        </StyledDiv>
    );
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        comic: state.comic,
        error: state.error,
    };
};

export default connect(mapStateToProps, {})(App);

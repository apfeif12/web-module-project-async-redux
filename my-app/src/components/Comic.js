import React from "react";
import { connect } from "react-redux";
import { fetchComicSuccess, fetchData } from "../actions/index.js";
import styled from "styled-components";

const Comic = (props) => {
    const { loading, comic, error } = props;

    const handleClick = (e) => {
        e.preventDefault();
        props.fetchData();
    };
    console.log(comic);

    const handleLoading = () => {
        if (loading) {
            return <div>---Loading your quote, hang on a sec---</div>;
        }
    };

    if (props.error) {
        console.log("error", error);
        return <h1> Error: {error.message}</h1>;
    }

    return (
        <div>
            <div>
                <StyledHeader>Quote of the DAY!!!</StyledHeader>
                <StyledButton onClick={handleClick}>Click For Quote</StyledButton>
                <StyledDiv>{handleLoading()}</StyledDiv>
                <StyledDiv>{comic.quote}</StyledDiv>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        comic: state.comic,
        error: state.error,
    };
};

export default connect(mapStateToProps, { fetchComicSuccess, fetchData })(
    Comic
);


const StyledHeader = styled.h1`
color: white;
text-decoration: underline;
text-decoration: bold;
`

const StyledButton = styled.button`
color: white;
background-color: black;
`
const StyledDiv = styled.div`
color: white
`
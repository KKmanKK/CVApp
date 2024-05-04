import styled from "styled-components";
import { BaseInfoForm } from "../BaseInfoForm";
import { Result } from "../Result";

const Wrapper = styled.div({
  width: "1200px",
  margin: "50px auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
});
export const CvFrom = () => {
  return (
    <Wrapper>
      <div>
        <BaseInfoForm />
      </div>
      <Result />
    </Wrapper>
  );
};

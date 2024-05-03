import styled from "styled-components";
import { BaseInfoForm } from "../BaseInfoForm";

const Wrapper = styled.div({
  width: "1200px",
  margin: "50px auto",
});
export const CvFrom = () => {
  return (
    <Wrapper>
      <BaseInfoForm />
    </Wrapper>
  );
};

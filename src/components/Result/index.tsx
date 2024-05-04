import { useData } from "../../context/ContextData";
import styled from "styled-components";

const Wrapper = styled.div({
  border: "1px solid black",
  borderRadius: "5px",
});
const Img = styled.img({
  width: "100px",
  height: "100px",
});
const Title = styled.div({
  textAlign: "center",
});
export const Result = () => {
  const { data } = useData();
  if (!data) {
    return <Wrapper></Wrapper>;
  }
  const getImg = (file: File) => {
    return URL.createObjectURL(new Blob([file], { type: file.type }));
  };
  return (
    <Wrapper>
      <Title>Предпросмотр резюме</Title>
      {data.file && data.file[0] && <Img src={getImg(data.file[0])} alt="" />}
    </Wrapper>
  );
};

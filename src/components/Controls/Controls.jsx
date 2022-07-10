import styled from "styled-components";

const Button = styled.button`
    padding: 5px 10px;
margin: 5px 10px;
font-size: 14px;
text-transform: capitalize;
background-color: burlywood;
border: none;
border-radius: 5px;
cursor: pointer;
:hover {
  background-color: gainsboro;
}
`;

export const Controls = ({current, total, onChange}) => {
  return (
    <section>
      <Button
        type="button"
        disabled={current === 1}
        onClick={() => onChange(-1)}
      >
        Вперед
      </Button>
      <Button
        type="button"
        disabled={current === total}
        onClick={() => onChange(1)}
      >
        Назад
      </Button>
    </section>
  );
};

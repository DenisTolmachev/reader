import styled from "styled-components";

const Button = styled.button`
    margin: 5px;
    padding: 5px;
`

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

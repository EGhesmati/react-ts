type CounterProps = {
  initialValue?: number;
};

function Counter({ initialValue = 0 }: CounterProps) {
  return (
    <div>
      <p>Initial value: {initialValue}</p>
    </div>
  );
}

export default Counter;

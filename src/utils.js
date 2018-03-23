export function inputValueChange(inputRow, value) {
  this.setState(
    {
      [inputRow.id]: Number(value)
    },
    () => {
      inputRow.calculates.forEach(calutation => {
        this.setState({
          [calutation]: this.resultCalculations[calutation](this.state)
        });
      });
    }
  );
}








function DifficultySelector(props) {

  function dropDownChangeHandler(event){
    props.onChangeDifficulty(event.target.value)
  }



  return (
    <div>
      <label>Select difficulty</label>
      <select value={props.selected} onChange={dropDownChangeHandler}>
        <option value="Easy">Easy</option>
        <option value="Normal">Normal</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
  );
}


export default DifficultySelector
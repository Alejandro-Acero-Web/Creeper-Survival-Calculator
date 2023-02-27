import './DifficultySelector.css'






function DifficultySelector(props) {

  function dropDownChangeHandler(event){
    props.onChangeDifficulty(event.target.value)
    

  }



  return (
    <div className="difficulty">
      <h1 className='difSelectTitle'>Select difficulty</h1>
      <select className='difSelect' value={props.selected} onChange={dropDownChangeHandler}>
        <option value="Easy">Easy</option>
        <option value="Normal">Normal</option>
        <option value="Hard">Hard</option>
      </select>
      <div></div>
    </div>
  );
}


export default DifficultySelector